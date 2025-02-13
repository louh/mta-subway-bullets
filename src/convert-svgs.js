import { promises as fs } from 'node:fs'
import path from 'node:path'
import { optimize } from 'svgo'

const sourcePath = './src/svg'
const distPath = './dist/svg'

export async function compressSvgs () {
  try {
    // Read all files in the input folder
    const files = await fs.readdir(sourcePath)

    // Filter out only the SVG files
    const svgFiles = files.filter(file => path.extname(file).toLowerCase() === '.svg')

    // Process each SVG file
    for (const file of svgFiles) {
      const filePath = path.join(sourcePath, file)
      const writePath = path.join(distPath, file)

      try {
        // Read the SVG file
        const data = await fs.readFile(filePath, 'utf8')

        // Optimize the SVG data
        const result = optimize(data, { path: filePath })

        // Write the optimized SVG back to the file
        await fs.writeFile(writePath, result.data)
        console.log('Optimized:', filePath)
      } catch (fileErr) {
        console.error('Unable to process file:', filePath, fileErr)
      }
    }
  } catch (dirErr) {
    console.error('Unable to read folder:', dirErr)
  }
}
