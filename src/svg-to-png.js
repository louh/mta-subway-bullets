import path from 'node:path'
import sharp from 'sharp'
import { processSourceSvgs } from './utils.js'

export async function convertSvgsToPngs (sourcePath, outputPath) {
  await processSourceSvgs(sourcePath, async (file) => {
    const inputFilePath = path.join(sourcePath, file)
    const outputFilePath = path.join(outputPath, `${path.basename(file, '.svg')}.png`)

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
  })
}
