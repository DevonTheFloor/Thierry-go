<template>
  <footer>
    <ol>
      <li>
        <a
          href="https://x.com/DThefloor"
          target="_blank"
          class="ft-link"
        >
          Devon Twitter
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/@devonthefloor6429"
          target="_blank"
          class="ft-link"
        >
          Devon Youtube
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/thierry-gonthier-dev-web/"
          target="_blank"
          class="ft-link"
        >
          Linked In
        </a>
      </li>
    </ol>
    <p class="m-l">
      Made with <span style="color:red">&hearts;</span> by Thierry &copy; 2025 DevonTheFloor
    </p>
  </footer>
</template>
<script>
export default {
  name: 'FooterDev',
  props: {
    urlsite: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>
ol {
  padding-left: 0px;
  list-style-type: none;
}
ol li {
  text-align: center;
  padding: 5px;
}
footer {
  margin-top:5%;
  background-color: #469583;
  width: 100%;
}
a {
  color: white;
  font-weight: bolder;
  text-decoration: none;
}
p.m-l{
  font-size: 0.8em;
  margin-bottom: 0px;
  text-align: center;
}

@media screen and (max-width: 850px){
  .bann__titre {
    font-size: 3em;
  }
}
</style>
