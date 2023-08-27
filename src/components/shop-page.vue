<template>
	<div id="shop-container" class="container-fluid">
		<div class="row shop-page-row" style="height:12vh;">		
		
			<div class="col-4">
				<span> Game Data Comtainer </span>
				<!-- <game-data></game-data> -->
			</div>
			
			<div class="col-4">
				<span> Data Spacer Column </span>
			</div>
			
			<div class="col-4">
				<span> Animal List; Menu Buttons </span>
			</div>
		</div>
	
		<div class="row shop-page-row" style="height:20vh;">
			<div class="col-12">
				<span> Spacer Row between Game-Data and Team </span>
			</div>
		</div>

		<div class="row shop-page-row" style="height:22vh;">	
			<div class="col-12">
				<shopTeamData />
			</div>
		</div>
		
		<div class="row shop-page-row">
			<div class="col-12">
				<span> Spacer Row between Team and Shops </span>
			</div>
		</div>
		
		<div class="row shop-page-row">
			<div class="col-12">
				<shopOfferData />
			</div>
		</div>
		
		<div class="row shop-page-row">
			<div class="col-12">
				<span> Spacer Row between Shops and Bottom Row </span>
			</div>
		</div>
		
		<div class="row shop-page-row">
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
import shopTeamData from  '../components/shop-team-data.vue'
import shopOfferData from  '../components/shop-offer-data.vue'

export default {
  name: 'shop-container',
  props: {
    msg: String
  },
  components: {
    shopTeamData,
	shopOfferData
  }
}
</script>

<style>
#shop-container {
  background-image: url('../assets/shop-background.webp');
  background-size: cover;
  padding: 0;
  margin: 0;
  height: 100%;
  /* border: 3px solid red; */
}

.shop-page-row {
	width: 100% /* Does nothing right now */
}
</style>
