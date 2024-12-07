export const isClient = typeof window !== 'undefined' && typeof document !== 'undefined'

export const parseStorageItem = (item: { id: number; key: string; value: string | null }) => {
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
    return {
      ...item, // 将解析后的对象赋值给 value
    };
  }
}
