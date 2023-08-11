<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Conceptos básicos de anatomía y fisiología
    p.mb-5 Para comenzar, se definen estos conceptos:
    .row.justify-content-around
      .col-lg-5(data-aos="fade-left")
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img6.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p #[b Anatomía]: estudio de la forma y la estructura del cuerpo humano.
      .col-lg-5(data-aos="fade-right")
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img7.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p #[b Fisiología]: estudio de las funciones del organismo y de los mecanismos de regulación.
    p.mb-5 Para la revisión de los conceptos generales de la anatomía y la fisiología del cuerpo, se revisarán las diferentes estructuras, desde las más sencillas hasta las más complejas, como lo presenta la siguiente imagen.
    figure(data-aos="fade-right")
      img(src='@/assets/curso/img8.svg', style="max-width: 1000px;").m-auto
    p.mb-5 Un tejido es un conjunto de células organizadas con una tarea específica; y existen cuatro tipos de tejidos básicos, los cuales muestran patrones de organización, que solo se pueden observar a través de un microscopio, y se clasifican de la siguiente manera:
    SlyderB.bg-color1.p-4.mb-5(:datos="datosSlyder")
    .h4 Posición anatómica
    p Se habla de #[b posición anatómica], porque, independientemente de cómo se ubique el cuerpo en el espacio, los hallazgos se explicarán teniendo en consideración que el cuerpo se halla en posición anatómica, es decir, #[b de pie]. 
    p.mb-5 La posición anatómica del cuerpo humano, es la de estar erguido, con las palmas de las manos vueltas hacia adelante (supinadas). Esta posición se emplea, como #[b referencia], para describir el sitio o la dirección de las diversas estructuras o partes del organismo; como #[b parámetro] se utiliza para describir los hallazgos del examen físico en las valoraciones primaria y secundaria, durante la atención inicial de un lesionado. La siguiente imagen exhibe cómo es la posición anatómica.
    .row.align-items-start.bg-color2.pb-3.mb-5.mx-0
      .col-lg-6.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img9.svg', style="max-width: 550px;").m-auto
      .col-lg-6
        .cajon.color-primario.p-4.mb-4
          p El cuerpo humano se considera como si estuviera de pie con los brazos y piernas extendidas, cabeza erguida mirando al frente, antebrazos girados con las palmas de las manos ubicadas hacia adelante y los pies uno al lado del otro, apoyados en el piso. El cuerpo, en esta posición, se considera descrito por un observador (en este caso el primer respondiente) ubicado frente al cuerpo que describe las estructuras usando como referencia el cuerpo a describir (persona lesionada o con enfermedad súbita) y no la ubicación del observador.
    p.mb-5 A partir de la posición anatómica, se deberá describir una determinada estructura ubicándola, espacialmente, en relación con otras estructuras, de acuerdo con los siguientes términos:
    figure(data-aos="fade-right").mb-5
      img(src='@/assets/curso/img11.svg', style="max-width: 1200px;").m-auto
    p Esta terminología se emplea de forma constante, aunque el cuerpo se encuentre de pie, boca arriba, boca abajo, o de lado. Por ejemplo, en un cuerpo colocado bocarriba, el corazón siempre se encontrará en posición cefálica o superior al estómago, el hígado estará lateral a la columna vertebral y los riñones se ubicarán inferiores o caudales a las glándulas suprarrenales.
    separador.mb-5
    #t_1_1
    .titulo-segundo
      h2 1.1 Sistema cardiovascular
    figure(data-aos="fade-right").mb-5
      img(src='@/assets/curso/img12.svg', style="max-width: 800px;").m-auto
    p Está constituido por un complejo sistema de conductos y vasos sanguíneos, por los cuales circula la sangre impulsada por una bomba, el corazón; y por el sistema linfático, formado por una red de vasos y tejido linfático distribuidos por todo el cuerpo.
    p.mb-5 El aparato cardiocirculatorio permite mantener la homeostasis y llevar a cabo las siguientes funciones:
    .row.justify-content-center
      .col-8
        .row.align-items-center.mb-3
          .col-auto.d-inline
            img(src='@/assets/curso/img20.svg', style="max-width: 80px;").m-auto
          .col
            p.mb-0 Transportar a todas las células del organismo las sustancias que necesitan para su correcto funcionamiento: nutrientes, oxígeno y sustancias reguladoras; al mismo tiempo recoger los productos resultantes del metabolismo para llevarlos a los lugares de la transformación, utilización y desecho.
        .row.align-items-center.mb-3
          .col-auto.d-inline
            img(src='@/assets/curso/img21.svg', style="max-width: 80px;").m-auto
          .col
            p.mb-0 Transportar las células encargadas de los mecanismos de defensa allí donde sean necesarias.
        .row.align-items-center.mb-5
          .col-auto.d-inline
            img(src='@/assets/curso/img22.svg', style="max-width: 80px;").m-auto
          .col
            p.mb-0 Distribuir las hormonas que se utilizan en los procesos de regulación metabólica.
    p.mb-5 Por otra parte, y paralelo al sistema cardiovascular, se encuentra el sistema linfático que realiza funciones inmunológicas al producir y procesar los linfositos sanguineos, y se encarga del transporte de las grasas, como lo muestra  la siguiente figura.
    .row.bg-color3.mx-0
      .col-12
        figure(data-aos="fade-left").mb-5
          img(src='@/assets/curso/img13.svg', style="max-width: 1100px;").m-auto
    p.my-5 El movimiento de la sangre a través del corazón y por todo el cuerpo se llama circulación. La siguiente figura explica más ampliamente el concepto.
    figure(data-aos="fade-right").mb-5.bg-color4
      img(src='@/assets/curso/img14.svg', style="max-width: 1100px;").m-auto
    p El proceso de la circulación se divide en dos fases o ciclos: circulación mayor o sistémica (izquierda) y circulación menor o pulmonar (derecha). Para conocer cada uno de ellos, se debe visitar en el material complementario el video Circulación menor y mayor.
    separador.mb-5
    #t_1_2
    .titulo-segundo
      h2 1.2 Sistema respiratorio
    p Permite la entrada de oxígeno al organismo durante el proceso de la respiración (inspiración o inhalación) y expulsa el dióxido de carbono (expiración o exhalación).
    p Los órganos que componen el aparato respiratorio funcionan como abastecedores y distribuidores de aire, a excepción de los alveolos, donde se realiza el verdadero intercambio gaseoso de O2 (oxígeno) y CO2 (dióxido de carbono) entre los tejidos y los capilares sanguíneos.
    p.mb-5 A continuación, se amplía la información sobre este proceso.
    .row.bg-color5.px-5
      .col-12
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/img9.png', alt='Texto que describa la imagen')
          .tarjeta.color-acento-botones.p-3(x="20.2%" y="22.5%")
            .h5.mb-2 Fosa nasal
            p El aire pasa por las fosas nasales, se calienta y humidifica. Las fosas nasales y las vías respiratorias están protegidos por pelos diminutos llamados "cilios", que se encargan de filtrar el polvo y otras partículas que entran en la nariz junto con el aire que respiramos. Se unen en la faringe, o garganta, en la parte posterior de la nariz y la boca.
          .tarjeta.color-acento-botones.p-3(x="76.9%" y="18.5%")
            .h5.mb-2 Faringe
            p En la parte inferior de la faringe el canal se divide en dos conductos: uno para los alimentos, el esófago y otro para el aire, la laringe que se cubre con una pequeña capa de tejido denominada "epiglotis” que, cuando tragamos, impide que los alimentos o los líquidos vayan a los pulmones.
          .tarjeta.color-acento-botones.p-3(x="76.9%" y="22.6%")
            .h5.mb-2 Laringe
            p La laringe es la parte superior del conducto exclusivo para el aire. Este conducto corto contiene un par de cuerdas vocales, que vibran para generar sonidos.
          .tarjeta.color-acento-botones.p-3(x="76.9%" y="30.8%")
            .h5.mb-2 Traquea
            p La tráquea es la continuación de la laringe. Las paredes de la tráquea están fortalecidas con anillos rígidos de cartílago que la mantienen abierta. Además, está revestida de cilios, que expulsan los líquidos y las partículas extrañas de las vías aéreas para que no lleguen a los pulmones.
          .tarjeta.color-acento-botones.p-3(x="77.8%" y="46.9%")
            .h5.mb-2 Bronquios
            p En el extremo inferior, la tráquea se divide en 2 conductos: izquierdo y derecho, llamados "bronquios", que conectan con los pulmones.
          .tarjeta.color-acento-botones.p-3(x="77.8%" y="56.2%")
            .h5.mb-2 Bronquiolos
            p Dentro de los pulmones, los bronquios se ramifican y forman bronquios más pequeños o conductos incluso más pequeños llamados "bronquiolos".
          .tarjeta.color-acento-botones.p-3(x="20.2%" y="80.2%")
            .h5.mb-2 Aveolos
            p Los bronquiolos terminan en pequeños sacos de aire llamados "alveolos", donde ocurre el intercambio de oxígeno y dióxido de carbono. Cada persona tiene cientos de millones de alveolos en los pulmones.
    .row.justify-content-center.mb-5
      .col-6
        .cajon.color-primario.p-4
          p.mb-0 La red de alvéolos, bronquiolos y bronquios recibe el nombre de “árbol bronquial”.
    separador.mb-5
    #t_1_3
    .titulo-segundo
      h2 1.3 Sistema nervioso
    .row.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5(data-aos="fade-right")
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/img19.svg', style="max-width: 250px;")
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Es el conjunto de órganos y estructuras de control e información del cuerpo humano, constituido por células altamente diferenciadas, conocidas como neuronas, capaces de transmitir impulsos eléctricos a lo largo de una gran red de terminaciones nerviosas. 
    p.mb-5 El sistema nervioso tiene tres funciones básicas.
    .row.justify-content-center.mb-5
      .col-8
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img20.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones.d-flex.align-items-center
            .p-4 #[b Sensorial o sensitiva]: percibe los estímulos internos y externos como la luz, presión o concentración de sustancias químicas, con los receptores u órganos receptivos.
        .tarjeta-avatar-c.mb-5
          .tarjeta.color-acento-botones.d-flex.align-items-center
            .p-4 #[b Integradora]: analiza la información sensorial y toma las decisiones apropiadas. Se activa o modifica por la información que está almacenada y se recupera de la memoria.
          img(src='@/assets/curso/img21.svg' alt='AvatarTop')
        .tarjeta-avatar-b
          img(src='@/assets/curso/img22.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones.d-flex.align-items-center
            .p-4 #[b Motora]: provoca respuestas de músculos o glándulas, estimulando los órganos y vísceras para que actúen o se inhiban.
    .row.align-items-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        p El sistema nervioso es el más complejo y altamente organizado del cuerpo humano; recibe información de los órganos sensoriales (la piel, los ojos, la lengua, el oído, etc.) mediante nervios, transmite la información a través de la médula espinal y la procesa en el encéfalo. El sistema nervioso dirige las reacciones del cuerpo hacia el mundo, y controla también la mayoría de las funciones internas, desde el movimiento muscular y la dilatación de los vasos sanguíneos hasta el aprendizaje de los datos anatómicos y fisiológicos.
        p El cerebro funciona como una computadora que controla todas las funciones del cuerpo humano. El resto del sistema nervioso viene a ser una red o entramado que envía mensajes en ambos sentidos entre el cerebro y distintas partes del cuerpo. Lo hace a través de la médula espinal, que desciende por la espalda desde el cerebro. Contiene nervios en su interior, unos filamentos que se ramifican hacia los demás órganos y partes del cuerpo. Cuando llega un mensaje al cerebro procedente de cualquier parte del cuerpo, este envía al cuerpo un mensaje de respuesta sobre cómo reaccionar.
      .col-lg-6
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img23.svg', style="max-width: 350px;").m-auto
    .row.bg-color7
      .col-12
        figure.mb-4.mb-lg-0(data-aos="fade-right")
          img(src='@/assets/curso/img24.svg', style="max-width: 1200px;").m-auto
    separador.mb-5
    #t_1_4
    .titulo-segundo
      h2 1.4 Aparato locomotor
    p Es una compleja red de tejidos de distinta naturaleza que permite al cuerpo humano sostenerse en pie y realizar diversos movimientos, desde simplemente caminar hasta los más precisos y delicados movimientos de las manos.
    p.mb-5 La siguiente figura explica qué es y cómo está compuesto el aparato locomotor.
    .row.bg-color5.mb-5
      .col-12
        figure.mb-4.mb-lg-0(data-aos="fade-left")
          img(src='@/assets/curso/img26.svg', style="max-width: 1200px;").m-auto
    p.mb-5 Es importante dividir el esqueleto en dos para su estudio y comprensión:
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/img27.svg', alt='Texto que describa la imagen')
        h2.text-center Esqueleto axial
        p Integrado por los huesos del cráneo, huesos propios de la cara, columna vertebral, costillas y esternón (caja torácica) que constituyen el eje central del cuerpo humano.
      .col-md.tarjeta.color-acento-botones.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/img28.svg', alt='Texto que describa la imagen')
        h2.text-center Esqueleto apendicular
        p Constituye el marco estructural de las extremidades, se conforma por todos los huesos de los miembros superiores e inferiores, desde las cinturas (pélvica y escapular), las cuales son la porción fija del esqueleto apendicular y son la forma de anclar el miembro al esqueleto axial.
    p Un punto importante en este aparato lo constituyen las articulaciones, que son el punto de contacto de dos huesos en el cuerpo, y permiten los diferentes tipos de movimiento. Los huesos ocupan un sitio fijo en las articulaciones, gracias a los ligamentos que los mantienen en su lugar. De manera semejante, los tendones son el tejido que une los músculos a los huesos, hechos de un material sumamente resistente, que permite el movimiento elástico de las fibras musculares sin que ello signifique desprenderlos de su lugar obligatorio en el esqueleto.
    p.mb-5 Existen tres tipos principales de articulaciones:
    .row.justify-content-center
      .col-10.p-4.bg-color8
        .row.align-items-center
          .col-lg-6
            ul.lista-ul.ms-5
              li 
                i.fas.fa-atom(style="color: #7E5EE3")
                p #[b Sinartrosis] (articulaciones fibrosas), con poco o sin movimiento, como por ejemplo las articulaciones de los huesos del cráneo.
              li 
                i.fas.fa-atom(style="color: #7E5EE3")
                p #[b Anfiartrosis] (articulaciones cartilaginosas), permiten un ligero movimiento, por ejemplo, las articulaciones de las costillas con el esternón, sínfisis púbica.
              li 
                i.fas.fa-atom(style="color: #7E5EE3")
                p #[b Diartrosis] (articulaciones sinoviales), son articulaciones que realizan diferentes movimientos; tienen una cavidad articular, cartílago articular, membrana sinovial, líquido sinovial y una cápsula fibrosa. Por ejemplo: articulación de la rodilla, codo, coxofemoral, hombro, muñeca, etc.
          .col-lg-6
            figure(data-aos="fade-right")
              img(src='@/assets/curso/img6.png', style="max-width: 350px;").m-auto
    separador.mb-5
    #t_1_5
    .titulo-segundo
      h2 1.5 Sistema digestivo
    p Es una especie de planta procesadora de alimentos, dentro del cuerpo humano. Permite el ingreso de los alimentos y los transporta por órganos y estructuras donde se produce el proceso de la digestión; utiliza la energía que requiere para el movimiento, metabolismo, pensamiento, etc., y desecha el resto.
    p.mb-5 La siguiente figura muestra las partes del sistema digestivo.
    .row.bg-color9.mb-5
      .col-12
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img29.svg', style="max-width: 1100px;").m-auto
    p Para conocer el proceso de digestión, se invita a visitar el video Sistema digestivo – Proceso de la digestión que se encuentra en el material complementario.
    separador.mb-5
    #t_1_6
    .titulo-segundo
      h2 1.6 Salud mental
    .row.align-items-center.mb-5
      .col-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img30.svg', style="max-width: 250px;").m-auto
      .col-6
        p Es un estado dinámico que se expresa en la vida cotidiana a través del comportamiento y la interacción del individuo y de los colectivos: desplegar sus recursos emocionales, cognitivos y mentales, para transitar por la vida diaria, para trabajar, establecer relaciones significativas y contribuir con la comunidad.
    .row.justify-content-center.mb-5
      .col-11
        .contenedor__bbg5
          .row.traslape2
            .col-lg-7.col-z1.f-right(data-aos="fade-left")
              img(src="@/assets/curso/img7.png" alt="Mujer farmacéutica en dispensario de fármacos")
            .col-lg-4_5.col-z2.f-left(data-aos="fade-right")
              .contenedor3c.p-4
                p La salud mental es un componente integral y esencial de la salud. Al respecto, la OMS (1948) dice:
                p “La salud es un estado de completo bienestar físico, mental y social, y no solamente la ausencia de afecciones o enfermedades”.
                p.d-flex.justify-content-end #[b OMS (1948)]
    p.mb-5 La salud mental individual está determinada por múltiples factores sociales, psicológicos y biológicos y se asocia por ejemplo, a:
    .row.align-items-center.mb-5
      .col-6
        ul.lista-ul.ms-5
          li 
            i.fas.fa-atom(style="color: #7E5EE3")
            p Los cambios sociales rápidos.
          li 
            i.fas.fa-atom(style="color: #7E5EE3")
            p Las condiciones de trabajo estresantes.
          li 
            i.fas.fa-atom(style="color: #7E5EE3")
            p La discriminación de género.
          li 
            i.fas.fa-atom(style="color: #7E5EE3")
            p La exclusión social.
          li 
            i.fas.fa-atom(style="color: #7E5EE3")
            p Los modos de vida poco saludables.
          li 
            i.fas.fa-atom(style="color: #7E5EE3")
            p Los riesgos de violencia y mala salud física.
          li 
            i.fas.fa-atom(style="color: #7E5EE3")
            p Las violaciones de los derechos humanos.
      .col-6
        .cajon.color-primario.p-4
          p.mb-0 #[b Para tener en cuenta]: existen factores psicológicos específicos de la personalidad que hacen que una persona sea más vulnerable a los problemas de la vida diaria.
    p.mb-5 Es importante diferenciar:
    LineaTiempoD.color-primario.mb-5
      .row(numero="1" titulo="Enfermedad mental").align-items-center
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/img31.svg', style="width: 250px").m-auto
        .col-md-6
          p Se puede definir como una alteración de tipo biológico, psicológico y social que se manifiesta mediante el pensamiento, las emociones, los sentimientos y la conducta de las personas.
          p Cuando una persona padece de una enfermedad mental o afectiva, se alteran todas las áreas que integran al individuo o al ser humano; por ejemplo: la social, la académica y la laboral.
      .row(numero="2" titulo="Trastorno mental").align-items-center
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/img32.svg', style="width: 250px").m-auto
        .col-md-6
          p Es el síndrome caracterizado por una alteración clínicamente significativa del estado cognitivo, la regulación emocional o el comportamiento del individuo que refleja una disfunción de los procesos psicológicos, biológicos o del desarrollo que subyacen en su función mental.
          p Generan en el individuo dependencias y discapacidades sociales que, de no ser tratadas por profesionales o no tener adherencia a los tratamientos farmacológicos, pueden llegar a alterar la armonía y bienestar de la comunidad en la cual se desarrollan.
    .h3 ¿Qué es una crisis en salud mental?
    p De acuerdo con lo estudiado anteriormente, se puede concluir que una crisis en salud mental es:
    p.mb-0 Un periodo crucial o decisivo en la vida de una persona, un punto de viraje que tiene consecuencias físicas y emocionales De manera específica es un periodo limitado de desequilibrio psicológico precipitado por un cambio repentino y significativo en la situación vital de la persona. Este cambio origina necesidad de ajustes internos y el uso de mecanismos de adaptación externa que rebasan temporalmente la capacidad del individuo (Cohen y Arhean, 1989).
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Tejido epitelial',
        texto:
          'Recubre la parte superficial del cuerpo, forma glándulas y cubre cavidades. Está caracterizado por la estrecha relación que guarda con sus células, y dispone de fibras nerviosas. Las uniones intercelulares mantienen los compartimentos separados y forman una barrera entre el tejido subyacente y el medio externo.',
        imagen: require('@/assets/curso/img2.png'),
        leyendaImagen:
          'Departamento de Biología funcional y Ciencias de la Salud. Universidad de Vigo. (2014). Epit-estrat-prismatico.',
      },
      {
        titulo: 'Tejido muscular',
        texto:
          'Células con función contráctil, llamadas también fibras musculares, las cuales disponen en su citoplasma las proteínas contráctiles, <b>miosina</b> y <b>actina</b>. Estas proteínas permiten crear movilidad en sus estructuras anatómicas grandes y pequeñas (flexionar una pierna o contraer un vaso sanguíneo). Estas células contráctiles se pueden clasificar en tres tipos: <b>tejido muscular estriado (también llamado esquelético)</b>, que componen todos y cada uno de los músculos que conforman nuestro cuerpo y le permiten el movimiento; <b>tejido muscular liso</b>, el cual encontramos en las venas, arterias y capilares, en todo el tubo digestivo, en las vías urinarias, músculos pupilares y el músculo erector de la piel. Por último, tenemos el <b>tejido muscular cardíaco</b>, el cual solamente se encuentra en el corazón y hace parte de las paredes del mismo.',
        imagen: require('@/assets/curso/img3.png'),
        leyendaImagen: 'Wikimedia Commons. (s.f.). Músculo liso.',
      },
      {
        titulo: 'Tejido nervioso',
        texto:
          'Está compuesto por neuronas, células de transmisión de impulsos eléctricos y diferentes tipos de células de sostén. Las neuronas se encargan de recibir y procesar la información por vía externa e interna, uniéndose a los receptores y a los órganos sensoriales especiales para llevar a cabo estas funciones.',
        imagen: require('@/assets/curso/img4.png'),
        leyendaImagen:
          'Department of Histology, Jagiellonian University Medical College. (s.f.). Cross Section of peripheral nerve.',
      },
      {
        titulo: 'Tejido conectivo',
        texto:
          'Este tejido es el encargado de sustentar a los tres tejidos anteriores, tanto en su estructura como en su función. La sustancia intercelular es cuantiosa y eso le ofrece particularidad al tejido conectivo.  Existen distintos tipos de tejidos conectivos: el óseo, el sanguíneo, el linfático, el cartilaginoso, el adiposo. La diferencia depende de las características de su matriz extracelular y de sus células.',
        imagen: require('@/assets/curso/img5.png'),
        leyendaImagen: 'J Jana. (2015). Dense connective tissue.',
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
