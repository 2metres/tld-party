import Gulp            from 'gulp';
import PostCSS         from 'gulp-postcss'
import Sourcemaps      from 'gulp-sourcemaps'
import InlineSource    from 'gulp-inline-source'

// PostCSS Plugins
import Autoprefixer    from 'autoprefixer'
import Import          from 'postcss-import'
import Reporter        from 'postcss-reporter'
import ResponsiveType  from 'postcss-responsive-type'

Gulp.task('styles', () => {
  const PostCSSPlugins = [
    Import(),
    Reporter(),
    ResponsiveType(),
    Autoprefixer({ browsers: ['last 2 versions'] })
  ]
  Gulp.src('./src/styles/index.css')
    .pipe( PostCSS(PostCSSPlugins))
    .pipe( Gulp.dest('./build/'));
})

Gulp.task('watch', () => {
  Gulp.watch('./src/**/*.css', ['styles']);
})

Gulp.task('default', ['watch']);
