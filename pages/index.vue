<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        Thierry Go Dev
      </h1>
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
        <nuxt-link to="blog/" class="btn-custom button--green">
          Accueil Blog
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
    </div>
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

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  margin: 3%;
  padding-top: 15px;
}
@media screen and (max-width: 470px) {
  .title {
    padding: 2%;
    font-size: 70px;
  }
  .links {
    display: flex;
    flex-direction: column;
    align-items: center;
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
