<template>
  <div class="nav-menu">
    <div class="header">
      <img src="~@/assets/images/logo.svg" alt="" />
      <span>TypeScript</span>
    </div>
    <div class="menu-box">
      <el-menu
        default-active="39"
        class="el-menu-vertical-demo"
        text-color="#b7bdc3"
        active-text-color="#fff"
        background-color="#001529"
        @open="handleOpen"
        @close="handleClose"
      >
        <template v-for="menuItem in userMenuList" :key="menuItem.id">
          <template v-if="menuItem.type === 1">
            <el-submenu :index="menuItem.id + ''">
              <template #title>
                <el-icon class="m-r-10" :class="menuItem.icon" />
                <span>{{ menuItem.name }}</span>
              </template>
              <template
                v-for="menuChildrenItem in menuItem.children"
                :key="menuChildrenItem.id"
              >
                <template
                  v-if="
                    !(
                      menuChildrenItem.children &&
                      menuChildrenItem.children.length
                    )
                  "
                >
                  <el-menu-item-group>
                    <el-menu-item :index="menuChildrenItem.id + ''">
                      {{ menuChildrenItem.name }}
                    </el-menu-item>
                  </el-menu-item-group>
                </template>
                <template v-else>
                  <el-submenu :index="menuChildrenItem.id + ''">
                    <template #title>{{ menuChildrenItem.name }}</template>
                    <template
                      v-for="menuChildrenSubMenuItem in menuChildrenItem.children"
                      :key="menuChildrenSubMenuItem.id"
                    >
                      <el-menu-item :index="menuChildrenSubMenuItem.id + ''">
                        {{ menuChildrenSubMenuItem.name }}
                      </el-menu-item>
                    </template>
                  </el-submenu>
                </template>
              </template>
            </el-submenu>
          </template>
        </template>
        <!--<el-menu-item index="2">-->
        <!--  <span>Navigator Two</span>-->
        <!--</el-menu-item>-->
        <!--<el-menu-item index="3" disabled>-->
        <!--  <span>Navigator Three</span>-->
        <!--</el-menu-item>-->
        <!--<el-menu-item index="4">-->
        <!--  <span>Navigator Four</span>-->
        <!--</el-menu-item>-->
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const userMenuList = computed(() => store.state.navMenuList)

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.nav-menu {
  height: 100%;
  overflow: hidden;
  .menu-box {
    height: 100%;
    overflow-y: scroll;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    &::-webkit-scrollbar {
      width: 0 !important;
    }
  }
}
.header {
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 20px;
  color: #fff;
  > img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
}
.m-r-10 {
  margin-right: 10px;
}
</style>
