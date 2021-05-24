var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');

// Static server
gulp.task('server', function() {
	browserSync.init({
		server: {
			baseDir: "src"
		}
	});
});

gulp.task('styles', function(){
	return gulp.src("src/Sass/block/*.+(scss|sass)")
			.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
			.pipe(rename({
				prefix: "",
				suffix: "",
			  }))
			.pipe(autoprefixer({
				cascade: false
			  }))
			.pipe(cleanCSS({compatibility: 'ie8'}))
			.pipe(gulp.dest("src/css/"))
			.pipe(browserSync.stream());
});

gulp.task('watch', function(){

	gulp.watch("src/Sass/block/*.+(scss|sass|css)", gulp.parallel("styles"));
	// gulp.watch("src/*.html").on("change", gulp.parallel('html'));

});

gulp.task('html', function(){
	return gulp.src("src/*.html")
	.pipe(htmlmin({ collapseWhitespace: true }))
	.pipe(gulp.dest("dist/"));
});

gulp.task('scripts', function(){
	return gulp.src("src/js/**/*.js")
	.pipe(gulp.dest("dist/js"));
});

gulp.task('fonts', function(){
	return gulp.src("src/fonts/**/*")
	.pipe(gulp.dest("dist/fonts"));
});

gulp.task('icons', function(){
	return gulp.src("src/icons/**/*")
	.pipe(gulp.dest("dist/icons"));
});

gulp.task('mailer', function(){
	return gulp.src("src/mailer/**/*")
	.pipe(gulp.dest("dist/mailer"));
});

gulp.task('images', function(){
	return gulp.src("src/img/**/*")
	.pipe(imagemin())
	.pipe(gulp.dest("dist/img"));
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));