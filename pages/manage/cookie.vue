<script setup lang="ts">
const slideoverStore = useSlideoverStore()
const open = () => {
  slideoverStore.open()
}
const info = reactive({
  pre: [{
    name: 'Name',
    type: 'text',
  },
  {
    name: 'value',
    type: 'text',
  },
  {
    name: 'Domain',
    type: 'text',
  },
  {
    name: 'Path',
    type: 'text',
  },
  {
    name: 'Expires / Max-Age',
    type: 'text',
  },
  {
    name: 'Size',
    type: 'text',
  },
  {
    name: 'HttpOnly',
    type: 'text',
  },
  {
    name: 'Secure',
    type: 'text',
  },
  {
    name: 'SameSite',
    type: 'text',
  }, {
    name: 'Partition Key site',
    type: 'text',
  }, {
    name: 'cross site',
    type: 'text'
  },
  {
    name: 'Priority',
    type: 'text',
  }
  ],
  title: 'Create Cookie',

})
</script>
<template>
  <div>
    <Card @new="open"></Card>
    <Slideover v-model:open="slideoverStore.isOpen" :info="info"></Slideover>
    <slot />
  </div>
</template>
