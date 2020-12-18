<template>
  <div class="cards">
    <div class="card" v-for="item in items" :key="item.id">
      <div class="card--header">
        <input type="checkbox" />
        <div :value="item.time"></div>
        <button>modified</button>
        <button>X</button>
      </div>
      <div class="card--body"></div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        items() {
            return this.$store.todos
        }
    }
};
</script>

<style>
</style>