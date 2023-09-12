<template>
	<div class="pet-card" :style="getCardStyle()">
		<img class="pet-xp-img" 
			:class="{'user-xp': isUser(), 'opponent-xp': isOpponent()}" 
			:src="getPetXpPath()" />

		<img class="pet-animal-img" 
			:class="{'user-pet': isUser(), 'opponent-pet': isOpponent()}" 
			:src="getPetImagePath()" />

		<img class="pet-pedestal-img" src="../../assets/images//layout/shop-pedestal-with-shadow.png" />

		<img class="pet-stats-img" src="../../assets/images/layout/animal-stats-template.png" />

		<span class="card-text text-attack">{{getPetAttack()}}</span>
		<span class="card-text text-health">{{getPetHealth()}}</span>
	</div>
</template>

<script>
export default {
  name: 'PetCard',
  props: {
	cardWidth: {
		type: Number,
		required: true,
		default: 12,
		description: 'card width in rem units',
	},
	cardHeight: {
		type: Number,
		required: true,
		default: 18,
		description: 'card height in rem units',
	},
	petName: {
		type: String,
		required: true,
	},
	petOwner: {
		type: String,
		required: true,
		validator(value) {
			return ['user', 'opponent'].includes(value)
		}
	},
	petAttack: {
		type: Number,
		required: true,
	},
	petHealth: {
		type: Number,
		required: true,
	},
	petXp: {
		type: Number,
		required: true,
		validator(value) {
			return value >= 0 && value <= 1;
		},
	}
  },
  methods: {
	isUser: function () {
		return this.petOwner === 'user';
	},
	isOpponent: function () {
		return this.petOwner === 'opponent';
	},
	getPetImagePath: function () {
	  return '/src/assets/images/turtle-pack/pets/' + this.petName + '.webp';
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
	getPetXpPath: function () {
		return '/src/assets/images/misc/xp' + this.petXp + '.png'; /* Only supports 0 and 1 xp currently */
	}
  }
}
</script>

<style scoped lang="scss">
.pet-card {
	position: relative;
	border: 2px solid blue; /* For debugging */
}

.pet-xp-img {
	position: absolute;
	top: 0;
	width: 40%;

	z-index: 3;
}

.user-xp {
	left: 0;
}

.opponent-xp {
	right: 0;
}

.pet-animal-img {
	position: absolute;
	
	z-index: 2;
	height: 60%;

	top: 50%;
	left: 50%;
	
}

.user-pet {
	-webkit-transform: translate(-50%, -60%) scaleX(-1);
  	transform: translate(-50%, -60%) scaleX(-1);
}

.opponent-pet {
	-webkit-transform: translate(-50%, -60%);
  	transform: translate(-50%, -60%);
}
.pet-pedestal-img {
	position: absolute;
	top: 40%;
	width: 100%;
	
	z-index: 1;
	
}
.pet-stats-img {
	position: absolute;
	bottom: 0;
	width: 100%;
	
	z-index: 4;
}

/* This should be somewhere else */
@font-face {
  font-family: LapsusProBold;
  src: url(../../assets/fonts/LapsusPro-Bold.otf);
}

.card-text {
	position: absolute;
	font-size: 3em;
	bottom: 0.5rem;
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
