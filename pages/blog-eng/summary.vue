<template>
  <div>
    <h1>Summary</h1>
    <ul>
      <li v-for="article in sommaire" :key="article.id" class="link__sommaire-article">
        <div class="print">
          <h2>{{ article.title }}</h2>
          <div id="mef">
            <div id="textmini">
              <p> {{ article.description }} </p>
            </div>
            <div id="imagemini">
              <img :src="article.img">
            </div>
          </div>
          <nuxt-link :to="`/blog-eng/${article.slug}`" class="btn-custom button--green">
            Lire
          </nuxt-link>
        </div>
      </li>
    </ul>
    <nuxt-content :document="sommaire" />
    <br>
    <br>
    <br>
    <div class="div-btn">
      <nuxt-link to="/" class="button--green btn-blog btn-custom">
        Home Page
      </nuxt-link>
    </div>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, error }) {
    const sommaire = await $content('english').only(['title', 'description', 'img', 'slug'])
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
  head () {
    return {
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
        { property: 'og:description', content: 'Welcome on my web dev bolg.' },
        // <!-- Twitter Card data -->
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@floor_dev' },
        { name: 'twitter:title', content: 'Bolg de Dev' },
        { name: 'twitter:description', content: 'Welcome on my web dev bolg.' },
        { name: 'twitter:creator', content: '@floor_dev' },
        // <!-- Twitter Summary card images must be at least 200x200px -->
        { name: 'twitter:image', content: 'https://thierry-go-dev/mvicon.png' }
      ]
    }
  }
}
</script>

<style scoped>

h2 {
  font-size: 2.5em;
}
li {
  list-style: none;
  margin: 3%;
  padding: 1%;
}
ul {
  padding: 0px;
  margin: 3%;
}
img {
  width: 70%;
  margin: auto;
}
#mef {
  padding: 1%;
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: space-around;
}
#imagemini {
  width: 35%;
}
#textmini {
  width: 65%;
}
.print {
  justify-items: center;
}

.link__sommaire-article {
  margin: 1%;
  font-size: 1.2em;
  border: 6px solid rgb(237, 232, 232);
  border-radius: 10px;
  text-align: center;
}
.link__sommaire-article:hover {
  border: 6px solid rgb(41, 236, 41);
  box-shadow:4px 4px rgb(5, 134, 16);
  background-color: rgb(255, 248, 248);
  box-shadow: 5px 5px 5px 5px rgb(76, 112, 4);
}

article {
  padding: 5%;
  text-align: justify;
  width: 100%;
}
.div-btn {
  width: 100%;
  display: flex;
  justify-content: center;
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
  text-align: center;
  margin: 1%;
  width: 100%;
  color: #469583;
}
h2 {
  font-family: 'Dancing Script', cursive;
  color: #569546;
  margin: 1%;
}
p {
  font-family: 'Cutive Mono', monospace;
  margin: 1%;
  color: #01130f;
}
@media screen and (max-width: 850px){
  img {
    width: 50%;
  }
  #mef {
    width: 95%;
    margin: auto;
    display: flex;
    flex-direction: column;
  }
  #textmini {
    width: 95%;
  }
  #imagemini {
    width: 95%;
  }
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
  h2 {
    font-size: 1.5em;
  }
}
</style>
