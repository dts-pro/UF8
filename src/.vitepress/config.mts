//import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  lang: 'ca-ES',
  title: 'UF8',
  description: 'Descripció',
  base: '/UF8/',
  outDir: '../docs',
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container 
  },
  head: [
    //['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    //['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    //['link', { href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap', rel: 'stylesheet' }],
    //['link', { rel: 'icon', type: 'image/png', href: '/img/logo.png' }]
  ],
  themeConfig: {
    siteTitle: 'POO II',
    logo: '/img/logo.png',
    nav: [
      { text: '🏠 Inici', link: '/' },
      { text: '📋 Objectius', link: '/objectius' },
      { text: '📚 Continguts', items: [
        { text: '1. Relacions entre classes', link: '/1-relacions' },
        { text: '2. Herència', link: '/2-herencia' },
        { text: '3. Polimorfisme', link: '/3-polimorfisme' },
        { text: "4. Classes abstractes", link: '/4-abstract' },
        { text: "5. Interfícies", link: '/5-interficies' },
        { text: 'Exercicis', link: '/6-exercicis' },
      ]},
      { text: '📚 Continguts addicionals', items: [
        { text: 'Operador instanceof', link: '/7-add_instanceof' },
        { text: 'Referència this', link: '/8-add_this' },
      ]}
    ],
    sidebar: [
      {
        text: '📚 Continguts',
        items: [
        { text: '1. Relacions entre classes', link: '/1-relacions' },
        { text: '2. Herència', link: '/2-herencia' },
        { text: '3. Polimorfisme', link: '/3-polimorfisme' },
        { text: "4. Classes abstractes", link: '/4-abstract' },
        { text: "5. Interfícies", link: '/5-interficies' },
        { text: 'Exercicis', link: '/6-exercicis' },
        ]
      },
      { text: '📚 Continguts addicionals', items: [
        { text: 'Operador instanceof', link: '/7-add_instanceof' },
        { text: 'Referència this', link: '/8-add_this' },
        { text: '<img src="img/logo-gva.png" class="logo-anim" style="vertical-align:middle; height:150px; margin-top:100px;">', link: '' },
        { text: '<img src="img/logo-centro.png" class="logo-anim" style="vertical-align:middle; height:150px;">', link: '' }
      ]}
    ],
    socialLinks: [
      { icon: 'github', link: '' }
    ],
    footer: {
      message: "CEEDCV - Centre Específic d'Educació a Distància de la Comunitat Valenciana",
      copyright: 'Copyright © 2024-2025'
    },
    outline: {
      label: 'En aquesta pàgina'
    },
    docFooter: {
      prev: 'Anterior',
      next: 'Següent'
    }
  }
})
