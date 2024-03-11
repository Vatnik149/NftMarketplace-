import gulp from 'gulp';

import path from '../config/path.js';
import app from '../config/app.js';

import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import babel from 'gulp-babel';
import webpack from 'webpack-stream';

const js = function() {
    return gulp.src(path.js.src, { sourcemaps: app.isDev })
        .pipe(plumber({
            errorHandler: notify.onError(error =>({
                title: 'JavaScript',
                message: error.message
            }))
        }))
        .pipe(babel())

        .pipe(gulp.dest(path.js.dest, { sourcemaps: app.isDev }))
}

export default js;