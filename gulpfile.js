const { gulp, parallel, src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildHTML() {
  return src('./src/index.html')
    .pipe(dest('output'));
}

function buildStyles() {
  return src('./src/sass/site.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('output/css'));
};

exports.build = parallel(buildHTML, buildStyles);