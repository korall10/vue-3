<script setup>
import { useRouter } from "vue-router";
import store from "../../store";
const router = useRouter();

const props = defineProps(["user_data"]);
const goTodos = () => {
  store.state.selected_user = props.user_data;
  localStorage.setItem("selected_user", JSON.stringify(props.user_data));
  return router.push({
    name: "todos",
    params: { id: props.user_data.id },
  });
};
</script>

<template>
  <div
    id="userCard"
    @click="goTodos"
    class="flex flex-col w-[361px] h-[372px] border-[1px] rounded-[12px] border-[#D8D9DD] px-6 py-5"
    style="hover:box-shadow:0px 0px 100px 100px rgba(0,0,0,0.1)"
  >
    <div class="flex items-betweens w-full h-[100px]">
      <div
        class="w-[100px] h-[100px] bg-neutral-950 rounded-full bg-cover bg-center"
      >
        <img
          :src="user_data.avatar"
          alt=""
          class="w-full h-full object-cover rounded-full"
        />
      </div>
      <div
        class="grid gap-2 text-left w-[220px] h-[100px] pt-[21px] pl-[24px] pb-[17px] break-words"
      >
        <p class="text-cardtextblack leading-[18px] text-lg font-medium">
          {{ user_data.name }}
        </p>
        <p class="text-cardtextgray leading-[14px] text-sm font-light">
          {{ user_data.email }}
        </p>
        <p class="text-cardtextgray leading-[14px] text-sm font-light">
          {{ user_data.phone }}
        </p>
      </div>
    </div>
    <div class="grid pt-8 w-[260px] gap-y-4">
      <div class="grid w-full text-left gap-2">
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-map-pin"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            <path
              d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
            />
          </svg>
          <p class="text-sm font-medium text-cardtextblack ml-3">Location</p>
        </div>
        <p class="text-sm font-light text-cardtextgray">
          {{ user_data.address.street }} {{ user_data.address.suite }}
        </p>
      </div>
      <div class="grid w-full text-left gap-2">
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-building-skyscraper"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 21l18 0" />
            <path d="M5 21v-14l8 -4v18" />
            <path d="M19 21v-10l-6 -4" />
            <path d="M9 9l0 .01" />
            <path d="M9 12l0 .01" />
            <path d="M9 15l0 .01" />
            <path d="M9 18l0 .01" />
          </svg>
          <p class="text-sm font-medium text-cardtextblack ml-3">Company</p>
        </div>
        <p class="text-sm font-light text-cardtextgray">
          {{ user_data.address.street }} {{ user_data.address.suite }}
        </p>
      </div>
      <div class="grid w-full text-left gap-2">
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-world-share"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M20.94 13.045a9 9 0 1 0 -8.953 7.955" />
            <path d="M3.6 9h16.8" />
            <path d="M3.6 15h9.4" />
            <path d="M11.5 3a17 17 0 0 0 0 18" />
            <path d="M12.5 3a16.991 16.991 0 0 1 2.529 10.294" />
            <path d="M16 22l5 -5" />
            <path d="M21 21.5v-4.5h-4.5" />
          </svg>
          <p class="text-sm font-medium text-cardtextblack ml-3">Website</p>
        </div>
        <p class="text-sm font-light text-cardtextgray">
          {{ user_data.website }}
        </p>
      </div>
    </div>
  </div>
</template>
<script></script>

<style scoped>
#userCard:hover {
  box-shadow: 0px 0px 48px 0px rgba(85, 85, 85, 0.25);
}
</style>
