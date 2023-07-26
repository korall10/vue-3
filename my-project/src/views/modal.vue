<script>
import axios from "axios";

export default {
  data() {
    return {
      postsComments: null,
      show: false,
      post: null,
    };
  },
  methods: {
    showHideModal(post) {
      this.post = post;
      this.show = !this.show;
      axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
          this.postsComments = response.data.filter(
            (e) => e.postId == this.post.id
          );
        });
    },
  },
};
</script>

<template>
  <v-dialog v-model="show" class="w-[1024px]">
    <v-card style="border-radius: 24px" class="w-[1024px] h-[610px] py-9 px-8">
      <div class="bg-white">
        <div class="flex justify-between w-full">
          <p class="text-[24px] leading-5 font-medium text-[#26303E]">
            {{ post.title }}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-square-rounded-x cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="black"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            @click="show = false"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10l4 4m0 -4l-4 4" />
            <path
              d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"
            />
          </svg>
        </div>
        <div class="flex pt-2.5">
          <div class="w-[542px] h-[523px] overflow-y-auto mr-1">
            <p
              class="text-left text-sm font-normal px-5 pt-5 text-modaltextblack"
            >
              {{ post.body }}
            </p>
          </div>
          <div
            class="w-[418px] h-[523px] overflow-y-auto border-[#D8D9DD] border-l pl-6 pb-8 pr-[58px]"
          >
            <p class="text-2xl text-left text-black font-semibold mb-5">
              Comment
            </p>
            <div>
              <div v-for="userComment in postsComments" class="flex mt-10">
                <div class="rounded-full w-12 h-12 bg-black">
                  <img src="" alt="" class="object-cover rounded-full" />
                </div>
                <div class="grid gap-3 ml-4">
                  <p
                    class="text-[#26303E] text-left text-[14px] leading-[14px] font-medium"
                  >
                    {{ userComment.name }}
                  </p>
                  <p
                    class="text-[#5C6672] text-[14px] leading-[20px] text-left font-normal"
                  >
                    {{ userComment.body }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  background: white;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #d8d9dd;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #d8d9dd;
}
</style>
