<template>
  <article>
    <h1> Sommaire du Blog</h1>
    <h2>Le développement web</h2>
    <h3></h3>
    <p></p>
    <h3></h3>
    <p></p>
    <Nav-blog />
  </article>
</template>

<script>
export default {
  head: {
    title: '',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      // <!-- Open Graph data -->
      { property: 'og:title', content: 'Blog de Dev' },
      { property: 'og:type', content: 'Web site' },
      { property: 'og:url', content: 'https://thierry-go-dev.fr/sommaire' },
      { property: 'og:image', content: 'https://thierry-go-dev/mvicon.png' },
      { property: 'og:description', content: '' },
      // <!-- Twitter Card data -->
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@floor_dev' },
      { name: 'twitter:title', content: 'Bolg de Dev' },
      { name: 'twitter:description', content: '' },
      { name: 'twitter:creator', content: '@floor_dev' },
      // <!-- Twitter Summary card images must be at least 200x200px -->
      { name: 'twitter:image', content: 'https://thierry-go-dev/mvicon.png' }
    ]
  }
}
</script>
<style scoped>
html {
  background-color: #469583;
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
  width: 100%;
  height: 100%;
  border: 5px solid #355e50;
  border-radius: 10px;

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
}
h2 {
  font-family: 'Dancing Script', cursive;
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
