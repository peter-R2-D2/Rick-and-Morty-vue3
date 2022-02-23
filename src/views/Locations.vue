<template>
  <div class="about">
    <h1 class="title">Locations</h1>
    <ListLocation />
  </div>
</template>

<script>
import ListLocation from '@/components/Locations/ListLocation.vue'
export default {
  components: { ListLocation },
  setup () {

  }
}
</script>

<style>
.about {
  margin: 0 10px;
  overflow: hidden;
}
</style>
