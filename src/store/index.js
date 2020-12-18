import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      {
        id: {
          type: Number,
          default: 1
        },
        time: {
          type: String,
          default: "2020-5-20"
        },
        content: {
          type: String,
          default: "this is a content"
        },
        check: {
          type: Boolean,
          default: true
        }

      },
    ],

  },
  mutations: {},
  actions: {},
  modules: {}
});
