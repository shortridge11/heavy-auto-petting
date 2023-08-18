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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
