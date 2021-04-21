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
  async asyncData ({ $content, params }) {
    const page = await $content(params.slug || 'sommaire').fetch()

    return {
      page
    }
  }
}
</script>

<style lang="css">

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
article {
  width: 100%;
  text-align:  justify;
}

.vdo {
  width: 100%;
  display: flex;
  justify-content: center;
}
iframe {
  max-width: 100%;
}
.navblog {
  margin: 2%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn-blog {
  margin:1%
}
.title {
  font-size: 50px;
}
h1 {
  color: #35495e;
}
p {
  margin: 4%;
  color: #0d5747;
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
