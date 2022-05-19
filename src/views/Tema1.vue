<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Introducción al dibujo básico

    .row.align-items-center.px-5(data-aos="flip-up")
      .col-lg-12.mb-4.mb-lg-0
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema_1/img_1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p El dibujo es una forma expresión humana y una de las más efectivas, ya que bien ejecutado es capaz de superar incluso la barrera del idioma, tanto así que algunos se han constituido en símbolos que son mundialmente utilizados para representar conceptos específicos; por ejemplo, la señal de prohibido o las figuras de hombre y mujer que se ponen en la entrada de los baños públicos.
            br
            br
            p.mb-0 En su definición más básica, el dibujo es el arte de representar objetos mediante el uso de líneas sobre una superficie, y es una de las formas más sencillas de representación gráfica.

    p.mb-5(data-aos="flip-up") Actualmente, las técnicas de dibujo se dividen en dos grandes ramas definidas principalmente por la naturaleza de las herramientas usadas y estas son las técnicas análogas y las digitales. Las técnicas análogas hacen referencia a todas aquellas que hacen uso de instrumentos o herramientas tradicionales como lo son el lápiz y el papel principalmente, aunque no se restringen solo a estos 2, mientras que las digitales hacen uso de computadores y una amplia gama de herramientas tanto de #[i hardware] como de #[i software].

    .row.align-items-center.bg-color1.p-5(data-aos="slide-right")
      .col-lg-12.mb-4.mb-lg-0
        figure.mb-5
          img.img-a(src='@/assets/curso/tema_1/img_2.png', alt='Texto que describa la imagen')

        p.mb-0 A su vez dentro de estas 2 ramas existen un gran abanico de categorías, las cuales se definen principalmente por el tipo de materiales que se emplean para realizarlas; por ejemplo, técnicas secas o aguadas dentro de las análogas o técnicas vectoriales o mapas de bits para el caso de las digitales. Sin embargo, al ser la intención de este documento hacer una introducción básica se abordarán una serie de conceptos útiles para realizar una representación gráfica de ideas simple y efectiva orientada a la realización de #[i storyboard].

    separador
    .titulo-segundo(data-aos="flip-up")
      #t_1_1.h2 1.1 Herramientas de dibujo

    p.mb-5(data-aos="flip-up") Para dibujar existen muchos instrumentos, utensilios y herramientas, a continuación, se da una breve descripción de algunos de los más utilizados clasificados según su uso:

    .row.align-items-center.bg-color2.p-5(data-aos="slide-left")
      .col-lg-12.mb-4.mb-lg-0
        figure.mb-5
          img.img-a(src='@/assets/curso/tema_1/img_5.png', alt='Texto que describa la imagen')

    .row.justify-content-center.mb-5(data-aos="slide-right")
      .col-lg-12
        LineaTiempoD.color-secundario
          .row.color_lin(numero="A" titulo="Lápices y portaminas")
            p El lápiz es un instrumento para dibujo o escritura que consiste habitualmente en una barra (conocida también como mina) compuesta de una mezcla de grafito y arcilla o cera encapsulada en un cilindro de madera (actualmente se usan muchos otros materiales como plástico, papel, etc.) que le da soporte a la mina, también son fabricados de colores mediante el uso de diferentes pigmentos, pero para dibujo el más usado suele ser el lápiz de grafito.

            p.mb-5 Los lápices de grafito se marcan con letras y números según la composición de la mina usando la H (del inglés Hard) para las minas duras y la B (del inglés Back) para las minas blandas, entre más dura sea la mina más claro será el trazo dejado por el lápiz y en contraposición, entre más blanda sea la mina más oscuro será el trazo debido a que así el lápiz deja sobre el soporte mayor cantidad de grafito.

            figure.mb-5
              img.img-a(src='@/assets/curso/tema_1/img_6.png', alt='Texto que describa la imagen')

            p El portaminas es otro instrumento de dibujo análogo al lápiz con la diferencia de que tiene un sistema mecánico para proveer las minas, las cuales se pueden reemplazar una vez se acaban.
          .row(numero="B" titulo="Bolígrafos y plumas")
            p.mb-5 Son instrumentos de escritura que cuentan con sistemas mecánicos para dosificar tinta. Aunque principalmente son usados para escribir es común que algunos artistas los usen para dibujar.

            figure
              img.img-a(src='@/assets/curso/tema_1/img_7.png', alt='Texto que describa la imagen')
          .row(numero="C" titulo="Sacapuntas y bisturí")
            p.mb-5 Los sacapuntas son utensilios usados para desbastar el recubrimiento de madera de los lápices a medida que se va desgastando la mina, existen muchos modelos de sacapuntas, pero su finalidad es la misma, también es común hacer uso de cuchillas como los bisturi para hacer el desbaste de la madera y afilar las puntas de las minas a medida que se desgastan.
            figure
              img.img-a(src='@/assets/curso/tema_1/img_8.png', alt='Texto que describa la imagen')
          .row(numero="D" titulo="Papeles")
            p El papel es un material obtenido del procesamiento de fibras vegetales de las que se obtiene pulpa de celulosa mediante métodos de molienda, la cual es procesada y prensada para obtener láminas delgadas de características variables según el proceso que se les aplique.
            p.mb-5 Existen diferentes tipos de papel destinados a variedad de aplicaciones, aunque en principio todos sirven para dibujar, entre los más comunes y fáciles de conseguir se encuentra el papel #[i bond] de 75 gramos que regularmente es de uso de oficina, sin embargo, en casi cualquier papelería o tienda de implementos de arte se consiguen más variedades.
            figure
              img.img-a(src='@/assets/curso/tema_1/img_9.png', alt='Texto que describa la imagen')
          .row(numero="E" titulo="Gomas de borrar")
            p.mb-5 Son instrumentos diseñados para eliminar trazos de lápiz y de algunas tintas borrables, hay de consistencia rígida, aunque con algo de flexibilidad y algunas maleables como la goma limpia tipos.
            figure
              img.img-a(src='@/assets/curso/tema_1/img_10.png', alt='Texto que describa la imagen')

    .row.align-items-center.bg-color2.p-5(data-aos="slide-right")
      .col-lg-12.mb-4.mb-lg-0
        figure.mb-5
          img.img-a(src='@/assets/curso/tema_1/img_11.png', alt='Texto que describa la imagen')

    h3(data-aos="flip-up") #[i Hardware]
    p.mb-5(data-aos="flip-up") Actualmente existen muchas alternativas de equipos de cómputo y periféricos útiles para desarrollar ilustraciones que van desde los teléfonos móviles, hasta computadores de escritorio pasando por computadores y portátiles, #[i tablets] y otros periféricos especializados en la ilustración digital 2D y 3D.

    .row.justify-content-center.mb-5(data-aos="slide-right")
      .col-lg-12
        LineaTiempoD.color-secundario
          .row(numero="A" titulo="Teléfonos móviles")
            p.mb-5 Actualmente la capacidad de cómputo de los teléfonos móviles supera con creces la poseída por los computadores de escritorio de finales de los 90, especialmente los que encajan en la categoría de #[i Smartphone], ya que en su mayoría poseen una pantalla táctil de suficiente tamaño que brinda la posibilidad de dibujar sobre ella como si se tratara de una libreta de bolsillo digital, gracias a esta característica y las diferentes aplicaciones y algunos utensilios como los stylus (este último no es indispensable) los #[i smartphones] se convierten en una alternativa al alcance de la mayoría de personas para realizar dibujos digitales. 

            figure
              img.img-a(src='@/assets/curso/tema_1/img_12.png', alt='Texto que describa la imagen')
          .row(numero="B" titulo="<em>Tablets</em>")
            p Son dispositivos con grandes pantallas táctiles, habitualmente mayores a 7” y que funcionan generalmente bajo los mismos sistemas operativos que los #[i Smartphones], como lo son android, iOs y en algunos casos Windows, gracias a esto la mayoría de aplicaciones disponibles para teléfonos móviles están disponibles también para las #[i tablets] y dado su tamaño de pantalla son una alternativa más cómoda para dibujar que un #[i smartphone].

            p.mb-5 El dispositivo más usado de esta categoría por artistas dedicados a la ilustración sin lugar a dudas es el iPad de Apple, sin embargo, en el mercado existen muchas otras alternativas con funcionalidades iguales o similares en un amplio rango de precios.

            figure
              img.img-a(src='@/assets/curso/tema_1/img_13.png', alt='Texto que describa la imagen')

          .row(numero="C" titulo="Computadores")
            p Los computadores son la alternativa más utilizada en cuanto a trabajo profesional se refiere, principalmente por las posibilidades de personalización según las necesidades y porque ofrecen más capacidad de cómputo que alternativas como móviles o #[i tablets] y por tanto son capaces de ejecutar aplicaciones más potentes para ilustración.

            p.mb-5 Existen en 2 grandes categorías que son equipos de escritorio y equipos portátiles diferenciándose principalmente por su volumen y peso lo que hace que el equipo deba ser usado en una estación fija para el caso de los equipos de escritorio o tenga la posibilidad de ser transportado con libertad para el caso de los portátiles (conocidos también como #[i laptops]).

            figure
              img.img-a(src='@/assets/curso/tema_1/img_14.png', alt='Texto que describa la imagen')

          .row(numero="D" titulo="Tabletas gráficas")
            p Las tabletas gráficas son un periférico de entrada que se conecta a un computador de escritorio o portátil, e incluso algunos modelos actuales permiten conexión con #[i smartphones] compatibles, constan de una superficie plana sobre la cual se interactúa por medio de un lápiz que es capaz de detectar la posición, contacto, presión y en ocasiones inclinación para transferir esa información al trazo representado en pantalla.

            p.mb-5 Las hay de muchas marcas, modelos y precios siendo los fabricantes especializados más conocidos Wacom, Xp Pen y Huion, existen otros fabricantes, pero por presencia en el mercado los modelos de estos tres fabricantes son los más sencillos de encontrar en la región de Latinoamérica.

            figure
              img.img-a(src='@/assets/curso/tema_1/img_15.png', alt='Texto que describa la imagen')
          .row(numero="E" titulo="Pantallas gráficas")
            p En esencia tienen el mismo funcionamiento que una tableta gráfica, salvo que la superficie sobre la cual se interactúa con el lápiz funciona también como monitor, razón por la cual la experiencia de uso es más natural, pero en contraposición su costo es más elevado.

            p.mb-5 Al igual que con las tabletas gráficas, las marcas de dispositivos más fáciles de encontrar en la región son Wacom, Xp Pen y Huion.

            figure
              img.img-a(src='@/assets/curso/tema_1/img_16.png', alt='Texto que describa la imagen')

    h3(data-aos="flip-up") #[i Software]

    p(data-aos="flip-up") El #[i software] es el conjunto de instrucciones (Programas) que permiten la utilización de los equipos de cómputo, el principal es el sistema operativo el cual cumple la función de ser base para la operación del equipo y de otros programas. Las plataformas más populares actualmente para ordenadores de escritorio y portátiles son Windows, macOS y Linux en sus diversas distribuciones y iOS y Android para dispositivos móviles, lo que ocasiona que la mayoría de aplicaciones para dibujo se centren en estos sistemas operativos.

    p.mb-5(data-aos="flip-up") A continuación, se listan algunas de las aplicaciones más populares gratuitas y de pago para las distintas plataformas.

    .row.justify-content-center.align-items-stretch.mb-3(data-aos="flip-up")
      .col-lg-3.mb-4.mb-lg-0.tarjeta--boton.color-acento-contenido.p-4.bor_tar
        a(href="https://support.microsoft.com/es-es/windows/obtener-microsoft-paint-a6b9578c-ed1c-5b09-0699-4ed8115f9aa9" target="_blank")
          
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-3
                img.img-a(src='@/assets/curso/tema_1/img_17.png', alt='Texto que describa la imagen')

          h4.text-center Paint
          p.mb-0 Es un programa básico de dibujo, viene integrado con Windows y aunque no se suele usar a nivel profesional es una buena alternativa para empezar a explorar.
      .col-lg-3.mb-4.mb-lg-0.tarjeta--boton.color-acento-contenido.p-4.bor_tar
        a(href="https://krita.org/en/" target="_blank")
          
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-3
                img.img-a(src='@/assets/curso/tema_1/img_18.png', alt='Texto que describa la imagen')

          h4.text-center Krita
          p.mb-0 Es un programa de pintura digital gratuito y #[i open source] muy potente lo que lo hace uno de los más populares y por tanto es muy fácil encontrar tutoriales sobre él, está disponible para Windows, macOS y Linux.
      .col-lg-3.mb-4.mb-lg-0.tarjeta--boton.color-acento-contenido.p-4.bor_tar
        a(href="https://inkscape.org/" target="_blank")
          
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-3
                img.img-a(src='@/assets/curso/tema_1/img_19.png', alt='Texto que  describa la imagen')

          h4.text-center Inkscape 
          p.mb-0 Es un editor de gráficos vectoriales gratuito y #[i open source] disponible para plataformas Linux, Windows y macOS.
      .col-lg-3.mb-4.mb-lg-0.tarjeta--boton.color-acento-contenido.p-4.bor_tar
        a(href="https://www.sketchbook.com/" target="_blank")
          
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-3
                img.img-a(src='@/assets/curso/tema_1/img_20.png', alt='Texto que  describa la imagen')

            h4.text-center Autodesk Sketchbook 
            p.mb-0 Es el programa de dibujo de Autodesk y literalmente traduce libreta de bocetos, es de los programas más sencillos y fáciles de aprender, pero potentes para ilustración, está disponible para Windows, macOS, iOS y Android y actualmente es de uso gratuito.

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-3.mb-4.mb-lg-0.tarjeta--boton.color-acento-contenido.p-4.bor_tar
        a(href="https://www.gimp.org/" target="_blank")
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-3
                img.img-a(src='@/assets/curso/tema_1/img_21.png', alt='Texto que describa la imagen')

            h4.text-center Gimp
            p.mb-0 Es la alternativa gratuita y #[i open source] a Photoshop por excelencia, y de las opciones más potentes para edición de fotografías, está disponible para Linux, Windows y macOs.
      .col-lg-3.mb-4.mb-lg-0.tarjeta--boton.color-acento-contenido.p-4.bor_tar
        a(href="https://magmastudio.io/" target="_blank")
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-3
                img.img-a(src='@/assets/curso/tema_1/img_22.png', alt='Texto que describa la imagen')

            h4.text-center Magmastudio
            p.mb-0 Es una plataforma de uso web que permite la participación de varios autores a la vez en la creación de imágenes, tiene alternativas gratuitas y de pago y se puede acceder a él desde un explorador web como Chrome, Firefox o Edge
      .col-lg-3.mb-4.mb-lg-0.tarjeta--boton.color-acento-contenido.p-4.bor_tar
        a(href="https://www.adobe.com/products/photoshop.html" target="_blank")
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-3
                img.img-a(src='@/assets/curso/tema_1/img_23.png', alt='Texto que  describa la imagen')

            h4.text-center Adobe Photoshop
            p.mb-0 Es uno de los programas más conocidos del mundo de la casa Adobe, aunque inicialmente era para edición fotográfica se ha vuelto muy popular para ilustración digital, es de pago por suscripción con versión de prueba por 30 días y está disponible para Windows y macOS.
      .col-lg-3.mb-4.mb-lg-0.tarjeta--boton.color-acento-contenido.p-4.bor_tar
        a(href="https://www.adobe.com/products/illustrator.html" target="_blank")
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-3
                img.img-a(src='@/assets/curso/tema_1/img_24.png', alt='Texto que  describa la imagen')

            h4.text-center Adobe Illustrator
            p.mb-0 Es un programa de diseño vectorial de la casa Adobe es de pago por suscripción con versión de prueba por 30 días y está disponible para Windows y macOS.

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-3.mb-4.mb-lg-0.tarjeta--boton.color-acento-contenido.p-4.bor_tar
        a(href="https://www.clipstudio.net/es/" target="_blank")
          img.img-a(src='@/assets/curso/tema_1/img_25.png', alt='Texto que describa la imagen')

          h4.mt-3.text-center Clip Studio Paint
          p.mb-0 Antiguamente Manga Studio es un programa de pago para ilustración digital, está disponible para Windows, macOS y iOS y tiene una versión de prueba de 30 días.
      .col-lg-3.mb-4.mb-lg-0.tarjeta--boton.color-acento-contenido.p-4.bor_tar
        a(href="https://www.painterartist.com/en/product/painter/#overview" target="_blank")
          img.mt-3.img-a(src='@/assets/curso/tema_1/img_26.png', alt='Texto que describa la imagen')

          h4.mt-4.text-center Corel Painter
          p.mb-0 Es un programa pago muy potente de pintura digital disponible para Windows y macOS, ofrece alternativas de único pago y suscripción y prueba gratis de 30 días.
      .col-lg-3.mb-4.mb-lg-0.tarjeta--boton.color-acento-contenido.p-4.bor_tar
        a(href="https://www.coreldraw.com/la/" target="_blank")
          img.mt-5.img-a(src='@/assets/curso/tema_1/img_27.png', alt='Texto que  describa la imagen')

          h4.mt-4.text-center Corel Draw
          p.mb-0 Es la competencia directa de illustrator y se centra en dibujo y diseño vectorial y dependiendo de su versión está disponible para Windows, macOS y web.
      .col-lg-3.mb-4.mb-lg-0.tarjeta--boton.color-acento-contenido.p-4.bor_tar
        a(href="https://affinity.serif.com/en-us/designer/" target="_blank")
          
          img.img-a(src='@/assets/curso/tema_1/img_28.png', alt='Texto que  describa la imagen')

          h4.mt-3.text-center Afinity Designer
          p.mb-0 Es un programa de diseño que permite el intercalar entre el uso de píxeles y vectores lo que lo hace bastante versátil, es de pago y está disponible para Windows, macOS y iOs.
    .row.justify-content-center
      .col-lg-3.mb-4.mb-lg-0.tarjeta--boton.color-acento-contenido.p-4.bor_tar
        a(href="https://procreate.art/" target="_blank")
          
          img.img-a(src='@/assets/curso/tema_1/img_29.png', alt='Texto que  describa la imagen')

          h4.mt-3.text-center Procreate
          p.mb-0 Es una aplicación para dibujo y pintura digital que ha venido tomando bastante relevancia, es de pago y está disponible exclusivamente para iOS.
    separador
    .titulo-segundo(data-aos="flip-up")
      #t_1_2.h2 1.2 Bocetación

    .row.align-items-center.bg-color1.p-5(data-aos="slide-left")
      .col-lg-12.mb-4.mb-lg-0
        figure.mb-5
          img.img-a(src='@/assets/curso/tema_1/img_30.png', alt='Texto que describa la imagen')

        p(data-aos="flip-up") El término boceto es utilizado para definir una exploración hecha previa a la realización de una obra, en él se utilizan trazos simples para tratar de representar de manera sencilla y rápida lo que se quiere comunicar.

        p.mb-0(data-aos="flip-up") Además de ser una aproximación inicial también, suele hacerse como método de estudio para lograr la comprensión sobre las formas que se quieren representar más adelante o simplemente para adquirir y mejorar habilidades.

    
    .bloque-texto-g.bloc_bg.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema_1/img_31.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p En conclusión, la bocetación es tanto un método de estudio como una solución rápida para la representación gráfica de ideas convirtiéndolo en algo eficaz para la planeación de una composición pictórica en el arte, el planteamiento inicial de algo en el diseño o el desarrollo de #[i storyboard] en el audiovisual entre muchos otros usos.
        br
        br
        p.mb-0 Aunque el boceto se caracteriza por ser una construcción rápida es importante tener presentes algunos conceptos que se describirán a continuación, ya que son elementos básicos del dibujo y son importantes para hacer del proceso de bocetación algo eficiente.

    .list.mb-5.mt-5(data-aos="flip-up")
      .list__item
        .list__item__bulletNumber 
      .list__txt  
        h2.m-top El punto

    figure.mb-5(data-aos="flip-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2N9lD2SnsDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5(data-aos="flip-up") Es la unidad mínima de la comunicación gráfica y por tanto de donde se origina todo dibujó, según el uso que se le dé puede generar distintas sensaciones como por ejemplo al agruparlos uno detrás de otro de manera continua dan origen a la línea o al dispersarse sobre una superficie pueden dar la sensación de un plano. Sus cualidades gráficas dependen del soporte donde es plasmado, ya sea papel, tela, cartón, etc. y el instrumento usado para marcarlo al apoyarlo sobre la superficie, lápiz, bolígrafo, marcador, prima, etc.

    p.text-center.mb-5(data-aos="flip-up")
      strong Estas cualidades que lo definen son:

    .row.mb-5(data-aos="flip-up")
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.bg_01(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style=" {'background-image' : `url(${require('@/assets/curso/tema_1/img_32.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h5 Forma
              p.mb-0 Es el elemento compositivo más pequeño de una imagen y su apariencia geométrica se asume como algo redondo sin embargo al depender en gran medida del instrumento con el que se marca, puede obtener otras formas como el cuadrado (en el caso de los píxeles) el triángulo, el rectángulo, etc., según la forma del instrumento de dibujo.

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.bg_01(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema_1/img_33.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h5 Tamaño
              p.mb-0 El tamaño del punto se da a partir del instrumento usado y su relación con las dimensiones del campo gráfico a usar sin olvidar que es la unidad mínima presente en una composición.

      .col-sm-6.col-xl-3.mb-4.mb-sm-0
        .tarjeta.tarjeta-flip.bg_01(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema_1/img_34.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h5 Proporción
              p.mb-0 Depende del tamaño del espacio usado, es así que entre más grande sea el campo gráfico más grande va a poder ser el punto y viceversa.

      .col-sm-6.col-xl-3
        .tarjeta.tarjeta-flip.bg_01(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema_1/img_35.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h5 Color
              p.mb-0 Corresponde a las propiedades de absorción y reflexión de luz que otorgan el soporte y el instrumento dado que el color está dado por la manera en que se comporta la luz sobre un elemento físico.

    .list01.mb-5.mt-5(data-aos="flip-up")
      .list01__item
        .list01__item__bulletNumber 
      .list01__txt  
        h2.m-top La línea

    figure.mb-5(data-aos="flip-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/kaRwm-kRo28" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p(data-aos="flip-up") En términos simples se trata de una sucesión continua de puntos, no existe físicamente, sino que se trata de la representación de un concepto plasmado sobre una superficie y es un elemento fundamental en el dibujo ya que ayuda a definir formas y volúmenes.

    p.mb-5(data-aos="flip-up") Básicamente existen dos tipos de líneas, las rectas y las curvas, aunque pueden tener más clasificaciones según su forma, su posición y las relaciones entre sí.

    p.text-center.mb-5(data-aos="flip-up")
      strong Según la forma:

    .row.mb-5(data-aos="flip-up")
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.bg_02(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style=" {'background-image' : `url(${require('@/assets/curso/tema_1/img_36.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h5.text-center Línea recta
              p.mb-0 Son las líneas en las que todos sus puntos se proyectan en una sola dirección.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.bg_02(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style=" {'background-image' : `url(${require('@/assets/curso/tema_1/img_37.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h5.text-center Línea curva
              p.mb-0 Son las líneas en las que sus puntos cambian gradualmente de dirección para proyectar una curva.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.bg_02(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style=" {'background-image' : `url(${require('@/assets/curso/tema_1/img_38.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h5.text-center Línea quebrada
              p.mb-0 Es una línea formada por diferentes rectas que se cortan entre sí y tienen cambios de dirección.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.bg_02(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style=" {'background-image' : `url(${require('@/assets/curso/tema_1/img_39.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h5.text-center Línea mixta
              p.mb-0 Son las formadas por líneas rectas y curvas.

    p.text-center.mb-5(data-aos="flip-up")
      strong Según su posición en el espacio:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.bg_02(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style=" {'background-image' : `url(${require('@/assets/curso/tema_1/img_40.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h5.text-center Línea vertical
              p.mb-0 Es la línea recta perpendicular al horizonte.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.bg_02(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style=" {'background-image' : `url(${require('@/assets/curso/tema_1/img_41.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h5.text-center Línea horizontal
              p.mb-0 Es la línea paralela al horizonte o incluso la línea del horizonte
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.bg_02(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style=" {'background-image' : `url(${require('@/assets/curso/tema_1/img_42.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h5.text-center Línea inclinada
              p.mb-0 Es la línea en la que uno de sus extremos está más alto o bajo que el otro.

    p.text-center.mb-5(data-aos="flip-up")
      strong Según su relación entre sí:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.bg_02(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style=" {'background-image' : `url(${require('@/assets/curso/tema_1/img_43.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h5.text-center Líneas paralelas
              p.mb-0 Consisten en dos o más líneas que están orientadas en la misma dirección, mantienen la misma distancia la una de la otra en todos sus puntos y por lo tanto no llegan a unirse al proyectar sus extremos.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.bg_02(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style=" {'background-image' : `url(${require('@/assets/curso/tema_1/img_44.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h5.text-center Líneas convergentes
              p.mb-0 Son líneas que parten de ubicaciones distintas pero que se unen entre sí en alguno de sus puntos al proyectar sus extremos.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.bg_02(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style=" {'background-image' : `url(${require('@/assets/curso/tema_1/img_45.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h5.text-center Líneas divergentes
              p.mb-0 Son líneas que parten de un mismo punto y al proyectar sus extremos van en direcciones distintas.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.bg_02(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style=" {'background-image' : `url(${require('@/assets/curso/tema_1/img_46.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h5.text-center Líneas perpendiculares
              p.mb-0 Es la línea que se encuentra con otra en un punto formando un ángulo recto, es decir de 90°.

    separador
    .titulo-segundo(data-aos="flip-up")
      #t_1_3.h2 1.3 Perspectiva

    .row.mb-5(data-aos="flip-up")
      .col-lg-4.mb-4.mb-lg-0(data-aos="slide-left")
        img.img-a(src='@/assets/curso/tema_1/img_47.png', alt='Texto que describa la imagen')
      .col-lg-8.mb-4.mb-lg-0(data-aos="slide-right")
        p La perspectiva es una técnica de representación que busca mostrar fielmente sobre una superficie de dos dimensiones los objetos tal cual como se ven en el mundo real al crear la sensación de profundidad.

        p El dibujo no tiene profundidad estrictamente hablando, es decir, cuando se representa un objeto en un plano este solo existe en 2 dimensiones que son ancho y alto o según otras definiciones, horizontal y vertical o X y Y.

        p En el dibujo existen muchos tipos de perspectiva, pero a continuación el foco se dará en las más usadas en el entorno artístico que se valen de la línea de horizonte la cual es una analogía de la línea recta en la lejanía que separa el mar o la tierra del cielo, por otro lado hace uso de puntos de fuga, que son puntos donde convergen las líneas proyectadas hacia el horizonte para crear la sensación de profundidad, los cuales se ubican sobre la línea de horizonte para el caso de las perspectivas de 1 y 2 puntos o en algún lugar sobre o bajo la línea de horizonte para el caso de la perspectiva de 3 puntos de fuga.

    figure.mb-5(data-aos="flip-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/zlpn6Nde9zs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .tarjeta.tar_sly.p-3.p-lg-4.mb-5(data-aos="flip-up")
      SlyderA
        .row.justify-content-center.align-items-center
          .col-md-11.col-lg-9
            .row.align-items-center
              .col-lg-4.mb-4.mb-lg-0
                figure
                  img.img-a(src='@/assets/curso/tema_1/img_48.png', alt='Texto que describa la imagen')
              .col-lg-6.mb-4.mb-lg-0
                h4 Perspectiva con un punto de fuga
                .line01.mb-3
                p Esta perspectiva hace uso de un punto de fuga ubicado sobre la línea de horizonte, el cual sirve de convergencia para proyectar las líneas que se generan desde o hacia los vértices de la figura, en esta perspectiva una cara del objeto se ve siempre frontal al espectador si se toma como ejemplo un cubo.
        .row.justify-content-center.align-items-center
          .col-md-11.col-lg-9
            .row.align-items-center
              .col-lg-5.mb-4.mb-lg-0
                figure
                  img.img-a(src='@/assets/curso/tema_1/img_49.png', alt='Texto que describa la imagen')
              .col-lg-6.mb-4.mb-lg-0
                h4 Perspectiva con dos puntos de fuga
                .line01.mb-3
                p Esta perspectiva hace uso de 2 puntos de fuga ubicados sobre la línea de horizonte y sobre estos convergen las líneas proyectadas desde o hacia los vértices de la figura, en esta perspectiva el objeto es visto desde una de sus aristas si se toma como ejemplo un cubo.
        .row.justify-content-center.align-items-center
          .col-md-11.col-lg-9
            .row.align-items-center
              .col-lg-5.mb-4.mb-lg-0
                figure
                  img.img-a(src='@/assets/curso/tema_1/img_50.png', alt='Texto que describa la imagen')
              .col-lg-6.mb-4.mb-lg-0
                h4 Perspectiva con un tres puntos de fuga
                .line01.mb-3
                p Esta perspectiva parte de la perspectiva de 2 puntos de fuga y adiciona un tercero que se ubica bajo la línea de horizonte si se quiere representar un objeto visto desde arriba o sobre la línea de horizonte si se quiere representar un objeto visto desde abajo mostrando una disminución en el volumen del objeto cuanto más se acerca hacia el tercer punto de fuga.
        .row.justify-content-center.align-items-center
          .col-md-11.col-lg-9
            .row.align-items-center
              .col-lg-5.mb-4.mb-lg-0
                figure
                  img.img-a(src='@/assets/curso/tema_1/img_51.png', alt='Texto que describa la imagen')
              .col-lg-6.mb-4.mb-lg-0
                h4 Perspectiva isométrica
                .line01.mb-3
                p Es un tipo de perspectiva usado principalmente en dibujo técnico y muy común en muchos juegos con vista aérea, en esta, aunque se visualizan 3 caras del objeto al tiempo, no existe disminución de volumen cuando el objeto se representa en la lejanía.

    separador
    .titulo-segundo(data-aos="flip-up")
      #t_1_4.h2 1.4 Abstracción y líneas de acción

    figure.mb-5(data-aos="flip-up")
      img.img-a(src='@/assets/curso/tema_1/img_52.png', alt='Texto que describa la imagen')

    p(data-aos="slide-left") Una manera de hacer bocetos rápidos de un personaje, ya sea como exploración al momento de diseñar o para ver distintas actitudes de un diseño ya establecido es el uso de figuras geométricas básicas y líneas de acción.

    p(data-aos="slide-right") La abstracción consiste en la simplificación de volúmenes complejos de forma que con pocos trazos y el uso de figuras básicas como cuadrados, círculos, rectángulos, triángulos, óvalos y demás se logre capturar la esencia elemental del personaje.

    p(data-aos="slide-left") En este orden de ideas si un personaje es delgado van a prevalecer en su construcción formas como los rectángulos, en el caso de un personaje obeso las figuras que más resalta seguramente serán círculos y óvalos, para un personaje de gran musculatura pueden aparecer muchos óvalos mezclados con cuadrados y trapecios y así indefinidamente dependiendo de la fisonomía que se desee representar.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema_1/img_53.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Junto al uso de figura las líneas de acción ayudan a determinar el dinamismo del personaje puesto que determinan tanto el flujo del movimiento para poses dinámicas como la postura para poses estáticas, generalmente se usan para definir el contorno de la espina dorsal y desde ahí generar la posición de las extremidades y el resto del personaje.
        br
        br
        p.mb-0 Para trazar líneas de acción lo más común es usar formas de C y S en su dirección natural como invertidas variando la apertura de las curvas según la pose o movimiento que se desee representar e incluso en ocasiones líneas rectas pero es algo poco común ya que aunque pueden marcar una dirección no suelen denotar ningún tipo de dinámica en el movimiento y por tanto generan poses aburridas.




</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
