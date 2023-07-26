<script>
import todo from "./todo.vue";
import goHome from "../ortak/goHome.vue";
import axios from "axios";

export default {
  components: {
    todo,
    goHome,
  },
  data() {
    return {
      test: [1, 5, 6, 7],
      usersTodos: null,
    };
  },
  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
      this.usersTodos = response.data.filter(
        (e) => e.userId == this.$route.params.id
      );
    });
  },
};
</script>

<template>
  <goHome></goHome>
  <div class="flex flex-col relative ml-2 mt-[82px]">
    <ul>
      <li v-for="todo in usersTodos" :key="todo.id" class="flex items-center">
        <todo :todo="todo" v-model="test"></todo>
      </li>
    </ul>
  </div>
</template>

<style></style>
