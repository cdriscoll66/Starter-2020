const config = {
    host: 'example.lndo.site'
  };
  
  const mix = require('laravel-mix');
  
  // Public path helper
  const publicPath = path => `${mix.config.publicPath}/${path}`;
  
  // Set Public Path
  mix.setPublicPath('dist');
  
  // BrowserSync
  mix.browserSync({
    open: false,
    host: config.host,
    socket: {
      domain: 'sync-' + config.host,
    },
    files: [
      'dist/styles/*.css',
      'dist/scripts/*.js',
      'resources/views/**/*.*'
    ],
    proxy: {
      target: 'http://appserver_nginx'
    }
  });
  
  // Styles
  // Add any additional stylesheets to compile here
  mix.sass('src/styles/main.scss', 'dist/styles');
  
  // JavaScript
  // Add any additional scripts to compile here.
  mix
    .js('src/scripts/main.js', 'dist/scripts')
    // .js('resources/assets/scripts/customizer.js', 'dist/scripts');
  
  // Assets
  // Add any additional asset directories to copy here.
  mix
   .copyDirectory('src/images', publicPath('images'))
   .copyDirectory('src/fonts', publicPath('fonts'));
  
  // Autoload
  mix.autoload({
    jquery: ['$', 'window.jQuery']
  });
  
  // Webpack Config Overrides
  mix.webpackConfig({
    module: {
      rules: [
        {
          test: /(\.scss|\.js)/,
          loader: 'import-glob'
        }
      ]
    }
  });
  
  // Options
  mix.options({
    postCss: [require('postcss-svg')],
    processCssUrls: false,
    cssNano: {
      calc: false,
      mergeRules: false
    }
  });
  
  // Source maps.
  mix.sourceMaps();
  
  // Hash and version files in production.
  mix.version();