# vue-prerender-spa

vue做的页面不利于seo，有两种方法能解决这个问题：vue add prerender-spa和ssr
这里我用的是prerender-spa-plugin，

```
  vue add prerender-spa
```

根据提示操作

```
  ? Which routes to pre-render? (list them separated by a comma) /,/about,/contact
  /,/about,/contact是你要预渲染的router
  你可以按自己的写，要什么界面变成静态的就写哪个界面的路由，逗号隔开。

  ? Use a render event to trigger the snapshot? Yes
  ? Use a headless browser to render the application? (recommended) Yes
  ? Only use prerendering for production builds? (recommended) Yes
  上面三个都可以写yes
```
运行结束以后在你的vue.config.js文件中会多一段代码

```
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/about',
        '/contact',
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
```

在main.js 中

```

```

### 注意事项：
  * router 必须  mode: 'history'
  * 要用history 模式，需要服务端支持，详情见[官网 HTML5 History 模式](https://router.vuejs.org/zh/guide/essentials/history-mode.html)


## 使用 `vue-meta-info` 配置 meta 标签keywords 、 description 的内容

```
  yarn add vue-meta-info
```

main.js

```
  import MetaInfo from 'vue-meta-info'
 
  Vue.use(MetaInfo)

```

在 xxx.vue 文件里写上以下代码。这些代码会转换成网页的 meta 标签里的内容。

```
export default {
    metaInfo: {
        title: '我是一个title',
        meta: [
            {
                name: 'keywords',
                content: '关键字1,关键字2,关键字3'
            },
            {
                name: 'description',
                content: '这是一段网页的描述'
            }
        ]
    }
}
```

`yarn build` 后

```
  ...
  <title>我是一个title</title>
  ...
  <meta data-vue-meta-info="true" name="keywords" content="关键字1,关键字2,关键字3">
  <meta data-vue-meta-info="true" name="description" content="这是一段网页的描述">
```
