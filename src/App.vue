<script setup lang="ts">
const a = ref(0)
</script>

<template>
  <!-- <HelloWorld></HelloWorld> -->
  <van-button type="primary" >{{a}}</van-button>
  <div class="logo">123</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
