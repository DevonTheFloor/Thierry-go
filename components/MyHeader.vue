<template>
  <div>
    <img :src="urlim">
    <h1>
      <slot name="titre"></slot>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'MyHeader',
  props: {
    urlim: {
      type: String,
      default: ''
    }
  }
}
</script>
