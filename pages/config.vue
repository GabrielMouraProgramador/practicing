<template>
  <div class="container mx-auto">
    <ConfigExplanationRuntimeConfig />
    <br />

    <h5 class="font-bold normal-case mb-1">SSR</h5>
    {{ JSON.stringify(ssr, null, 2) }}
    <p class="font-bold mt-1">apiSecret</p>

    <br />

    <h5 class="font-bold normal-case mb-1">CLIENT</h5>
    {{ clienteRuntimeConfig }}

    <br />
    <br />
    <ConfigExplanationAppConfig />
    <br />
    {{ appConfig }}

    <br />
    <br />

    <h3 class="font-bold normal-case mb-1">runtimeConfig VS app.config</h3>

    Conforme declarado acima, runtimeConfige app.configsão ambos usados ​​para expor
    variáveis ​​para o resto do seu aplicativo. Para determinar se você deve usar um ou
    outro, aqui estão algumas diretrizes:
    <br />
    <span class="font-bold"> runtimeConfig:</span> <br />
    Tokens privados ou públicos que precisam ser especificados após a compilação usando
    variáveis ​​de ambiente. <br /><span class="font-bold"> app.config:</span> <br />
    Tokens públicos que são determinados no momento da compilação, configuração do site,
    como variante do tema, título e qualquer configuração do projeto que não seja
    confidencial. .<br />
  </div>
</template>
<script>
export default {
  data() {
    return {
      clienteRuntimeConfig: "",
      appConfig: {},
      ssr: {
        app: {
          baseURL: "/",
          buildId: "dev",
          buildAssetsDir: "/_nuxt/",
          cdnURL: "",
        },
        nitro: {
          envPrefix: "NUXT_",
          routeRules: {
            "/__nuxt_error": ["Object"],
            "/_nuxt/builds/meta/**": ["Object"],
            "/_nuxt/builds/**": ["Object"],
          },
        },
        public: {
          apiBase: "/api-public",
        },
        apiSecret: "api_secret_token",
      },
    };
  },
  mounted() {
    // 1 -
    this.clienteRuntimeConfig = useRuntimeConfig();
    // 2 -
    this.appConfig = useAppConfig();
  },
};
</script>
