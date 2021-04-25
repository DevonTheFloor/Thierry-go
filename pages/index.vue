<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        Thierry Go Dev
        <figure>
          <img class="profile" src="~static/profil.jpg">
        </figure>
      </h1>
      <h2 class="sub-title">
        Développeur d'application web et mobile, full stack JS.
      </h2>
      <div>
        <figure>
          <img src="~@/static/HTML5.png" alt="logo html 5" class="ecusson">
          <img src="~@/static/css3.png" alt="logo css 3" class="ecusson">
          <img src="~@/static/JS.png" alt="logo JavaScript" class="ecusson">
          <img src="~@/static/node.png" alt="logo Node.js" class="ecusson">
          <img src="~@/static/mongo.png" alt="logo mongodb" class="ecusson">
          <img src="~@/static/vue.png" alt="logo vue js" class="ecusson">
        </figure>
      </div>

      <p>
        Site en construction, en attendant il y a peut être des articles dans le blog?
      </p>
      <div class="links">
        <a
          href="https://github.com/DevonTheFloor"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-custom button--grey"
        >
          Mon GitHub
        </a>
        <nuxt-link to="blog/sommaire" class="btn-custom button--green">
          Sommaire Blog
        </nuxt-link>
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-custom button--green"
        >
          Nuxt.Js
        </a>
      </div>
      <p>Si tu es développeur et que tu entretiens une veille technologique ou si simplement tu t'interesses à l'actualité du net et des nouvelles technologies de l'information, je peux te conseiller :</p>
      <div class="links">
        <a
          href="https://myveille.herokuapp.com"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-custom button--green"
        >
          My Veille
        </a>
      </div>
      <p>Veille axée exclusivement sur le développement web. C'est ti pas beau la vie?</p>
    </div>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
export default {}
</script>

<style>

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
Logo {
  margin:2%;
}
.profile {
  min-width: 7vw;
  border-radius: 45%;
}
.ecusson {
  margin:1vw;
}
.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.sub-title {
  font-weight: 200;
  font-size: 35px;
  color: #43516e;
  word-spacing: 2px;
  padding-bottom: 15px;
}

.links {
  margin: 3%;
  padding-top: 15px;
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
