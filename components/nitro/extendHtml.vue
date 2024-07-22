<template>
  <div>
    <h1 class="font-bold mb-2 text-xl">Nitro</h1>
    <h3 class="font-bold normal-case mb-1">
      Exemplo 1 (servidor/plugins/extend-html.ts)
    </h3>

    <div>
      A
      <span class="font-bold">render:html</span>
      Você pode ter controle total sobre o template HTML adicionando um plugin Nitro que
      registra um hook. A função callback do render:htmlhook permite que você altere o
      HTML antes que ele seja enviado ao cliente.

      <br />

      <div class="bg-neutral-700 rounded-lg px-5 shadow-lg w-3/5 mt-5">
        <span class="normal-case text-white">servidor/plugins/extend-html.ts </span>
        <pre class="text-sm text-white">
                <code>
                    export default defineNitroPlugin((nitroApp) => {
                        nitroApp.hooks.hook('render:html', (html, { event }) => {
                            // Esta será uma representação de objeto do modelo HTML.
                            console.log(html)
                            html.head.push(`<meta name="description" content="My custom description" />`)
                        })
                        // Você também pode interceptar a resposta aqui.
                        nitroApp.hooks.hook('render:response', (response, { event }) => { console.log(response) })
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
