<template>
  <nav class="navblog">
    <nuxt-link to="/blog/sommaire" class=" button--green btn-blog btn-custom som">
      Blog's Summary
    </nuxt-link>
    <nuxt-link to="/" class="button--green btn-blog btn-custom">
      Home Page
    </nuxt-link>
  </nav>
</template>

<style scoped>
.navblog {
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
