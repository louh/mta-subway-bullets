import { promises as fs } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const sourcePath = './src/svg'
const distPath = './dist/png'

export async function convertSvgsToPngs() {
  try {
    // Read all files in the input folder
    const files = await fs.readdir(sourcePath)

    // Filter out only the SVG files
    const svgFiles = files.filter(file => path.extname(file).toLowerCase() === '.svg')

    // Process each SVG file
    for (const file of svgFiles) {
      const inputFilePath = path.join(sourcePath, file)
      const outputFilePath = path.join(distPath, `${path.basename(file, '.svg')}.png`)

      try {
        // Convert the SVG file to PNG
        await sharp(inputFilePath)
          .png({
            // Maximize compression automatically.
            // Don't use adaptiveFiltering: true -- doesn't compress.
            compressionLevel: 9,
            palette: true,
          })
          .toFile(outputFilePath)
        
        console.log('Converted:', inputFilePath, 'to', outputFilePath)
      } catch (fileErr) {
        console.error('Unable to process file:', inputFilePath, fileErr)
      }
    }
  } catch (dirErr) {
    console.error('Unable to read folder:', dirErr)
  }
}
