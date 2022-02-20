<template>
  <router-link :to="to" class="link" :class="{ active: isActive }">
    <font-icon class="icon" :icon="icon" :size="size"/>
    <transition name="fade">
      <span v-if="!collapsed">
        <slot />
      </span>
    </transition>
  </router-link>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { collapsed } from './state'

export default {
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true },
    size: { type: String, required: true }
  },
  setup (props) {
    const route = useRoute()
    const isActive = computed(() => route.path === props.to)

    return { isActive, collapsed }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.link {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 400;
  user-select: none;
  margin: 0.3rem 0;
  padding: 0.4em;
  border-radius: 0.25em;
  height: 2rem;
  color: white;
  text-decoration: none;
}
.link:hover {
  background-color: #2f71e8ff;
}
.link.active {
  background-color: #29b9f0ff;
}
.link .icon {
  margin-right: 10px;
}
</style>
