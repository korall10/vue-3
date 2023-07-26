<script setup>
import { useRouter } from "vue-router";
import store from "../../store";
const router = useRouter();

const goPosts = () => {
  return router.push({
    name: "posts",
    params: { id: store.state.selected_user.id },
  });
};
const goAlbums = () => {
  return router.push({
    name: "albums",
    params: { id: store.state.selected_user.id },
  });
};
</script>

<script>
import navbarUser from "../ortak/navbarUser.vue";
import logo from "../ortak/logo.vue";
export default {
  components: {
    navbarUser,
    logo,
  },
};
</script>

<template>
  <Teleport to="body">
    <div
      class="flex flex-col justify-between bg-navdrawbg border-r fixed top-0 left-0 bottom-0 w-[260px] py-8"
    >
      <div class="grid gap-y-14">
        <navbarUser></navbarUser>
        <div class="grid gap-6">
          <div class="flex h-[40px] bg-white w-full">
            <div class="flex items-center">
              <div class="bg-[#4F359B] h-10 w-1.5 rounded-r-lg mr-8"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-checkup-list mr-3"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#4F359B"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"
                />
                <path
                  d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"
                />
                <path d="M9 14h.01" />
                <path d="M9 17h.01" />
                <path d="M12 16l1 1l3 -3" />
              </svg>
              <p class="flex items-center text-[#4F359B] text-lg">Todos</p>
            </div>
          </div>
          <div @click="goPosts" class="flex h-[40px] bg-navdrawbg w-full">
            <div class="flex items-center ml-[38px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-notebook mr-3"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#4f359b"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18"
                />
                <path d="M13 8l2 0" />
                <path d="M13 12l2 0" />
              </svg>
              <p
                class="flex items-center font-normal text-navdrawtextgray text-lg"
              >
                Posts
              </p>
            </div>
          </div>
          <div @click="goAlbums" class="flex h-[40px] bg-navdrawbg w-full">
            <div class="flex items-center ml-[38px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-photo-heart mr-3"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#4f359b"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 8h.01" />
                <path
                  d="M11.5 21h-5.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5"
                />
                <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l1.5 1.5" />
                <path
                  d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z"
                />
              </svg>
              <p class="flex items-center text-navdrawtextgray text-lg">
                Albums
              </p>
            </div>
          </div>
        </div>
      </div>

      <logo></logo>
    </div>
  </Teleport>
</template>

<style></style>
