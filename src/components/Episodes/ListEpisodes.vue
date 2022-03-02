<template>
  <div class="episodes">
    <CardEpisode />
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import CardEpisode from './CardEpisode.vue'
export default {
  components: { CardEpisode },
  setup () {
    const store = useStore()

    onMounted(() => {
      store.dispatch('getEpisodes')
    })
  }

}
</script>

<style>

</style>
