import { demoBlockPlugin } from 'vitepress-theme-demoblock'
const sidebar = [
  {
    text: '快速开始',
    items: [
      { text: '安装', link: '/guide/install' }, // /guide/install.md
    ],
  },
  {
    text: '通用',
    items: [
      { text: 'Button 按钮', link: '/components/button/' }, // /components/button/index.md
    ],
  },
  { text: '导航', items: [] },
  { text: '反馈', items: [] },
  { text: '数据录入', items: [] },
  { text: '数据展示', items: [] },
  { text: '布局', items: [] },
]

export default {
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: (md) => {
      // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
      md.use(demoBlockPlugin)
    },
  },
}
