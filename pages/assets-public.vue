<template>
  <div>
    <h3 class="font-bold normal-case mb-1">4 - Assets & Public</h3>

    <div>
      O Nuxt usa dois diretórios para manipular ativos como folhas de estilo, fontes ou
      imagens.<br />
      O conteúdo do diretório é servido na raiz do servidor como está.
      <span class="font-bold">public/</span><br />
      O diretório contém, por convenção, todos os ativos que você deseja que a ferramenta
      de construção (Vite ou webpack) processe. <span class="font-bold">assets/</span>
      <br />

      <div class="bg-neutral-700 rounded-lg px-5 shadow-lg w-3/5 mt-5">
        Exemplo Por exemplo, referenciando um arquivo de imagem no public/img/diretório,
        disponível na URL estática /img/favicon.ico":

        <span class="normal-case text-white"></span>
        <pre class="text-sm text-white">
              <code>
          
                  <img src="/favicon.ico" alt="Discover Nuxt 3" />

              </code>
          </pre>
      </div>
    </div>
    <div class="mt-2 bg-white text-sm text-gray-600 rounded-lg p-4" role="alert">
      <span class="font-bold">Alerta</span> Abra o código para ver os exemplos na prática.
    </div>
    <br />
    <br />
    <br />
    <div>
      Diretório de ativos O Nuxt usa Vite (padrão) ou webpack para construir e empacotar
      seu aplicativo. A principal função dessas ferramentas de construção é processar
      arquivos JavaScript, mas elas podem ser estendidas por meio de plugins (para Vite)
      ou carregadores (para webpack) para processar outros tipos de ativos, como folhas de
      estilo, fontes ou SVG. Esta etapa transforma o arquivo original principalmente para
      fins de desempenho ou cache (como minificação de folhas de estilo ou invalidação de
      cache do navegador). Por convenção, o Nuxt usa o diretório para armazenar esses
      arquivos, mas não há funcionalidade de verificação automática para esse diretório, e
      você pode usar qualquer outro nome para ele.assets/ No código do seu aplicativo,
      você pode referenciar um arquivo localizado no diretório usando o
      caminho.assets/~/assets/ Exemplo Por exemplo, referenciando um arquivo de imagem que
      será processado se uma ferramenta de compilação estiver configurada para lidar com
      esta extensão de arquivo:

      <div class="bg-neutral-700 rounded-lg px-5 shadow-lg w-3/5 mt-5">
        Exemplo Por exemplo, referenciando um arquivo de imagem no public/diretório,
        disponível na URL estática /nuxt.png:

        <span class="normal-case text-white"></span>
        <pre class="text-sm text-white">
              <code>
          
                <img src="~/assets/nuxt.svg" alt="Discover Nuxt 3" />

              </code>
          </pre>
      </div>
    </div>
    <div class="mt-2 bg-white text-sm text-gray-600 rounded-lg p-4" role="alert">
      <span class="font-bold">Alerta</span> Abra o código para ver os exemplos na prática.
    </div>
  </div>
</template>
