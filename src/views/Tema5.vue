<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Elevator pitch

    .row.align-items-center.bg-color1.p-5(data-aos="slide-right")
      .col-lg-12.mb-4.mb-lg-0
        figure.mb-5
          img.img-a(src='@/assets/curso/tema_4/img_1.png', alt='Texto que describa la imagen')

    .row.justify-content-center.mb-5
      .col-lg-10
        p Se le da el nombre de presentación de pitch a una discurso corto y conciso (de 30 segundos a máximo 2 minutos), donde se describe una idea, producto o compañía, con el objetivo de buscar financiación de un posible inversor para desarrollar un proyecto. Es la mejor herramienta para responder a la pregunta ¿qué hace su empresa? o en nuestro caso ¿qué proyecto audiovisual va a realizar? ¿En qué se enfocaría si solo tuviera 30 segundos para mostrar su idea?.
    .line01.mb-5

    h3.text-center.mb-5 Consejos para la presentación

    PasosA.color-primario.mb-5(tipo="n")(data-aos="slide-left")
      .row
        .col-md-8.mb-4.mb-md-0
          h4 Sea breve
          p La presentación de pitch no es un espacio para presentar todos los detalles del proyecto, solo lo esencial. No por esto caiga en el error de hablar demasiado rápido.
        .col-md-4
          figure
            img.img-a(src='@/assets/curso/tema_4/img_2.png', alt='Texto que describa la imagen')
      .row
        .col-md-4.mb-4.mb-md-0
          figure
            img.img-a(src='@/assets/curso/tema_4/img_3.png', alt='Texto que describa la imagen')
            
        .col-md-8
          h4 Sea persuasivo
          p No es una presentación de ventas, pero sí pretende convencer o generar expectativa y emoción. Busque tener una introducción explosiva y un nombre atractivo.
      .row
        .col-md-8.mb-4.mb-md-0
          h4 Tenga una presentación
          p Realice diapositivas con un diseño único y coherente con el proyecto.
        .col-md-4
          figure
            img.img-a(src='@/assets/curso/tema_4/img_4.png', alt='Texto que describa la imagen')
      .row
        .col-md-4.mb-4.mb-md-0
          figure
            img.img-a(src='@/assets/curso/tema_4/img_5.png', alt='Texto que describa la imagen')
            
        .col-md-8
          h4 Conozca su audiencia
          p Realice un estudio de la persona o compañía a la que va a exponer su proyecto e identifique su experiencia o los proyectos en los que suele interesarse.
      .row
        .col-md-8.mb-4.mb-md-0
          h4 Comparta sus habilidades
          p Se debe explicar quién es usted o su equipo, cuál es la experiencia y habilidades que poseen.
        .col-md-4
          figure
            img.img-a(src='@/assets/curso/tema_4/img_6.png', alt='Texto que describa la imagen')
      .row
        .col-md-4.mb-4.mb-md-0
          figure
            img.img-a(src='@/assets/curso/tema_4/img_7.png', alt='Texto que describa la imagen')
            
        .col-md-8
          h4 Practique varias veces
          p Es la mejor manera para lograr sentirse cómodo y exponerlo de forma natural. Puede presentarlo a un amigo o grabarse, con el fin de recibir opiniones.
      .row
        .col-md-8.mb-4.mb-md-0
          h4 Sea flexible
          p Esté abierto a responder posibles preguntas que le puedan hacer en medio de la presentación.
        .col-md-4
          figure
            img.img-a(src='@/assets/curso/tema_4/img_8.png', alt='Texto que describa la imagen')
      .row
        .col-md-4.mb-4.mb-md-0
          figure
            img.img-a(src='@/assets/curso/tema_4/img_9.png', alt='Texto que describa la imagen')
        .col-md-8
          h4 Evite divagar
          p La clave para no caer en este error es la práctica hasta llegar a interiorizar toda la presentación.
      .row
        .col-md-8.mb-4.mb-md-0
          h4 Module su tono de voz
        .col-md-4
          figure
            img.img-a(src='@/assets/curso/tema_4/img_10.png', alt='Texto que describa la imagen')
      .row
        .col-md-4.mb-4.mb-md-0
          figure
            img.img-a(src='@/assets/curso/tema_4/img_11.png', alt='Texto que describa la imagen')
        .col-md-8
          h4 Responda preguntas
          p Prepárese para responder preguntas específicas con respuestas concisas.
      .row
        .col-md-8.mb-4.mb-md-0
          h4 No mienta
          p Si no conoce la respuesta, es mejor no dar información equivocada. Anótelas para llegar a cubrirlas en una próxima presentación.
        .col-md-4
          figure
            img.img-a(src='@/assets/curso/tema_4/img_12.png', alt='Texto que describa la imagen')

    h4.text-center.mb-5 Consejos para la presentación

    .row.align-items-center.bg-color1.p-5(data-aos="slide-right")
      .col-lg-12.mb-4.mb-lg-0
        SlyderA
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              .row.align-items-center
                .col-lg-4.mb-4.mb-lg-0
                  figure
                    img.img-a(src='@/assets/curso/tema_4/img_13.png', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-lg-0
                  .list.mb-3
                    .list__item
                      .list__item__bulletNumber5 
                        span 1
                    .list__txt.mt-2  
                      h4 Portada
                  .line01.mb-3
                  ul.lista-ul--color
                    li 
                      i.lista-ul__vineta
                      | Imagen y logo atractivo, que reúna la esencia del proyecto.
                    li 
                      i.lista-ul__vineta
                      | Fecha de la presentación para que sea recordada.
                    li 
                      i.lista-ul__vineta
                      | Nombres de los integrantes del equipo o el nombre del estudio desarrollador.
                    li 
                      i.lista-ul__vineta
                      | Información de contacto: email y/o número telefónico.
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              .row.align-items-center
                .col-lg-4.mb-4.mb-lg-0
                  figure
                    img.img-a(src='@/assets/curso/tema_4/img_13.png', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-lg-0
                  .list.mb-3
                    .list__item
                      .list__item__bulletNumber5 
                        span 2
                    .list__txt.mt-2  
                      h4 Defina el problema
                  .line01.mb-3
                  ul.lista-ul--color
                    li 
                      i.lista-ul__vineta
                      | Presente de forma directa y concisa el problema que motivó la creación de su proyecto.
                    li 
                      i.lista-ul__vineta
                      | De datos certeros de fuentes de información confiables.
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              .row.align-items-center
                .col-lg-4.mb-4.mb-lg-0
                  figure
                    img.img-a(src='@/assets/curso/tema_4/img_13.png', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-lg-0
                  .list.mb-3
                    .list__item
                      .list__item__bulletNumber5 
                        span 3
                    .list__txt.mt-2  
                      h4 Solución
                  .line01.mb-3
                  p ¿Cuál es la solución que usted o su equipo idearon para el problema existente?
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              .row.align-items-center
                .col-lg-4.mb-4.mb-lg-0
                  figure
                    img.img-a(src='@/assets/curso/tema_4/img_13.png', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-lg-0
                  .list.mb-3
                    .list__item
                      .list__item__bulletNumber5 
                        span 4
                    .list__txt.mt-2  
                      h4 Target
                  .line01.mb-3
                  p Seguramente al definir el problema y plantear una solución lo ha hecho de acuerdo al público objetivo. En este apartado caracterice a ese segmento de la población al cual quiere dirigirse con su producto.
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              .row.align-items-center
                .col-lg-4.mb-4.mb-lg-0
                  figure
                    img.img-a(src='@/assets/curso/tema_4/img_13.png', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-lg-0
                  .list.mb-3
                    .list__item
                      .list__item__bulletNumber5 
                        span 5
                    .list__txt.mt-2  
                      h4 Perfil del estudio o equipo
                  .line01.mb-3
                  ul.lista-ul--color
                    li 
                      i.lista-ul__vineta
                      | Descripción breve de quién es usted y su experiencia.
                    li 
                      i.lista-ul__vineta
                      | Encaso de tenerlas, es bueno mostrar algunas piezas o proyectos en los que ha participado. Siempre y cuando tengan relación con el proyecto a exponer.
                    li 
                      i.lista-ul__vineta
                      | ¿Por qué usted o su equipo son idóneos para ejecutar la solución planteada?.
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              .row.align-items-center
                .col-lg-4.mb-4.mb-lg-0
                  figure
                    img.img-a(src='@/assets/curso/tema_4/img_13.png', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-lg-0
                  .list.mb-3
                    .list__item
                      .list__item__bulletNumber5 
                        span 6
                    .list__txt.mt-2  
                      h4 Especificaciones
                  .line01.mb-3
                  p Conceptos básicos de su proyecto:
                  ul.lista-ul--color
                    li 
                      i.lista-ul__vineta
                      | Tipo de proyecto, técnica, estilo.
                    li 
                      i.lista-ul__vineta
                      | Duración, formato y plataforma de distribución.
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              .row.align-items-center
                .col-lg-4.mb-4.mb-lg-0
                  figure
                    img.img-a(src='@/assets/curso/tema_4/img_13.png', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-lg-0
                  .list.mb-3
                    .list__item
                      .list__item__bulletNumber5 
                        span 7
                    .list__txt.mt-2  
                      h4 Historia
                  .line01.mb-3
                  p Presentación de la sinopsis de la historia. No necesariamente se tiene que contar el final, es posible presentar los puntos interesantes para generar expectativa. Ser sugerente.
          .row.justify-content-center.align-items-center
            .col-md-11.col-lg-9
              .row.align-items-center
                .col-lg-4.mb-4.mb-lg-0
                  figure
                    img.img-a(src='@/assets/curso/tema_4/img_13.png', alt='Texto que describa la imagen')
                .col-lg-8.mb-4.mb-lg-0
                  .list.mb-3
                    .list__item
                      .list__item__bulletNumber5 
                        span 8
                    .list__txt.mt-2  
                      h4 Características diferenciables
                  .line01.mb-3
                  p Presente de 3 a 5 características que hacen de su proyecto algo destacable, innovador o diferente.
    .row.justify-content-center
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-4(data-aos="flip-up") Para ampliar más acerca de un Elevator Pitch puede consultar desde el material complementario o desde la web algunos ejemplos que, aunque describen el discurso de un pitch con fines de financiación, aportan información valiosa y útil al momento de mostrar ideas de proyecto:

          .row.justify-content-center
            .col-lg-8
              a.anexo.mb-5.mb-lg-4(data-aos="flip-up")(href="https://www.youtube.com/embed/EsAkvzIoEvc" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[strong Ejemplo].  Negocios y Empresa (2018, Cómo hacer un Elevator Pitch que enamore al Inversor.

              a.anexo.mb-5.mb-lg-4(data-aos="flip-up")(href="https://www.youtube.com/embed/2b3xG_YjgvI" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[strong Ejemplo]. LurisdocTV, (2013), Elevator pitch. Tienes 20 segundos - eduCaixa








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
