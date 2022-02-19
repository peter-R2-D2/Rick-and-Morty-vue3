<template>
  <div class="home">
    <h1 class="title">Characters</h1>
    <FilterByStatus />
    <FilterByName />
    <list-characters />
  </div>
</template>

<script>
import ListCharacters from '@/components/ListCharacters.vue'
import FilterByStatus from '@/components/FilterByStatus.vue'
import FilterByName from '@/components/FilterByName.vue'

export default {
  name: 'Characters',
  components: {
    ListCharacters,
    FilterByStatus,
    FilterByName
  }
}
</script>

<style>
.title {
  text-align: center;
  padding: 40px 0;
}
.home {
  margin: 0 10px;
  overflow: hidden;
}
</style>
