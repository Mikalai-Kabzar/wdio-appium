const path = require('path');
//import config from "../../config/wdio.shared.conf";
const {config} = require('./wdio.shared.conf');

config.specs = [
    //android autotests
    '../test/specs/**/android-Notepad*.spec.js'
];


config.capabilities = [{
    //android capabiliities
    platformName: "Android",
    "appium:deviceName": "emulator-5558",
    "appium:automationName": "UIAutomator2",
    "appium:autoGrantPermissions": true,
    //"appium:app": path.join(process.cwd(), "./app/android/ApiDemos-debug.apk")
    "appium:app": path.join(process.cwd(), "./app/android/ColorNote Notepad Notes_4.2.4_Apkpure.apk")
}];


config.port = 4724;
config.services = ['appium'],
exports.config = config;