<script>
import navdraw from "../components/albumsParca/navdraw.vue";
import photos from "../components/photosParca/photos.vue";

export default {
  components: {
    navdraw,
    photos,
  },
};
</script>

<template>
  <navdraw></navdraw>
  <div class="w-screen h-screen pl-72 pt-[42px] pb-7 pr-7 overflow-auto">
    <photos></photos>
  </div>
</template>

<style scoped></style>
