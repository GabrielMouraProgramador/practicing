<template>
  <div>
    <h3 class="font-bold normal-case mb-1">2 - app.config.ts</h3>

    <div>
      O
      <span class="font-bold">app.config.ts</span>
      arquivo, localizado no diretório de origem (por padrão, a raiz do projeto), é usado
      para expor variáveis ​​públicas que podem ser determinadas no momento da construção.
      Ao contrário da runtimeConfigopção, elas
      <span class="font-bold">
        não podem ser substituídas usando variáveis ​​de ambiente (ENV)</span
      >
      .<br />

      <div class="bg-neutral-700 rounded-lg px-5 shadow-lg w-3/5 mt-5">
        <span class="normal-case text-white">app.config.ts</span>
        <pre class="text-sm text-white">
              <code>
                export default defineAppConfig({
                  title: 'Hello Nuxt',
                  theme: {
                    dark: true,
                    colors: {
                      primary: '#ff0000'
                    }
                  }
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
