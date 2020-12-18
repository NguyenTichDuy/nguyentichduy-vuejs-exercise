import { createStore } from "vuex";
import axios from 'axios'
export default createStore({
  state: {
    test: []
  },
  mutations: {
    addNewCard(state, load) {
      let time = load.today
      let content = load.value
      let check = load.check
      console.log(load);
      state.test.push({
        time,
        content,
        check,
      })
    },
    deleteCard(state, id) {
      state.test.splice(id,1)
    },
    loadData(state, load) {
      state.test = load.data
    }
  },
  getters: {
    loadUncomplete: state => {
      return state.test.filter(todo => !todo.check)
    },
    loadComplete: state => {
      return state.test.filter(todo => todo.check)
    },
    
  },
  actions: {
    async LoadData({ commit }) {
      await axios.get('https://5fdc598b48321c0017011956.mockapi.io/todos')
                      .then(function (res) {
                        commit('loadData', res);
                      })
    }
  },
  modules: {}
});
