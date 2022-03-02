import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [],
    charactersFilter: [],
    locations: [],
    locationsFilter: [],
    episodes: [],
    episodesFilter: []
  },
  mutations: {
    setCharacters (state, payload) {
      state.characters = payload
    },
    setCharactersFilter (state, payload) {
      state.charactersFilter = payload
    },
    setLocations (state, payload) {
      state.locations = payload
    },
    setLocationsFilter (state, payload) {
      state.locationsFilter = payload
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
    },
    filterByName ({ commit, state }, name) {
      const formatName = name.toLowerCase()
      const results = state.characters.filter(character => {
        const characterName = character.name.toLowerCase()

        if (characterName.includes(formatName)) {
          return character
        }
      })
      commit('setCharactersFilter', results)
    },
    async getLocations ({ commit }) {
      try {
        const locationsUrl = 'https://rickandmortyapi.com/api/location'
        const response = await fetch(locationsUrl)
        const data = await response.json()
        commit('setLocations', data.results)
        commit('setLocationsFilter', data.results)
      } catch (error) {
        console.error(error)
      }
    },
    async getEpisodes ({ commit }) {
      try {
        const episodesUrl = 'https://rickandmortyapi.com/api/episode'
        const response = await fetch(episodesUrl)
        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {
  }
})
