<script>
import modal from "../../views/modal.vue";
import goHome from "../ortak/goHome.vue";
import axios from "axios";
export default {
  data() {
    return {
      usersPosts: null,
      modal: null,
    };
  },
  components: {
    modal,
    goHome,
  },
  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      this.usersPosts = response.data.filter(
        (e) => e.userId == this.$route.params.id
      );
    });
  },
  methods: {
    openModal(post) {
      this.$refs.detailModal.showHideModal(post);
    },
  },
};
</script>

<template>
  <goHome></goHome>
  <div class="mt-[26px]">
    <ul>
      <li v-for="post in usersPosts" class="">
        <div
          class="grid gap-3 items-center w-[1124px] border-b border-black py-5 px-8"
        >
          <p class="text-lg leading-5 text-[#26303E] text-left font-medium">
            {{ post.title }}
          </p>
          <p
            class="text-sm leading-5 text-posttextcolor text-left font-normal w-[540px]"
          >
            {{ post.body }}
          </p>
          <div class="relative">
            <div
              @click="openModal(post)"
              class="flex justify-end items-center py-1"
            >
              <p class="text-[#26303E] font-medium text-sm pr-6">See More</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-square-arrow-right rounded-full"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#581c87"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 16l4 -4l-4 -4" />
                <path d="M8 12h8" />
                <path
                  d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"
                />
              </svg>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <modal ref="detailModal"></modal>
</template>

<style scoped></style>
