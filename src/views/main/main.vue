<template>
  <div class="main">{{ test }}</div>
  <div class="main">{{ test1 }}</div>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  setup() {
    const test = reactive({
      a: 1
    })
    const test1 = ref(2)
    console.log(test.value)
    console.log(test1.value)

    return {
      test,
      test1
    }
  }
})
</script>

<style scoped></style>
