<template>
  <div>
    <h1 class="font-bold mb-2 text-xl">Style</h1>
    <div>
      <h3 class="font-bold normal-case mb-1mt-5">Exemplo 1</h3>
      <p>Class dinamicas</p>
      <StyleExemplo1 />
      <h3 class="font-bold normal-case mb-1 mt-5">Exemplo 2 v-bind</h3>
      <p>V-bind integra variáveis do script no estilo.</p>
      <StyleExemplo2 />
      <h3 class="font-bold normal-case mb-1 mt-5">
        Exemplo 3 Módulos CSS (this.$style )
      </h3>
      <p>this.$style injeta css e mode ser manupulado pelo js</p>
      <StyleExemplo3 />
    </div>
    <div class="mt-2 bg-white text-sm text-gray-600 rounded-lg p-4" role="alert">
      <span class="font-bold">Alerta</span> Abra o código para ver os exemplos na prática.
    </div>
  </div>
</template>
<script>
// Use a static import for server-side compatibility
// import '~/assets/css/first.css'

// Caution: Dynamic imports are not server-side compatible
// import('~/assets/css/first.css')
</script>

<style>
/* IMPORT */
/* @import url("~/assets/css/second.css"); */
</style>
