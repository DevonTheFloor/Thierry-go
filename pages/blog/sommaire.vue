<template>
  <div>
    <h1>Sommaire</h1>
    <ul>
      <li v-for="article in sommaire" :key="article.id">
        <div class="print">
          <h3>{{ article.title }}</h3>
          <p> {{ article.description }} </p>
          <nuxt-link :to="`/blog/${article.slug}`" class="btn-custom button--green">
            Lire
          </nuxt-link>
        </div>
      </li>
    </ul>
    <!--<p>{{ page.description }}</p>
    <img :src="page.img" class="illustration">-->
    <nuxt-content :document="sommaire" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, error }) {
    const sommaire = await $content('articles').only(['title', 'description', 'slug'])
      .fetch()
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err)
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      sommaire
    }
  },
  head: {
    title: 'Blog de Dev',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Mon Blog' },
      // <!-- Open Graph data -->
      { property: 'og:title', content: 'Blog de Dev' },
      { property: 'og:type', content: 'Web site' },
      { property: 'og:url', content: 'https://thierry-go-dev.fr/sommaire' },
      { property: 'og:image', content: 'https://thierry-go-dev/mvicon.png' },
      { property: 'og:description', content: 'Bienvenue sur mon blog, car non, l\'ecrit n\'est pas mort.' },
      // <!-- Twitter Card data -->
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@floor_dev' },
      { name: 'twitter:title', content: 'Bolg de Dev' },
      { name: 'twitter:description', content: 'Bienvenue sur mon blog, car non, l\'ecrit n\'est pas mort.' },
      { name: 'twitter:creator', content: '@floor_dev' },
      // <!-- Twitter Summary card images must be at least 200x200px -->
      { name: 'twitter:image', content: 'https://thierry-go-dev/mvicon.png' }
    ]
  }
}
</script>

<style>
h1 {
  text-align: center;
  margin: 1%;
}
li {
  list-style: none;
  border: 2px solid red;
  margin: 2%;
  padding: 1%;
}
.print {
  justify-content: center;
}
.link__sommaire-article {
  margin: 1%;
  font-size: 1.2em;
  border: 3px solid rgb(241, 241, 186);
  border-radius: 10px;
  text-align: center;
}
.link__sommaire-article:hover {
  border: 6px solid rgb(41, 236, 41);
  box-shadow:4px 4px rgb(5, 134, 16);
  background-color: rgb(255, 248, 248);
}

article {
  padding: 5%;
  text-align: justify;
  width: 100%;
}

.vdo {
  margin: 3%;
  width: 100%;
  display: flex;
  justify-content: center;
}
iframe {
  max-width: 100%;
  max-height: auto;
}

.title-blog {
  font-family: 'Dancing Script', cursive;
  font-size: 50px;
  text-align: center;
}
h1 {
  width: 100%;
  color: #469583;
  margin: auto;
  border: 2 px solid green;
}
h2 {
  font-family: 'Dancing Script', cursive;
  color: #569546;
  margin: 1%;
}
p {
  font-family: 'Cutive Mono', monospace;
  margin: 2%;
  color: #01130f;
}
@media screen and (max-width: 850px){
  .profile {
    min-width: 12vw;
  }
  .title {
    padding: 1%;
    font-size: 80px;
  }
  .links {
    margin: 2%;
  }
}
@media screen and (max-width: 470px) {
  .title {
    padding: 2%;
    font-size: 70px;
  }
  .links {
    margin: 1%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .profile {
    min-width: 15vw;
  }
  .btn-custom {
    max-width: 60vw;
    margin: 1vh;
  }
  p {
    padding: 1%;
  }
}
</style>
