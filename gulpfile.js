const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const postcss = require('gulp-postcss');


//Static server
gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });
});

gulp.task('css', function () {
    
    return gulp.src('./src/*.css')
        .pipe(postcss())
        .pipe(gulp.dest('./dest'));
})

gulp.task('watch', function () {
    gulp.watch("src/css/*.css", gulp.parallel('css'));
    // gulp.watch("src/scss/**/*.+(scss|sass)", gulp.parallel('css'));
    gulp.watch("src/*.html").on("change", browserSync.reload);
});

gulp.task('default', gulp.parallel('watch', 'server', 'css'));
