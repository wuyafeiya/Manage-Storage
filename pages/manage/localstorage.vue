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
function parseStorageItem(item: { id: number; key: string; value: string | null }) {
  if (!item.value) {
    return null; // 如果 value 是 null，直接返回 null
  }
  try {
    const parsedValue = JSON.parse(item.value); // 将 JSON 字符串解析为对象
    return {
      ...item,
      value: parsedValue, // 将解析后的对象赋值给 value
    };
  } catch (error) {
    console.error('Failed to parse value:', error);
    return null; // 如果解析失败，返回 null 或者处理方式
  }
}
</script>
<template>
  <div>
    <Card @new="open"></Card>
    <Slideover v-model:open="slideoverStore.isOpen" :info="info" :data="data"></Slideover>
  </div>
  <div class="~ m-7 rounded-sm shadow-md bg-slate-800">
    <UTable v-model:expand="expand" :columns="columns" :rows="people" :ui="{ td: { base: 'max-w-[0] truncate' } }">
      <template #expand="{ row }">
        <div class="p-4">
          <pre >{{ parseStorageItem(row) }}</pre>
        </div>
      </template>
      <template #actions-data="{ row }">
        <UButton icon="material-symbols:delete-outline" color="red" size="sm" class="mr-4"  @click="remove(row)"/>
        <UButton icon="material-symbols:edit" color="blue" size="sm" @click="edit(row)" />
      </template>
    </UTable>
  </div>
</template>
