<script>
import logo from "../ortak/logo.vue";
export default {
  components: {
    logo,
  },
};
</script>

<template>
  <Teleport to="body">
    <div
      class="flex flex-col justify-between bg-navdrawbg border-r fixed top-0 left-0 bottom-0 w-[260px] py-8"
    >
      <div class="flex h-10 w-full">
        <div class="bg-white w-full">
          <div class="flex items-center">
            <div class="bg-pcolor h-10 w-1.5 rounded-r-[6px]"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-users ml-8"
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
              <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
            </svg>
            <p class="flex items-center text-pcolor h-lg leading-7 pl-3">
              Users
            </p>
          </div>
        </div>
      </div>
      <logo></logo>
    </div>
  </Teleport>
</template>

<style scoped></style>
