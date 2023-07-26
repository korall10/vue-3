<script></script>

<template>
  <div
    class="flex flex-row border-b border-[#D8D9DD] pb-5 mx-4 text-clip overflow-hidden"
  >
    <img
      :src="$store.state.selected_user.url"
      alt=""
      class="bg-black w-12 h-12 rounded-full"
    />
    <div class="flex flex-col ml-3 overflow-hidden">
      <p
        class="flex text-[#26303E] font-medium text-lg items-center text-left mb-[2px]"
      >
        {{ $store.state.selected_user.name }}
      </p>
      <p
        class="flex text-[#5C6672] text-left text-sm leading-[14px] font-light items-center underline underline-offset"
      >
        {{ $store.state.selected_user.email }}
      </p>
    </div>
  </div>
</template>

<style></style>
