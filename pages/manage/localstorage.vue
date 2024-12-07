<script setup lang="ts">
const slideoverStore = useSlideoverStore()
const mylocalstorage = useLocalStorageStore()
const open = (isCreate?:string) => {
  console.log(isCreate)
  if(isCreate){
    data.value = {}
  }
  slideoverStore.open()
}
const isLoading=ref(false)
const data = ref({})
const info = reactive({
  pre: [{
    name: 'key',
    type: 'text',
  },
  {
    name: 'value',
    type: 'textarea',
  }],
  title: 'Create Local Storage',
})
const columns = [
  {
    key: 'id',
    label: 'ID'
  }
  , {
    key: 'key',
    label: 'key'
  }, {
    key: 'value',
    label: 'Value'
  },
  {
    key: 'actions',
    label: 'edit',
  }
]
const remove=(row:any)=>{
  mylocalstorage.remove(row.key)
}
const people = mylocalstorage.getAll()
const expand = ref({
  openedRows: [people.value[0]],
  row: {}
})
const edit = (row: any) => {
  console.log(row)
  data.value = row
  open()
}
const refersh = () => {
  console.log('2')
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
}
</script>
<template>
  <div>
    <Card @new="open" @refreshs="refersh"></Card>
    <Slideover v-model:open="slideoverStore.isOpen" :info="info" :data="data"></Slideover>
  </div>
  <div class="~ m-7 rounded-sm shadow-md bg-slate-800">
    <Table :isLoading="isLoading" :people="people" :columns="columns" :expand="expand" @remove="remove" @edit="edit" />
  </div>
</template>
