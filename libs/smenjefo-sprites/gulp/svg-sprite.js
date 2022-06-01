const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');

module.exports = () => {
  return gulp.src('./src/**/*.svg')
    .pipe(svgSprite({
      mode: {
        symbol: {
          dest: './',
          sprite: 'sprite.svg',
        },
      },
    }))
    .pipe(gulp.dest('./dist'));
};