const gulp = require('gulp');

const clean = require('./gulp/clean');
const svgSprite = require('./gulp/svg-sprite');

gulp.task('clean', clean);
gulp.task('svg-sprite', svgSprite);

gulp.task('build', gulp.series('svg-sprite'));

exports.default = gulp.series('clean', 'build')