import { promises as fs } from 'node:fs'
import path from 'node:path'
import { optimize } from 'svgo'
import { processSourceSvgs } from './utils.js'

export async function compressSvgs (sourcePath, outputPath) {
  await processSourceSvgs(sourcePath, async (file) => {
    const inputFilePath = path.join(sourcePath, file)
    const outputFilePath = path.join(outputPath, file)

    // Read the SVG file
    const data = await fs.readFile(inputFilePath, 'utf8')

    // Optimize the SVG data
    const result = optimize(data, {
      path: inputFilePath
    })

    // Write the optimized SVG back to the file
    await fs.writeFile(outputFilePath, result.data)
    console.log('Optimized:', outputFilePath)
  })
}
