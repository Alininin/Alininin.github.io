/*
 * @Author: Skixkk skixkk7@gmail.com
 * @Date: 2026-08-16 17:23:14
 * @LastEditors: Skixkk skixkk7@gmail.com
 * @LastEditTime: 2026-08-17 00:45:24
 * @FilePath: \Alininin.github.io\docs\.vitepress\config.ts
 * @Description: file
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs/',
  lang: 'en-US',

  title: "Awesome Life",
  description: "Sewing and repairing for the world.",
  themeConfig: {
    logo: {
      dark: 'https://youupro.xyz/alin/avatar.png',
      light: 'https://alininin.github.io/favicon.ico',
    },
    
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    // 网站标题
    siteTitle: 'Alininin',
    // aside: 'left',
    // lastUpdatedText: "最后更新于(基于Git)",
    search: {
      provider: 'local'
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // 一级目录 1
      { text: 'Home', link: '/' },
      {
        text: 'README',
        items: [
          { text: 'README', link: '/readme' },
          { text: 'Prompt', link: '/prompt' },
          { text: 'github LGTM', link: '/github-lgtm' },
          { text: 'Our Team', link: '/our-team' }
        ]
      },
      // 一级目录 2
      { text: 'Team & Contributors', link: '/team' } // 指向我们新建的 team.md
    ],
    sidebar: [
      {
        text: 'started',
        items: [
          { text: 'README', link: '/readme' },
          { text: 'Guide', link: '/guide' },
          { text: 'Prompt', link: '/prompt' },
          { text: 'github LGTM', link: '/github-lgtm' },
          { text: 'Our Team', link: '/our-team' },
        ]
      }
    ],

    // 定义切换页面上方显示的文字
    // docFooter: {
    //   prev: 'Pagina prior',
    //   next: 'Proxima pagina'
    // },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Alininin/Alininin.github.io' }
    ],
    
    // 在 github 上编辑页面的链接 定义根路径 + docs/ 下的 route，即可实现访问
    editLink: {
      pattern: 'https://github.com/Alininin/Alininin.github.io/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      copyright: 'Open source · <a href="https://github.com/Alininin/Alininin.github.io/blob/main/LICENSE">MIT</a> · © 2026 <a href="https://github.com/Alininin">Alininin</a>. All rights reserved.'
    }
  }
})
