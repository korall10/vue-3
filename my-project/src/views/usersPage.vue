<script>
import navdraw from "../components/usersParca/navdraw.vue";
import users from "../components/usersParca/users.vue";
export default {
  components: {
    navdraw,
    users,
  },
};
</script>

<template>
  <navdraw></navdraw>
  <div class="w-screen h-screen pl-72 pt-11 pb-7 pr-7 overflow-auto">
    <users></users>
  </div>
</template>

<style scoped></style>
