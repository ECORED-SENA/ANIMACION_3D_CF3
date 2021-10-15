<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center
      .col-lg-10
        p.mb-5(data-aos="slide-left") El desarrollo audiovisual es un proceso estructurado que requiere planeación cuidadosa para lograr que la idea que se desea comunicar llegue adecuadamente al espectador, de ahí la importancia en conocer y apropiar conceptos esenciales de lenguaje audiovisual que potencien la narración de la historia y permitan desarrollar apropiadamente una propuesta gráfica mediante la creación de un <em>storyboard</em>, para así determinar si el planteamiento original se logra traducir adecuadamente a imágenes y por tanto, mantiene la esencia del mensaje.
        .cajon.color-secundario.p-4(data-aos="slide-right")
          p Para lograr esto es necesario hacer una exploración en torno a temáticas relacionadas con dibujo básico, lenguaje audiovisual #[i storyboard] y #[i pitch] para culminar la etapa subsecuente al desarrollo del guion y por tanto, finalizar la etapa de planeación y su respectiva presentación para así determinar la fuerza de la idea y realizar los ajustes pertinentes antes de iniciar el proceso de pre producción. 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
