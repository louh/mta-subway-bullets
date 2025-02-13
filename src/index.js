import { compressSvgs } from './convert-svgs.js'
import { convertSvgsToPngs } from './svg-to-png.js'

async function doWork () {
  console.log('\nCompressing svgs...')
  await compressSvgs()

  console.log('\nConverting svg to png...')
  await convertSvgsToPngs()
}

doWork()
