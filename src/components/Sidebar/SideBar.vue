<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <SideBarLinks to="/">Characters</SideBarLinks>
    <SideBarLinks to="/locations">Locations</SideBarLinks>
    <SideBarLinks to="/episodes">Episodes</SideBarLinks>

    <span class="collapsed-icon" :class="{ 'rotate-180': collapsed}" @click="toggleSidebar">
      +
    </span>
  </div>
</template>

<script>
import SideBarLinks from './SideBarLinks.vue'
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
  components: {
    SideBarLinks
  },
  setup () {
    return { collapsed, toggleSidebar, sidebarWidth }
  }

}
</script>

<style>
.sidebar {
  color: white;
  background-color: #212224ff;

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}
.collapsed-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}
.rotate-180{
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
