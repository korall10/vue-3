import { createStore } from "vuex";

const store = createStore({
  state: {
    selected_user: JSON.parse(localStorage.getItem("selected_user")) || null,
    selected_album: null,
  },
});

export default store;
