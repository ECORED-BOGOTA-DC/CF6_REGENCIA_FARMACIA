<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Valoración de la escena
    p(data-aos="fade-right") El principio fundamental de acceso a la zona de impacto en una emergencia, es evitar efectos secundarios que puedan afectar al personal que acude a prestar asistencia a las potenciales víctimas.
    p.mb-5(data-aos="fade-left") En la valoración de la escena se debe tener presente:
    .tarjeta.color-acento-botones.p-4.p-md-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/img48.svg", alt='Imágen decorativa')
        .col-md.col-lg-6
          .titulo-sexto.border-titulo.mb-3
            h5 Figura 10.
            span Valoración de la escena
          p.mb-4 Cuando se realiza una valoración de la escena, se deben tener presente tres puntos primordiales: establecer claramente la causa externa o motivo que origina el evento, la cadena de custodia y el nivel I de triaje o primario, los cuales se explicarán en la siguiente infografía.
          a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Anexo1.pdf')" target="_blank" type="application/pdf")
            span(Style="color: #000000 !important") Descargar
            i.fas.fa-file-download(style="color: #000000 !important")
    separador
    #t_4_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Valoración primaria
    p.mb-5(data-aos="fade-left") La siguiente figura presenta el orden en que se debe realizar la valoración primaria del estado de conciencia.
    .row.p-4.bg-color10
      .col-12
        .titulo-sexto.border-titulo.mb-5(data-aos="fade-right")
            h5 Figura 11.
            span Valoración primaria
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img49.svg', style="max-width: 1200px;", alt='Imagen muestra imagen los textos de una valoración primaria:<br>INICIO<br>Garantizar la seguridad de la escena.<br>Revisar lospeligos potenciales.<br>Uso de EPP.<br>Garantizar el uso de bioseguridad.<br>Evalúe nivel de respuesta.<br>A alerta<br>V verbal<br>D dolor<br>I inconsciente<br>¿Paciente consciente?<br>SÍ<br>Inicie entrevista y brinde apoyo emocional.<br>Realizar examen físico detallado y control de signos vitales.<br>Determinar la necesidad de traslado.<br>Evacuar a Centro Asistencial.<br>FIN<br>NO<br>Abrir vía aérea.<br>Usar empuje mandibular.<br>Evaluar respiración.<br>M mirar<br>E escuchar<br>S sentir<br>¿Respira?<br>SÍ<br>Buscar y controlar hemorragias.<br>NO<br>Inicie protocolo de RCP.<br>Hasta que el paciente responda o reciba apoyo médico.').m-auto
    separador
    #t_4_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Valoración secundaria examen físico céfalo-caudal
    p.mb-5(data-aos="fade-left") Realizada la valoración primaria, se hace la secundaria, cuyos pasos se encuentran explicados en la siguiente figura.
    .row.p-4.bg-color10
      .col-12
        .titulo-sexto.border-titulo.mb-5(data-aos="fade-right")
          h5 Figura 12.
          span Valoración secundaria
        figure
          img(src='@/assets/curso/img50.svg', style="max-width: 1200px;", alt='Imagen muestra todos los pasos para una evaluación secundaria:<br>Realizar evaluación inicial.<br>Realizar entrevista – Historia Clínica.<br>Aplique la técnica:<br>S signos y síntomas<br>A alergias<br>M medicamentos<br>P patología previa / embarazo<br>L libaciones y última comida<br>E eventos relacionados con trauma<br>FIN<br>Realizar exámen físico detallado.<br>Buscar heridas, fracturas, hemorragias, deformidad, dolor, sangrado, otros fluidos, hematomas, sonidos anormales, olores.<br>Revisar cabeza: cuero cabelludo, cráneo y área facial.<br>Con linterna evalúe: respuesta pupilar, fosas nasales, boca, oídos.<br>Revisar cuello y columna cervical:<br> Alineación de tráquea.<br> Vasos dilatados.<br> Signos y síntomas de trauma cervical.<br>Revise en su orden:<br> Tórax.<br> Abdomen.<br> Pelvis y cadera.<br> Área genital.<br>Revise en su orden:<br> Extremidades inferiores.<br> Extremidades superiores.<br>Verifique pulso o perfusión distal.<br>Revise espalda.<br>FIN<br>Tomar signos vitales.<br>Tomar frecuencia respiratoria.<br>Adulto 12 a 20 rpm.<br>Tomar frecuencia cardíaca.<br>Adulto 60 a 90 ppm.<br>Tomar presión arterial.<br>Adulto:<br>Sistólica 100 a 140 mmHg.<br>Diastólica 60 a 90 mmHg.<br>Tomar temperatura.<br>Adulto 36,5° C a 37,5° C.<br>FIN').m-auto
      
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
