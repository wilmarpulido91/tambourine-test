const { gulp, watch, parallel, src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sync = require("browser-sync").create(); 

function buildHTML() {
  return src('./src/index.html')
    .pipe(dest('output'));
}

function buildJs() {
  return src('./src/js/main.js')
    .pipe(dest('output/js'));
}

function buildStyles() {
  return src('./src/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('output/css'));
};

function buildImages() {
  return src(['./src/img/**.jpg', './src/img/**.png'], { encoding: false })
    .pipe(dest('output/img'));
}

function browserSync() {
  sync.init({
      server: {
          baseDir: "./output"
      }
  });

  watch('src/**.html', buildHTML);
  watch('src/js/**.js', buildJs);
  watch('src/sass/**/**.scss', buildStyles);
  watch(['./src/img/**.jpg', './src/img/**.png'], buildImages);
  watch(["./output/**.html", './output/js/**.js', "./output/css/**.css"]).on('change', sync.reload);
}

exports.build = parallel(buildHTML, buildJs, buildStyles, buildImages);
exports.sync = browserSync;