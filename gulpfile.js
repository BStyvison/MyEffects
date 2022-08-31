// Adiciona os modulos instalados
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');

// Funçao para compilar o SASS e adicionar os prefixos
function compilaSass() {
  return gulp
    .src('css/scss/**/*.scss')
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false,
      }),
    )
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
}

// Tarefa de gulp para a função de SASS
exports.compilaSass = compilaSass

// Função para juntar o JS
function gulpJS() {
  return gulp
    .src('js/scripts/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream());
}

exports.gulpJS = gulpJS

// Função para iniciar o browser
function browser() {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });
}

// Tarefa para iniciar o browser-sync
exports.browser = browser

// Função de watch do Gulp
function watch() {
  gulp.watch('css/scss/**/*.scss', compilaSass);
  gulp.watch('js/scripts/**/*.js', gulpJS);
  gulp.watch(['*.html']).on('change', browserSync.reload);
}

// Inicia a tarefa de watch
exports.watch = watch

// Tarefa padrão do Gulp, que inicia o watch e o browser-sync
exports.default = gulp.parallel(watch, browser, compilaSass, gulpJS)

