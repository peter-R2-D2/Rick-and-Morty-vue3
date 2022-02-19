<template>
  <SideBar />
  <div :style="{ 'margin-left': sidebarWidth}">
    <router-view/>
  </div>
</template>

<script>
import SideBar from '@/components/Sidebar/SideBar.vue'
import { sidebarWidth } from '@/components/Sidebar/state'

export default {
  components: { SideBar },
  setup () {
    return { sidebarWidth }
  }
}
</script>

<style>
*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
img {
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-color: #111213ff;
}
</style>
