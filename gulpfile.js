var gulp       = require('gulp');
var Server     = require('karma').Server;
var watch      = require('gulp-watch');
var livereload = require('gulp-livereload');
var notify     = require('gulp-notify');

gulp.task('html', function() {
	gulp.src('index.html')
	.pipe(livereload())
	.pipe(notify({ message : 'modified HTML'}));
});

gulp.task('js', function() {
	gulp.src('app/app.js')
	.pipe(livereload())
	.pipe(notify({ message : 'modified JS'}));
});

gulp.task('watch', function () {
	livereload.listen();
	gulp.watch('app/**/*.js', ['js']);
	gulp.watch('**/*.html', ['html']);
});

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
	new Server({
		configFile:  __dirname + '/karma.conf.js',
		singleRun: true
	}, done).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
	new Server({
		configFile:  __dirname + '/karma.conf.js'
	}, done).start();
});

gulp.task('default', ['watch']);