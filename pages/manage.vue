<script setup lang="ts">
const info=[
  {
    path:'localstorage',
    name:'Local Storage'
  },
  {
    path:'cookie',
    name:'Cookie'
  },
  {
    path:'session',
    name:'Session Storage'
  },
  {
    path:'indexeddb',
    name:'IndexedDB'
  }
]
const path=(path:string)=>{
  return  path.split('/').pop()
}
</script>
<template>
  <div class="~ w-full p-4 border-b-orange-500 border-b-2 mb-6">
    <div class="flex gap-6">
      <div v-for="(item,index) in info" :key="index" class="~ w-40" :class="['p-4 text-center', path($route.path) === item.path ? 'border-b border-blue-400' : '']">
        <nuxt-link :to="'/manage/' + item.path">{{ item.name }}</nuxt-link>
      </div>
    </div>
  </div>
  <NuxtPage></NuxtPage>
</template>
