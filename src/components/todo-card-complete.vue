<template>
  <div class="cards">
    <div class="card" v-for="(item, id) in items" :key="id">
      <div class="card__left">
        <input type="checkbox" :checked="item.check" />
      </div>
      <div class="card__center">
        <p>{{ new Date(item.date).toISOString() }}</p>
        <p v-if="checkModify">{{ item.content }}</p>
        <textarea :value="item.content" v-show="!checkModify"></textarea>
      </div>
      <div class="card__right">
        <div>
          <button @click="changeModify">
            <p>{{ btnModify }}</p>
          </button>
        </div>
        <div>
          <button @click="removeItem += item"><p>X</p></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkModify: true,
      btnModify: "M",
    };
  },
  computed: {
    items() {
      return this.$store.getters.loadComplete;
    },
  },
    methods: {
    changeModify() {
      this.checkModify = !this.checkModify;
      if (this.btnModify == "M") this.btnModify = "V";
      else {
        this.checkModify = !this.checkModify;
        this.btnModify = "M";
      }
    },
  },
};
</script>