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
      state.bookmarks.push({
        id: Math.floor(Math.random() * Math.floor(999999)),
        name: newBookmark.name,
        description: newBookmark.description,
        link: newBookmark.link
      });
    },
    removeBookmark(state, id) {
      state.bookmarks = state.bookmarks.filter(bookmark => bookmark.id === id);
    },
    editBookmark(state, editedBookmark) {
      const index = state.bookmarks.findIndex(
        bookmark => bookmark.id == editedBookmark.id
      );
      state.bookmarks.splice(index, 1, {
        name: editedBookmark.name,
        description: editedBookmark.description,
        link: editedBookmark.link
      });
    }
  }
});
