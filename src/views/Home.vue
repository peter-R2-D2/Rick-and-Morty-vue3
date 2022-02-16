<template>
  <h1 class="title">Characters</h1>
  <div class="home">
    <FilterByStatus />
    <list-characters />
  </div>
</template>

<script>
import ListCharacters from '@/components/ListCharacters.vue'
import FilterByStatus from '@/components/FilterByStatus.vue'

export default {
  name: 'Home',
  components: {
    ListCharacters,
    FilterByStatus
  }
}
</script>

<style>
.title {
  color: #2f71e8ff;
  text-align: center;
  margin-bottom: 40px;
}
.home {
  margin-left: 20px;
}
</style>
