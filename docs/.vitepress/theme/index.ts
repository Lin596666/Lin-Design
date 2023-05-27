import Theme from 'vitepress/theme'
import Test from '../../../src/components/Test.vue'
// 主题样式
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
// 插件的组件，主要是demo组件
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'

export default {
  ...Theme,
  enhanceApp({ app }) {
    // register global components
    app.component('Test', Test)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  }
}
