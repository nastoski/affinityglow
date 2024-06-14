const mix = require("laravel-mix");
require("laravel-mix-compress");
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  // global scripts below
  .js("resources/js/site.js", "public/js")
  // page scripts below (add them to stacks:scripts)
  .js("resources/js/ajax-form.js", "public/js")
  // component scripts below (add them to stacks:componentScripts)
  .js("resources/js/components/widget-slider-categories", "public/js");

mix.postCss("resources/css/tailwind.css", "public/css");

mix.browserSync({
  proxy: process.env.APP_URL,
  files: ["resources/views/**/*.html", "public/**/*.(css|js)"],
  // Option to open in non default OS browser.
  // browser: "firefox",
  notify: false,
});

if (mix.inProduction()) {
  mix.version();
  mix.compress({
    useBrotli: true,
    productionOnly: true,
  });
}

mix.webpackConfig({
  stats: {
    children: true,
  },
});

/*
 |--------------------------------------------------------------------------
 | Statamic Control Panel
 |--------------------------------------------------------------------------
 |
 | Feel free to add your own JS or CSS to the Statamic Control Panel.
 | https://statamic.dev/extending/control-panel#adding-css-and-js-assets
 |
 */

// mix.js('resources/js/cp.js', 'public/vendor/app/js')
//    .postCss('resources/css/cp.css', 'public/vendor/app/css', [
//     require('postcss-import'),
//     require('tailwindcss/nesting'),
//     require('tailwindcss'),
// ])
