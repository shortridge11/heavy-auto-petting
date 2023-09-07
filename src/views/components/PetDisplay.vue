<template>
	<div class="container pet-card" :style="getCardStyle()">
		<div class="row pet-card-row-xp">
			<div class="col-12 pet-card-col">
				<img class="img-xp" src="../../assets/images//layout/xp0.png" />
			</div>
		</div>

		<div class="row pet-card-row-pet">
			<div class="col-12 pet-card-col">
				<div>
					<img class="img-pet" :src="getPetPath()" />
				</div>
				<div>
					<img class="img-pedestal" src="../../assets/images//layout/shop-pedestal-with-shadow.png" />
				</div>
			</div>
		</div>

		<div class="row pet-card-row-stats">
			<div class="col-12 pet-card-col">
				<img class="img-stats" src="../../assets/images/layout/animal-stats-template.png" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'PetDisplay',
  props: {
	cardWidth: Number,
	cardHeight: Number,
	petType: String,
	pet_attack: Number,
	pet_health: Number,
	pet_xp: Number
  },
  methods: {
    getPetPath: function () {
      return '/src/assets/images/turtle-pack/pets/' + this.petType + '.webp';
    },
	getCardStyle: function () {
		return 'width:' + this.cardWidth + 'rem;height:' + this.cardHeight + 'rem';
	}
  }
}
</script>

<style scoped lang="scss">
.pet-card {
	border: 2px solid blue;
	/*display: flex;
	justify-content: center;*/
}

.pet-card-row-xp {
	height: 30%;
}

.pet-card-row-pet {
	height: 50%;
	text-align: center;
}

.pet-card-row-stats {
	height: 20%;
	text-align: center;
}

.pet-card-col {
	padding: 0;
	/*border: 1px solid yellow;*/
}

.img-xp {
	position: relative;
	width: 40%;
	z-index: 3;
}
.img-pet {
	position: relative;
	width: 100%;
	height: auto;
	
	margin-top: -20%;
	z-index: 2;

	-webkit-transform: scaleX(-1);
  	transform: scaleX(-1);
}
.img-pedestal {
	position: relative;
	width: 100%;
	height: auto;
	margin-top: -40%;
	
	z-index: 1;
	
}
.img-stats {
	position: relative;
	
	width: 100%;
	height: auto;
	margin-top: -20%;
	z-index: 4;
}
</style>
