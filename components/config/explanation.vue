<template>
  <div>
    <h1 class="font-bold mb-2 text-xl">Configuração</h1>
    <h3 class="font-bold normal-case mb-1">Variáveis ​​de ambiente e tokens privados</h3>

    <div>
      A
      <span class="font-bold">runtimeConfig</span>
      expõe valores como variáveis ​​de ambiente para o resto do seu aplicativo.<br />
      <br />
      Por padrão, essas chaves estão disponíveis apenas no lado do servidor. As chaves
      dentro runtimeConfig. <br />
      public também estão disponíveis no lado do cliente.<br />

      <div class="bg-neutral-700 rounded-lg px-5 shadow-lg w-3/5 mt-5">
        <span class="normal-case text-white">nuxt.config.ts</span>
        <pre class="text-sm text-white">
              <code>
              export default defineNuxtConfig({
                runtimeConfig: {
                  apiSecret: '123-privado',    
                  public: {
                    apiBase: '/api-public'
                  }
                },
              })
              </code>
          </pre>
      </div>
    </div>
    <div class="mt-2 bg-white text-sm text-gray-600 rounded-lg p-4" role="alert">
      <span class="font-bold">Alerta</span> Abra o código para ver os exemplos na prática.
    </div>
  </div>
</template>
