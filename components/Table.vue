<script setup lang="ts">
interface StorageItem {
  id?: number;
  key?: string;
  value?: string | null;
}
interface tavle {
  key: string;
  label: string;
}
const props = defineProps<{
  people: Array<StorageItem>,
  columns: Array<tavle>,
  expand: {
    openedRows: Array<StorageItem>,
    row: {}
  },
  isLoading: boolean
}>()
const emit = defineEmits<{
  (e: 'remove', row: StorageItem): void
  (e: 'edit', row: StorageItem): void
}>()
const remove = (row: StorageItem) => {
  emit('remove', row)
}
const edit = (row: StorageItem) => {
  emit('edit', row)
}
</script>

<template>
  <UTable :loading="props.isLoading"  v-model:expand="props.expand" :columns="columns" :rows="props.people"
    :ui="{ td: { base: 'max-w-[0] truncate text-base dark:text-green-400' } }">
    <template #expand="{ row }">
      <div class="p-4">
        <pre>{{parseStorageItem(row)}}</pre>
      </div>
    </template>
    <template #actions-data="{ row }">
      <UButton icon="material-symbols:delete-outline" color="red" size="sm" class="mr-4" @click="remove(row)" />
      <UButton icon="material-symbols:edit" color="blue" size="sm" @click="edit(row)" />
    </template>
  </UTable>
</template>
