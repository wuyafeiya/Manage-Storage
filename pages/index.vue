<script setup lang="ts">
definePageMeta({
  middleware:[
  function (to, from) {
     if(to.path === '/'){
       return '/manage/localstorage'
     }
    },
  ]
})
</script>

<template>
  <div>
    <slot/>
  </div>
</template>
