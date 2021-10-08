<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Montaje

    .row.align-items-center.mb-5(data-aos="slide-right")
      .col-lg-8.mb-4.mb-lg-0.bg-color3.p-5
        p El montaje o también conocido como edición, es el proceso mediante el cual se determina la duración y cortes de cada uno de los planos, de la misma manera se realiza la sincronización de sonidos para otorgar mayor sentido al audiovisual.

        p En el siguiente video se expone el proceso básico para el montaje de los cuadros elaborados en el proceso de #[i storyboard] con la finalidad de elaborar una animatic.

        p.mb-0 Para esto se utilizará el programa Blender el cual es un #[i software]libre que se puede obtener gratuitamente en la página 
           a(href="https://www.blender.org/" target="_blank").link-color www.blender.org.

      .col-lg-4.mb-4.mb-lg-0
        figure
          img.img-a(src='@/assets/curso/tema_3/img_10.png', alt='Texto que describa la imagen')

    h4.mb-5 Instalación de Blender:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/f5k6B6K8aA8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Dsb2amh5DxM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.text-center Aunque su uso principalmente está enfocado en el 3D, posee un apartado dedicado a la edición de video básica, ideal para introducirse en el mundo del montaje.
    
    


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
