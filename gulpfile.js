'use strict'

// #region DECLARATIONS
// External Dependencies
const gulp = require('gulp')
const concat = require('gulp-concat')
// Variables
const ROOT_DIRECTORY = '.'
const SRC_DIRECTORY = `${ROOT_DIRECTORY}/src`
const PUBLIC_DIRECTORY = `${SRC_DIRECTORY}/.vuepress/public`
const JS_DIRECTORY = `${PUBLIC_DIRECTORY}/js`
// #endregion DECLARATIONS

// #region BUILD

/**
 * Concatenate js dependencies in one file
 * @param {function} done - Callback()
 */
const concatJs = (done) => {
  try {

    gulp.src([
      './node_modules/swagger-ui-dist/swagger-ui-bundle.js',
      './node_modules/swagger-ui-dist/swagger-ui-standalone-preset.js'
    ])
      .pipe(concat('swagger-viewer.bundle.js'))
      .pipe(gulp.dest(JS_DIRECTORY))
      .on('end', () => { done() })
  } catch (err) {
    console.error(err)
    done(err)
  }
}

// #region EXPORTS
exports.build = gulp.series(
  concatJs
)
// #endregion EXPORTS
