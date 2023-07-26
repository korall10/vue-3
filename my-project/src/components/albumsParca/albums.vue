<script>
import albumCard from "./albumCard.vue";
import goHome from "../ortak/goHome.vue";
import axios from "axios";
export default {
  data() {
    return {
      usersAlbums: null,
    };
  },
  components: {
    albumCard,
    goHome,
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        this.usersAlbums = response.data.filter(
          (e) => e.userId == this.$route.params.id
        );
      });
  },
};
</script>

<template>
  <goHome></goHome>
  <div class="grid grid-cols-3 gap-6 mt-[26px]">
    <albumCard
      v-for="album in usersAlbums"
      :key="album.id"
      :album="album"
      class="relative w-full"
    ></albumCard>
  </div>
</template>

<style scoped></style>
