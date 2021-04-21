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
    const page = await $content('hello').fetch()

    return {
      page
    }
  }
}
</script>

<style lang="css" scoped>

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
.title {
  font-size: 50px;
}
h1 {
  color: #35495e;
}
p {
  color: #0d5747;
}
</style>
