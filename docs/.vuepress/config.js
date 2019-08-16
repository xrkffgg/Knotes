// https://vuepress.vuejs.org/zh/config

module.exports = ctx => ({
  dest: './Knotes/',
  base: '/Knotes/',
  // main
  title: 'My Notes',
  description: '记 录',
  port: 8888,
  head: [
    ['link', { rel: 'icon', href: `/ico.png`}],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  themeConfig: {
    nav: [
      { 
        text: '主 页', 
        link: '/' 
      },
      { 
        text: '记 录', 
        items: [
          { text: '技 术', link: '/blog/' },
          { text: '日 常', link: '/notes/' }
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
  let arr = []
  let index = 12
  for(let i=2; i<index+1;i++){
    arr.push(''+i)
  }
  return [
    {
      title: '技 术',
      collapsable: false,
      children: ['',...arr]
    }
  ]
}

function getNotesSidebar() {
  return [
    {
      title: '日 常',
      collapsable: false,
      children: [
        '',
      ]
    }
  ]
}