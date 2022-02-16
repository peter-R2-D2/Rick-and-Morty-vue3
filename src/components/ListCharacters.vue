<template>
  <section class="center">
    <div class="characters">
      <div class="characters__item" v-for="character in characters" :key="character.id">
        <card-characters :character="character"/>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import CardCharacters from './CardCharacters.vue'
export default {
  components: { CardCharacters },
  setup () {
    const store = useStore()

    const characters = computed(() => {
      return store.state.charactersFilter
    })

    onMounted(() => {
      store.dispatch('getCharacters')
    })

    return { characters }
  }
}
</script>

<style>
.characters {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
</style>
