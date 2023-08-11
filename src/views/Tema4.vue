<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Valoración de la escena
    p El principio fundamental de acceso a la zona de impacto en una emergencia, es evitar efectos secundarios que puedan afectar al personal que acude a prestar asistencia a las potenciales víctimas.
    p.mb-5 En la valoración de la escena se debe tener presente:
    .tarjeta.color-acento-botones.p-4.p-md-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/img48.svg")
        .col-md.col-lg-6
          .titulo-segundo
            h2 Valoración de la escena
          p.mb-4 Cuando se realiza una valoración de la escena, se deben tener presente tres puntos primordiales: establecer claramente la causa externa o motivo que origina el evento, la cadena de custodia y el nivel I de Triage o Primario, los cuales se explicarán en la siguiente infografía.
          a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Anexo1.pdf')" target="_blank" type="application/pdf")
            span(Style="color: #000000 !important") Descargar
            i.fas.fa-file-download(style="color: #000000 !important")
    separador.mb-5
    #t_4_1
    .titulo-segundo
      h2 4.1 Valoración primaria
    p.mb-5 La siguiente figura presenta el orden en que se debe realizar la valoración primaria del estado de conciencia.
    .row.p-4.bg-color10
      .col-12
        figure
          img(src='@/assets/curso/img49.svg', style="max-width: 1200px;").m-auto
    separador.mb-5
    #t_4_2
    .titulo-segundo
      h2 4.2 Valoración secundaria examen físico céfalo-caudal
    p.mb-5 Realizada la valoración primaria, se hace la secundaria, cuyos pasos se encuentran explicados en la siguiente figura.
    .row.p-4.bg-color10
      .col-12
        figure
          img(src='@/assets/curso/img50.svg', style="max-width: 1200px;").m-auto
      
</template>

<script>
export default {
  name: 'Tema4',
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

<style lang="sass" scoped></style>
