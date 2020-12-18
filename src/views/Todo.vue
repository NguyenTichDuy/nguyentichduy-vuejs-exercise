<template>
  <div class="to-do">
    <minput></minput>
    <mlist></mlist>
  </div>
</template>

<script>
import minput from "../components/todo-input";
import mlist from '../components/todo-list'
export default {
  components: {
    minput,
    mlist
  },
};
</script>

<style scoped>
.to-do {
  background-color: #f1f3f6;

}
</style>
