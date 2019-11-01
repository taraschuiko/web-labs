<template lang="pug">
  .BookmarkList
    Bookmark(
      v-for="bookmark in bookmarks"
      :bookmark="bookmark"
      :key="bookmark.id"
    )
</template>

<script>
import Bookmark from "./Bookmark";

export default {
  name: "BookmarkList",
  components: {
    Bookmark
  },
  computed: {
    bookmarks() {
      return this.$store.getters.getBookmarks;
    }
  }
};
</script>

<style lang="scss" scoped></style>
