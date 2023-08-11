<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.align-items-center.mb-5
      .col-lg-7
        p En cualquier momento se puede ser testigo de accidentes o de incidentes en la residencia, en la vía pública, en el lugar de trabajo, en planteles educativos, etc., y se debe estar preparado para dar la primera respuesta, la cual es fundamental para el pronóstico del paciente. 
        p El cuerpo humano, desde la célula más pequeña hasta el órgano más grande, está perfectamente diseñado y programado con diferentes mecanismos de compensación para responder a las diversas situaciones y estados, que, aunque es muy frágil, es capaz de dar respuesta y defenderse; sin embargo, constantemente se encuentra expuesto a diferentes tipos de daños.
      .col-lg-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img1.svg', alt='Texto que describa la imagen')
    .row.justify-content-center.mb-5
      .col-lg-10
        .contenedor__bbg5
          .row.traslape2
            .col-lg-7.col-z1.f-right(data-aos="fade-left")
              img(src="@/assets/curso/img1.png" alt="Mujer farmacéutica en dispensario de fármacos")
            .col-lg-4_5.col-z2.f-left(data-aos="fade-right")
              .contenedor3c.p-4
                p “Cualquier ciudadano que sufra lesiones traumáticas graves, tiene un margen de 60 minutos para sobrevivir”.
                p.d-flex.justify-content-end #[b Adams Cowley]
    p.mb-5 Es así como los primeros minutos, después de ocurrir un accidente, son los más cruciales. Por ejemplo:
    .row.justify-content-center.mb-5
      .col-lg-9
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img2.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.d-flex.align-items-center
            .p-4
              p.mb-0 Si se mantiene el flujo de oxígeno al cerebro después de un paro cardíaco, se podrá revivir a la persona sin consecuencias irreversibles.
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img3.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.d-flex.align-items-center
            .p-4
              p.mb-0 Si una hemorragia se logra contener, se evitarán el shock y la muerte por la pérdida de sangre.
        .tarjeta-avatar-b
          img(src='@/assets/curso/img4.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.d-flex.align-items-center
            .p-4
              p.mb-0 Si se sabe cómo evaluar el lugar donde ocurre el accidente, se podrá evitar un daño mayor o ser una víctima más, al tratar de socorrer al herido.
    .h4 ¿Cómo actuar correctamente para ayudar a un herido?
    p Todo primer respondiente debe estar preparado para aplicar las prácticas simples que se utilizan para atender y estabilizar a una persona que se encuentra lesionada, o con una enfermedad súbita y, por lo tanto, necesita recibir los primeros auxilios. Este conocimiento le puede ayudar a salvar la vida de un ser querido, de un vecino o de cualquier ser humano. Es importante refrescar y actualizar el conocimiento, de manera regular, para reforzar la confianza, pues el poder tratar una lesión leve, ayudará a reconfortar al herido. 
    p.mb-5 Para el estudio de los primeros auxilios es de vital importancia recordar la anatomía del cuerpo humano, cómo funciona cada uno de sus sistemas y la relación de las respuestas del organismo con el tipo de signo y síntoma que se esté manifestando. El primer respondiente debe aprender a:
    .row.justify-content-center
      .col-10
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img5.svg', alt='Texto que describa la imagen')

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
