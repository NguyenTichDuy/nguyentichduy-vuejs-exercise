<template>
  <div class="cards">
    <div class="card" v-for="item in items" :key="item">
      <div class="card__left">
        <input type="checkbox" :checked="item.check" />
      </div>
      <div class="card__center">
        <p>{{ item.time }}</p>
        <textarea :value="item.content"></textarea>
      </div>
      <div class="card__right">
        <div>
          <button> <p>X</p></button>
        </div>
        <div>
          <button> <p>X</p></button>
        </div>
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

<style lang="sass">
.cards
    margin: 10px 5px
    .card
        background-color: #fff
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
            textarea
                border: none
        &__right
            display: flex
            flex-direction: row
            div
                padding: 10px
                display: flex
                
                button
                    justify-content: center
                    p
                        padding: 5px
                        width: 100%
</style>