<script setup></script>

<script>
import navdraw from "../components/postsParca/navdraw.vue";
import posts from "../components/postsParca/posts.vue";
export default {
  components: {
    navdraw,
    posts,
  },
};
</script>

<template>
  <navdraw></navdraw>
  <div class="w-screen h-screen pl-72 pt-[42px] pb-7 pr-7 overflow-auto">
    <posts></posts>
  </div>
</template>

<style scoped></style>
