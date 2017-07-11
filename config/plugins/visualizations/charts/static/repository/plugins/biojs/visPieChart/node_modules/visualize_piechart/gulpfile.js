
var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var browserify = require('gulp-browserify');
var sass = require("gulp-sass");
var concat = require("gulp-concat");

// gulp helper
var gzip = require('gulp-gzip');
var del = require('del');
var rename = require('gulp-rename');

// path tools
var path = require('path');
var join = path.join;
var mkdirp = require('mkdirp');

// browserify build config
var buildDir = "build";
var browserFile = "browser.js";
var packageConfig = require('./package.json');
var outputFile = packageConfig.name;

// auto config for browserify
var outputFileSt = outputFile + ".js";
var outputFilePath = join(buildDir,outputFileSt);
var outputFileMinSt = outputFile + ".min.js";
var outputFileMin = join(buildDir,outputFileMinSt);

gulp.task('default', ['lint', 'build-browser', 'build-browser-gzip']);

gulp.task('sass', function () {
    return gulp.src('./index.scss')
	.pipe(sass({
	    errLogToConsole: true
	}))
    .pipe(rename(outputFile + '.css'))
	.pipe(gulp.dest(buildDir));
});

gulp.task('lint', function() {
  return gulp.src('./src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


gulp.task('watch', function() {
    gulp.watch(['./src/**/*.js','./src/**/scss/*.scss','index.scss'], ['build-browser', 'lint']);
});

gulp.task('concat', function() {


  return gulp.src(['./build/viz_diseases.js','node_modules/d3/d3.js'])
  // return gulp.src(['src/vis.js','node_modules/d3/d3.js'])
  // return gulp.src(['src/vis.js',])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});


// will remove everything in build
gulp.task('clean', function() {
    return del([buildDir]);
});

// just makes sure that the build dir exists
gulp.task('init', ['clean'], function() {
  mkdirp(buildDir, function (err) {
    if (err) console.error(err);
  });
});

// browserify debug
gulp.task('build-browser',['init', 'sass'], function() {
  return gulp.src(browserFile)
  .pipe(browserify({debug:true}))
  .pipe(rename(outputFileSt))
  .pipe(gulp.dest(buildDir));
});

// browserify min
gulp.task('build-browser-min',['build-browser'], function() {
  return gulp.src(browserFile)
  .pipe(browserify({}))
  .pipe(uglify())
  .pipe(rename(outputFileMinSt))
  .pipe(gulp.dest(buildDir));
});

gulp.task('build-browser-gzip', ['build-browser-min', 'sass'], function() {
  return gulp.src(outputFileMin)
    .pipe(gzip({append: false, gzipOptions: { level: 9 }}))
    .pipe(rename(outputFile + ".min.gz.js"))
    .pipe(gulp.dest(buildDir));
});
