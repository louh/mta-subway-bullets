import { compressSvgs } from './convert-svgs.js'
import { convertSvgsToPngs } from './svg-to-png.js'
import { createSvgSprite } from './svg-sprites.js'

const sourcePath = './src/svg'
const outputSVGPath = './dist/svg'
const outputPNGPath = './dist/png'
const outputSpritePath = './dist'

async function doWork () {
  console.log('\nCompressing svgs...')
  await compressSvgs(sourcePath, outputSVGPath)

  console.log('\nConverting svg to png...')
  await convertSvgsToPngs(sourcePath, outputPNGPath)

  console.log('\nCreating svg sprite...')
  await createSvgSprite(sourcePath, outputSpritePath)
}

doWork()
