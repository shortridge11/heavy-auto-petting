<template>
    <div class="main-wrapper">
        <mainPage msg="Pick your Poison"/>
    </div>
</template>

<script>
import mainPage from './components/main-page.vue'

export default {
  name: 'App',
  components: {
    mainPage
  }
}
</script>

<style>
.main-wrapper {
  background-image: url('./assets/shop-background.webp');
  background-size: cover;
  height: 100vh;
}
</style>
