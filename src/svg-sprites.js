import { promises as fs } from 'node:fs'
import path from 'node:path'
import SVGSpriter from 'svg-sprite';
import { processSourceSvgs } from './utils.js'

const config = {
  mode: {
    symbol: true
  }
}

export async function createSvgSprite(sourcePath, outputPath) {
  try {
    // Initialize SVGSpriter
    const spriter = new SVGSpriter(config)

    // Add each SVG file to the spriter
    await processSourceSvgs(sourcePath, async (file) => {
      const inputFilePath = path.join(sourcePath, file)
      const svgContent = await fs.readFile(inputFilePath, 'utf8')

      spriter.add(inputFilePath, null, svgContent)
    })

    // Compile the sprite
    spriter.compile((err, result) => {
      if (err) {
        console.error('Error compiling sprite:', err)
      } else {
        // Write the sprite file to the output folder
        const spriteContent = result.symbol.sprite.contents
        const outputFilePath = path.join(outputPath, 'icons.svg')

        fs.writeFile(outputFilePath, spriteContent, 'utf8')
          .then(() => {
            console.log('Sprite created:', outputFilePath)
          })
          .catch(writeErr => {
            console.error('Error writing sprite file:', writeErr)
          })
      }
    })
  } catch (err) {
    console.error('Error processing SVG files:', err)
  }
}
