<template lang="pug">
  form.NewBookmark(@submit="addBookmark")
    label Name
      input(type="text" required v-model="name")
    label Description
      input(type="text" required v-model="description")
    label Link
      input(type="text" required v-model="link")
    input(type="submit" value="Add")
</template>

<script>
export default {
  name: "NewBookmark",
  data() {
    return {
      name: "",
      description: "",
      link: ""
    };
  },
  methods: {
    addBookmark(event) {
      event.preventDefault();
      this.$store.commit("addBookmark", {
        name: this.name,
        description: this.description,
        link: this.link
      });

      this.name = "";
      this.description = "";
      this.link = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.NewBookmark {
  margin-bottom: 10px;

  label {
    display: inline-flex;
    flex-wrap: nowrap;
    margin: 5px 15px 5px 0;

    input {
      margin-left: 5px;
    }
  }
}
</style>
