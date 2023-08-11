<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Bioseguridad
    p Es el conjunto de principios, normas, protocolos, tecnologías y prácticas que se implementan en cualquier entorno, con el objetivo de evitar o minimizar el riesgo para la salud y el medio ambiente, ante la exposición a agentes biológicos causantes de enfermedades infecciosas, tóxicas o alérgicas.
    p Este protocolo se orienta a minimizar los factores que pueden generar la transmisión de la enfermedad y deberá ser implementado por el primer respondiente o auxiliador, en el momento de atender un incidente o evento donde se requiera desarrollar acciones de primeros auxilios.
    p.mb-5 Las responsabilidades del primer respondiente son:
    SlyderB.bg-color1.p-4.mb-5(:datos="datosSlyder")
    p.mb-5 Y las medidas generales que deben tener presentes, son:
    .row.justify-content-center
      .col-lg-10.bg-color10.mb-5
        LineaTiempoB.color-secundario(:datos="datosLineaTiempoB")
      .col-lg-10
        .cajon.color-primario.p-4
          p Adicional a estas medidas y teniendo en cuenta los mecanismos de diseminación de virus, bacteria y hongos:
          p.mb-0 Se deben fortalecer los procesos de limpieza y desinfección de elementos e insumos de uso habitual, superficies, equipos de uso frecuente, el manejo de residuos producto de la actividad o sector, adecuado uso de Elementos de Protección Personal - EPP y optimizar la ventilación del lugar y el cumplimiento de condiciones higiénicos sanitarias.
      
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: '',
        texto:
          'Lavado de manos con agua y jabón de acuerdo con protocolo de OMS, mínimo cada 3 horas.',
        icono: require('@/assets/curso/img42.svg'),
      },
      {
        titulo: '',
        texto:
          'Higienización de manos con alcohol o gel antibacterial, antes y después de atender a una víctima.',
        icono: require('@/assets/curso/img43.svg'),
      },
      {
        titulo: '',
        texto:
          'Distanciamiento social; en lo posible mantenga una distancia de mínimo un metro al momento de atender a la víctima.',
        icono: require('@/assets/curso/img44.svg'),
      },
      {
        titulo: '',
        texto:
          'Aproveche las ayudas tecnológicas con el fin de evitar aglomeraciones y evite el intercambio físico de documentos.',
        icono: require('@/assets/curso/img45.svg'),
      },
      {
        titulo: '',
        texto: 'Uso de tapabocas.',
        icono: require('@/assets/curso/img46.svg'),
      },
      {
        titulo: '',
        texto: 'Fomentar el autocuidado.',
        icono: require('@/assets/curso/img47.svg'),
      },
    ],
    datosSlyder: [
      {
        titulo: '',
        texto:
          'Cumplir los protocolos de bioseguridad para la atención de accidentes, emergencias y desastres.',
        imagen: require('@/assets/curso/img38.svg'),
        leyendaImagen: '',
      },
      {
        titulo: '',
        texto:
          'Utilización de los elementos de protección personal EPP:<br><br><ul><li>+ Doble par de guantes desechables.</li><li>+ Tapabocas que cubra boca y nariz.</li></li>+ Uso constante de monogafas.</li></ul>',
        imagen: require('@/assets/curso/img39.svg'),
        leyendaImagen: '',
      },
      {
        titulo: '',
        texto: 'Adoptar las medidas de <b>AUTOCUIDADO</b> de su salud.',
        imagen: require('@/assets/curso/img40.svg'),
        leyendaImagen: '',
      },
      {
        titulo: '',
        texto:
          'Reportar al jefe inmediato y a la ARL cualquier tipo de accidente por riesgo biológico.',
        imagen: require('@/assets/curso/img41.svg'),
        leyendaImagen: '',
      },
    ],
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
