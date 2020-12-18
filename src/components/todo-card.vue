<template>
  <div class="cards">
    <div class="card" v-for="item in items" :key="item.id">
      <div class="card__left">
        <input type="checkbox" />
      </div>
      <div class="card__center">
        <p>{{ item.time.default }}</p>
        <p>{{ item.content.default }}</p>
      </div>
      <div class="card__right">
        <button>modified</button>
        <button>X</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    items() {
      return this.$store.state.todos;
    },
  },
};
</script>

<style lang="sass" scope>
.cards
    .card
        display: flex
        margin: 20px 10px
        &__left
            input 
                margin-top: 10px
        &__center
            display: flex
            flex-direction: column
            justify-content: left
            text-align: left
            width: 90%
            margin-left: 5px
        &__right
            display: flex
            flex-direction: row
</style>