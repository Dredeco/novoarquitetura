const withPlugins = require('next-compose-plugins');
const optmizedImages = require('next-optimized-images');

module.exports = withPlugins([optmizedImages], {target: 'serverless'})
