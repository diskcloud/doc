import { defineConfig } from 'vitepress'
import vite from './vite.config'

export default defineConfig({
  base: '/',
  appearance: true,
  title: 'Diskcloud',
  lastUpdated: true,
  // 标签页logo
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }], // chrome pwa
  ],
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true,
    }
  },

  themeConfig: {
    logo: '/logo.png',
    lastUpdatedText: '最近更新于',
    // 2/3/4级标题均形成目录
    outline: [2, 4],
    outlineTitle: '目录',
    nav: [
      {
        text: '快速开始',
        link: '/start.md'
      },
      {
        text: 'Service Apis',
        link: '/apis/index.md'
      }
    ],
    sidebar: {
      // 当用户位于 `guide` 目录时，会显示此侧边栏
      '/apis/': [
        {
          text: 'Service API',
          items: [
            { text: '文件相关', link: '/apis/files' },
            { text: '用户相关', link: '/apis/users' },
          ]
        }
      ],
    },
    // 编辑
    editLink: {
      pattern: 'https://github.com/diskcloud/doc/edit/main/docs/:path',
      text: '在Github编辑',
    },

    // 搜索
    search: {
      provider: 'local',
    },
  },

  vite,
})
