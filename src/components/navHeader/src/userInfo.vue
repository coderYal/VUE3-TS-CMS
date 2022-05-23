<template>
  <div class="userInfo">
    <div class="content">
      <el-dropdown>
        <div class="el-dropdown-link">
          <div class="el-dropdown-link-icon">
            <el-icon class="el-icon-avatar"><Avatar /></el-icon>
          </div>
          <span>{{ name }}</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleSignOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'
import localCache from '@/utils/localCache'
import { ElMessageBox } from 'element-plus'

const name = localCache.getLocalCache('name')

const handleSignOut = () => {
  ElMessageBox.confirm('确定要退出登录吗', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    localCache.delLocalCache('token')
    router.push('/login')
  })
}
</script>

<style scoped lang="scss">
.content {
  .el-dropdown-link {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .el-dropdown-link-icon {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    background-color: #999;
    margin-right: 10px;
  }
  .el-icon-avatar {
    color: #f0f2f5;
  }
}
</style>
