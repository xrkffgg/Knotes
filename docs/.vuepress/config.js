// https://vuepress.vuejs.org/zh/config

module.exports = ctx => ({
  // build
  dest: '../../Knotes',

  // main
  title: 'My Notes',
  description: '人 生 记 录',
  port: 8888,
  head: [
    ['link', { rel: 'icon', href: `/ico.png`}],
  ],

  themeConfig: {
    nav: [
      { 
        text: 'Home', 
        link: '/' 
      },
      { 
        text: 'Notes', 
        items: [
          { text: 'Blog', link: '/blog/' },
          { text: 'Notes', link: '/notes/' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/xrkffgg/Knotes' },
    ],
    lastUpdated: '上次更新',
    sidebar: {
      '/blog/': getBlogSidebar(),
      '/notes/': getNotesSidebar(),
    }
  }
})

function getBlogSidebar() {
  return [
    '/blog/'
  ]
}

function getNotesSidebar() {

}