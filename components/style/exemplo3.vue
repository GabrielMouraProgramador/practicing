<template>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    @click="$style.outra = 'black'"
  >
    CLICK
  </button>
  {{ $style.outra }}
  <p :class="$style.red">Isso deveria ser vermelho</p>
  <p :class="$style.outra">Isso deveria ser outra cor</p>
</template>
<script>
export default {
  created() {
    this.$style.outra = "text-slate-50 bg-yellow-400 text-7xl";
  },
};
</script>
<style module>
.red {
  color: red;
}
</style>
