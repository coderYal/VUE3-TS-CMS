<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in props.breadcrumbs" :key="item.path">
        <el-breadcrumb-item :to="{ path: item.path }">
          {{ item.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import type { IBreadcrumb } from '@/baseUi/breadcrumb/types'

const props = defineProps({
  breadcrumbs: {
    type: Array as PropType<IBreadcrumb[]>,
    default: () => []
  }
})
</script>

<style scoped></style>
