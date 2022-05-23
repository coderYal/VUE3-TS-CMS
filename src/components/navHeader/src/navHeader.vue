<template>
  <div class="navHeader">
    <i
      :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      @click="handleFold"
    />
    <div class="content">
      <al-breadcrumb class="el-breadcrumb" :breadcrumbs="currentBreadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { ref, defineEmits, computed } from 'vue'

import AlBreadcrumb from '@/baseUi/breadcrumb'
import userInfo from './userInfo.vue'
import { pathMapBreadcrumbs } from '@/utils/mapMenus'

const isFold = ref<boolean>(false)
const emit = defineEmits(['changeFold'])
const handleFold = () => {
  isFold.value = !isFold.value
  emit('changeFold', isFold.value)
}

const currentBreadcrumbs = computed(() => {
  const store = useStore()
  const userMenus = store.state.navMenuList
  const $route = useRoute()
  const currentPath = $route.path
  return pathMapBreadcrumbs(userMenus, currentPath)
})
</script>
<style lang="scss" scoped>
.navHeader {
  display: flex;
  align-items: center;
  width: 100%;
  > i {
    cursor: pointer;
    font-size: 35px;
  }
  .content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .el-breadcrumb {
      margin-left: 10px;
    }
  }
}
</style>
