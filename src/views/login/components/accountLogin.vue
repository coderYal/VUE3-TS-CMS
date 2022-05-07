<template>
  <div class="accountLogin">
    <el-form ref="form" :model="formData" :rules="rules" label-width="60px">
      <el-form-item label="账号" prop="name">
        <el-input v-model="formData.name" maxlength="11" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="formData.password" maxlength="20" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, defineExpose, ref } from 'vue'
import { useStore } from 'vuex'
import { rules } from '../config/account-config'
import localCache from '@/utils/localCache'

const store = useStore()

const form = ref(null)
const formData = reactive({
  name: localCache.getLocalCache('name') ?? '',
  password: localCache.getLocalCache('password') ?? ''
})

const validate = () => {
  return new Promise<boolean>((resolve) => {
    form.value?.validate((valid) => {
      resolve(valid)
    })
  })
}
const handleAccountLogin = async (isRememberPassword: boolean) => {
  const valid = await validate()
  if (!valid) return
  const isLoginSuccessful = await store.dispatch('login/handleLogin', formData)
  // 是否需要保存账号和密码，保存在localStorage里
  if (!isLoginSuccessful) return
  if (isRememberPassword) {
    const { name, password } = formData
    localCache.setLocalCache('name', name)
    localCache.setLocalCache('password', password)
  } else {
    localCache.delLocalCache('name')
    localCache.delLocalCache('password')
  }
}

// 把方法暴露出去，让父组件能通过ref访问调用
defineExpose({
  handleAccountLogin
})
</script>

<style scoped></style>
