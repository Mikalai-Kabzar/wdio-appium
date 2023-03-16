const path = require('path');
//const config = require('./wdio.shared.conf');
const {config} = require('./wdio.shared.conf');

config.specs = [
    //ios autotests
        '../test/specs/**/android-Notepad*.spec.js'
];


config.capabilities = [{
    //ios capabiliities
    platformName: "Android",
    "appium:deviceName": "PixelXL",
    "appium:automationName": "UIAutomator2",
    "appium:autoGrantPermissions": true,
    //"appium:app": path.join(process.cwd(), "./app/android/ApiDemos-debug.apk")
    "appium:app": path.join(process.cwd(), "./app/android/ColorNote Notepad Notes_4.2.4_Apkpure.apk")
}];
config.services = ['appium'],
config.port = 4723;

exports.config = config;