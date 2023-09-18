/** @type {CodeceptJS.MainConfig} */
const { devices } = require('playwright');
const { faker } = require('@faker-js/faker');

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://hostiq.ua',
      show: false,
      emulate: { isMobile: true, deviceScaleFactor: 2},
      video: false
    },
    JSONResponse: {
      requestHelper: 'Playwright',
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: '1'
}