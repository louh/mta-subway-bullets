import gulp from 'gulp'
import svgSprite from 'gulp-svg-sprite'

const config = {
  mode: {
    shape: {
      padding: 10
    },
    symbol: {
      dest: '.',
      sprite: 'icons',
      prefix: 'nyc-subway-%s'
    }
  }
}

gulp.task('default', () =>
  gulp.src('src/svg/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('dist'))
)
