<template lang="pug">
  #app
    h1 Bookmarks
    NewBookmark
    BookmarkList
</template>

<script>
import BookmarkList from "./components/BookmarkList.vue";
import NewBookmark from "./components/NewBookmark.vue";

export default {
  name: "app",
  components: {
    BookmarkList,
    NewBookmark
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;

  h1 {
    margin: 10px 0;
  }
}
</style>
