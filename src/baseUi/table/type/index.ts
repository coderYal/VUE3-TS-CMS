export interface ITableConfig {
  tableData: any[]
  tableColumns: ITableColumnsData[]
  index?: ITableIndex
  tableHeaderAlign?: 'center' | 'left' | 'right'
  tableContentColumnsAlign?: 'center' | 'left' | 'right'
  isShowSelection?: boolean
  maxHeight?: string | number
}

export interface ITableIndex {
  isShow: boolean
  label?: string
  width?: string
  align?: string
}

export interface ITableColumnsData {
  prop: string
  label: string
  width?: string | number
  minWidth?: string | number
  align?: string
  type?: string
  sortable?: boolean
  slotName?: string
  showOverflowTooltip?: boolean
}
