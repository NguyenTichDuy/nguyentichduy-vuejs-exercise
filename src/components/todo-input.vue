<template>
  <div class="input">
    <input type="text" :placeholder="text" @keyup="insert" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Type here for add a new todo",
    };
  },
  methods: {
    insert(e) {
      if (e.key == "Enter") {
        // set time
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        var yyyy = today.getFullYear();
        today = `${dd}/${mm}/${yyyy}`;

        // set value
        let value = e.target.value;
        console.log(e.target.value);

        let check = false
        this.$store.commit("addNewCard", { value ,today,  check });
      }
    },
  },
};
</script>

<style lang="sass" scope>
.input
    width: 100%
    display: flex
    justify-content: start
    input
        width: 100%
</style>