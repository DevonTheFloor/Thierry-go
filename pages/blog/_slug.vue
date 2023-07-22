<template>
  <div>
    <MyHeader :urlim="page.img">
      <template #titre>
        {{ page.title }}
      </template>
    </MyHeader>
    <p>{{ page.description }}</p>
    <!-- <figure class="illustration">
      <img :src="page.img">
    </figure>-->
    <nuxt-content :document="page" />
    <br>
    <p> Views: {{ views }} </p>
    <Nav-blog />
    <br>
  </div>
</template>

<script>

export default {
  async asyncData ({ $content, params, error }) {
    const page = await $content('articles', params.slug)
      .fetch()
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err)
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      page
    }
  },
  data () {
    return {
      views: null
    }
  },

  head () {
    return {
      title: this.page.title,
      meta: [
        { hid: 'description', name: 'description', content: this.page.description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.page.title },
        { hid: 'og:description', property: 'og:description', content: this.page.description },
        { property: 'og:type', content: 'Web site' },
        { property: 'og:image', content: this.page.img },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: this.page.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.page.description },
        // Twitter Summary card images must be at least 200x200px
        { name: 'twitter:image', content: this.page.img }
      ]
    }
  },
  mounted () {
    const views = this.$axios.$get('/counter/')
    this.views = views
    // eslint-disable-next-line no-console
    // console.log('views :', views)
  }
}
</script>

<style>

article {
  padding: 5%;
  text-align: justify;
  width: 100%;
}

code {
  display: block;
  padding: 2%;
  width: 90%;
  margin: auto;
}
.filename {
  display: block;
  text-align: center;
  color: rgb(87, 197, 77);
}
div.nuxt-content-highlight {
  background-color: #eaf5e7;
  display: block;
  border: 1px solid grey;
  max-width: 60%;
  min-width: 55%;
  margin: 2% auto;
}
.vdo {
  width: 90%;
  margin: 0%;
  display: flex;
  justify-content: center;
}
iframe {
  max-width: 75%;
  min-width: 40%;
  height: 315px;
}

.title-blog {
  font-family: 'Dancing Script', cursive;
  font-size: 50px;
  text-align: center;
}
.illustration {
  width: 100%;
  padding: 2%;
  display: flex;
  justify-items: center;
}
.illustration img {
  max-width: 50%;
  border: solid 1px green;
  margin: auto;
}
h1 {
  width: 100%;
  color: #469583;
  text-align: center;
  border: 2 px solid green;
  margin: 1%;
}
h2 {
  font-family: 'Dancing Script', cursive;
  color: #569546;
  margin: 1%;
}
p {
  font-family: 'Cutive Mono', monospace;
  margin: 2%;
  padding: 1%;
  color: #01130f;
}
.illu {
  width: 100%;
  padding: 2%;
  display: flex;
  justify-items: center;
}
.illu img {
  max-width: 20%;
  border: solid 1px green;
  margin: auto;
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
  div.nuxt-content-highlight {
  max-width: 70%;
  min-width: 65%;
  }
  p {
    font-size: 1.25em;

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
    padding: 5%;
  }

  div.nuxt-content-highlight {
  max-width: 90%;
  min-width: 85%;
  }
  h1 {
    font-size: 2em;
  }
}
</style>
