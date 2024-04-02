export const config = {
    appium: { command: 'appium' },
    // runner: 'local',
    // port: 4723,

    user: 'oauth-ryanmorais458-04470',
    key: 'f6dcc93c-083c-4188-a903-0187931ccce0',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',

    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [
        //     {
        //     platformName: 'Android',
        //    'appium:deviceName': 'Ryan_Phone',
        //     'appium:platformVersion': '14.0',
        //    'appium:automationName': 'UiAutomator2',
        //    'appium:app': `${process.cwd()}/apps/ebacshop.apks`,
        //    'appium:appWaitActivity': '.MainActivity',
        //    'appium:disableIdLocatorAutocompletion': true
        // }
        {
            platformName: 'Android',
            'appium:app': 'storage:filename=ebacshop (1).aab', 
            'appium:deviceName': 'Samsung.*',
            'appium:platformVersion': '10',
            'appium:automationName': 'UiAutomator2',
            'sauce:options': {
                build: 'appium-build-Ryan-teste',
                name: 'EBAC Shop Teste by Ryan',
                deviceOrientation: 'PORTRAIT',
                appiumVersion: "2.0.0"
            },
        }
    ],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },


}
