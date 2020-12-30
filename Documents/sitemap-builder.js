require('babel-register');
 
const router = require('./routes.js').default;
const Sitemap = require('../').default;
 
(
    new Sitemap(router)
        .build('https://www.eahassan.me')
        .save('./sitemap.xml')
);