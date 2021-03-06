const merge = require('deepmerge');
const wdioConf = require('../wdio.conf.js');

exports.config = merge(wdioConf.config, {
    services: [['browserstack', {
        browserstackLocal: true
    }]],
    maxInstances: 1,
    capabilities: [{
        'bstack:options' : {
            'os' : 'Windows',
            'osVersion' : '10',
            'local': true,
            'projectName' : 'Nav poc',
            'buildName' : 'Nav poc on Windows 10 Edge'
        },
        browserName: 'edge',
        acceptInsecureCerts: true
    }]
}, { clone: false });

