<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Storyboard

    .row.align-items-center.bg-color1.p-5.mb-5(data-aos="slide-right")
      .col-lg-12.mb-4.mb-lg-0
        figure.mb-5
          img.img-a(src='@/assets/curso/tema_3/img_1.png', alt='Texto que describa la imagen')
    
    .row.justify-content-center.mb-5(data-aos="slide-left")
      .col-lg-10.mb-4.mb-lg-0
        p El storyboard es un guion gráfico o premontaje del producto audiovisual que se quiere realizar. Está construido por una serie de planos dibujados o viñetas a manera de cómic, basados en el guion narrativo, donde se especifica principalmente el número de plano, secuencia, duración, diálogos, descripción de las acciones, y demás anotaciones necesarias para que todo el equipo de producción tenga claro qué es lo que se quiere en cada plano. (CÁMARA, 2006)

        p Es importante mencionar que para la realización de cada cuadro de         storyboard, es muy importante tener claros los conceptos del lenguaje audiovisual, con el fin de transmitir de la mejor manera lo que está planteado en el guion literario. Para esto, muchos realizan con antelación un guion técnico.
    
    separador
    .titulo-segundo(data-aos="flip-up")
      #t_3_1.h2 3.1 Guion técnico

    .cajon.color-acento-contenido.p-4.mb-5(data-aos="slide-right")
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          img.img-a(src='@/assets/curso/tema_3/img_2.png', alt='Texto que describa la imagen')
        .col-lg-8.mb-4.mb-lg-0
          p Al igual que el storyboard, no hay un formato único para desarrollarlo, más bien responde a las necesidades del producto audiovisual y al equipo de producción. En este documento, a partir del guion literario, se planean cada uno de los planos que compondrán las secuencias, describiendo el tipo de plano, ángulo, movimientos de cámara, sonidos, efectos especiales, diálogos y duración.

    .tabla-a.color-primario.mb-5(data-aos="slide-left") 
      table
        caption Nota: ejemplo de plano de guion técnico
        thead
          tr
            th Secuencia
            th Plano
            th(colspan= '2') Descripción
            th Ángulo
            th Lente
            th Diálogo
            th Sonido
            th Duración
            th Duración total
        tbody
          tr
            td.text-center 1
            td.text-center 1
            td(colspan= '2') Plano entero (FS). Leve Dolly in hacia el personaje. El personaje mira su reloj y se ve un poco preocupado.
            td.text-center Normal
            td.text-center 35 mm
            td.text-center Personaje 1 - ¿Qué habrá asado? Humm...
            td.text-center Música de tensión. Sonido de las manecillas del reloj.
            td.text-center 5"
            td.text-center 5"
          tr 
            td.text-center 1
            td.text-center 2
            td(colspan= '2') Plano medio (MS) de Stivy, el personaje se ve muy preocupado
            td.text-center Contrapicado
            td.text-center 50mm
            td.text-center --
            td.text-center Música de tensión
            td.text-center 3"
            td.text-center 8"

    .row.justify-content-center.mb-3(data-aos="flip-up")
      .col-lg-8
        p.text-center.mb-5
          strong El guion técnico puede ser complementado con otra columna denominada plano de planta, donde se describe de forma gráfica la ubicaciónde los personajes y la cámara, como se muestra a continuación:

    figure.mb-5(data-aos="flip-up")
      img.img-a(src='@/assets/curso/tema_3/img_3.png', alt='Texto que describa la imagen')
    .line01.mb-5

    .row.align-items-center.bg-color4.px-5(data-aos="flip-up")
      .col-lg-12.mb-4.mb-lg-0
        h3 Regla de los 180°

        p En la imagen anterior, adicional a un plano de planta, se puede visualizar una de las reglas más importantes al momento de componer planos cinematográficos: la regla de los 180°.

        p Esta regla dicta que existe una línea imaginaria denominada “eje de acción”, la cual se establece por la dirección de las miradas entre los personajes, o también por la dirección del movimiento de un personaje. Una vez dispuesta la cámara a un costado de la acción (ver imagen 2, cámara B), se tiene una referencia espacial de los personajes la cual se debe mantener, con el fin de no confundir al espectador o llegar a romper la continuidad espacial de la escena. Se ve que en la imagen 2, cámara A, B y C, los personajes siempre aparecen al costado izquierdo y derecho del encuadre respectivamente; no obstante, para la cámara D, se observa que la posición de los personajes se intercambió, y de ser estas 4 cámaras, planos de una misma escena, se caería en lo que se denomina “ruptura de eje”.

        p.mb-5 Esta regla, como todas en el lenguaje audiovisual, se puede romper, pero de manera consciente sabiendo que eso generará caos, confusión o desequilibrio. Para ampliar un poco este tema puede acceder al material complementario de estudio denominado AprenderCine.com (2017), Salto de eje y eje de acción en el cine.
        .line01.mb-5

        h3 Consideraciones previas

        p.mb-5 Para el desarrollo del guion técnico se deben tener presentes las unidades que permiten separar una acción de otra:

        .list.mb-3
          .list__item
            .list__item__bulletNumber5 
              span 1
          .list__txt.mt-2  
            p.mb-0 #[strong Secuencia]
            p Es una unidad narrativa e independiente que posee significado. Tiene su propio inicio, desarrollo y conclusión de una situación dramática. La secuencia puede desarrollarse en un escenario o en varios, así como también puede estar compuesto por una o varias escenas. Puede desarrollarse de manera lineal o narrarse por fragmentos y mezclarse con otras secuencias (NOVASUR).
        .list.mb-3
          .list__item
            .list__item__bulletNumber5 
              span 2
          .list__txt.mt-2  
            p.mb-0 #[strong Escena]
            p Unidad de acción que se delimita por el espacio y tiempo. Si la acción cambia de escenario o hay una alteración en el tiempo, es necesario un cambio de escena. Una escena puede estar compuesta por uno o varios planos.
        .list.mb-3
          .list__item
            .list__item__bulletNumber5 
              span 3
          .list__txt.mt-2  
            p.mb-0 #[strong Toma]
            p Lapso de tiempo desde que el director dice “acción” y se comienza a grabar, hasta el momento que dice “corten” y se detiene. En una grabación existen muchas tomas hasta que un plano salga como el director lo desea. Más adelante, la toma correcta es seleccionada y combinada por edición (montaje) (NOVASUR).

            p Usualmente en animación no hay tomas, dado que los planos que se animan se han planeado con rigor y no hay oportunidad, por tiempo y presupuesto, de hacer varias tomas para una misma acción narrativa.
        .list.mb-3
          .list__item
            .list__item__bulletNumber5 
              span 4
          .list__txt.mt-2  
            p.mb-0 #[strong Plano]
            p Unidad básica del lenguaje audiovisual con significado, donde se define la dimensión de los objetos dentro del encuadre.
      .line01.mb-5
    separador
    .titulo-segundo(data-aos="flip-up")
      #t_3_2.h2 3.2 Técnicas y formatos     

    .cajon.color-acento-contenido.p-4.mb-5(data-aos="slide-left") 
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          img.img-a(src='@/assets/curso/tema_3/img_5.png', alt='Texto que describa la imagen')
        .col-lg-8.mb-4.mb-lg-0
          p Para hacer un storyboard no hace falta ser un experto en el dibujo, dado que existen otras alternativas para el desarrollo del mismo. Si bien es cierto que el dibujo es el estándar de la industria y el más usado por su versatilidad y agilidad, se pueden encontrar técnicas como el uso de fotografías, dibujar sobre una imagen de referencia o incluso el uso de software gratuito.
          p.mb-0 Los cuadros de storyboard no pretenden ser obras de arte, sino que más bien pueden ser bocetos rápidos que logran plasmar adecuadamente las ideas del director, preferiblemente mientras que este las está comunicando al equipo.

    .row.align-items-center.mb-5(data-aos="slide-right") 
      .col-lg-8.mb-4.mb-lg-0
        p Dado que con seguridad muchos de los cuadros se corregirán o se cambiarán completamente según las necesidades narrativas, no vale la pena detallarlos en una primera instancia. Un ejemplo perfecto de esto es el storyboard de la película Taxi Driver (1976) del director Martin Scorsese y el cual puede visualizarlo desde el material complementario.
        p Otra opción es el uso de fotografías propias o algunos fotogramas de películas. Estas imágenes también pueden ser usadas como una base y posteriormente dibujar sobre ellas, dado que una de las principales dificultades al desarrollar un storyboard es la capacidad de traducir lo que establece el guion técnico a una viñeta.
        p Por otra parte, es posible usar software gratuitos como 
          a(href="https://www.storyboardthat.com/" target="_blank").link-color storyboardthat. 
          | #[strong Sin embargo, esta opción no es la más profesional y aconsejable], dado que se limita a las opciones dadas por el programa y no siempre responde a las ideas del director, ni al estilo visual del proyecto.
      .col-lg-4.mb-4.mb-lg-0
          img.img-a(src='@/assets/curso/tema_3/img_6.png', alt='Texto que describa la imagen')
    .line01.mb-5

    .row.align-items-center.bg-color4.px-5
      .col-lg-12.mb-4.mb-lg-0
        h3.mb-5 Proceso 

        p.mb-5 El nivel de acabado de un storyboard responde directamente al tipo de producto audiovisual y las necesidades del cliente o del director. Usualmente en publicidad se busca que las viñetas tengan una gran calidad, destacando siempre el producto, pero se cuenta con tiempos cortos de ejecución; mientras que en largometrajes se dispone de gran presupuesto y tiempo, buscando ser muy certeros en cada plano, dejando indicaciones adicionales de movimientos de cámara, entradas y salidas de personajes, incidencia de la luz, etc. Por ende, se sugiere a continuación las fases de desarrollo de un storyboard genérico:

        .list.mb-3(data-aos="slide-right") 
          .list__item
            .list__item__bulletNumber5 
              span 1
          .list__txt.mt-2  
            p.mb-0 #[strong Visión del director]
            p En esta fase se debe leer detenidamente el guion literario y el guion técnico (si existe) de toda la producción. El director suele reunirse con el equipo de producción o el artista de storyboard, con el fin de transmitir sus ideas, referentes e inspiración. Es el momento ideal para tener papel y lápiz y tomar nota.

        .list.mb-3(data-aos="slide-left") 
          .list__item
            .list__item__bulletNumber5 
              span 2
          .list__txt.mt-2  
            p.mb-0 #[strong Thumbnails]
            p Son pequeños bocetos rápidos que ayudan a tener un primer acercamiento a lo que será el storyboard. No se pierde el tiempo en detalles, se piensa más en el tipo de plano, ángulo y el ritmo.

        .list.mb-3(data-aos="slide-right") 
          .list__item
            .list__item__bulletNumber5 
              span 3
          .list__txt.mt-2  
            p.mb-0 #[strong Rough]
            p Tras la presentación de los thumbnails al director y anotar las correcciones, se procede a una siguiente versión más trabajada del storyboard, posiblemente haciendo uso de un formato en limpio. Se invierte tiempo en la puesta en escena (staging) de cada plano, así como también en plasmar líneas de acción y siluetas claras. Aún en esta etapa hay posibilidades de cambios por parte del director.

        .list.mb-3(data-aos="slide-left") 
          .list__item
            .list__item__bulletNumber5 
              span 4
          .list__txt.mt-2  
            p.mb-0 #[strong Clean]
            p El director ha aprobado cada viñeta y se procede a entintar y dar color. En este punto suele digitalizarse el storyboard, con el fin de usarlo en la construcción del animatic. No es estrictamente necesario llegar hasta esta fase en todos los proyectos audiovisuales. Es muy útil para producciones que son realizadas en diferentes estudios y el director no está disponible todo el tiempo para aclarar dudas.
      .line01.mb-3
      h3(data-aos="flip-up") Formatos

      p.mb-5(data-aos="flip-up") Como se mencionó anteriormente, no existe un formato universal para el desarrollo del storyboard, sin embargo, resulta útil tener una guía como se presenta a continuación:

      img.img-a.mb-5(data-aos="flip-up")(src='@/assets/curso/tema_3/img_7.png', alt='Texto que describa la imagen')

      p.mb-5(data-aos="flip-up") El formato presentado nos brinda la posibilidad de recortar cada viñeta y pegarlas sobre un tablero y así facilitar su corrección y lectura. Esto, en el caso de un proyecto donde todo el equipo se encuentra en un mismo lugar. Si este no es el caso, lo mejor será digitalizar cada cuadro y ordenarlo en un documento en la nube. 

      .row.justify-content-center.mb-5
        .col-lg-7
          a.anexo.mb-5.mb-lg-4(data-aos="slide-right")(href="http://www.floobynooby.com/comp1.html#anchor" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p #[strong Recurso Web.] Floobynooby (2020), Drawing & Composition for visual storytelling.

          a.anexo.mb-4(data-aos="slide-left")(:href="obtenerLink('/downloads/animacion_web.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p #[strong Material complementario]. Ministerio de educación Argentina (2011), medios audiovisuales, animación en el aula acerca del guion y el storyboard.


    separador
    .titulo-segundo(data-aos="flip-up")
      #t_3_3.h2 3.3 #[i Animatic]

    p.mb-5(data-aos="slide-left") También conocido como story reel, el animatic o animática en español, es una composición audiovisual, donde se mezclan todas las secuencias de viñetas del storyboard junto con la maqueta de sonido. Es la mejor forma de ver cómo quedará el proyecto al final antes de entrar a la etapa de producción. Todos los cortes y transiciones son mostrados y cada dibujo se monta con cierta duración en el tiempo. Todo lo anterior permite a los directores y editores corregir la narrativa, sugerir nuevos planos y lograr una duración apropiada (Doucet, 2020).

    .row.align-items-center.bg-color3.p-5.mb-5(data-aos="slide-right")
      .col-lg-12.mb-4.mb-lg-0
        figure
          img.img-a(src='@/assets/curso/tema_3/img_9.png', alt='Texto que describa la imagen')
    
    p(data-aos="slide-left")  El #[i animatic] puede ser tan simple como un video editado de cada uno de los cuadros estáticos que vienen del storyboard, o tan complejos como unas secuencias de animación básicas de las acciones. Es por esto último, que en ocasiones el término #[i animatic] se acuña dentro del término “previsualización” (Previz). No obstante, una Previz se ha convertido en la siguiente etapa o evolución del #[i animatic], agregando movimientos de cámara en 3D y brindando información técnica a todo el equipo de grabación.

    p.mb-5(data-aos="slide-right")  Los #[i animatic] simples toman directamente los dibujos del storyboard para digitalizarlos mediante un escáner o una fotografía. Cada viñeta puede ser editada junto con el tiempo del audio. Por otra parte, los #[i animatic] complejos pueden ser pensados como un storyboard que tienen piezas móviles (Simon, 2007). Se usan las ilustraciones de la viñeta y se le agregan pequeños sistemas de manipulación que permiten hacer animaciones sencillas, similares a la técnica cut-out del stop-motion. En otros casos, se pueden sumar más poses de los personajes con el fin de mostrar mayor fluidez y claridad de las acciones y expresiones que tendrán los personajes o los objetos dentro de la escena. Lo mejor es ver algunos propuestos desde el material complementario.

    .row.justify-content-center.mb-5
        .col-lg-7
          a.anexo.mb-5.mb-lg-4(data-aos="flip-up")(href="https://www.youtube.com/embed/LxmT-zQc1GQ" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p #[strong Ejemplo].  #[i Animatic] Sencillo - AllahOfw0ne (2006), #[i "The untimely death of Pudge the fish"].

          a.anexo.mb-5.mb-lg-4(data-aos="flip-up")(href="https://vimeo.com/12153179" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p #[strong Ejemplo].  #[i Animatic]  fiel - Kevin Parry (2010), #[i The Arctic Circle - Storyboard Comparison].

          a.anexo.mb-5.mb-lg-4(data-aos="flip-up")(href="https://www.youtube.com/embed/cG0DBZPRkTQ" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p #[strong Ejemplo]. #[i Animatic] avanzado - Goat Zod (2019), Avengers 2 Age of Ultron Previs 2.


</template>

<script>
export default {
  name: 'Tema3',
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
