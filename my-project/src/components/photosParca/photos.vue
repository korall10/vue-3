<script setup>
import { useRouter } from "vue-router";
import store from "../../store";

const router = useRouter();

const goAlbums = () => {
  console.log(store.state.selected_user.id);
  return router.push({
    name: "albums",
    params: { id: store.state.selected_user.id },
  });
};
</script>

<script>
import axios from "axios";
export default {
  data() {
    return {
      albumsPhotos: null,
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        this.albumsPhotos = response.data.filter(
          (e) => e.albumId == this.$route.params.id
        );
      });
  },
};
</script>

<template>
  <div
    @click="goAlbums"
    class="flex flex-row items-center content-center mb-[26px]"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-square-rounded-arrow-left"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#000000"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8l-4 4l4 4" />
      <path d="M16 12h-8" />
      <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
    </svg>
    <p class="text-[#26303E] font-semibold text-xl leading-5 text-left pl-6">
      Go Albums
    </p>
  </div>
  <div class="grid grid-cols-5 gap-8">
    <img
      v-for="photo in albumsPhotos"
      :key="photo.id"
      class="w-full h-auto object-cover"
      :src="photo.url"
      alt=""
    />
  </div>
</template>

<style scoped></style>
