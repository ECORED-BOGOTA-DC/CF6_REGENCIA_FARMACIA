<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Soporte vital básico por grupos etarios
    p A continuación, se estudiarán la Reanimación Cardiopulmonar Básica (RCP), el protocolo de obstrucción de vía aérea por cuerpo extraño y el ahogamiento por inmersión.
    separador.mb-5
    #t_5_1
    .titulo-segundo
      h2 5.1 Reanimación Cardiopulmonar Básica (RCP)
    p Es importante tener presente que la #[b cadena de supervivencia] es el conjunto de medidas regladas y secuenciales que tenemos que seguir para actuar correctamente a la hora de atender a una persona que ha sufrido una parada cardiorrespiratoria, en el área extrahospitalaria.
    p.mb-5 La siguiente figura presenta el orden en que se debe realizar la valoración primaria del estado de conciencia.
    figure.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/img10.png', style="max-width: 1000px;").m-auto
    p.mb-4 El Soporte Vital Básico (SVB) incluye los tres primeros eslabones de esta cadena de supervivencia:
    ul.lista-ul.ms-5
      li 
        i.fas.fa-atom(style="color: #7E5EE3")
        p Reconocimiento de la PCR y petición de ayuda.
      li 
        i.fas.fa-atom(style="color: #7E5EE3")
        p RCP básica hasta que llegue la ayuda.
      li 
        i.fas.fa-atom(style="color: #7E5EE3")
        p Desfibrilación precoz.
    p.mb-5 Profundice el estudio de cada uno de ellos a través de la siguiente figura.
    .h3.mb-5 PCEH
    LineaTiempoD.color-primario
      .row(numero="1" titulo="Seguridad del lugar").align-items-center
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/img51.svg', style="width: 250px").m-auto
        .col-md-6
          p Asegurarse de que el entorno es seguro para los reanimadores y para la víctima. 
      .row(numero="2" titulo="Valorar el nivel de consciencia").align-items-center
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/img52.svg', style="width: 250px").m-auto
        .col-md-6
          p Acercarse a la víctima y preguntarle cómo está. Si responde, se mueve o respira con normalidad, significa que está consciente y debe solicitar ayuda; no mover a la víctima y evaluar el estado continuamente. Si no responde, está inconsciente, pida ayuda, y coloque al paciente bocarriba.
      .row(numero="3" titulo="Apertura de la vía aérea (maniobra frente-mentón) y comprobación de la respiración").align-items-center
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/img53.svg', style="width: 250px").m-auto
        .col-md-6
          p Arrodillarse al lado del paciente, colocarlo bocarriba en una superficie firme. 
          p Colocar una mano en la frente e inclinar la cabeza hacia atrás.
          p.mb-0 Poner la yema de los dedos de la otra mano, bajo el mentón y elevarlo para abrir la vía aérea.
      .row(numero="4" titulo="Comprobación de la respiración").align-items-center
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/img54.svg', style="width: 250px").m-auto
        .col-md-6
          p Con la vía aérea abierta, comprobar la respiración a través de VOS: VER si el pecho se hincha – OÍR ruidos respiratorios pegando el oído a la boca – SENTIR si hay respiración aproximando la mejilla a la boca-nariz de la víctima. 
          p Si la víctima respira, ponerla en posición lateral de seguridad (siempre que no existan lesiones que lo impidan) y reevaluar la situación.
          p.mb-0 Si la víctima no respira o la respiración es ineficaz, asumir que está en parada y comenzar con las maniobras de RCP.
      .row(numero="5" titulo="Avisar a los servicios de emergencias").align-items-center
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/img55.svg', style="width: 250px").m-auto
        .col-md-6
          p Si la víctima está en parada cardiorrespiratoria y la persona que reanima se encuentra solo, llamar al 123 y buscar el DEA si está disponible, antes de iniciar la RCP. Si hay otro reanimador, uno realiza la RCP y el otro llama y recoge el DEA.
      .row(numero="6" titulo="Compresiones torácicas").align-items-center
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/img56.svg', style="width: 250px").m-auto
        .col-md-6
          p Arrodillarse al lado de la víctima, manteniendo la verticalidad sobre ella. 
          p Colocar el talón de una mano en el centro del pecho de la víctima, poner la otra mano encima de la primera, entrelazando los p dedos tratando de apoyar solo el talón de la mano que está debajo (evitando presionar también las costillas).
          p Profundidad adecuada, descendiendo el esternón al menos 5 cm y máximo 6 cm.
          p Ejercer presión manteniendo los brazos extendidos, de manera vertical, aprovechando el peso de nuestro cuerpo.
          p Permitir una expansión completa del tórax entre una compresión y la siguiente, evitando apoyarse sobre el tórax entre las p compresiones.
          p.mb-0 Reducir al mínimo las interrupciones (menos de 10 segundos) entre los ciclos.
      .row(numero="7" titulo="Profundidad de las compresiones").align-items-center
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/img57.svg', style="width: 250px").m-auto
        .col-md-6
          p 5 o 6 cm (nunca superior a 6 cm).
      .row(numero="8" titulo="Frecuencia de las compresiones").align-items-center
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/img58.svg', style="width: 250px").m-auto
        .col-md-6
          p 100 – 120 compresiones por minuto, permitiendo que entre las compresiones, el pecho se eleve completamente.
      .row(numero="9" titulo="Descomprensión torácica").align-items-center
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/img59.svg', style="width: 250px").m-auto
        .col-md-6
          p Permitir la descomprensión torácica completa después de cada compresión, no apoyarse en el pecho después de cada compresión.
      .row(numero="10" titulo="Relación compre sión-ventilación").align-items-center
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/img60.svg', style="width: 250px").m-auto
        .col-md-6
          p 30 compresiones y 2 ventilaciones (30:2).
          p.mb-0 Si hay más de un reanimador, se deben ir turnando cada 2 minutos.
      .row(numero="11" titulo="Uso del DEA").align-items-center
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/img61.svg', style="width: 250px").m-auto
        .col-md-6
          p Si está disponible el DEA, se debe abrir y colocar los parches en el pecho desnudo de la víctima: uno en el hombro derecho debajo de la clavícula y otro a unos 10 cm por debajo de la axila izquierda. El DEA analiza el ritmo cardíaco, no tocar al paciente; si está indicada la descarga, apretar el botón y no tocar a la víctima. Reiniciar de nuevo las maniobras de RCP 30:2 durante 2 min. Si la víctima no responde, volver a analizar el ritmo; si vuelve a estar indicada la descarga, se repite el proceso y si no, reiniciar maniobras de RCP de forma inmediata hasta que lleguen los servicios de emergencia, la víctima responda o estemos exhaustos. Si hay dos reanimadores, uno debe abrirlo y otro continuar con las compresiones hasta que se pongan los parches.
      .row(numero="12" titulo="Duración de la RCP").align-items-center
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/img62.svg', style="width: 250px").m-auto
        .col-md-6
          p No se debe interrumpir la reanimación hasta que el paciente muestre signos de vida, hasta que lleguen los profesionales sanitarios o hasta que la persona que reanima, esté agotada o exista peligro para su integridad.
    separador.mb-5
    #t_5_2
    .titulo-segundo
      h2 5.2 Protocolo de Ovace (obstrucción de vía aérea por cuerpo extraño)
    .row.align-items-center.bg-color12.mb-5
      .col-lg-4
        figure(data-aos="fade-left")
          img(src='@/assets/curso/img11.png', style="width: 350px").m-auto
      .col-lg-8
        p La Obstrucción de la Vía Aérea por Cuerpo Extraño (Ovace), sucede cuando la persona se atraganta o atora con un cuerpo sólido o con líquidos, como alimentos, objetos, juguetes, entre otros. Es una situación que pone en peligro la vida, si no se atiende inmediatamente.
    p Las personas que sufren Ovace suelen hacer una señal universal: llevar sus manos al cuello y toser. La persona se agita e inicialmente su rostro se pone rojo, si la dificultad para respirar aumenta por la obstrucción, se puede observar cianosis (coloración azulada o violácea alrededor de los labios). Se puede manifestar dificultad para hablar, sonido extraño al respirar y, en ocasiones, pérdida de conocimiento.
    p.mb-5 Se pueden presentar dos tipos de obstrucción:
    .row.justify-content-center.mb-5
      .col-8
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img20.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones.d-flex.align-items-center
            .p-4 #[b Obstrucción parcial (o leve)]: la persona puede toser y está consciente; lo que se debe hacer es animarla para que siga tosiendo.
        .tarjeta-avatar-b
          img(src='@/assets/curso/img21.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones.d-flex.align-items-center
            .p-4 #[b Obstrucción total (o severa)]: la persona no puede toser, respira con dificultad o no puede hablar. En este caso, se debe iniciar la maniobra de Heimlich (de desobstrucción o desatoramiento), también conocida como el abrazo del oso.
    p.mb-5 El procedimiento que se debe realizar es el siguiente:
    .row
      .col-lg-4
        figure.mb-4.mb-lg-0
          img(src='@/assets/curso/img63.svg', style="width: 350px").m-auto
      .col-lg-8
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Paso 1")
            p Tranquilice y explique que va a ayudarle. Haga que la víctima tosa fuertemente para tratar de expulsar el cuerpo extraño.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Paso 2")
            p Sitúese detrás de la persona, pase sus brazos por debajo de los de ella, coloque sus manos sobre el abdomen, por debajo de las costillas y por encima del ombligo. Haga que la persona se incline hacia adelante, de modo que cuelguen cabeza, brazos y tronco.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Paso 3")
            p Si la persona no puede toser, haga que se doble ligeramente hacia adelante.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Paso 4")
            p Cierre el puño y colóquelo entre el ombligo y la punta del esternón. Con sus manos empuñadas, una sobre la otra, presione hacia adentro y hacia arriba simultáneamente.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Paso 5")
            p Repita el procedimiento, hasta que expulse el objeto que produce la obstrucción.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Paso 6")
            p Si la persona pierde el conocimiento y deja de respirar, active el NUSE 123, donde se le brindará orientación e información, en caso necesario. Si es imprescindible, inicie maniobra RCP básica.
    separador.mb-5
    #t_5_3
    .titulo-segundo
      h2 5.3 Ahogamiento por inmersión
    .row.p-4.align-items-center.bg-color11.mb-5
      .col-lg-4
        figure.mb-4.mb-lg-0
          img(src='@/assets/curso/img64.svg', style="width: 350px").m-auto
      .col-lg-8
        p.mb-0 Se produce cuando un ser vivo es incapaz de respirar porque los pulmones que suministran aire al organismo están sumergidos en un líquido; se habla por inmersión cuando el líquido procede de un cuerpo de agua, río, lago, laguna o mar; también se puede presentar en una piscina, bañera o ponchera. El proceso de ahogamiento puede resultar en muerte, de no ser atendido oportuna y correctamente.
    .row.align-items-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        p.mb-4 Las manifestaciones son:
        ul.lista-ul.ms-5
          li 
            i.fas.fa-atom(style="color: #7E5EE3")
            p Pérdida de la conciencia.
          li 
            i.fas.fa-atom(style="color: #7E5EE3")
            p Cianosis.
          li 
            i.fas.fa-atom(style="color: #7E5EE3")
            p No respira o respira con dificultad.
        p.mb-0 Una de las primeras maniobras para realizar ante la identificación de un posible ahogamiento por inmersión, es sacar del cuerpo de agua a la persona ahogada; para hacerlo, el primer respondiente debe saber nadar y rescatar, puesto que corre el riesgo de ahogarse al tratar de auxiliar a la víctima. El rescate de una persona que se está ahogando y está consciente resulta muy peligroso para el rescatador; evitar que la víctima lo agarre en su desesperación por salir del agua y es prioritario mantenerse a flote porque podría hundirse con la víctima. Generalmente, cuando la víctima se siente auxiliada, deja de luchar porque se siente salvada, haciendo más difícil el rescate.
      .col-lg-6
        figure(data-aos="fade-right")
          img(src='@/assets/curso/img12.png', style="width: 450px").m-auto
    .row.justify-content-center.mb-5
      .col-6
        .cajon.color-primario.p-4
          p.mb-0 Si usted no sabe nadar, por favor absténgase de intentarlo; permita que alguien con experiencia extraiga a la persona del agua.
    .h4.mb-5 Procedimiento de primeros auxilios
    .row.justify-content-center
      .col-10
        ul.lista-ul--separador.ms-5
          li 
            i.fas.fa-atom(style="color: #7E5EE3")
            p Acostar a la persona bocabajo, con la cara hacia un lado. Verificar la presencia de algún cuerpo extraño en la boca de la persona.
          li 
            i.fas.fa-atom(style="color: #7E5EE3")
            p Poner las manos de la persona debajo de su cara para protegerla de lesiones.
          li 
            i.fas.fa-atom(style="color: #7E5EE3")
            p Procurar que la boca permanezca abierta.
          li 
            i.fas.fa-atom(style="color: #7E5EE3")
            p Hacer presión firme con ambas manos utilizando el peso del cuerpo, sobre la espalda de la persona para que arroje el agua.
          li 
            i.fas.fa-atom(style="color: #7E5EE3")
            p Repetir el procedimiento cuantas veces sea necesario.
          li 
            i.fas.fa-atom(style="color: #7E5EE3")
            p Poner a la persona en posición de seguridad y cubrirlo para que recupere el calor corporal.
          li 
            i.fas.fa-atom(style="color: #7E5EE3")
            p Esta persona debe ser valorada en una institución de salud.
      
</template>

<script>
export default {
  name: 'Tema5',
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
