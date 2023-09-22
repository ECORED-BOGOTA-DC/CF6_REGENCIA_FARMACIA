<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.align-items-center.mb-0.mb-lg-5
      .col-lg-7(data-aos="fade-right")
        p En cualquier momento se puede ser testigo de accidentes o de incidentes en la residencia, en la vía pública, en el lugar de trabajo, en planteles educativos, etc., y se debe estar preparado para dar la primera respuesta, la cual es fundamental para el pronóstico del paciente. 
        p El cuerpo humano, desde la célula más pequeña hasta el órgano más grande, está perfectamente diseñado y programado con diferentes mecanismos de compensación para responder a las diversas situaciones y estados, que, aunque es muy frágil, es capaz de dar respuesta y defenderse; sin embargo, constantemente se encuentra expuesto a diferentes tipos de daños.
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/img1.svg', style="width:400px" ,alt='Imágen decorativa').m-auto
    .row.justify-content-center.mb-0.mb-lg-5
      .col-lg-10
        .contenedor__bbg5
          .row.traslape2
            .col-lg-7.col-z1.f-right(data-aos="fade-left")
              img(src="@/assets/curso/img1.png" alt="Muestra hombre recibiendo atención por lesiones")
            .col-lg-4_5.col-z2.f-left(data-aos="fade-right")
              .contenedor3c.p-4
                p “Cualquier ciudadano que sufra lesiones traumáticas graves, tiene un margen de 60 minutos para sobrevivir”.
                p.d-flex.justify-content-end #[b Adams Cowley]
    p.mb-5(data-aos="fade-right") Es así como los primeros minutos, después de ocurrir un accidente, son los más cruciales. Por ejemplo:
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-9
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img2.svg' alt='Imágen decorativa')
          .tarjeta.tarjeta--azul.d-flex.align-items-center
            .p-4
              p.mb-0 Si se mantiene el flujo de oxígeno al cerebro después de un paro cardíaco, se podrá revivir a la persona sin consecuencias irreversibles.
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img3.svg' alt='Imágen decorativa')
          .tarjeta.tarjeta--azul.d-flex.align-items-center
            .p-4
              p.mb-0 Si una hemorragia se logra contener, se evitarán el shock y la muerte por la pérdida de sangre.
        .tarjeta-avatar-b
          img(src='@/assets/curso/img4.svg' alt='Imágen decorativa')
          .tarjeta.tarjeta--azul.d-flex.align-items-center
            .p-4
              p.mb-0 Si se sabe cómo evaluar el lugar donde ocurre el accidente, se podrá evitar un daño mayor o ser una víctima más, al tratar de socorrer al herido.
    .h4.mb-5(data-aos="fade-right") ¿Cómo actuar correctamente para ayudar a un herido?
    .row
      .col-12(data-aos="fade-right")
        figure
          .video
            <iframe width="853" height="480" src="https://www.youtube.com/embed/V9UlnxCApQw?si=RwkesR_xs_Sps0Ne" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
