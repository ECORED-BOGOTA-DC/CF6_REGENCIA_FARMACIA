<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 7
      h1 Entrega del paciente al equipo de atención prehospitalaria
    .contenedor__bbg5
      .row.traslape1
        .col-lg-7.col-z1.f-right(data-aos="fade-left")
          img(src="@/assets/curso/img13.png" alt="Mujer farmacéutica en dispensario de fármacos")
        .col-lg-4_5.col-z2.f-left(data-aos="fade-right")
          .contenedor3c.p-4
            p Es el informe que realiza el auxiliador o primer respondiente, al personal paramédico que atiende al llamado del Número Único de Seguridad y Emergencia (NUSE) en caso de accidente o enfermedad súbita; en la mayoría de las ocasiones, son los tripulantes de la ambulancia la cual fue direccionada por el Centro Regulador de Urgencias y Emergencias (CRUE).
    .row.justify-content-center
      .col-10
        ul.lista-ul--separador.ms-5
          li 
            i.fas.fa-atom(style="color: #7E5EE3")
            p La información que se transmite debe ser clara, concreta y completa, de tal manera que durante el traslado al centro asistencial la persona lesionada continúe con el manejo oportuno hasta el arribo al servicio de urgencias donde será atendido.
          li 
            i.fas.fa-atom(style="color: #7E5EE3")
            p La seguridad de la persona lesionada se ve afectada cuando el personal paramédico que recibe al paciente no cuenta con la información precisa, completa o adecuada y a tiempo.
          li 
            i.fas.fa-atom(style="color: #7E5EE3")
            p Se debe asegurar que el receptor del paciente recibirá como mínimo la información crítica del paciente: nombre, edad, evento o incidente, situación en que fue encontrado y acciones de primeros auxilios realizadas. Es muy importante referir los tiempos de inicio y finalización de las maniobras o procedimientos realizados.
          li 
            i.fas.fa-atom(style="color: #7E5EE3")
            p Así mismo, relacionar la respuesta de la persona lesionada ante procedimientos realizados.
          li 
            i.fas.fa-atom(style="color: #7E5EE3")
            p Y entregar las pertenencias o un informe detallado de los elementos entregados a familiares y/o acompañantes de la víctima.
      
</template>

<script>
export default {
  name: 'Tema7',
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
