var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
		nested = require('postcss-nested'),
		cssImport = require('postcss-import'),
    hexrgba = require('postcss-hexrgba');

gulp.task('styles', function() {
	// include return so that gulp is aware when this function completes
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, cssvars, nested, hexrgba, autoprefixer]))
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
		.pipe(gulp.dest('./app/temp/styles'));
});
