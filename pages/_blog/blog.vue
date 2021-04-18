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
    const page = await $content('articles/blog').fetch()

    return {
      page
    }
  }
}
</script>
