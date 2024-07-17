<script setup>
const runtimeConfig = useRuntimeConfig();
console.log(runtimeConfig);
</script>

<template>
  <div class="container mx-auto">
    <ConfigExplanation />
    <br />

    <h5 class="font-bold normal-case mb-1">SSR</h5>
    {{ JSON.stringify(ssr, null, 2) }}
    <p class="font-bold mt-1">apiSecret</p>

    <br />

    <h5 class="font-bold normal-case mb-1">CLIENT</h5>
    {{ cliente }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      cliente: "",
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
    this.cliente = useRuntimeConfig();
  },
};
</script>
