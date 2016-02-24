import builder from "statinamic/lib/builder"

import config from "./config.js"
import webpackConfig from "./webpack.config.babel.js"
import clientWebpackConfig from "./webpack.config.client.js"

import store from '../web_modules/app/store'
const exports = {
  layouts: require.resolve('../web_modules/Layouts'),
  metadata: require.resolve('../web_modules/App/metadata'),
  routes: require.resolve('../web_modules/App/routes')
}

builder({
  config,
  webpackConfig,
  clientWebpackConfig,

  exports,
  store,
})
