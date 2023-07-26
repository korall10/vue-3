<script setup>
import { computed, getCurrentInstance } from "vue";
const props = defineProps(["modelValue", "todo"]);
const emit = defineEmits(["update:modelValue"]);

const _instance = getCurrentInstance();
function lorem(e) {
  console.log("hallo", e);
}

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <div class="flex checkbox-wrapper-46 h-12">
    <input
      class="inp-cbx"
      :id="_instance.uid + 'chck'"
      :value="todo.id"
      type="checkbox"
      v-model="model"
      :checked="todo.completed"
    />
    <label class="cbx" :for="_instance.uid + 'chck'"
      ><span>
        <svg width="24px" height="24px" viewbox="0 0 0 0">
          <polyline points="1.5 7 4.5 10 10.5 1"></polyline></svg></span
      ><span class="text-[#485B69] text-sm font-normal">{{ todo.title }}</span>
    </label>
  </div>
</template>

<style scoped>
.checkbox-wrapper-46 input[type="checkbox"] {
  display: none;
  visibility: hidden;
}

.checkbox-wrapper-46 .cbx {
  margin: auto;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
}
.checkbox-wrapper-46 .cbx span {
  display: inline-block;
  vertical-align: middle;
  transform: translate3d(0, 0, 0);
}
.checkbox-wrapper-46 .cbx span:first-child {
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 3px;
  transform: scale(1);
  vertical-align: middle;
  border: 1px solid #9098a9;
  transition: all 0.2s ease;
}
.checkbox-wrapper-46 .cbx span:first-child svg {
  position: absolute;
  top: 6px;
  left: 5px;
  fill: none;
  stroke: #ffffff;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 24px;
  stroke-dashoffset: 24px;
  transition: all 0.3s ease;
  transition-delay: 0.1s;
  transform: translate3d(0, 0, 0);
}
.checkbox-wrapper-46 .cbx span:first-child:before {
  content: "";
  width: 100%;
  height: 100%;
  background: #4f359b;
  display: block;
  transform: scale(0);
  opacity: 1;
  border-radius: 50%;
}
.checkbox-wrapper-46 .cbx span:last-child {
  padding-left: 12px;
}
.checkbox-wrapper-46 .cbx:hover span:first-child {
  border-color: #4f359b;
}

.checkbox-wrapper-46 .inp-cbx:checked + .cbx span:first-child {
  background: #4f359b;
  border-color: #4f359b;
  animation: wave-46 0.4s ease;
}
.checkbox-wrapper-46 .inp-cbx:checked + .cbx span:first-child svg {
  stroke-dashoffset: 0;
}
.checkbox-wrapper-46 .inp-cbx:checked + .cbx span:first-child:before {
  transform: scale(3.5);
  opacity: 0;
  transition: all 0.6s ease;
}

@keyframes wave-46 {
  50% {
    transform: scale(0.9);
  }
}
</style>
