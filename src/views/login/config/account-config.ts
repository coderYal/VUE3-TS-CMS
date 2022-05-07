export const rules = {
  account: { required: true, message: '请输入账号', trigger: 'blur' },
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '密码最小为6位，最多20位', trigger: 'blur' }
  ]
}
