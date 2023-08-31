<script setup>
import { RouterView } from 'vue-router'
import ShopPage from './views/ShopPage.vue'
</script>

<template>
  <div class="main-wrapper">
    <shop-page />
  </div>
  <RouterView />
</template>

<style scoped>
.main-wrapper {
	height: 100%;
}
</style>
