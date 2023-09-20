import 
<script setup>
import { RouterView } from 'vue-router'

</script>

<template>
  <div class="app">
    <RouterView />
  </div>
  <div class="after-app"/>
</template>

<style lang="scss">
.app {
    background-image: url('./assets/images//layout/background.webp');
    background-position: center bottom;
    padding: 0;
    margin: 0;
    min-height: 51rem;
  }

body {
  margin:0;
  padding: 0;
  overflow: hidden;
  height: auto;
}

.after-app {
  background-color: #1c3017;
    height: 10rem;
}

.debug {
    border: 2px solid blue;
}
</style>
