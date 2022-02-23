<template>
  <section class="section">
    <div class="locations">
      <CardLocation v-for="location in locations" :key="location.id" :location="location"/>
    </div>
  </section>
</template>

<script>
import CardLocation from '@/components/Locations/CardLocation.vue'
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
export default {
  components: { CardLocation },
  setup () {
    const store = useStore()

    const locations = computed(() => {
      return store.state.locationsFilter
    })

    onMounted(() => {
      store.dispatch('getLocations')
    })

    return { locations }
  }

}
</script>

<style>
  .locations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }

</style>
