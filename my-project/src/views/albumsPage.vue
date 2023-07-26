<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const goUsers = () => {
  return router.push("/");
};
</script>

<script>
import navdraw from "../components/albumsParca/navdraw.vue";
import albums from "../components/albumsParca/albums.vue";
export default {
  components: {
    navdraw,
    albums,
  },
};
</script>

<template>
  <navdraw></navdraw>
  <div class="w-screen h-screen pl-72 pt-[42px] pb-7 pr-7 overflow-auto">
    <albums></albums>
  </div>
</template>

<style scoped></style>
