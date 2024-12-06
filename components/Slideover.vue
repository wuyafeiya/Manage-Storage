<script setup lang="ts">
const mylocalstorage = useLocalStorageStore()
const model = defineModel('open', {
  type: Boolean,
  default: false
})
const values = ref<(string)[]>([]);
const props = defineProps({
  info: {
    type: Object,
    default: () => { }
  },
  data: {
    type: Object,
    default: () => { }
  }
})
const clearinfo = () => {
  values.value = []
}
const close = () => {
  clearinfo()
  model.value = false
}
const save = () => {
  mylocalstorage.set(values.value[0], values.value[1]);
  clearinfo()
}
watch(() => model.value, (val) => {
  if (val) {
    values.value = [props.data.key, props.data.value]
  }
})
</script>
<template>
  <div>
    <USlideover v-model="model" :ui="{base:'~ overflow-scroll'}"> 
      <div class="p-4 flex-1">
        <h1 class="~ mb-5 text-lg">{{ props.info.title }}</h1>
        <div v-for="(item, index) in props.info.pre">
          <span class="text-sm">{{ item.name }}</span>
          <UInput v-model="values[index]" class="my-5" v-if="item.type==='text'" />
          <UTextarea resize v-model="values[index]" v-if="item.type == 'textarea'"  class="my-5"/>
        </div>
        <div>
          <UButton color="blue" class="mr-4" @click="save">Save</UButton>
          <UButton color="red" @click="close">Cancel</UButton>
        </div>
      </div>
    </USlideover>
  </div>
</template>
<style>
/* 隐藏浏览器滚动条 */
::-webkit-scrollbar {
  display: none;
}
</style>
