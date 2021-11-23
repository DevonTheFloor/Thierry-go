export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // title: 'Thierry-go-Dev',
    htmlAttrs: {
      lang: 'fr'
    },
    /* meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Thierry G. développeur d\'application web et mobile. Je suis ce qu\'on appelle un dev full stack JS dans le jargon. En français pour les autres: je programme en JavaScript côté client, bien evidement, mais aussi côté serveur.' },
      // <!-- Open Graph data -->
      { property: 'og:title', content: 'Thierry Go Dev' },
      { property: 'og:type', content: 'Web site' },
      { property: 'og:url', content: 'https://thierry-go-dev.fr' },
      { property: 'og:image', content: 'https://thierry-go-dev/mvicon.png' },
      { property: 'og:description', content: 'Thierry G. développeur d\'application web et mobile. Je suis ce qu\'on appelle un dev full stack JS dans le jargon. En français pour les autres: je programme en JavaScript côté client, bien evidement, mais aussi côté serveur.' },
      // <!-- Twitter Card data -->
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: 'Thierry Go Dev' },
      { name: 'twitter:title', content: 'Thierry Go Dev' },
      { name: 'twitter:description', content: 'Thierry G. développeur d\'application web et mobile. Je suis ce qu\'on appelle un dev full stack JS dans le jargon. En français pour les autres: je programme en JavaScript côté client, bien evidement, mais aussi côté serveur.' },
      { name: 'twitter:creator', content: '@floor_dev' },
      // <!-- Twitter Summary card images must be at least 200x200px -->
      { name: 'twitter:image', content: 'https://thierry-go-dev/mvicon.png' }
    ], */
    link: [
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    apiPrefix: '_content',
    dir: 'content',
    fullTextSearchFields: ['title', 'description', 'slug', 'text'],
    nestedProperties: ['categories.slug'],
    markdown: {
      externalLinks: {},
      footnotes: {
        inlineNotes: true
      },
      basePlugins: ['remark-squeeze-paragraphs', 'remark-slug', 'remark-autolink-headings', 'remark-external-links', 'remark-footnotes'],
      plugins: [],
      prism: {
        theme: 'prismjs/themes/prism.css'
      }
    },
    yaml: {},
    csv: {}
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
