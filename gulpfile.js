'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

var chalk = require('chalk');
var ohno = chalk.bold.red;

var DEST_PATH = 'dist/',
    SRC_PATH = './src/**.*';


gulp.task('default', function() {
    console.log(ohno('~~TODO~~'));
});

gulp.task('build', function() {
    return gulp.src(SRC_PATH)
        .pipe(concat())
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js'}))
        .pipe(gulp.dest(DEST));
});

gulp.task('clean', function() {
    console.log(ohno('~~TODO~~'));
});

gulp.task('test', function() {
    console.log(ohno('~~TODO~~'));
});
