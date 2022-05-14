<template>
  <div class="main">
    <el-container class="container">
      <el-aside class="aside" width="200px">
        <nav-menu />
      </el-aside>
      <el-container class="box-container">
        <el-header></el-header>
        <el-main class="box-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import NavMenu from '@/components/navMenu'
</script>

<style lang="scss" scoped>
.main,
.container {
  height: 100%;
  overflow: hidden;
}
.main {
  .aside {
    background-color: #001529;
  }
  .box-main {
    background-color: #f0f2f5;
  }
}
</style>
