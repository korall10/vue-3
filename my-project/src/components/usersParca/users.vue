<script>
import card from "./card.vue";
import axios from "axios";
export default {
  data() {
    return {
      users: null,
    };
  },
  components: {
    card,
  },
  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      this.users = response.data;
    });
  },
};
</script>

<template>
  <p
    class="text-[#26303E] font-semibold text-left text-xl leading-5 ml-[9px] mb-[35px]"
  >
    All users
  </p>
  <div class="grid grid-cols-3 gap-y-8 gap-x-6">
    <card
      v-for="user in users"
      :key="user.id"
      :user_data="user"
      class="relative w-full"
    ></card>
  </div>
</template>

<style scoped></style>
