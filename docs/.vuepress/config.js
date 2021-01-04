// 文章序号
const BlogIndex = 17
const LifeIndex = 2

// https://vuepress.vuejs.org/zh/config
module.exports = ctx => ({
  dest: './Knotes/',
  base: '/Knotes/',
  // main
  title: 'Knotes',
  description: '记 录',
  port: 8888,
  head: [
    ['link', { rel: 'icon', href: `/ico1.png` }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  themeConfig: {
    nav: [
      {
        text: '主 页',
        link: 'https://xrkffgg.github.io/'
      },
      {
        text: '记 录',
        items: [
          { text: '文 章', link: '/blog/' },
          { text: '参 考', link: '/reference/' },
          { text: '规 范', link: '/standard/' },
          // { text: 'Stars', link: '/stars/' },
        ]
      },
      {
        text: '学 习',
        items: [
          { text: '资 料', link: '/learn/' },
          { text: '工 具', link: '/tool/' },
          { text: '知 识', link: '/note/' },
          { text: '生 活', link: '/life/' },
        ]
      },
      {
        text: '阅 读',
        link: '/book/list',
      },
      {
        text: '教 程',
        link: '/course/list',
      },
      { text: 'GitHub', link: 'https://github.com/xrkffgg/Knotes' },
    ],
    lastUpdated: '上次更新',
    smoothScroll: true,
    sidebar: {
      '/blog/': getBlogSidebar(),
      '/reference/': [''],
      '/learn/': [''],
      '/tool/': [''],
      '/stars/': [''],
      '/standard/': [''],
      '/life/': getLifeSidebar(),
      '/note/': [''],
      '/course/': getCourseSidebar(),
      '/book/': getBookSidebar(),
    }
  }
})

function getBlogSidebar() {
  let arr = []
  let index = BlogIndex
  for (let i = 2; i < index + 1; i++) {
    arr.push('' + i)
  }
  return [
    {
      title: '📄 文 章',
      collapsable: false,
      children: ['', ...arr]
    }
  ]
}

function getLifeSidebar() {
  let arr = []
  let index = LifeIndex
  for (let i = 2; i < index + 1; i++) {
    arr.push('' + i)
  }
  return [
    {
      title: '🎁 生 活',
      collapsable: false,
      children: ['', ...arr]
    }
  ]
}

function getCourseSidebar() {
  return [
    {
      title: '📦 教 程',
      collapsable: false,
      children: [
        '/course/list',
        '/course/k-progress',
      ]
    }
  ]
}

function getBookSidebar() {
  return [
    {
      title: '📚 阅 读',
      collapsable: false,
      children: [
        '/book/list',
        '/book/unKnowJs',
        '/book/reactWeb',
        '/book/jsWeb',
      ]
    }
  ]
}