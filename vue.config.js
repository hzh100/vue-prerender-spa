// const path = require('path')
// const PrerenderSPAPlugin = require('prerender-spa-plugin')
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = {
  publicPath: './',
  lintOnSave: false,

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/front',
        '/back'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
