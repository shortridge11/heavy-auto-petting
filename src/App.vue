<template>
    <div class="main-wrapper">
        <!-- <mainPage msg="Pick your Poison"/> -->
		<shopPage />
    </div>
</template>

<script>
import shopPage from  './components/shop-page.vue'

export default {
  name: 'App',
  components: {
    shopPage
  }
}
</script>

<style>
.main-wrapper {
	/* border: 5px solid green; */
	height: 100%;
}

</style>
