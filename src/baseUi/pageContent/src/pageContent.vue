<template>
  <div class="page-content">
    <al-table :table-config="tableConfig">
      <template #createAt="{ row }">
        <span>{{ $filters.formatTime(row.createAt) }}</span>
      </template>
      <template #pic="{ row }">
        <el-image
          style="width: 50px; height: 50px"
          :src="row.imgUrl"
          :preview-src-list="[row.imgUrl]"
          fit="cover"
        />
      </template>
      <template #money="{ row }">
        <span>{{ $filters.formatMoney(row.newPrice) }}</span>
      </template>
      <template #status="{ row }">
        <el-tag>{{ row.status === 1 ? '启用' : '禁用' }}</el-tag>
      </template>
      <template #handle="{ row }">
        <div class="handle">
          <el-button type="primary" size="mini" @click="handleEdit(row)">
            编辑
          </el-button>
          <el-button type="danger" size="mini" @click="handleDel(row.id)">
            删除
          </el-button>
        </div>
      </template>
      <template
        v-for="slotItem in otherSlotName"
        :key="slotItem.slotName"
        #[slotItem.slotName]="{ row }"
      >
        <slot :name="slotItem.slotName" :row="row" />
      </template>
    </al-table>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineEmits, defineProps } from 'vue'

import AlTable from '@/baseUi/table'

import type { PropType } from 'vue'
import type { ITableConfig } from '@/baseUi/table/type'

const props = defineProps({
  tableConfig: {
    type: Object as PropType<ITableConfig>,
    required: true
  }
})
const tableConfig = computed(() => props.tableConfig)

const emit = defineEmits(['edit', 'del'])
const handleEdit = (row: any) => emit('edit', row)
const handleDel = (id: string) => emit('del', id)

const usedSlotName = ['createAt', 'pic', 'money', 'status', 'handle']
const otherSlotName = tableConfig.value.tableColumns.filter(
  (item: any) => item.slotName && !usedSlotName.includes(item.slotName)
)
</script>

<style scoped></style>
