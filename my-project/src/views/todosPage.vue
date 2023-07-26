<script setup></script>

<script>
import navdraw from "../components/todosParca/navdraw.vue";
import todos from "../components/todosParca/todos.vue";
export default {
  components: {
    navdraw,
    todos,
  },
};
</script>

<template>
  <navdraw></navdraw>
  <div class="w-screen h-screen pl-72 pt-[42px] pb-7 pr-7 overflow-auto">
    <todos></todos>
  </div>
</template>
<style scoped></style>
