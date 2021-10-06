<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Lenguaje audiovisual

    .row.align-items-center.bg-color1.p-5(data-aos="slide-right")
      .col-lg-12.mb-4.mb-lg-0
        figure.mb-5
          img.img-a(src='@/assets/curso/tema_2/img_1.png', alt='Texto que describa la imagen')

        p.mb-0 El lenguaje audiovisual hace referencia a la comunicación mediante sonidos e imágenes. Es una forma de expresión que integra el lenguaje verbal (escrito y hablado), visual y sonoro. Como lo expresa Antonio R. Bartolomé 

    .bloque-texto-d.color-primario.p-4.mb-5(data-aos="flip-up")
        .bloque-texto-d__texto.mb-2
          i.fas.fa-quote-left
          h3.text-regular La clave del lenguaje audiovisual es que el significado del mensaje viene dado por la interacción sonido-imagen, dentro de un contexto secuencial. En el Lenguaje Audiovisual, tal como lo entendemos aquí, las músicas, los efectos sonoros, los ruidos y los silencios colaboran en la transmisión del mensaje, no como "fondo" o "complemento" sino conformando realmente el mensaje. 
          i.fas.fa-quote-right
        .bloque-texto-d__autor 
          .h5.mb-0 (BARTOLOMÉ, 1987) (ACEITUNO, 2010)

    .row.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="flip-left")
        img.img-a(src='@/assets/curso/tema_2/img_2.png', alt='Texto que describa la imagen')
      .col-lg-6.mb-4.mb-lg-0(data-aos="flip-right")
        .list.mb-3
          .list__item
            .list__item__bulletNumber1
              span 1 
          .list__txt  
            p.mb-0 #[strong Morfológico]
            p Hace referencia a sus elementos constitutivos, es decir, la imagen, el sonido y el movimiento. Estos elementos establecen una dimensión temporal y espacial.
        .list.mb-3
          .list__item
            .list__item__bulletNumber2
              span 2 
          .list__txt  
            p.mb-0 #[strong Sintáctico]
            p Son aquellas reglas y principios que ayudarán a estructurar y combinar los elementos morfológicos con el fin de expresar significado en conjunto.
        .list.mb-3
          .list__item
            .list__item__bulletNumber3
              span 3 
          .list__txt  
            p.mb-0 #[strong Semántico]
            p Es el significado de cada elemento, ya sea denotativo (lo que literalmente significa) o connotativo (lo que se interpreta o valora de manera particular por cada individuo). Cada elemento morfo-sintáctico cumple una función semántica.
        .list
          .list__item
            .list__item__bulletNumber4
              span 4 
          .list__txt  
            p.mb-0 #[strong Estético]
            p Pretende crear o producir una sensación de belleza, armonía, agrado y gracia.

    p.text-center.mb-5(data-aos="flip-up")
      strong Ahora, es bueno profundizar en el aspecto sintáctico del lenguaje audiovisual:

    LineaTiempoD.color-primario(data-aos="flip-up")
      .row(numero="1" titulo="Campo")
        p Es el espacio, entorno o escenario.
      .row(numero="2" titulo="Encuadre")
        p Es el límite físico que recorta un fragmento del campo dentro de un rectángulo, de acuerdo con una posición y ángulo de visión concretos.
      .row(numero="3" titulo="Formato o relación de aspecto")
        p.mb-5 Es la proporción de ancho y alto del encuadre. Existen dos formatos estándar: formato 4:3 y 16:9. Originalmente estas relaciones responden a la proporción de la pantalla de televisión y a la del cine, respectivamente. Hoy día obedece más a criterios estéticos del director. (CÁMARA, 2006)
        .row.justify-content-center.mb-5
          .col-lg-8
            figure
              img.img-a(src='@/assets/curso/tema_2/img_3.png', alt='Texto que describa la imagen')
              figcaption.text-center Ejemplo de campo, encuadre y aspecto 
              
        .row.justify-content-center
          .col-lg-10
            .bloque-texto-f.bg_03.pt-4.px-5.mb-5
              .bloque-texto-f__comillas
                i.fas.fa-quote-left
                i.fas.fa-quote-right
              p.text-regular.bloque-texto-f__texto.text-center Podría decirse que la cámara equivale al ojo humano, y dentro de una producción audiovisual, el director ‘manipula’ al público, mostrándole la realidad que al director interesa y de la manera que él desea. Para esto se vale de los tipos de planos, ángulos y movimientos de cámara. 
              .bloque-texto-f__autor.mb-0
                h5.mb-0 - (ACEITUNO, 2010)
      .row(numero="4" titulo="Plano")
        p.mb-5 Es la unidad narrativa más pequeña con significado. Se pueden dividir según su ángulo de corte (CÁMARA, 2006), usualmente tomando como referencia la figura humana.  
        SlyderA
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              figure.mb-3
                img.img-a(src='@/assets/curso/tema_2/img_4.png', alt='Texto que describa la imagen')
              .list.mb-3
                .list__item
                  .list__item__bulletNumber5 
                    span 1
                .list__txt.mt-2  
                  h3 Perspectiva con un punto de fuga
              .line01.mb-3
              p Tiene el mayor ángulo de corte posible. Tiene el objetivo de mostrar la mayor cantidad de información acerca del entorno y los personajes solo representan un punto más dentro de todo el paisaje.  
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              figure.mb-3
                img.img-a(src='@/assets/curso/tema_2/img_5.png', alt='Texto que describa la imagen')
              .list.mb-3
                .list__item
                  .list__item__bulletNumber5 
                    span 2
                .list__txt.mt-2  
                  h3 Plano General / Long Shot (LS)
              .line01.mb-3
              p Sigue teniendo un valor descriptivo y se pueden observar a los personajes. Brinda información del lugar donde se desarrollará la historia.
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              figure.mb-3
                img.img-a(src='@/assets/curso/tema_2/img_6.png', alt='Texto que describa la imagen')
              .list.mb-3
                .list__item
                  .list__item__bulletNumber5 
                    span 3
                .list__txt.mt-2  
                  h3 Plano Entero/ Full Shot (FS)
              .line01.mb-3
              p Muestra al personaje de cuerpo completo dentro de un lugar. Tiene un valor narrativo, en el cual se observan con claridad las acciones y movimientos de los personajes.
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              figure.mb-3
                img.img-a(src='@/assets/curso/tema_2/img_7.png', alt='Texto que describa la imagen')
              .list.mb-3
                .list__item
                  .list__item__bulletNumber5 
                    span 4
                .list__txt.mt-2  
                  h3 Plano Americano/ American Shot (AS)
              .line01.mb-3
              p Se muestra al personaje desde la cabeza hasta las rodillas. Su origen viene de las películas Western donde era importante mostrar las manos del personaje al momento de tomar su pistola. Es un plano narrativo y expresivo, donde el personaje como el entorno tienen gran importancia.
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              figure.mb-3
                img.img-a(src='@/assets/curso/tema_2/img_8.png', alt='Texto que describa la imagen')
              .list.mb-3
                .list__item
                  .list__item__bulletNumber5 
                    span 5
                .list__txt.mt-2  
                  h3 Plano medio/ Medium Shot (MS)
              .line01.mb-3
              p.mb-0 Corte a la altura de la cintura. A pesar de que se clasifica como un plano narrativo más que expresivo; aumenta la importancia del rostro del personaje y su expresividad, restándole atención al escenario. Es un plano muy cómodo para trabajar los diálogos de los personajes, desde el cual se puede hacer una transición a un plano general o un primer plano sin brusquedad.
              p Tiene la facultad de tener mayor duración en pantalla frente a otros planos. (CÁMARA, 2006)
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              figure.mb-3
                img.img-a(src='@/assets/curso/tema_2/img_10.png', alt='Texto que describa la imagen')
              .list.mb-3
                .list__item
                  .list__item__bulletNumber5 
                    span 7
                .list__txt.mt-2  
                  h3 Primerísimo Primer Plano/ Plano Detalle/ Extreme Close Up (ECU)
              .line01.mb-3
              p.mb-0 Recoge un fragmento o detalle de un objeto o personaje. Es un plano expresivo que funciona para remarcar detalles o acciones que con otro tipo de planos pasarían desapercibidos.
      .row(numero="5" titulo="Ángulo")
        p.mb-5 Es el que determina el punto de vista de la cámara, que provee un recurso expresivo al momento de mostrar el aspecto psicológico de un plano.
        SlyderA
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              .row.align-items-center
                .col-lg-4.mb-4.mb-lg-0
                  figure
                    img.img-a(src='@/assets/curso/tema_2/img_11.png', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-lg-0
                  .list.mb-3
                    .list__item
                      .list__item__bulletNumber5 
                        span 1
                    .list__txt.mt-2  
                      h4 Normal o nivel de horizonte
                  .line01.mb-3
                  p.mb-0 La cámara se encuentra a la altura del horizonte o los ojos del personaje. Brinda naturalidad y estabilidad, dado que es un punto de vista cercano a la realidad.
                  p (CÁMARA, 2006)
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              .row.align-items-center
                .col-lg-4.mb-4.mb-lg-0
                  figure
                    img.img-a(src='@/assets/curso/tema_2/img_12.png', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-lg-0
                  .list.mb-3
                    .list__item
                      .list__item__bulletNumber5 
                        span 2
                    .list__txt.mt-2  
                      h4 Picado (vista de pájaro)
                  .line01.mb-3
                  p.mb-0 La cámara está por encima de la línea de horizonte y fija su objetivo hacia abajo. Este ángulo es útil, junto con un ELS, para mostrar paisajes. Si se usa en un FS y un personaje, se venderá la idea de inferioridad o vulnerabilidad.
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              .row.align-items-center
                .col-lg-4.mb-4.mb-lg-0
                  figure
                    img.img-a(src='@/assets/curso/tema_2/img_13.png', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-lg-0
                  .list.mb-3
                    .list__item
                      .list__item__bulletNumber5 
                        span 3
                    .list__txt.mt-2  
                      h4 Cenital
                  .line01.mb-3
                  p.mb-0 La cámara se encuentra paralela al suelo. Suelen ser planos descriptivos, para mostrar una ubicación o el desplazamiento de un personaje dentro del escenario.
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              .row.align-items-center
                .col-lg-4.mb-4.mb-lg-0
                  figure
                    img.img-a(src='@/assets/curso/tema_2/img_14.png', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-lg-0
                  .list.mb-3
                    .list__item
                      .list__item__bulletNumber5 
                        span 4
                    .list__txt.mt-2  
                      h4 Contrapicado
                  .line01.mb-3
                  p.mb-0 La cámara está ubicada por debajo de la línea de horizonte. Este punto de vista brinda la sensación de superioridad o importancia.
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              .row.align-items-center
                .col-lg-4.mb-4.mb-lg-0
                  figure
                    img.img-a(src='@/assets/curso/tema_2/img_15.png', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-lg-0
                  .list.mb-3
                    .list__item
                      .list__item__bulletNumber5 
                        span 5
                    .list__txt.mt-2  
                      h4 Nadir
                  .line01.mb-3
                  p.mb-0 La cámara se coloca bajo el suelo y se exagera la sensación del ángulo en contrapicado.
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              .row.align-items-center
                .col-lg-4.mb-4.mb-lg-0
                  figure
                    img.img-a(src='@/assets/curso/tema_2/img_16.png', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-lg-0
                  .list.mb-3
                    .list__item
                      .list__item__bulletNumber5 
                        span 6
                    .list__txt.mt-2  
                      h4 Tres cuartos
                  .line01.mb-3
                  p.mb-0 El personaje u objeto aparece ligeramente girado en el eje horizontal. Suele usarse para romper el efecto de twinning o espejo y brindar sensación de profundidad.
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              .row.align-items-center
                .col-lg-4.mb-4.mb-lg-0
                  figure
                    img.img-a(src='@/assets/curso/tema_2/img_17.png', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-lg-0
                  .list.mb-3
                    .list__item
                      .list__item__bulletNumber5 
                        span 7
                    .list__txt.mt-2  
                      h4 Sobre el hombro
                  .line01.mb-3
                  p.mb-0 Es un tipo de angulación ideal para mostrar las conversaciones de los personajes.
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              .row.align-items-center
                .col-lg-4.mb-4.mb-lg-0
                  figure
                    img.img-a(src='@/assets/curso/tema_2/img_18.png', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-lg-0
                  .list.mb-3
                    .list__item
                      .list__item__bulletNumber5 
                        span 8
                    .list__txt.mt-2  
                      h4 Espaldas
                  .line01.mb-3
                  p.mb-0 La cámara se encuentra ubicada literalmente a la espalda del personaje.
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              .row.align-items-center
                .col-lg-4.mb-4.mb-lg-0
                  figure
                    img.img-a(src='@/assets/curso/tema_2/img_19.png', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-lg-0
                  .list.mb-3
                    .list__item
                      .list__item__bulletNumber5 
                        span 9
                    .list__txt.mt-2  
                      h4 Oblicuo
                  .line01.mb-3
                  p.mb-0 También denominado plano holandés, donde la cámara está inclinada, de tal manera que la imagen parece torcida. Esto genera una sensación de inestabilidad e inseguridad.
      .row(numero="6" titulo="Movimientos de cámara")
        p.mb-5 Es el que determina el punto de vista de la cámara, que provee un recurso expresivo al momento de mostrar el aspecto psicológico de un plano.
        SlyderA.mb-5
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              figure.mb-5
                img.img-a(src='@/assets/curso/tema_2/img_20.png', alt='Texto que describa la imagen')

              .list.mb-3
                .list__item
                  .list__item__bulletNumber5 
                    span 1
                .list__txt.mt-2  
                  h4 Dolly in/out
              .line01.mb-3
              p.mb-0 La cámara se desplaza hacia adentro (in) o hacia afuera (out) del escenario. Aunque pueda ser similar al Zoom in/out, el dolly mantiene el foco y el efecto generado aporta mayor dinamismo, profundidad y potencia las perspectivas. (CÁMARA, 2006)
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              figure.mb-5
                img.img-a(src='@/assets/curso/tema_2/img_21.png', alt='Texto que describa la imagen')

              .list.mb-3
                .list__item
                  .list__item__bulletNumber5 
                    span 2
                .list__txt.mt-2  
                  h4 Zoom in/out
              .line01.mb-3
              p.mb-0 La cámara permanece estática pero el lente se abre o cierra, causando que los objetos se acerquen o se alejen. (ACEITUNO, 2010).
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              figure.mb-5
                img.img-a(src='@/assets/curso/tema_2/img_22.png', alt='Texto que describa la imagen')

              .list.mb-3
                .list__item
                  .list__item__bulletNumber5 
                    span 3
                .list__txt.mt-2  
                  h4 Dolly Zoom o efecto vértigo
              .line01.mb-3
              p Es un efecto combinado entre el desplazamiento de la cámara hacia adelante o hacia atrás (Dolly) con un efecto óptico de zoom.
              p Desde una búsqueda simple en Internet o a través del material complementario puede visualizar un ejemplo propuesto por #[strong TRNGL Entertainment (2020), Dolly Zoom (El efecto vértigo) | Curso de Cine].
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              figure.mb-5
                img.img-a(src='@/assets/curso/tema_2/img_23.png', alt='Texto que describa la imagen')

              .list.mb-3
                .list__item
                  .list__item__bulletNumber5 
                    span 4
                .list__txt.mt-2  
                  h4 Panorámica / Pan
              .line01.mb-3
              p.mb-0 La cámara permanece anclada en un punto y gira sobre su propio eje, de derecha a izquierda o viceversa.
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              figure.mb-5
                img.img-a(src='@/assets/curso/tema_2/img_24.png', alt='Texto que describa la imagen')

              .list.mb-3
                .list__item
                  .list__item__bulletNumber5 
                    span 5
                .list__txt.mt-2  
                  h4 Tild up/down
              .line01.mb-3
              p.mb-0 La cámara permanece anclada y sube o baja en el eje vertical.
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              figure.mb-5
                img.img-a(src='@/assets/curso/tema_2/img_25.png', alt='Texto que describa la imagen')

              .list.mb-3
                .list__item
                  .list__item__bulletNumber5 
                    span 6
                .list__txt.mt-2  
                  h4 Travelling
              .line01.mb-3
              p Es el desplazamiento de la cámara sobre un vehículo (rieles, grúa). Existen varios tipos (MARQUÈS, 1995):

              p.mb-0 #[strong Lateral:] para acom     pañar al personaje cuando se desplaza.
              p.mb-0 #[strong Ascendente / descendente:] el movimiento es hacia arriba o hacia abajo.
              p #[strong Circular:] desplazamiento alrededor del personaje
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              figure.mb-5
                img.img-a(src='@/assets/curso/tema_2/img_26.png', alt='Texto que describa la imagen')

              .list.mb-3
                .list__item
                  .list__item__bulletNumber5 
                    span 7
                .list__txt.mt-2  
                  h4 Shake
              .line01.mb-3
              p Temblor en la cámara que es originado por un golpe violento al personaje o el escenario. Pueden dar sensación de un temblor, la caída de algo muy pesado o una explosión. (CÁMARA, 2006)
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              figure.mb-5
                img.img-a(src='@/assets/curso/tema_2/img_27.png', alt='Texto que describa la imagen')

              .list.mb-3
                .list__item
                  .list__item__bulletNumber5 
                    span 8
                .list__txt.mt-2  
                  h4 Barrido/Zip Pan
              .line01.mb-3
              p Es una panorámica o travelling corta que se realiza a gran velocidad, causando que los objetos se vean borrosos. Se usa como transición entre dos encuadres o para mostrar un repentino cambio de punto de vista. (CÁMARA, 2006)

        .row.justify-content-center.align-items-center
          .col-md-11.col-lg-9
            .cajon.color-primario.p-4
              p.mb-5 Puede verificar desde una búsqueda en internet o desde el material complementario algunos de los siguientes vídeos en los cuales se presentan ejemplos de los diferentes planos, ángulos y movimientos de cámara.

              a.anexo.mb-5.mb-lg-0(href="https://www.youtube.com/embed/AN2I1CTn3rY" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[strong Ejemplo.]  La ciencia del Cine (2018), Planos y Movimientos de Cámara I.

              a.anexo.mb-5.mb-lg-0.mt-3(href="https://www.youtube.com/embed/ILRjN0b30Pc" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[strong Ejemplo.] La ciencia del Cine (2019), Plano y Movimientos de Cámara II: Angulación.

              a.anexo.mb-4.mb-lg-0.mt-3(href="https://www.youtube.com/embed/dBPjG2YipY4" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[strong Ejemplo.] La ciencia del Cine (2020), Plano y Movimientos de Cámara III: Puntos de vista y movimientos. 
      .row(numero="7" titulo="Composición")
        p Hace referencia a las diferentes opciones de distribución de los elementos que hacen parte de una escena o imagen dentro del encuadre.

        p.mb-5 La tarea del director es orientar o dirigir la atención de la audiencia hacia lo esencial, teniendo presente que son pocos segundos los que tiene el espectador para apreciar y entender cada plano. Para este fin, se vale de reglas de composición.
        SlyderA.mb-5
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              figure.mb-5
                img.img-a(src='@/assets/curso/tema_2/img_28.png', alt='Texto que describa la imagen')

              .list.mb-3
                .list__item
                  .list__item__bulletNumber5 
                    span 1
                .list__txt.mt-2  
                  h4 Regla de tercios
              .line01.mb-3
              p El encuadre se divide en tres partes iguales, horizontal y verticalmente (ver imagen A). Los puntos donde se interceptan las líneas (puntos de color de la imagen A ) son los puntos de mayor interés de la composición, por tal motivo, los elementos deberán disponerse en esos puntos o lo más cerca posible de ellos. La distribución en tercios rompe la simetría que produce la composición en el centro (comparar imagen A y B) (BANCROFT, 2012).       
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              figure.mb-5
                img.img-a(src='@/assets/curso/tema_2/img_29.png', alt='Texto que describa la imagen')

              .list.mb-3
                .list__item
                  .list__item__bulletNumber5 
                    span 2
                .list__txt.mt-2  
                  h4 Líneas
              .line01.mb-3
              p La dirección que toman las líneas en el encuadre ayuda a dirigir la vista del espectador. Las líneas verticales transmiten rectitud y orden, las horizontales ofrecen reposo y estabilidad, las curvas son sensualidad y las oblicuas desequilibrio y movimiento (CÁMARA, 2006). 
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              figure.mb-5
                img.img-a(src='@/assets/curso/tema_2/img_30.png', alt='Texto que describa la imagen')

              .list.mb-3
                .list__item
                  .list__item__bulletNumber5 
                    span 3
                .list__txt.mt-2  
                  h4 Luz
              .line01.mb-3
              p El ojo del espectador se dirigirá a los objeto o zona que se encuentre iluminada, mientras que las zonas oscuras perderán importancia.
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              figure.mb-5
                img.img-a(src='@/assets/curso/tema_2/img_31.png', alt='Texto que describa la imagen')

              .list.mb-3
                .list__item
                  .list__item__bulletNumber5 
                    span 4
                .list__txt.mt-2  
                  h4 Enfoque selectivo
              .line01.mb-3
              p Se enfoca un elemento del encuadre y los demás aparecerán borrosos. Es un efecto similar a como los seres humanos ven.
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              figure.mb-5
                img.img-a(src='@/assets/curso/tema_2/img_32.png', alt='Texto que describa la imagen')

              .list.mb-3
                .list__item
                  .list__item__bulletNumber5 
                    span 5
                .list__txt.mt-2  
                  h4 Color
              .line01.mb-3
              p Se hace uso de la teoría del color con el fin de destacar un objeto dentro de muchos.
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              figure.mb-5
                img.img-a(src='@/assets/curso/tema_2/img_33.png', alt='Texto que describa la imagen')

              .list.mb-3
                .list__item
                  .list__item__bulletNumber5 
                    span 6
                .list__txt.mt-2  
                  h4 Composición áurea o golden ratio
              .line01.mb-3
              p Distribución basada en la serie de Fibonacci (matemáticas). Es un patrón que está presente en la naturaleza.
      .row(numero="8" titulo="Continuidad")
        p.mb-5 Más conocido como raccord. Tiene que ver con la relación que existe entre los diferentes planos a fin de que no se pierda la sensación de unidad. Cada plano de una escena, similar a una cadena, tendrá que servir de base para el siguiente.

        .row.justify-content-center.align-items-center
          .col-md-11.col-lg-9
            .cajon.color-primario.p-4
              p.mb-5 Se debe tener en cuenta la continuidad en espacio, tiempo, iluminación y vestuario. Uno de los principales es el espacio, el cual nos dice que, si un personaje sale de plano por un lado del encuadre, en el siguiente plano deberá entrar por el lado contrario. (MARQUÈS, 1995).

              a.anexo.mb-5.mb-lg-0(href="https://www.youtube.com/embed/ew5WzvL-fEk" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[strong Ejemplo.] La ciencia del Cine (2020), Elementos del cine: CONTINUIDAD + ERRORES en películas.

      .row(numero="9" titulo="Ritmo")
        p.mb-5 Está al servicio de la narrativa y depende directamente de la sensación que se quiere transmitir. Dentro de un audiovisual se puede tener tanto un ritmo dinámico, como un ritmo suave. Como su nombre lo indica, el ritmo dinámico se caracteriza por mayor cambio de planos de corta duración (MS, CU) lo cual crea una sensación de acción y movimiento. En contraste, el ritmo suave suele tener planos de mayor duración y potencia la lectura de las expresiones y pensamientos de los personajes. La clave estará entonces, en lograr un equilibrio entre estos dos tipos de ritmo (MARQUÈS, 1995).

        .row.justify-content-center.align-items-center
          .col-md-11.col-lg-9
            .cajon.color-primario.p-4
              p.mb-5 El ritmo está condicionado entonces por el ritmo interno del plano, dado por las acciones que en él suceden, así como también por el encuadre, la variación de centros de interés, el movimiento de la cámara o del zoom, y la combinación con los planos anteriores y posteriores (Fernández, F. Martínez, J. 1999).

              a.anexo.mb-5.mb-lg-0(href="https://www.youtube.com/embed/YwJaz7tXq1Y" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[strong Ejemplo.] Ritmo narrativo: ¿qué es y por qué es tan importante?
      .row(numero="10" titulo="Elipsis y transiciones")
        p Este elemento se equipará a los signos de puntuación en la escritura. La elipsis es la omisión del tiempo muerto con el objetivo de mostrar solo aquellas acciones relevantes, significativas y atractivas, por cualquier forma de transición. Podemos pasar de hoy a mañana, al próximo siglo o a los próximos milenios (Fernández, F. Martínez, J. 1999). Es la herramienta narrativa que ayuda a pasar de una secuencia a otra para avanzar en la historia en tiempo y espacio (CÁMARA, 2006).

        p.mb-5 Una elipsis se realiza mediante el uso de transiciones, las cuales son variadas y cada una posee su propio valor expresivo.
        SlyderA.mb-5
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              figure.mb-5
                img.img-a(src='@/assets/curso/tema_2/img_34.png', alt='Texto que describa la imagen')

              .list.mb-3
                .list__item
                  .list__item__bulletNumber5 
                    span 1
                .list__txt.mt-2  
                  h4 Corte
              .line01.mb-3
              p Conocido como corte directo o seco. Es el paso limpio de un plano a otro. Sugiere continuidad narrativa e imprime un carácter dinámico y natural. Se entiende que no transcurre tiempo entre las escenas que se conectan. Se debe prestar especial atención al raccord visual, con el fin que el espectador no note el recurso.
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              figure.mb-5
                img.img-a(src='@/assets/curso/tema_2/img_35.png', alt='Texto que describa la imagen')

              .list.mb-3
                .list__item
                  .list__item__bulletNumber5 
                    span 2
                .list__txt.mt-2  
                  h4 Fundido encadenado / cross-dissolve
              .line01.mb-3
              p La transición entre dos escenas es gradual y el tiempo que tome este desvanecimiento indicará la intensidad del cambio. Suele usarse para cambios de tiempo no muy largos, mostrar al mismo personaje en otras situaciones o llegar a mostrar saltos en el tiempo al pasado o posible futuro. Este recurso suele combinarse con un efecto de agua y así vender una idea irreal, imaginación o sueño. Luego del corte directo, es el recurso más usado.
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              figure.mb-5
                img.img-a(src='@/assets/curso/tema_2/img_35.png', alt='Texto que describa la imagen')

              .list.mb-3
                .list__item
                  .list__item__bulletNumber5 
                    span 3
                .list__txt.mt-2  
                  h4 Fundido a negro o de negro / Fade in-out
              .line01.mb-3
              p El plano se oscurece hasta llenar la pantalla de negro, o de negro gradualmente deja ver la imagen del siguiente plano. Se utiliza para inicios y finales de secuencias, o también para transmitir el paso de un periodo largo de tiempo (CÁMARA, 2006).












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
