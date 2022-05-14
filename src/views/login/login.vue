<template>
  <div class="login">
    <div class="content">
      <h1 class="title">后台管理系统</h1>
      <el-tabs type="border-card" stretch>
        <el-tab-pane>
          <template #label>
            <span><i class="el-icon-user-solid" /> 账号登录</span>
          </template>
          <!-- 账号登录 -->
          <account-login ref="accountLoginRef" />
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <span><i class="el-icon-mobile-phone" /> 手机登录</span>
          </template>
          <!-- 手机登录 -->
          <login-by-phone />
        </el-tab-pane>
      </el-tabs>
      <div class="bottom">
        <el-checkbox v-model="rememberPassword">记住密码</el-checkbox>
        <el-link class="forgot-password" type="primary" :underline="false">
          忘记密码
        </el-link>
      </div>
      <el-button
        class="login-btn"
        type="primary"
        @click="handleLogInImmediately"
        >立即登录</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import AccountLogin from './components/accountLogin.vue'
import LoginByPhone from './components/loginByPhone.vue'

import { ref } from 'vue'

const rememberPassword = ref<boolean>(true)

const accountLoginRef = ref(null)
const handleLogInImmediately = () => {
  accountLoginRef.value?.handleAccountLogin(rememberPassword.value)
}
</script>

<style scoped lang="scss">
.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('~@/assets/images/login-bg.svg');
  .title {
    text-align: center;
  }
  .content {
    width: 320px;
    margin-bottom: 200px;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    .forgot-password {
      color: #409eff;
    }
  }
  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
