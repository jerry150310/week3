const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const webserver = require("gulp-webserver");

gulp.task("devCss", () => {
    return gulp.src("./src/scss/**/*.scss")
        .pipe(gulpSass())
        .pipe(gulp.dest("./src/css"))
})

gulp.task("server", () => {
    return gulp.src("./src")
        .pipe(webserver({
            port: 9898,
            livereload: true,
            proxies: [{
                source: "/api/list",
                target: "http://localhost:3000/api/list"
            }, {
                source: "/api/list2",
                target: "http://localhost:3000/api/list2"
            }]
        }))
})

gulp.task("watch", () => {
    return gulp.watch("./src/scss/**/*.scss", gulp.series("devCss"))
})

gulp.task("default", gulp.series("devCss", "server", "watch"))