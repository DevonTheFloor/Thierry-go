<template>
  <div>
    <MyHeader urlim="https://thierry-go-dev.fr/tourn/images/real.jpg">
      <template #titre>
        test fetch avec proxy
      </template>
    </MyHeader>
    <main>
      <br><br>
      <h2 class="h2__folio">
        Ici fetch jsdev
      </h2>
      <p>Itiz start ir :</p>
      <p> {{ jsdev }} </p>
      <p> Ande finiche ir</p>
    </main>
  </div>
</template>
<script>
export default {
  data () {
    return {
      jsdev: null
    }
  },
  mounted: {
    async myGet () {
      this.jsdev = await fetch('https://piecederecup.fr/api/myveille/jsdev')
      if (!this.jsdev.ok) {
        throw new Error(`Erreur transmission requête. Statut : ${this.jsdev.status}`)
      }
      console.log('response :', this.jsdev.json())
      return await this.jsdev.json()
    }
  }

}
</script>
<style>
main {
  padding: 1%;
}
.framebox {
  width: 100%;
  margin: 1% auto;
  padding: 2%;
  display: flex;
  justify-content: center;
}
.imframe {
  max-width: 60vw;
  margin: auto;
  object-fit: contain;
  border: 1px solid rgb(95, 92, 92);
  box-shadow: 4px 4px 4px rgb(172, 172, 172);
}
.div-btn {
  width: 100%;
  display: flex;
  justify-content: center;
}
.h2__folio {
  text-align: center;
  color: rgb(23, 180, 23);
  font-size: 2em;
}
p {
  padding: 1%;
}
.techlogo {
  margin: auto;
}

</style>
