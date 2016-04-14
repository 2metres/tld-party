import Gulp            from 'gulp';
import PostCSS         from 'gulp-postcss'
import Sourcemaps      from 'gulp-sourcemaps'
import InlineSource    from 'gulp-inline-source'
import CSSNano         from 'gulp-cssnano'

// PostCSS Plugins
import Import          from 'postcss-import'
import Reporter        from 'postcss-reporter'
import ResponsiveType  from 'postcss-responsive-type'

Gulp.task('styles', () => {
  const PostCSSPlugins = [
    Import(),
    ResponsiveType(),
    Reporter()
  ]
  Gulp.src('./src/styles/index.css')
    .pipe( PostCSS(PostCSSPlugins))
    .pipe( CSSNano({
      discardComments: {removeAll: true}
    }))
    .pipe( Gulp.dest('./build/'));
})

Gulp.task('watch', () => {
  Gulp.watch('./src/**/*.css', ['styles']);
})

Gulp.task('default', ['watch']);
