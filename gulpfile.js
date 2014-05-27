var gulp = require("gulp");
// Autoloads all plugins in package.json
// and will convert hypenated plugin names to camelCase
var plugins = require("gulp-load-plugins")();

var copyright = "/*\n" + 
" * jQuery FlexSlider v2.2.2\n" + 
" * Copyright 2012 WooThemes\n" + 
" * Contributing Author: Tyler Smith\n" + 
" */\n";

gulp.task('uglify', function() {
	gulp.src('jquery.flexslider.js')
		.pipe(plugins.rename({suffix: '-min'} ))
		.pipe(plugins.uglify())
		.pipe(plugins.header(copyright))
		.pipe(gulp.dest('./'));
	return;
});

gulp.task('default', ['uglify']);