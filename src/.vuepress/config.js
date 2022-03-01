module.exports = {
  base: '/',
  title: 'Docs',
  description: 'WhatStack documentation',
  head: [
    ['script', { type: 'text/javascript', src: '/js/gtm.js' }],
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  dest: 'docs',
  plugins: [
    '@vuepress/active-header-links', {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor',
      headerTopOffset: 120
    },
    '@vuepress/last-updated', {
      transformer: (timestamp, lang) => {
        const moment = require('moment')
        moment.locale(lang)
        return moment(timestamp).fromNow()
      }
    },
    ['mermaidjs',
      {
        theme: 'neutral' // default, dark, forest, neutral
      }
    ],
    [
      "@mr-hope/copy-code",
      {
        // your options
      },
    ],
    'autometa', {
      enable: true, // enables/disables everything - control per page using frontmatter
      image: true, // regular meta image used by search engines
      twitter: true, // twitter card
      og: true, // open graph: facebook, pinterest, google+
      schema: true,
      canonical_base: 'https://docs.whatstack.io',
      author: {
        name: 'Guillaume Meyer',
        twitter: 'guillaumemeyer',
      },
      site: {
        name: 'WhatStack Docs',
        twitter: '',
      },
      description_sources: [
        'frontmatter',
        'excerpt',
        // markdown paragraph regex
        //
        /^((?:(?!^#)(?!^\-|\+)(?!^[0-9]+\.)(?!^!\[.*?\]\((.*?)\))(?!^\[\[.*?\]\])(?!^\{\{.*?\}\})[^\n]|\n(?! *\n))+)(?:\n *)+\n/img,
        //
        // this excludes blockquotes using `(?!^>)`
        ///^((?:(?!^#)(?!^\-|\+)(?!^[0-9]+\.)(?!^!\[.*?\]\((.*?)\))(?!^>)(?!^\[\[.*?\]\])(?!^\{\{.*?\}\})[^\n]|\n(?! *\n))+)(?:\n *)+\n/img,

        // html paragraph regex
        /<p(?:.*?)>(.*?)<\/p>/i,

      ],
      // ---------------------------------------------------------------------------
      // order of what gets the highest priority:
      // 1. frontmatter
      // 2. content markdown image such as `![alt text](http://url)`
      // 3. content regular html img
      image_sources: [
        'frontmatter',
        /!\[.*?\]\((.*?)\)/i,        // markdown image regex
        /<img.*?src=['"](.*?)['"]/i, // html image regex
      ]
    }
  ],

  theme: 'yuu',

  themeConfig: {

    yuu: {
      defaultDarkTheme: false,
      disableDarkTheme: false,
      colorThemes: [], // green (default), blue, red, and purple
      defaultColorTheme: 'blue',
      labels: {
        darkTheme: '🌗 Dark Theme', // Default is "Enable Dark Theme?"
        ignoreThemes: 'Ignore themes?', // Default is "Ignore Other Themes?"
      },
      disableThemeIgnore: true
    },

    logo: '/logo.svg',

    // Footer options
    lastUpdated: '♻️ Last Updated',

    // Smooth scrolling
    smoothScroll: true,

    // GitHub options
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'whatstack',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: '🐙 GitHub',
    // Optional options for generating "Edit this page" link
    //   if your docs are in a different repo from your main project:
    docsRepo: 'whatstack/docs',
    //   if your docs are not at the root of the repo:
    docsDir: 'src',
    //   if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'main',
    //   defaults to false, set to true to enable
    editLinks: true,
    //  custom text for edit link. Defaults to "Edit this page"
    editLinkText: '🌈 Improve this page!',

    // Navbar: Horizontal navigation
    nav: [
      {
        text: '🚀 Developers',
        ariaLabel: 'Developers',
        items: [
          { text: 'Get started', link: '/api/' },
          { text: 'API explorer', link: '/api/explorer' },
          { text: 'API reference', link: '/api/latest/reference/' }
        ]
      },
      { text: '🌐 WhatStack', link: 'https://app.whatstack.io' }
    ],

    // Sidebar options
    displayAllHeaders: false,
    activeHeaderLinks: true,
    sidebarDepth: 1,

    // Sidebar: Vertical navigation
    sidebar: {
      '/': [
        {
          title: '🚀 Get Started',
          path: '/'
        },
        getSideBar('/how-to', 'How-to'),
        getSideBar('/api', 'API'),
        getSideBar('/security', '🔐 Security'),
        getSideBar('/open-source', '🆓 Open source'),
        getSideBar('/legal', '⚖️ Legal')
      ]
    }
  }
}


function getSideBar (folder, title) {
  const fs = require('fs')
  const path = require('path')
  const titleCasing = require('title-case')
  const sentenceCasing = require('sentence-case')
  const extension = ['.md']
  const childrens = []

  const files = fs
    .readdirSync(path.join(`${__dirname}/../${folder}`))
    .filter(
      (item) =>
        item.toLowerCase() !== 'readme.md' &&
        fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
        extension.includes(path.extname(item))
    )
    .forEach((file, fileIndex) => {
      let fileTitle = path.parse(file).name
      fileTitle = fileTitle.replace('/-/g', ' ')
      fileTitle = fileTitle.replace('/_/g', ' ')
      fileTitle = sentenceCasing.sentenceCase(fileTitle)
      childrens.push([folder + '/' + path.parse(file).name, fileTitle])
    })

  return {
    title: titleCasing.titleCase(title),
    collapsable: true,
    sidebarDepth: 1,
    children: childrens
  }
}
