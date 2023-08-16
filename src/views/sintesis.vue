<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 Tener la responsabilidad de ser primer respondiente en un suceso o evento, implica conocer de manera detallada la estructura, funciones  del organismo, el sistema nervioso, respiratorio, cardiovascular, entre otros conceptos, con el fin de poder brindar el soporte inicial y de la manera correcta a una persona que haya sufrido una alteración física o mental, producto de un accidente o enfermedad, de igual manera debe manejar los protocolos establecidos para el manejo de la escena y todo lo que esto implica; por lo anterior este componente trató todos los temas que se requieren para atender como primer respondiente y que puede observar en el siguiente mapa mental:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
