<template lang="pug">
  .BookmarkList
    a.BookmarkList__item(
        v-for="bookmark in bookmarks"
        :href="bookmark.link"
        target="_blank"
      )
      h2 {{ bookmark.name }}
      p {{ bookmark.description }}
</template>

<script>
export default {
  name: "BookmarkList",
  computed: {
    bookmarks() {
      return this.$store.getters.getBookmarks;
    }
  }
};
</script>

<style lang="scss" scoped>
.BookmarkList {
  &__item {
    display: block;
    margin-bottom: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 5px 10px;

    h2,
    p {
      margin: 5px 0;
    }
  }
}
</style>
