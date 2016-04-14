/* Huge thanks to React guru Wes Bos for creating this file. Thanks Wes! */

var source              = require('vinyl-source-stream'),
    gulp                = require('gulp'),
    gutil               = require('gulp-util'),
    browserify          = require('browserify'),
    babelify            = require('babelify'),
    watchify            = require('watchify'),
    notify              = require('gulp-notify'),
    stylus              = require('gulp-stylus'),
    less                = require('gulp-less'),
    concat              = require('gulp-concat'),
    autoprefixer        = require('gulp-autoprefixer'),
    uglify              = require('gulp-uglify'),
    rename              = require('gulp-rename'),
    buffer              = require('vinyl-buffer'),
    browserSync         = require('browser-sync'),
    reload              = browserSync.reload,
    historyApiFallback  = require('connect-history-api-fallback')
;

var stylesCss = [
    'styles/libraries/*.css',
    'styles/elements/*.css',
    'styles/plugins/*.css',
    'temp/css/styles.css'
];

var lessFiles = [
    'styles/libraries/*.less',
    'styles/elements/*.less',
    'styles/plugins/*.less',
    'scripts/components/**/css/*.less'
];


gulp.task('concatenateLessFiles', function() {
    return gulp.src(lessFiles)
        .pipe(concat('styles.less'))
        .pipe(gulp.dest('temp/less/'))
});

gulp.task('lessToCss', ['concatenateLessFiles'], function() {
    return gulp.src('temp/less/*.less')
        .pipe(less())
        .pipe(rename({dirname : ''}))
        .pipe(gulp.dest('temp/css/'))
});

gulp.task('concatenateCss', ['lessToCss'], function() {
    return gulp.src(stylesCss)
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('build/css'))
});


/*
 Images
 */
gulp.task('images',function(){
    return gulp.src('css/images/**')
        .pipe(gulp.dest('./build/css/images'))
});

gulp.task('pics',function(){
   return gulp.src('inc/img/*.png')
        .pipe(gulp.dest('./build/img/'))
});

gulp.task('svg',function(){
    gulp.src('inc/img/*.svg')
        .pipe(gulp.dest('./build/svg/'))
});

/*
 Browser Sync
 */
gulp.task('browser-sync', function() {
    browserSync({
        // we need to disable clicks and forms for when we test multiple rooms
        server : {},
        middleware : [ historyApiFallback() ],
        ghostMode: false
    });
});

function handleErrors() {
    var args = Array.prototype.slice.call(arguments);
    notify.onError({
        title: 'Compile Error',
        message: '<%= error.message %>'
    }).apply(this, args);
    this.emit('end'); // Keep gulp from hanging on this task
}

function buildScript(file, watch) {
    var props = {
        entries: ['./scripts/' + file],
        debug : true,
        cache: {},
        packageCache: {},
        transform:  [babelify.configure({stage : 0 })]
    };

    // watchify() if watch requested, otherwise run browserify() once
    var bundler = watch ? watchify(browserify(props)) : browserify(props);

    function rebundle() {
        var stream = bundler.bundle();
        return stream
            .on('error', handleErrors)
            .pipe(source(file))
            .pipe(gulp.dest('./build/'))
            // If you also want to uglify it
            // .pipe(buffer())
            // .pipe(uglify())
            // .pipe(rename('app.min.js'))
            // .pipe(gulp.dest('./build'))
            .pipe(reload({stream:true}))
    }

    // listen for an update and run rebundle
    bundler.on('update', function() {
        rebundle();
        gutil.log('Rebundle...');
    });

    // run it once the first time buildScript is called
    return rebundle();
}

gulp.task('scripts', function() {
    return buildScript('main.js', false); // this will run once because we set watch to false
});


gulp.task('default', ['images', 'pics', 'svg', 'concatenateCss', 'scripts','browser-sync'], function() {
    gulp.watch('scripts/components/**/css/*.less', ['concatenateCss']);
    gulp.watch('styles/**/*.less', ['concatenateCss']);
    gulp.watch('scripts/components/**/css/*.less', ['concatenateCss']);
    gulp.watch('scripts/components/**/*.js', ['scripts']);

    return buildScript('main.js', true); // browserify watch for JS changes
});