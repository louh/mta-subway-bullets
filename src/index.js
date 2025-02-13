import { compressSvgs } from './convert-svgs.js'
import { convertSvgsToPngs } from './svg-to-png.js'

async function doWork () {
  console.log('Compressing svgs...')
  await compressSvgs()

  console.log('Converting svg to png...')
  await convertSvgsToPngs()
}

doWork()
