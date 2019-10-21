// // next.config.js
// const withSass = require('@zeit/next-sass')
// module.exports = withSass({
//     cssModules: true
//   })

//   const withFonts = require('next-fonts');
// module.exports = withFonts();

// const withSass = require('@zeit/next-sass')
// const withFonts = require('next-fonts');

// module.exports = withFonts(withSass());

const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');

module.exports = withFonts(withCSS(withSass({
    enableSvg: true,
    webpack(config, options) {
        return config;
    }
}))); 
