export default {
  global: {
    componenteFormativo: '<em>Storyboard</em> y <em>animatic</em>',
    descripcionCurso:
      'El desarrollo audiovisual es un proceso estructurado que requiere planeación cuidadosa para lograr que la idea que se desea comunicar llegue adecuadamente al espectador, de ahí la importancia en conocer y apropiar conceptos esenciales de lenguaje audiovisual que potencien la narración de la historia y permitan desarrollar apropiadamente una propuesta gráfica mediante la creación de un <em>storyboard</em>, para así determinar si el planteamiento original se logra traducir adecuadamente a imágenes y por tanto, mantiene la esencia del mensaje.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
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
        titulo: 'Introducción al dibujo básico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Herramientas de dibujo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Bocetación',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Perspectiva',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Abstracción y líneas de acción',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Lenguaje audiovisual',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em>Storyboard</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Guion técnico',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Técnicas y formatos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Animatic',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Montaje',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Elevator pitch',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Aceituno, Marcelo (2010). Seminario de producción multimedia. Secretaría de Posgrado. Universidad Nacional de Quilmes. Bernal. ',
      link: 'http://libros.uvq.edu.ar/spm/42_lenguaje_audiovisual.html',
    },

    {
      referencia:
        'Bancroft, Tom (2012-2013). Character Mentor. Burlington, MA. EEUU: Focal Press. ',
    },
    {
      referencia:
        'Bartolomé, A. (1987). Análisis de la producción y aplicación de programas audiovisuales didácticos. Tesis doctoral. Barcelona: Universitat de Barcelona. ',
      link: 'http://hdl.handle.net/10803/2360',
    },

    {
      referencia: 'BPlans. Noah Parsons. ',
      link:
        'https://articles.bplans.com/the-7-key-components-of-a-perfect-elevator-pitch/',
    },

    {
      referencia:
        'Cámara, Sergi (2006). El dibujo animado. Barcelona, España: Parramón Ediciones, S.A.',
    },
    {
      referencia:
        'Dancyger, Ken, and Alvarez, José A. Traductor. Técnicas De Edición En Cine Y Video. Barcelona: Editorial Gedisa, 1999. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000079357',
    },

    {
      referencia:
        'Doucet, Ron, (2020). Drawing & Composition for visual storytelling. ',
      link: 'http://www.floobynooby.com/comp1.html#anchor',
    },

    {
      referencia:
        'Doyle, Alison (2019). How to Create an Elevator Pitch With Examples. The balance careers. ',
      link:
        'https://www.thebalancecareers.com/elevator-speech-examples-and-writing-tips-2061976',
    },

    {
      referencia:
        'Fernández, F. y Martínez, J. (1999). Manual básico de lenguaje audiovisual y narrativa audiovisual. Barcelona, ESPAÑA: Paidós.',
    },
    {
      referencia:
        'Maldonado, M. (2018). Animatic – El <em>Storyboard</em> de Hoy. Blog Industria Animación. ',
      link:
        'https://www.industriaanimacion.com/2018/06/animatic-storyboard-de-hoy/',
    },

    {
      referencia:
        'Manrique, Ana. Dibujo. 9a Edición. ed. Barcelona: Parramón Ediciones, 2008. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000062633',
    },

    {
      referencia: 'Marqués, P. Introducción al lenguaje audiovisual. (1995). ',
      link: 'http://www.peremarques.net/avmulti.htm',
    },

    {
      referencia:
        'Novasur, Consejo Nacional de Televisión (CNTV). (2019). Manual de producción audiovisual. ',
      link: 'https://fliphtml5.com/ojfbf/bapc/basic',
    },

    {
      referencia:
        'Simon, Mark (2007). <em>Storyboard</em> Motion in Art. Burlington, MA, EEUU: Focal Press.',
    },
  ],
  glosario: [
    {
      termino: 'Maqueta de sonido',
      significado:
        'Es un recurso de audio utilizado dentro de la construcción del Animatic, el cual contiene diálogos, música y en ocasiones efectos de sonido. En otras palabras, es el borrador del sonido que irá en el proyecto final. Entre mejor trabajada esté la maqueta, menor trabajo de ajustes se deberán hacer al final.',
    },
    {
      termino: 'Perpendicular',
      significado:
        'Es un concepto geométrico que hace referencia a la posición de un plano o línea con respecto a otro al momento en que se encuentran presentando la condición invariable de generar un ángulo de 90° entre sí.',
    },
    {
      termino: 'Punto de fuga',
      significado:
        'Es un punto que se ubica sobre la línea de horizonte y desde donde se proyectan líneas que permiten la representación de objetos en perspectiva.',
    },
  ],
  complementario: [
    {
      texto: 'Novasur y CNTV. (2019). Manual de producción audiovisual.',
      tipo: 'Artículo web',
      link: 'https://fliphtml5.com/ojfbf/bapc/basic',
    },

    {
      texto: 'aprendecine.com (2017). Salto de eje y eje de acción en el cine.',
      tipo: 'Web',
      link: 'https://aprendercine.com/salto-de-eje/',
    },

    {
      texto:
        'Doucet, Ron, (2020). Drawing & Composition for visual storytelling',
      tipo: 'Web',
      link: 'http://www.floobynooby.com/comp1.html#anchor',
    },

    {
      texto:
        'Ministerio de educación Argentina (2011), Medios audiovisuales, Animación en el aula.',
      tipo: 'PDF',
      descarga: '/downloads/animacion_web.pdf',
    },
    {
      texto:
        'Brad Bird on how to compose shots for <em>storyboards</em> Y layout artists',
      tipo: 'Web',
      link:
        'https://drive.google.com/drive/u/1/folders/12NE-22yrveZoKbQRJPj9xPJdj5EpL8xn',
    },
    {
      texto:
        'Jimenez, Oscar, (2017), Diseña tus personajes de animación con arte',
      tipo: 'Video',
      link: 'https://vimeo.com/91390586',
    },

    {
      texto:
        'TRNGL Entertainment (2020), Dolly Zoom (El efecto vértigo) | Curso de Cine',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hqcyg-g8_Ok&ab_channel=TRNGL',
    },

    {
      texto: 'La ciencia del Cine (2018), Planos y Movimientos de Cámara I',
      tipo: 'Video',
      linl: 'https://youtu.be/AN2I1CTn3rY',
    },

    {
      texto:
        'La ciencia del Cine (2019), Plano y Movimientos de Cámara II : Angulación.',
      tipo: 'Video',
      link: 'https://youtu.be/ILRjN0b30Pc',
    },

    {
      texto:
        'La ciencia del Cine (2020), Plano y Movimientos de Cámara III : Puntos de vista y movimientos.',
      tipo: 'Video',
      link: 'https://youtu.be/dBPjG2YipY4',
    },

    {
      texto:
        'La ciencia del Cine (2020), Elementos del cine: CONTINUIDAD + ERRORES en películas',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=ew5WzvL-fEk&ab_channel=LacienciadelCine',
    },

    {
      texto:
        'The Damn Beast (2020), Ritmo narrativo: ¿qué es y por qué es tan importante? | el laberinto #005.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YwJaz7tXq1Y',
    },

    {
      texto:
        'AprenderCine.com (2017), Salto de eje y eje de acción en el cine.	Artículo',
      tipo: 'web',
      link: 'https://aprendercine.com/salto-de-eje/',
    },

    {
      texto:
        'Toby Kearton (2016),Taxi Driver (1976) | Scene and <em>Storyboard</em> Comparison',
      tipo: 'Video',
      link: 'https://youtu.be/Ydl6wQnEQYg',
    },

    {
      texto:
        'Floobynooby (2020), Drawing & Composition for visual storytelling.',
      tipo: 'Web',
      link: 'http://www.floobynooby.com/comp1.html#anchor',
    },

    {
      texto: 'AllahOfw0ne (2006), "The untimely death of Pudge the fish".',
      tipo: 'Video',
      link: 'https://youtu.be/LxmT-zQc1GQ',
    },

    {
      texto:
        'Kevin Parry (2010), The Arctic Circle - <em>Storyboard</em> Comparison.',
      tipo: 'Video',
      link: 'https://vimeo.com/12153179',
    },

    {
      texto: 'Goat Zod (2019), Avengers 2 Age of Ultron Previs 2',
      tipo: 'Video',
      link: 'https://youtu.be/cG0DBZPRkTQ',
    },

    {
      texto:
        'Negocios y Empresa (2018, Cómo hacer un Elevator Pitch que enamore al Inversor.',
      tipo: 'Video',
      link: 'https://youtu.be/EsAkvzIoEvc',
    },

    {
      texto:
        'IurisdocTV, (2013), Elevator pitch. Tienes 20 segundos - eduCaixa',
      tipo: 'Video',
      link: 'https://youtu.be/2b3xG_YjgvI',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Alexander García',
        cargo: 'Experto temático',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Oscar Andrés Martin',
        cargo: 'Experto temático',
        centro:
          'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
      },
      {
        nombre: 'Oscar Absalón Guevara',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de Gestión Industrial – Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Evaluador Instruccional',
        centro: 'Centro de Diseño y Metrología – Regional Distrito Capital',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor Pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura – Regional Santander',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Correctora de estilo',
        centro:
          'Centro para la Industria y la Comunicación Gráfica – Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: ['Eulises Orduz Amezquita'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Villamizar Lizcano',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ricardo Alfonso González Vargas',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },

      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
