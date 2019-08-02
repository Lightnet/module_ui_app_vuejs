//
//
//
const mode = process.env.NODE_ENV || 'development';
const dev = mode === 'development';
const prod = mode === 'production';
console.log("mode: ",mode);
var started = false;
//https://github.com/shama/webpack-stream/issues/122
const fs                    = require('fs');
const path                  = require('path');
const gulp                  = require('gulp');
//const clean               = require('gulp-clean');
const del                   = require('del');
const rename                = require('gulp-rename');
const nodemon               = require('gulp-nodemon');
const browserSync           = require('browser-sync').create();
const webpack               = require('webpack');
const webpackStream         = require('webpack-stream');

var frontend_webpackconfig  = require('./webpack.config.dev.js');
async function cleanbundle(done){
    //return gulp.src(['public/bundle.js','public/bundle.js.map'], {read: false, allowEmpty:true})
        //.pipe(clean());
    return del(['public/bundle.js'], {dryRun: true});
}

function frontend_build(done){
    //let watch = Object.create(frontend_webpackconfig);
    let watch = frontend_webpackconfig;
    //watch.watch = true;
    return gulp.src('src/client/index.js')
        .pipe(webpackStream(watch, webpack,(error, stats)=>{
            if (hasErrors(stats)){

            }else if (typeof done === 'function') {
                done();
            }
        }))
        //.pipe(rename('bundle.js'))
        .pipe(gulp.dest('public/'));
}
exports.frontend_build = frontend_build;
//https://github.com/mzgoddard/hard-source-webpack-plugin/issues/296
function frontend_watch_webpack_build(done){
    //let watch = Object.create(frontend_webpackconfig);
    let watch = frontend_webpackconfig;
    //watch.watch = true;
    return gulp.src('src/client/index.js')
        .pipe(webpackStream(watch, webpack, function(error, stats){
            if (stats){
                console.log("???")
            }else if (typeof done === 'function') {
                console.log("[==done==]");
                done();
            }

            if (typeof done === 'function') {
                console.log("==DONE==");
                done();
            }
        }))
        //.pipe(rename('bundle.js'))
        .pipe(gulp.dest('public/'))
    done();
}
exports.frontend_watch_webpack_build = frontend_watch_webpack_build;

function backend_build(){
    return gulp.src('./app.js')
        .pipe(rename('backend.js'))
        .pipe(gulp.dest('./'))
}
exports.backend_build = backend_build;

function watch(done) {
    gulp.watch(['./app.js','./src/server/**/*.*'], gulp.series(backend_build));
    //gulp.watch(['./src/client/**/*.*'], gulp.series( cleanbundle, frontend_build, copy_html, copy_css));
    gulp.watch(['./src/client/**/*.*'], gulp.series( cleanbundle, frontend_watch_webpack_build, copy_html, copy_css));
    gulp.watch(['./src/common/**/*.*'], gulp.series( copy_jslib));
    return done();
}
exports.watch = watch;

function copy_jslib(){
    return gulp.src('src/common/gunjstrustsharekey.js')
        .pipe(gulp.dest('public/'));
}
exports.copy_jslib = copy_jslib;

function copy_html(){
    return gulp.src('src/client/index.html')
        .pipe(gulp.dest('public/'));
}
exports.copy_html = copy_html;

function copy_css(){
    return gulp.src('src/client/global.css')
        .pipe(gulp.dest('public/'));
}
exports.copy_css = copy_css;

function copy_svg(){
    return gulp.src('src/client/icons/*.svg')
        .pipe(gulp.dest('public/'));
}
exports.copy_svg = copy_svg;

function serve(done){
    var stream = nodemon({
        script: 'backend.js',
        ext: 'html js',
        ignore:[
            'node_modules/',
            'data/',
            '.vscode/',
            'gulpfile.js',
            'webpack.config.js,',
            'webpack.config.dev.js,',
        ],
        //tasks:['frontend_build'],
        done: done
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
			done();
			started = true; 
		} 
	}).on('restart', function () {
        console.log('restarted!');
        //frontend_build();
        //refreshbrowser();
        if(browserSync){
            browserSync.reload();
        }
    }).on('crash', function() {
        console.error('Application has crashed!\n');
        stream.emit('restart', 10);  // restart the server in 10 seconds
    });
    return stream;
}
exports.serve  = serve;

function refreshbrowser(cb){
    browserSync.reload();
    return cb();
}
exports.refreshbrowser  = refreshbrowser;

function browser_sync(done){
    browserSync.init({
        proxy: "localhost:8080"
        ,files:['pulbic/**/*.*']
        //,browser: 'chrome'
        //,browser: 'firefox'
    });
    return done();
}
exports.refreshbrowser  = refreshbrowser;

//gulp.series(frontend_build, backend_build, copy_css, copy_html, copy_svg, watch, serve, browser_sync);
//const build = gulp.series(frontend_build, backend_build, copy_html,copy_css, copy_jslib, watch, serve, browser_sync );
const build = gulp.series(frontend_watch_webpack_build, backend_build, copy_html,copy_css, copy_jslib, watch, serve, browser_sync);

exports.default = build;