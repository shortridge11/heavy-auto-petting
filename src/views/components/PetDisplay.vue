<template>
	<div class="pet-card" :style="getCardStyle()">
		<img class="img-xp" src="../../assets/images//layout/xp0.png" />
		<img class="img-pet" :src="getPetPath()" />
		<img class="img-pedestal" src="../../assets/images//layout/shop-pedestal-with-shadow.png" />
		<img class="img-stats" src="../../assets/images/layout/animal-stats-template.png" />
		<span class="card-text text-attack">{{getPetAttack()}}</span>
		<span class="card-text text-health">{{getPetHealth()}}</span>
	</div>
</template>

<script>
export default {
  name: 'PetDisplay',
  props: {
	cardWidth: Number,
	cardHeight: Number,
	petType: String,
	petAttack: Number,
	petHealth: Number,
	pet_xp: Number
  },
  methods: {
    getPetPath: function () {
      return '/src/assets/images/turtle-pack/pets/' + this.petType + '.webp';
    },
	getCardStyle: function () {
		return 'width:' + this.cardWidth + 'rem;height:' + this.cardHeight + 'rem';
	},
	getPetAttack: function () {
		return this.petAttack;
	},
	getPetHealth: function () {
		return this.petHealth;
	},
	
  }
}
</script>

<style scoped lang="scss">
.pet-card {
	position: relative;
	border: 2px solid blue;
	/*display: flex;
	justify-content: center;*/
}

.img-xp {
	position: absolute;
	top: 0;
	left: 0;
	width: 40%;

	z-index: 3;
}
.img-pet {
	position: absolute;
	
	z-index: 2;
	width: 100%;
	left: 0;
	top: 10%;

	-webkit-transform: scaleX(-1);
  	transform: scaleX(-1);
}
.img-pedestal {
	position: absolute;
	top: 40%;
	width: 100%;
	
	z-index: 1;
	
}
.img-stats {
	position: absolute;
	bottom: 0;
	width: 100%;
	
	z-index: 4;
}

@font-face {
  font-family: LapsusProBold;
  src: url(../../assets/fonts/LapsusPro-Bold.otf);
}

.card-text {
	position: absolute;
	font-size: 3rem;
	bottom: 2.5%;
	color: white;
	z-index: 5;

	font-family: LapsusProBold;

	-webkit-text-stroke: 3px black;
}

.text-attack {
	left: 25%;
	transform:translateX(-50%)
}

.text-health {
	right: 25%;
	transform:translateX(50%)
}
</style>
