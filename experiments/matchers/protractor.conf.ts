import { Config, ExpectedConditions, $ } from 'protractor'

let conf: Config = {
  directConnect: true,
  baseUrl: 'http://www.protractortest.org/testapp/ng1/',
  specs: ['./experiment.js'],
}

exports.config = conf;