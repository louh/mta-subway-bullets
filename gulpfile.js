'use strict'

var fs = require('fs')
var gulp = require('gulp')
var svgSprite = require('gulp-svg-sprite')
var config = {
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

gulp.task('default', function () {
  return gulp.src('svg/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('build'))
})
