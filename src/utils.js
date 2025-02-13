import { promises as fs } from 'node:fs'
import path from 'node:path'

export async function processSourceSvgs (sourcePath, executeFunction) {
  try {
    // Read all files in the input folder
    const files = await fs.readdir(sourcePath)

    // Filter out only the SVG files
    const svgFiles = files.filter(
      (file) => path.extname(file).toLowerCase() === '.svg'
    )

    // Process each SVG file
    for (const file of svgFiles) {
      try {
        await executeFunction(file)
      } catch (err) {
        console.error('Unable to process file:', file, err)
      }
    }
  } catch (err) {
    console.error('Unable to read folder:', err)
  }
}
