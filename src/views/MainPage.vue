<template>
	<div class="main-page">
		<div class="row">		
			<div class="col-4">
				<span> Game Data Container </span>
			</div>
			
			<div class="col-4">
				<span> Data Spacer Column </span>
			</div>
			
			<div class="col-4">
				<span> Animal List; Menu Buttons </span>
			</div>
		</div>
	
		<div class="row">
			<div class="col-12">
				<span> Spacer Row between Game-Data and Team </span>
			</div>
		</div>

		<div class="row">	
			<div class="col-12">
				<current-lineup />
			</div>
		</div>
		
		<div class="row">
			<div class="col-12">
				<span> Spacer Row between Team and Shops </span>
			</div>
		</div>
		
		<div class="row">
			<div class="col-12">
				<shop-pets />
			</div>
		</div>
		
		<div class="row">
			<div class="col-12">
				<span> Spacer Row between Shops and Bottom Row </span>
			</div>
		</div>
		
		<div class="row">
			<div class="col">
				<span> Roll Button </span>
			</div>
			
			<div class="col">
				<span> Spacer between buttons </span>
			</div>

			<div class="col">
				<span> End Turn Button </span>
			</div>
		</div>
	</div>
</template>

<script>
import CurrentLineup from './components/CurrentLineup.vue';
import ShopPets from './components/ShopPets.vue';

export default {
  name: 'ShopPage',
  props: {
    msg: String
  },
  components: {
    CurrentLineup,
	ShopPets
  }
}
</script>

<style scoped lang="scss">

</style>
