var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var rename = require("gulp-rename");

gulp.task('build', function () {
    return browserify({
    	entries: 'assets/jsx/scheduler.jsx', 
    	extensions: ['.jsx'], 
    	debug: true
    })
	    .transform('babelify', {presets: ['es2015', 'react']})
	    .bundle()
	    .pipe(source('bundle.js'))
	    .pipe(rename('scheduler.js'))
	    .pipe(gulp.dest('assets/js'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch('*.jsx', ['build']);
});

gulp.task('default', ['watch']);