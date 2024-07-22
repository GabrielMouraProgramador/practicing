<template>
  <div class="container mx-auto">
    <NitroExtendHtml />
    <br />

    <h5 class="font-bold normal-case mb-1">SSR</h5>
    {{ JSON.stringify(ssr, null, 2) }}
    <p class="font-bold mt-1">apiSecret</p>
  </div>
</template>
