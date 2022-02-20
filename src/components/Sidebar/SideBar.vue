<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1 class="title">
      <span v-if="collapsed">
        <div>P</div>
        <div>F</div>
      </span>
      <span v-else>Pedro Farias</span>
    </h1>
    <SideBarLinks to="/" icon="person" size="lg">Characters</SideBarLinks>
    <SideBarLinks to="/locations" icon="location-dot" size="lg">Locations</SideBarLinks>
    <SideBarLinks to="/episodes" icon="circle-play" size="lg">Episodes</SideBarLinks>

    <span class="collapsed-icon" :class="{ 'rotate-180': collapsed}" @click="toggleSidebar">
      <font-icon icon="angles-right" />
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
.title {
  margin-bottom: 5px;
}
.sidebar {
  color: white;
  background-color: #212224ff;
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5rem;
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
