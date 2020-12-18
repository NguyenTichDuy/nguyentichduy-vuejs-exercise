<template>
  <div class="cards">
    <div class="card" v-for="item in items" :key="item">
      <div class="card__left">
        <input type="checkbox" :checked="item.check" @click="item.check = !item.check"/>
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
    computed: {
        items() {
            return this.$store.getters.loadUncomplete
        }
    }
}
</script>