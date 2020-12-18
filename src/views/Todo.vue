<template>
  <div class="to-do">
    <minput></minput>
    <mlist></mlist>
    <mcard></mcard>
  </div>
</template>

<script>
import minput from "../components/todo-input";
import mcard from "../components/todo-card";
import mlist from '../components/list'
export default {
  components: {
    minput,
    mcard,
    mlist
  },
};
</script>

<style scoped>
.to-do {
  background-color: #f1f3f6;

}
</style>
