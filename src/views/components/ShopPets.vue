<template>
	<div class="shop-pets">
		<div id="offer-row" class="row">
			<div class="col-2">
				<span> Pre Offers Spacer </span>
			</div>
			<div class="col-1 offer-col">
				<img class="offer-img" src="../../assets/images/turtle-pack/pets/Dragon.webp" />
			</div>
			<div class="col-1 offer-col">
				<img class="offer-img" src="../../assets/images/turtle-pack/pets/Duck.webp" />
			</div>
			<div class="col-1 offer-col">
				<img class="offer-img" src="../../assets/images/turtle-pack/pets/Gorilla.webp" />
			</div>
			<div class="col-5">
				<span> Between Offers Spacer</span>
			</div>
			<div class="col-1 offer-col">
				<img class="offer-img" src="../../assets/images/turtle-pack/items/Sleeping_Pill.webp" />
			</div>
			<div class="col-1">
				<span> Post Offers Spacer</span>
			</div>
		</div>
	</div>
</template>

<script scoped>
export default {
  name: 'ShopPets',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">

</style>
