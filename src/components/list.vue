<template>
  <div class="lists">
    <ul class="list">
      <a href=""><li>All</li></a>
      <a href=""><li>Uncompleted</li></a>
      <a href=""><li>Completed</li></a>
    </ul>
  </div>
</template>
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
}
</style>