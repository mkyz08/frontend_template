var browserSync = require("browser-sync");
browserSync({
//  proxy: 'localhost:8080',
  "ui": {
    "port": 3101
  },
  port: 3100,
  files: [
    "./dist/js/**/*.js",
    "./dist/**/*.html"
	//"*.js",
  ],
  "server": {
    "baseDir": "./dist/"
  },
//  serveStatic: [{
//    route: '/js',
//    dir: '../src/main/resources/static/js/'
//  }],
  browser: "chrome",
  reloadDelay: 100
});
