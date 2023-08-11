<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Signos vitales por grupos etarios
    .row.align-items-center.mb-5
      .col-lg-6
        p.mb-4 Los signos vitales reflejan funciones esenciales del cuerpo humano, incluso el ritmo cardíaco, la frecuencia respiratoria, la temperatura y la presión arterial. El primer respondiente debe observar, medir y vigilar los signos vitales, principalmente el pulso y la frecuencia respiratoria, para valorar el nivel de funcionamiento físico e identificar el grado de compromiso y posible complicación, al momento de brindar la primera ayuda ante una persona lesionada o con enfermedad súbita.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 #[b Para tener en cuenta]: los signos vitales normales cambian con la edad, el sexo, el peso, la capacidad para ejercitarse y la salud general.
        p La siguiente figura presenta qué son y cómo tomar los signos vitales.
      .col-lg-6
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img8.png', style="max-width: 400px;").m-auto
    .row.p-4.bg-color10
      .col-12
        .h4 Pulso
        p.mb-5 Es la cantidad de veces que el corazón late por minuto. Cuando el corazón impulsa la sangre a través de las arterias, sentirá los latidos presionando, con firmeza, en las arterias que se encuentran cerca de la superficie de la piel, en ciertos lugares del cuerpo.
        .h4.text-center.mb-4 ¿Cómo se puede palpar?
        .row.justify-content-around
          .col-lg-4
            figure.mb-5
              img(src='@/assets/curso/img33.svg', style="max-width: 350px;").m-auto
          .col-lg-4
            figure.mb-5
              img(src='@/assets/curso/img34.svg', style="max-width: 350px;").m-auto
          .col-lg-4
            figure.mb-5
              img(src='@/assets/curso/img35.svg', style="max-width: 350px;").m-auto
        .row.mb-5
          .col-lg-3
            figure.mb-4.mb-lg-0(data-aos="fade-left")
              img(src='@/assets/curso/img36.svg', style="max-width: 1500px;").m-auto
          .col-lg-9
            PasosA.color-acento-botones.mb-4(tipo="l")
              div
                p Con las yemas de los dedos índice y medio, presione suavemente, pero con firmeza, sobre las arterias, hasta que sienta el pulso.
              div
                p Comience a contar las pulsaciones cuando el segundero del reloj marque las 12 o utilice el cronómetro del celular para garantizar la medición en 1 minuto. Cuente el pulso durante 60 segundos; al contar, no mire el reloj continuamente, concéntrese en las pulsaciones.
              div
                p Si la persona está inconsciente y no responde a su llamado inicial, presenta una coloración azulada alrededor de los labios o se encuentra sangrando mucho, verifique la presencia de pulso, directamente en uno de los lados del cuello, o sea en la arteria carótida.
            .row.justify-content-center
              .col-8
                ul.lista-ul.ms-5
                  li 
                    i.fas.fa-atom(style="color: #7E5EE3")
                    p El pulso normal de los adultos sanos oscila entre los 60 y 100 latidos por minuto.
                  li 
                    i.fas.fa-atom(style="color: #7E5EE3")
                    p El pulso puede fluctuar y aumentar con el ejercicio, las enfermedades, las lesiones y las emociones.
                  li 
                    i.fas.fa-atom(style="color: #7E5EE3")
                    p Los deportistas pueden tener frecuencias cardíacas de hasta 40 latidos por minuto sin presentar ningún tipo de problema.
        .h4 Relleno capilar
        p.mb-5 Es la valoración de la capacidad del sistema circulatorio para llevar la sangre bombeada por el corazón hasta los capilares de las partes más distales, al centro del cuerpo; lo que refleja es estado de perfusión en los tejidos.
        .row.align-items-center.mb-5
          .col-lg-4.p-4.bg-color11.mb-4.mb-lg-0
            figure.mb-4
              img(src='@/assets/curso/img37.svg', style="max-width: 100px;")
            p Se considera relleno capilar normal a la recuperación del color rosado del lecho ungueal en un tiempo inferior a 2 segundos y se puede alterar en shock, hipotensión, hemorragias, hipotermia y en estados graves de deshidratación, el tiempo de llenado capilar es mayor a 2 segundos.
          .col-lg-8
            .h5.mb-4 ¿Cómo se puede valorar?
            .row.mb-4.align-items-center
              .col-auto.d-inline
                figure
                  img(src='@/assets/curso/img20.svg', style="max-width: 70px;")
              .col
                p.mb-0 Presione el lecho ungueal en 2 o 3 dedos (sin esmalte) del paciente. Con la presión, la sangre ha sido forzada a salir del tejido bajo la uña, lo cual se denomina palidez.
            .row.mb-4.align-items-center
              .col-auto.d-inline
                figure
                  img(src='@/assets/curso/img21.svg', style="max-width: 70px;")
              .col
                p.mb-0 Una vez que el tejido ha palidecido, se quita la presión.
            .row.mb-4.align-items-center
              .col-auto.d-inline
                figure
                  img(src='@/assets/curso/img22.svg', style="max-width: 70px;")
              .col
                p.mb-0 Medir el tiempo que tarda en volver al color previo o inicial; tiempo que le lleva a la sangre a regresar al tejido. El regreso de la sangre al tejido se indica por el retorno del color rosado a la uña.
        .h4 Frecuencia respiratoria
        p Es la cantidad de respiraciones que una persona realiza en un minuto. 
        p.mb-5 Se mide, por lo general, cuando una persona está en reposo. El tórax se expande simétricamente sin que las costillas se ensanchen ni se retraigan y consiste simplemente en contar la cantidad de respiraciones, durante un minuto, cada vez que se eleva el pecho.
        .row.justify-content-center.mb-5
          .col-10
            .cajon.color-primario.p-4
              p.mb-0 La frecuencia respiratoria puede aumentar con la fiebre, algunas enfermedades y en los estados de pánico o crisis de ansiedad. Cuando se presenta una Obstrucción de la Vía Aérea por Cuerpo Extraño (Ovace), generalmente la persona, aunque esté muy agitada, puede toser.
        .h4.text-center.mb-4 Valores de referencia del pulso y la frecuencia respiratoria
        .row.justify-content-center
          .col-lg-8
            .tabla-b.color-acento-contenido.mb-3
              table
                caption Nota. Kleinmann, K. (2018). The Harriet Lane Hanbook 21st. Elsevier.
                tr
                  th(style="background-color: #00BCD4").text-white Grupo de edad
                  th(style="background-color: #00BCD4").text-white Pulso
                  th(style="background-color: #00BCD4").text-white Frecuencia respiratoria
                tr
                  td(style="background-color: #F6F6F6") 0 - 3 mese
                  td(style="background-color: #F6F6F6") 110 - 160
                  td(style="background-color: #F6F6F6") 30 - 60
                tr
                  td(style="background-color: #ffffff") 3 - 6 meses
                  td(style="background-color: #ffffff") 110 – 150
                  td(style="background-color: #ffffff") 30 - 45
                tr
                  td(style="background-color: #F6F6F6") 6 - 12 meses
                  td(style="background-color: #F6F6F6") 90 - 130
                  td(style="background-color: #F6F6F6") 25 - 40
                tr
                  td(style="background-color: #ffffff") 1 - 3 años
                  td(style="background-color: #ffffff") 80 - 125
                  td(style="background-color: #ffffff") 20 - 30
                tr
                  td(style="background-color: #F6F6F6") 3 - 6 años
                  td(style="background-color: #F6F6F6") 70 - 115
                  td(style="background-color: #F6F6F6") 20 - 25
                tr
                  td(style="background-color: #ffffff") 6 - 12 años
                  td(style="background-color: #ffffff") 60 - 100
                  td(style="background-color: #ffffff") 14 - 22
                tr
                  td(style="background-color: #F6F6F6") > 12 años
                  td(style="background-color: #F6F6F6") 60 - 100
                  td(style="background-color: #F6F6F6") 12 - 18

</template>

<script>
export default {
  name: 'Tema2',
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
