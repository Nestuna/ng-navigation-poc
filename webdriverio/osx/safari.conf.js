const merge = require('deepmerge');
const wdioConf = require('../wdio.conf.js');

exports.config = merge(wdioConf.config, {
    services: [['browserstack', {
        browserstackLocal: true
    }]],
    maxInstances: 1,
    capabilities: [{
        'bstack:options' : {
            'os' : 'OS X',
            'osVersion' : 'Big Sur',
            'local': true,
            'projectName' : 'Boilerplate Angular',
            'buildName' : 'Boilerplate Angular on OS X Safari'
        },
        browserName: 'Safari',
        acceptInsecureCerts: true
    }]
}, { clone: false });

