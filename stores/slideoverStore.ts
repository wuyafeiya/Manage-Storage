export const useSlideoverStore = defineStore('slideover', () => {
  const isOpen = ref(false)
  const open = () => {
    isOpen.value = true
  }

  const close = () => {
    isOpen.value = false
  }
  return { isOpen, open, close }
})
