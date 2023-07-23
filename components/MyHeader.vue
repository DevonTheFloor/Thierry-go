<template>
  <header class="bann__article">
    <img :src="urlim" class="bann">
    <h1 class="bann__titre">
      <slot name="titre" />
    </h1>
  </header>
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
<style>
header {
  border: 2px ridge rgb(12, 77, 12);
}
.bann {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  opacity: 0.8;
}
.bann__article {
  height: 500px;
}
.bann__titre {
  margin: auto;
  z-index: 1;
  position: absolute;
  top: 100px;
  font-size: 5em;
  padding: 2%;
  color: rgb(62, 255, 4);
  text-align: center;
  text-shadow: 2px 2px 2px black;
  width: 90%;
}
@media screen and (max-width: 850px){
  .bann__titre {
    font-size: 3em;
  }
}
</style>
