<template>
  <article>
    <h1 class="title">
      {{ page.title }}
    </h1>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const page = await $content('articles/langage').fetch()

    return {
      page
    }
  },
  head: {
    title: 'Les langages du web',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Les langes du web. Pourquoi y en t\'il tant? A quoi servent t\'ils? Mais ou est donc Ornocar?! Dans ce billet de blog de Thieery-go-dev, la réponse à toutes ces questions' },
      // <!-- Open Graph data -->
      { property: 'og:title', content: 'Les langages du web' },
      { property: 'og:type', content: 'Web site' },
      { property: 'og:url', content: 'https://thierry-go-dev.fr/blog/langages' },
      { property: 'og:image', content: 'https://thierry-go-dev/mvicon.png' },
      { property: 'og:description', content: 'Les langes du web. Pourquoi y en t\'il tant? A quoi servent t\'ils? Mais ou est donc Ornocar?! Dans ce billet de blog de Thieery-go-dev, la réponse à toutes ces questions' },
      // <!-- Twitter Card data -->
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: 'Thierry-go-dev' },
      { name: 'twitter:title', content: 'web site' },
      { name: 'twitter:description', content: 'Les langes du web. Pourquoi y en t\'il tant? A quoi servent t\'ils? Mais ou est donc Ornocar?! Dans ce billet de blog de Thieery-go-dev, la réponse à toutes ces questions' },
      { name: 'twitter:creator', content: '@floor_dev' },
      // <!-- Twitter Summary card images must be at least 200x200px -->
      { name: 'twitter:image', content: 'https://thierry-go-dev/mvicon.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  }
}
</script>

<style>
html {
  background-color: #3b8070;
  margin: 1vw;
  padding: 1vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
body {
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100%;
  min-height: 100%;
  border: 5px solid #35495e;
  border-radius: 10px;

}
h1 {
  color: #35495e;
}
p {
  color: #0d5747;
}
</style>
