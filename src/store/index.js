import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      {
        time: "20/10/2000",
        content: "hhiiih",
        check: true
      },
    ],
  },
  mutations: {
    addNewCard(state, load) {
      let time = load.today
      let content = load.value
      let check = load.check
      console.log(load);
      state.todos.push({
        time,
        content,
        check,
      })
    },
    deleteCard(state, id) {
      state.todos.splice(id,1)
    }
  },
  getters: {
    loadUncomplete: state => {
      return state.todos.filter(todo => !todo.check)
    },
    loadComplete: state => {
      return state.todos.filter(todo => todo.check)
    }
  },
  actions: {

  },
  modules: {}
});
