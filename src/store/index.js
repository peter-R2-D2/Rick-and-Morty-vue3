import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [],
    charactersFilter: []
  },
  mutations: {
    setCharacters (state, payload) {
      state.characters = payload
    },
    setCharactersFilter (state, payload) {
      state.charactersFilter = payload
    }
  },
  actions: {
    async getCharacters ({ commit }) {
      try {
        const characters = 'https://rickandmortyapi.com/api/character'
        const response = await fetch(characters)
        const data = await response.json()
        commit('setCharacters', data.results)
        commit('setCharactersFilter', data.results)
      } catch (error) {
        console.error(error)
      }
    },
    filterByStatus ({ commit, state }, status) {
      const results = state.characters.filter((character) => {
        return character.status.includes(status)
      })
      commit('setCharactersFilter', results)
    }
  },
  modules: {
  }
})
