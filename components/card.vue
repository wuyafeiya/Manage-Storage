<script setup lang="ts">
const mylocalstorage=useLocalStorageStore()
const emit = defineEmits(['new'])
const handleNew = (isCreate:boolean) => {
  emit('new',isCreate)
}
const refresh=()=>{
  mylocalstorage.updateStorageData()
}
</script>
<template>
  <div class="~ flex gap-6 px-8">
    <UButton icon="material-symbols:new-window-sharp" @click="handleNew(true)">新建</UButton>
    <UButton icon="mingcute:refresh-4-line" @click="refresh">刷新</UButton>
    <UButton icon="material-symbols:delete-outline">清空所有</UButton>
    <UInput
      icon="i-heroicons-magnifying-glass-20-solid"
      size="lg"
      color="white"
      :trailing="false"
      class="ml-auto"
    />
  </div>
</template>
