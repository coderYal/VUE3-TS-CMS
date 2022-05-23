<template>
  <div class="main">
    <el-container class="container">
      <el-aside class="aside" :width="isFoldVal ? '60px' : '210px'">
        <nav-menu :collapse="isFoldVal" />
      </el-aside>
      <el-container class="box-container">
        <el-header class="header">
          <nav-header @changeFold="changeFold" />
        </el-header>
        <el-main class="box-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import NavMenu from '@/components/navMenu'
import NavHeader from '@/components/navHeader'
import { ref } from 'vue'

let isFoldVal = ref<boolean>(false)
const changeFold = (isFold: boolean) => {
  isFoldVal.value = isFold
}
</script>

<style lang="scss" scoped>
.main,
.container {
  height: 100%;
  overflow: hidden;
}
.main {
  .header {
    display: flex;
    align-items: center;
  }
  .aside {
    background-color: #001529;
    transition: width 0.3s linear;
  }
  .box-main {
    background-color: #f0f2f5;
  }
}
</style>
