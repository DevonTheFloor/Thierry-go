<template>
  <div>
    <p>
      Vues: { nbView }
    </p>
  </div>
</template>

<script>
export default {
  async asyncData () {
    const nbView = await fetch()
      .then()
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err)
        err({ statusCode: 404, message: 'Page not found' })
      })

    return {
      nbView
    }
  }
}
</script>
