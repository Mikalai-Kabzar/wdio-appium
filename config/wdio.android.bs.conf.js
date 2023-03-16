//const path = require('path');
//import config from "../../config/wdio.shared.conf";
const {config} = require('./wdio.shared.conf');
require('dotenv').config();

config.specs = [
    //android autotests
    '../test/specs/**/android-Notepad*.spec.js'
];

config.user = process.env.BROWSERSTACK_USERNAME,
config.key = process.env.BROWSERSTACK_ACCESS_KEY,

// config.user = 'nikolay_H7tJju',
// config.key = 'SZXr9ZPyY6oqVbLgd6XY',


//...
config.capabilities = [{
    project: "First Webdriverio Android Project",
    build: "browserstack-build-1",
    name: "local_test",
    device: "Motorola Moto G7 Play",
    os_version: "9.0",
    app: "bs://".concat(process.env.BROWSERSTACK_APP_ID),
    autoGrantPermissions: true
    //'browserstack.local': true
}];
console.log("config.user + " + config.user),
console.log("config.key + "+config.key),
console.log("config.capabilities + "+config.capabilities),
console.log(config.capabilities.app),
//config.port = 4723;

config.services = ['browserstack'],
exports.config = config;