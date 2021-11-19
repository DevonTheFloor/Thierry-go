<template>
  <article>
    <h1 class="title-blog">
      Test FOFO
      <p> Description </p>
      <img src="https://cod-box.net/wp-content/uploads/2019/10/Tutoriel-GIT-Poweshell-install.png">
    </h1>
  </article>
</template>

<script>
export default {

}
</script>

<style lang="css">

html {
  background-color: #469583;
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
  width: 100%;
  height: 100%;
  border: 5px solid #355e50;
  border-radius: 10px;

}
#__nuxt {
  width: 100%;
}
.nuxt-content-container {
  width: 100%;
}
#_layout {
  width: 100%;
}
article {
  padding: 5%;
  text-align: justify;
  width: 100%;
}

.vdo {
  margin: 3%;
  width: 100%;
  display: flex;
  justify-content: center;
}
iframe {
  max-width: 100%;
  max-height: auto;
}

.title-blog {
  font-family: 'Dancing Script', cursive;
  font-size: 50px;
  text-align: center;
}
h1 {
  width: 100%;
  color: #469583;
}
h2 {
  font-family: 'Dancing Script', cursive;
}
p {
  font-family: 'Cutive Mono', monospace;
  margin: 2%;
  color: #01130f;
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
