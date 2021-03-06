import Vue from 'vue'

// initial state
const state = {
    all: []
}

export default {
    namespaced: true,
    state,
    actions: {
        loadCoins({ commit }) {
            Vue.axios
                .get('/api/deprecated')
                .then(r => r.data)
                .then(coins => {
                    commit('SET_COINS', coins)
                })
        }
    },
    mutations: {
        SET_COINS(state, coins) {
            state.all = coins
        }
    }
}