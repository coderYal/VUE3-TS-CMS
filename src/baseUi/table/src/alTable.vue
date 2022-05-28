<template>
  <div class="alTable">
    <el-table
      :header-cell-style="{
        'text-align': tableConfig.tableHeaderAlign || 'left'
      }"
      :cell-style="{
        'text-align': tableConfig.tableContentColumnsAlign || 'left'
      }"
      :data="tableConfig.tableData"
      :max-height="tableConfig.maxHeight"
    >
      <template v-if="tableConfig.isShowSelection">
        <el-table-column type="selection" />
      </template>
      <template v-if="tableConfig.index?.isShow">
        <el-table-column
          type="index"
          :label="tableConfig.index?.label || '序号'"
          :align="tableConfig.index?.align || 'left'"
          :width="tableConfig.index?.width || 'auto'"
        />
      </template>
      <template v-for="item in tableConfig.tableColumns" :key="item.prop">
        <el-table-column
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :align="item.align"
          :min-width="item.minWidth"
          :sortable="item.sortable"
          :show-overflow-tooltip="item.showOverflowTooltip"
        >
          <template #="{ row }">
            <slot :name="item.slotName" :row="row">
              <span>{{ row[item.prop] }}</span>
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <el-pagination
      v-model:currentPage="currentPage4"
      v-model:page-size="pageSize4"
      :page-sizes="[100, 200, 300, 400]"
      :small="small"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, ref } from 'vue'
import type { PropType } from 'vue'
import type { ITableConfig } from '@/baseUi/table/type'

const props = defineProps({
  tableConfig: {
    type: Object as PropType<ITableConfig>,
    required: true,
    default: () => ({})
  }
})
const tableConfig = computed(() => props.tableConfig)

const currentPage4 = ref(4)
const pageSize4 = ref(100)
const small = ref(false)
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>

<style scoped>
.el-pagination {
  position: absolute;
  right: 35px;
  bottom: 50px;
}
</style>
