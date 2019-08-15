// https://vuepress.vuejs.org/zh/config

module.exports = ctx => ({
  // build
  dest: '../../Knotes',

  // main
  title: 'My Notes',
  description: '记 录',
  port: 8888,
  head: [
    ['link', { rel: 'icon', href: `/ico.png`}],
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
  return [
    {
      title: '技 术',
      collapsable: false,
      children: [
        '',
        '002',
        '003',
        '004',
        '005',
        '006',
        '007',
        '008',
      ]
    }
  ]
}

function getNotesSidebar() {
  return {
    title: '日 常',
    collapsable: false,
    children: [
      '',
    ]
  }
}