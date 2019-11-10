<template lang="pug">
  .Bookmark
    a.Bookmark__link(
        :href="bookmark.link"
        target="_blank"
      )
      h2 {{ bookmark.name }}
      p {{ bookmark.description }}
      button(@click="toggleEditing") Edit
      button(@click="removeBookmark") Remove
    .Bookmark__editing(v-if="isEditing")
      form.NewBookmark(@submit="editBookmark")
        label Name
          input(type="text" required v-model="newName")
        label Description
          input(type="text" required v-model="newDescription")
        label Link
          input(type="text" required v-model="newLink")
        input(type="submit" value="Update")
</template>

<script>
export default {
  name: "Bookmark",
  data() {
    return {
      isEditing: false,
      newName: this.bookmark.name,
      newDescription: this.bookmark.description,
      newLink: this.bookmark.link
    };
  },
  props: {
    bookmark: Object
  },
  methods: {
    toggleEditing(event) {
      event.preventDefault();
      this.isEditing = !this.isEditing;
      this.newName = this.bookmark.name;
      this.newDescription = this.bookmark.description;
      this.newLink = this.bookmark.link;
    },
    editBookmark(event) {
      event.preventDefault();
      this.$store.dispatch("editBookmark", {
        id: this.bookmark.id,
        name: this.newName,
        description: this.newDescription,
        link: this.newLink
      });
      this.toggleEditing();
    },
    removeBookmark(event) {
      event.preventDefault();
      this.$store.dispatch("removeBookmark", this.bookmark.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.Bookmark {
  &__link,
  &__editing {
    display: block;
    margin-bottom: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 5px 10px;
  }

  h2,
  p {
    margin: 5px 0;
  }

  &__editing {
    label {
      display: inline-flex;
      flex-wrap: nowrap;
      margin: 5px 15px 5px 0;

      input {
        margin-left: 5px;
      }
    }
  }
}
</style>
