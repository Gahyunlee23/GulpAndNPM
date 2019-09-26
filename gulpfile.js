const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const nano = require('cssnano');
const prefixer = require('autoprefixer');

// includes pur image min library
const imagemin = require('gulp-imagemin');

// define sone common tasks for Gulp to run

//like compile and minify SASS file:
function compile(done) {
    gulp.src('./sass/**/*.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(postcss([prefixer(), nano()]))
        .pipe(gulp.dest('./css'))
        done()
}

//minify every images
function squashImages(done) {
 gulp.src('./images/**')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'))
    done()
}


exports.compile = compile;
exports.squash = squashImages; 