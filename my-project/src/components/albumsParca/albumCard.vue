<script setup>
import { useRouter } from "vue-router";
import store from "../../store";
const router = useRouter();

const props = defineProps(["album"]);
const goFoto = () => {
  store.state.selected_album = props.album.id;
  return router.push({ name: "photos", params: { id: props.album.id } });
};
</script>

<script>
import axios from "axios";
import store from "../../store";
export default {
  data() {
    return {
      albumsPhotos: null,
    };
  },
  props: ["album"],
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        this.albumsPhotos = response.data.filter(
          (e) => e.albumId == this.album.id
        );
      });
  },
};
</script>

<template>
  <div
    @click="goFoto"
    class="grid gap-4 w-90 h-[334px] bg-white border rounded-[12px] p-5"
  >
    <div class="flex flex-wrap bg-black overflow-hidden">
      <img
        v-for="photos in albumsPhotos"
        :key="photos.id"
        :src="photos.url"
        alt="picture1"
        class="w-1/2 h-1/2 object-cover"
      />
    </div>
    <p class="text-left text-[#26303E] text-sm">
      {{ album.title }}
    </p>
  </div>
</template>

<style scoped></style>
