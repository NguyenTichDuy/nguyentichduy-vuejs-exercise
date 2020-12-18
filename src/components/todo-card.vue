<template>
  <div class="cards">
    <div class="card" v-for="(item, id) in items" :key="id">
      <div class="card__left">
        <input type="checkbox" :checked="item.check"  />
      </div>
      <div class="card__center">
        <p>{{ item.time }}</p>
        <textarea :value="item.content"></textarea>
      </div>
      <div class="card__right">
        <div>
          <button> <p>t</p></button>
        </div>
        <div>
          <button @click="removeItem += item"> <p>X</p></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    items() {
      return this.$store.state.todos;
    },
    removeItem: {
        set(id) {
            this.$store.commit('deleteCard', id)
        }
    }
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
                margin: 10px 
        &__center
            display: flex
            flex-direction: column
            justify-content: left
            text-align: left
            width: 90%
            margin-left: 5px
            textarea
                margin: 20px 0px
                border: none
                font-family: "Roboto", sans-serif
        &__right
            display: flex
            flex-direction: row
            div
                margin-top: 10px
                button
                    margin: 0px
                    padding: 0px
                    width: 100%
                    p
                        padding: 0px
                        margin: 0px
                        width: 100%

</style>