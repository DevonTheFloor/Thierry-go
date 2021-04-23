<template>
  <nav class="navblog">
    <nuxt-link to="/blog/" class=" button--green btn-blog btn-custom">
      Sommaire Blog
    </nuxt-link>
    <nuxt-link to="/" class="button--green btn-blog btn-custom">
      Accueil
    </nuxt-link>
  </nav>
</template>

<style scoped>
.navblog {
  border:  2px solid blue;
  margin: 2%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.btn-blog {
  margin:1%
}
@media screen and (max-width: 500px){
  .navblog {
    flex-direction: column;
    justify-content: center;
  }
  .btn-blog {
    text-align: center;
  }
}
</style>
