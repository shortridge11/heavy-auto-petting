<template>
	<div id="offer-container" class="container-fluid">
		<div id="offer-row" class="row">
			<div class="col-2">
				<span> Pre Offers Spacer </span>
			</div>
			<div class="col-1 offer-col">
				<img class="offer-img" src="../assets/turtle-pack/pets/Dragon.webp" />
			</div>
			<div class="col-1 offer-col">
				<img class="offer-img" src="../assets/turtle-pack/pets/Duck.webp" />
			</div>
			<div class="col-1 offer-col">
				<img class="offer-img" src="../assets/turtle-pack/pets/Gorilla.webp" />
			</div>
			<div class="col-5">
				<span> Between Offers Spacer</span>
			</div>
			<div class="col-1 offer-col">
				<img class="offer-img" src="../assets/turtle-pack/items/Sleeping_Pill.webp" />
			</div>
			<div class="col-1">
				<span> Post Offers Spacer</span>
			</div>
		</div>
	</div>
</template>

<script scoped>
export default {
  name: 'ShopTeamData',
  props: {
    msg: String
  }
}
</script>

<style scoped>
#team-container {
	height: 100%;
	padding: 0;
	margin: 0;
}

#team-row {
	height: 100%;
	margin: 0;
	padding: 0;
	/* border: 2px solid yellow; */ 
}

.offer-col {
	height: 100%;
	/* border: 2px solid pink; */
}

.offer-img {
	max-height: 100%;
	max-width: 100%;
}

</style>
