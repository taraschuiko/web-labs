import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bookmarks: [
      {
        id: 1431123123,
        name: "dfsdf",
        description: "ewrwerwe",
        link: "google"
      }
    ]
  },
  getters: {
    getBookmarks(state) {
      return state.bookmarks;
    }
  },
  mutations: {
    addBookmark(state, newBookmark) {
      state.bookmarks.push(newBookmark);
    },
    removeBookmark(state, id) {
      state.bookmarks = state.bookmarks.filter(bookmark => bookmark.id !== id);
    },
    editBookmark(state, data) {
      const index = state.bookmarks.findIndex(
        bookmark => bookmark.id == data.id
      );
      state.bookmarks.splice(index, 1, {
        name: data.name,
        description: data.description,
        link: data.link
      });
    }
  },
  actions: {
    addBookmark(context, data) {
      const newBookmark = {
        id: Math.floor(Math.random() * Math.floor(999999)),
        name: data.name,
        description: data.description,
        link: data.link
      };
      context.commit("addBookmark", newBookmark);
      fetch(`https://137.0.0.1:3307/bookmarks`, {
        method: "POST",
        body: JSON.stringify(newBookmark)
      });
    },
    removeBookmark(context, id) {
      context.commit("removeBookmark", id);
      fetch(`https://137.0.0.1:3307/bookmarks/${id}`, {
        method: "DELETE"
      });
    },
    editBookmark(context, data) {
      context.commit("editBookmark", data);
      fetch(`https://137.0.0.1:3307/bookmarks/${data.id}`, {
        method: "PATCH",
        body: JSON.stringify(data)
      });
    }
  }
});
