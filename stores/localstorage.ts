export const useLocalStorageStore = defineStore('mylocalstorage', () => {
  interface StorageItem {
    id: number;
    key: string;
    value: string | null;
  }
  const storageData = ref<StorageItem[]>([]);
  const get = (key: string) => {
    return localStorage.getItem(key);
  };
 const remove=(key:string)=>{
    localStorage.removeItem(key);
    updateStorageData();
 }
  const set = (key: string, value: string) => {
    localStorage.setItem(key, JSON.stringify(value));
    updateStorageData(); // 更新响应式数据
  };

  const getAll = () => {
    updateStorageData(); // 确保每次调用时同步更新数据
    return storageData;
  };

  const updateStorageData = () => {
    if (isClient) {
      storageData.value = Object.keys(localStorage).map((key, index) => ({
        id: index + 1,
        key: key,
        value: localStorage.getItem(key),
      }))
    }
  };
  // 初始化时更新数据
  updateStorageData();

  return { get, set, getAll,updateStorageData,remove };
});
