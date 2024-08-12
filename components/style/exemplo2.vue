<script setup lang="ts">
const color = ref("red");
const isActive = ref(true);

// a computed ref
const colorDinam = computed(() => {
  return isActive.value ? "red" : "black";
});
</script>

<template>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    @click="isActive = !isActive"
  >
    CLICK
  </button>

  <div class="text">hello</div>
  <div class="text2">text-dinamic</div>
</template>

<style scoped>
.text {
  color: v-bind(color);
}
.text2 {
  color: v-bind(colorDinam);
}
</style>
