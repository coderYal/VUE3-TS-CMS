<template>
  <div class="overview">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>头部</span>
        </div>
      </template>
      <div class="content">
        <page-content :table-config="tableConfig" @del="del">
          <template #province="{ row }">
            <span>{{ row.address }}省</span>
          </template>
        </page-content>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

import type { ITableConfig } from '@/baseUi/table/type'
import { getGoodsList, delGoods } from '@/service/analysis/overview/overview'

import PageContent from '@/baseUi/pageContent'

const tableConfig: ITableConfig = reactive({
  tableData: [],
  tableColumns: [
    {
      prop: 'address',
      label: '地址',
      slotName: 'province'
    },
    {
      prop: 'createAt',
      label: '时间',
      slotName: 'createAt'
    },
    {
      prop: 'desc',
      label: '描述',
      showOverflowTooltip: true
    },
    {
      prop: 'favorCount',
      label: '数量'
    },
    {
      prop: 'status',
      label: '状态',
      slotName: 'status'
    },
    {
      prop: 'imgUrl',
      label: '图片',
      slotName: 'pic'
    },
    {
      prop: 'newPrice',
      label: '价格',
      slotName: 'money'
    },
    {
      prop: 'operate',
      label: '操作',
      slotName: 'handle'
    }
  ],
  tableHeaderAlign: 'center',
  tableContentColumnsAlign: 'center',
  index: { isShow: true },
  isShowSelection: true,
  maxHeight: '700'
})
const _getGoodsList = () => {
  getGoodsList().then(({ data }) => {
    if (!data) return
    tableConfig.tableData = data.list || []
  })
}
_getGoodsList()

const del = (id: string) => {
  ElMessageBox.confirm('您确定要删除吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'error'
  })
    .then(async () => {
      await delGoods(id)
      ElMessage.success('操作成功')
      _getGoodsList()
    })
    .catch((e) => {
      console.log(e)
    })
}
</script>

<style scoped lang="scss">
.overview {
  height: 100%;
}
</style>
