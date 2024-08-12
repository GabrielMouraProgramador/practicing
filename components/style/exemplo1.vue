<script setup lang="ts">
const isActive = ref(true);
const classObject = reactive({
  "bg-orange-600": true,
  "h-50": true,
  "rounded-md": isActive.value,
});
</script>

<template>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    @click="isActive = !isActive"
  >
    CLICK</button
  >
  <div :class="{ 'bg-red-600 ': isActive }">conteudo1</div>
  <div :class="classObject">conteudo2</div>
</template>
