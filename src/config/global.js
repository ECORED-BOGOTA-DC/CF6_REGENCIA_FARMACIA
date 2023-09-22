export default {
  global: {
    componenteFormativo: 'Atención al lesionado o con enfermedad súbita',
    descripcionCurso:
      'Se abordan los conocimientos de la asistencia como primer respondiente, para identificar oportunamente los signos y síntomas de una persona con enfermedad súbita o con lesiones posteriores a un suceso o evento traumático o accidental y brindar los primeros auxilios según protocolos de atención del primer respondiente, evitando complicaciones o secuelas, en cualquier contexto que exista el riesgo o evento.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptos básicos de anatomía y fisiología',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Sistema cardiovascular',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Sistema respiratorio',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Sistema nervioso',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Aparato locomotor',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Sistema digestivo',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Salud mental',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Signos vitales por grupos etarios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Bioseguridad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Valoración de la escena',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Valoración primaria',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Valoración secundaria examen físico céfalo-caudal',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Soporte vital básico por grupos etarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Reanimación cardiopulmonar básica RCP',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo:
              'Protocolo de OVACE (Obstrucción de vía aérea por cuerpo extraño)',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Ahogamiento por inmersión',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Primeros auxilios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Entrega del paciente al equipo de atención prehospitalaria',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/material.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Conceptos básicos de anatomía y fisiología',
      referencia:
        'Nielsen, M. y Miller, S. (2012). <i>Atlas de anatomía.</i> Editorial Panamericana. ',
      tipo: 'Libro',
      link:
        'https://login.bdigital.sena.edu.co/login?url=https://www.medicapanamericana.com/VisorEbookV2/Ebook/9788498355901?token=adc56dbb-e0c3-4b6a-b06b-4eedd9fe00d0#{%22Pagina%22:%22IV%22,%22Vista%22:%22Indice%22,%22Busqueda%22:%22%22}',
    },
    {
      tema: 'Conceptos básicos de anatomía y fisiología',
      referencia:
        'Nutrimente. (2019). <i>Niveles de organización de la materia y los seres vivos.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=mHpqQ7mZSvY',
    },
    {
      tema: 'Sistema cardiovascular',
      referencia:
        'Cuaderno de ciencias. (2019). <i>Circulación menor y mayor.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rAXPO2FeRDY',
    },
    {
      tema: 'Sistema nervioso',
      referencia:
        'Smile and Learn – Español. (2018). <i>El sistema nervioso – El cuerpo humano para niños.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-_GXk4HZML4',
    },
    {
      tema: 'Aparato locomotor',
      referencia:
        'Visiblebody.com. (2021). <i>Diez datos sobre el esqueleto: reseña general del sistema esquelético.</i> Visible body.',
      tipo: 'Página web',
      link:
        'https://www.visiblebody.com/es/learn/skeleton/overview-of-skeleton',
    },
    {
      tema: 'Sistema digestivo',
      referencia:
        'Doc Camino Tene. (2014). <i>Sistema digestivo - Proceso de digestión.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=R-NbLe_81-E',
    },
    {
      tema: 'Reanimación cardio-pulmonar básica RCP',
      referencia:
        'Galarreta, M. (2018). <i>Enferpedia. Técnicas y procedimientos de enfermería.</i> Editorial Médica Panamericana.',
      tipo: 'Libro',
      link:
        'https://login.bdigital.sena.edu.co/login?url=https://www.medicapanamericana.com/VisorEbookV2/Ebook/9788491102410?token=f4ce7507-00de-4ce1-8190-7a9676f9e00a#{%22Pagina%22:%22III%22,%22Vista%22:%22Indice%22,%22Busqueda%22:%22%22}',
    },
    {
      tema: 'Reanimación cardio-pulmonar básica RCP',
      referencia:
        'Fundación Mapfre. (s.f.). <i>Posición lateral de seguridad.</i> Fundación Mapfre.',
      tipo: 'PDF',
      link:
        'https://documentacion.fundacionmapfre.org/documentacion/publico/i18n/catalogo_imagenes/imagen.cmd?path=1103489&posicion=7&registrardownload=1',
    },
    {
      tema: 'Ahogamiento por inmersión',
      referencia:
        'Martínez, N. (2011). <i>Ahogamiento o asfixia por inmersión. Primeros auxilios.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=2utp_W3e1ec',
    },
  ],
  glosario: [
    {
      termino: 'Broncoaspiración',
      significado:
        'su traducción literal es mapa de inspiración y aunque su uso está muy asociado al ámbito de la decoración de interiores o la moda, <br/>realmente se utiliza en entornos creativos muy diversos, desde el diseño de productos o servicios al audiovisual o el diseño gráfico.',
    },
    {
      termino: 'Bursa',
      significado:
        'sacos llenos de líquido que ayudan a amortiguar la fricción en una articulación. Se encuentran principalmente entre los huesos, ligamentos u otras estructuras adyacentes.',
    },
    {
      termino: 'Cartílago',
      significado:
        'tejido conectivo de sostén constituido por condrocitos y fibras colágenas, en forma de matriz elástica. El cartílago es un tipo de tejido que no tiene vasos sanguíneos ni linfáticos ni tampoco nervios.',
    },
    {
      termino: 'Cianosis',
      significado:
        'coloración azulada o violácea, en la piel alrededor de los labios.',
    },
    {
      termino: 'Disnea',
      significado: 'dificultad para respirar por enfermedad respiratoria.',
    },
    {
      termino: 'Emesis',
      significado: 'vómito.',
    },
    {
      termino: 'Equimosis',
      significado:
        'coloración violácea de la piel producida por la infiltración de sangre en los tejidos subcutáneos debido la rotura de vasos capilares. Esta coloración puede variar con el tiempo, pasando por diferentes tonos desde el morado hasta el amarillo-verdoso. Generalmente no duelen, tienen un diámetro menor a 5 mm y desaparecen en el término de 10 a 12 días.',
    },
    {
      termino: 'Hematomas',
      significado:
        'colección de sangre en el tejido celular subcutáneo ocasionado por un golpe, con un diámetro mayor a 5 mm, puede presentar edema y dolor intenso. Su coloración es violácea, que se va tornando marrón y amarillo-verdoso. Su resolución puede tardar de 2 a 3 semanas.',
    },
    {
      termino: 'Homeostasis',
      significado:
        'conjunto de mecanismos que permiten mantener el equilibrio en la composición del medio interno de un organismo, es decir, que facilitan que el medio interno se mantenga relativamente constante, lo cual es necesario para el normal funcionamiento celular.',
    },
    {
      termino: 'Líquido sinovial',
      significado:
        'fluido claro y pegajoso secretado por la membrana sinovial.',
    },
    {
      termino: 'Ligamentos',
      significado:
        'bandas duras y elásticas de tejido conjuntivo que rodean la articulación para dar soporte y limitar el movimiento de la articulación. Los ligamentos conectan los huesos entre sí.',
    },
    {
      termino: 'Menisco',
      significado:
        'disco de fibrocartílago que se interpone entre dos superficies articulares para aumentar su congruencia y amortiguación. Los más conocidos son los de la rodilla (medial y lateral), que con una relativa frecuencia sufren desgarros, especialmente el interno. Permiten que la superficie ósea se adapte a la articulación, facilitando su movimiento.',
    },
    {
      termino: 'Tendones',
      significado:
        'tejido conjuntivo resistente que conecta los músculos a los huesos, controlando el movimiento de la articulación.',
    },
    {
      termino: 'Triage',
      significado:
        'sistema de selección y clasificación de pacientes en la escena o sitio del evento traumático, basado en sus necesidades terapéuticas y los recursos disponibles para la atención.',
    },
  ],
  referencias: [
    {
      referencia:
        'American Heart Association. (2020). Aspectos destacados de las Guías para RCP y ACE. American Heart Association.',
    },
    {
      referencia:
        'Ayuso, B., F. (2011). La hora de oro: prioridades de los servicios asistenciales. [Presentación]. Simposium Internacional: Actualización en el Manejo del Paciente Traumatizado Grave en Urgencias y Emergencias. Sevilla, España, 11-14 mayo.',
    },
    {
      referencia:
        'Cohen, R., y Ahearn, F., L. (1989). Manual de la atención de salud mental para víctimas de desastres. OMS.',
    },
    {
      referencia:
        'Congreso de la Republica de Colombia. (21 de enero de 2013). Ley 1616, por medio de la cual se expide la Ley de Salud Mental y se dictan otras disposiciones.',
      link:
        'https://www.defensoria.gov.co/public/Normograma%202013_html/Normas/Ley_1616_2013.pdf',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2009). Manual de primeros auxilios emocionales. Ministerio de la Protección Social.',
    },
    {
      referencia:
        'NAEMT. (2018). Pre Hospital Trauma Life Suport PHTLS - Edición en español. 9 edición. NAEMT.',
      link: 'https://encolombia.com/medicina/guiasmed/guia-hospitalaria/',
    },
    {
      referencia: 'OMS. (2018). Salud mental: fortalecer nuestra respuesta.',
      link:
        'https://www.who.int/es/news-room/fact-sheets/detail/mental-health-strengthening-our-response',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2012). Primera ayuda psicológica: Guía para trabajadores de campo.',
      link:
        'http://apps.who.int/iris/bitstream/10665/44837/1/9789243548203_spa.pdf',
    },
    {
      referencia:
        'Visiblebody.com. (2021). Introducción visual a la anatomía humana.',
      link: 'https://www.visiblebody.com/es/learn/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Emilia Sarmiento Mora',
          cargo: 'Profesional experta temática',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo:
            'Diseñadora instruccional - Revisora metodológica y pedagógica',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Revisión y corrección de estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Gloria Amparo López Escudero',
          cargo: 'Adecuación instruccional - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jesús Antonio Vecino Valero',
          cargo: 'Diseño web - 2023',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollo fullstack - 2023',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo:
            'Validación de recursos educativos digitales y vinculación al LMS',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
