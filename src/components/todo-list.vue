<template>
  <div class="lists">
    <ul class="list">
      <a href="" @click.prevent="name = 'mcard'"><li>All</li></a>
      <a href="" @click.prevent="name = 'uncomplete'"><li>Uncompleted</li></a>
      <a href="" @click.prevent="name = 'complete'"><li>Completed</li></a>
    </ul>
    <component :is="currentComponent">
    </component>
  </div>
</template>
<script>
import mcard from "../components/todo-card";
import uncomplete from "../components/todo-card-uncomplete";
import complete from "../components/todo-card-complete.vue";
export default {
  components: {
    mcard,
    uncomplete,
    complete
  },
  data() {
    return {
      name: 'mcard'
    }
  },
  computed: {
    currentComponent() {
      return this.name
    }
  }
};
</script>
<style scoped>
.list {
  display: flex;
  flex-direction: row;
  justify-content: end;
}
.list a {
  text-decoration: none;
  border-right: black solid 1px;
  padding: 0px;
  display: flex;
  justify-content: center;
}
.list a li {
  list-style: none;
  padding: 5px 20px;
  margin: 0px;
  width: 100%;
  height: 100%;
  color: #ad8f7c;
}
</style>