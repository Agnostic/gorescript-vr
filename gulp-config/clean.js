var gulp = require("gulp");
var del = require("del");

gulp.task("clean", function (cb) {
	return del([
		global.distFolder + "/app.zip",
		global.distFolder + "/app/assets.zip",
		global.distFolder + "/app/capsuula.woff",
		global.distFolder + "/app/gorescript-deps.min.js",
		global.distFolder + "/app/gorescript.min.js",
		global.distFolder + "/app/index.html"
	]);
});