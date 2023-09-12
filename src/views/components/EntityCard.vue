<template>
	<div class="entity-card" :style="getCardStyle()">
		<img class="img-tier" 
			:class="{'user-tier': !this.isOpponent(), 'opponent-tier': this.isOpponent()}" 
			:src="getEntityTierPath()" />

		<img class="img-entity" 
			:class="{'user-pet': !this.isOpponent(), 'opponent-pet': this.isOpponent()}" 
			:src="getEntityPath()" />

		<img class="img-pedestal" src="../../assets/images//layout/shop-pedestal-with-shadow.png" />

		<template v-if="isPet()">
			<img class="img-stats" src="../../assets/images/layout/animal-stats-template.png" />
			<span class="card-text text-attack">{{getPetAttack()}}</span>
			<span class="card-text text-health">{{getPetHealth()}}</span>
		</template>
	</div>
</template>

<script>
export default {
  name: 'EntityCard',
  props: {
	cardWidth: Number,
	cardHeight: Number,

	entityType: String, /* Expected values:		"Pet", "Item" */
	entityName: String, /* Examples: 			"Beaver", "Chocolate" */
	entityTier: String, /* Examples:			"xp0", "tier3" */

	/* Pet Specific Properties */
	petAttack: Number,
	petHealth: Number,
	petIsOpponent: Boolean,
  },
  methods: {
	isPet: function () {
		return this.entityType == "Pet";
	},
	isItem: function () {
		return this.entityType == "Item";
	},
	isOpponent: function () {
		return this.petIsOpponent == null ? false : this.petIsOpponent;
	},
    getEntityPath: function () {
	  var subfolder = this.isPet() ? "pets" : "items";
      return '/src/assets/images/turtle-pack/' + subfolder + '/' + this.entityName + '.webp';
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

	getEntityTierPath: function () {
		if(this.entityTier.includes("xp")) {
			return "/src/assets/images/misc/xp0.png"; /* Need to update after we figure out how we want to display xp */
		}

		if(this.entityTier.includes("tier")) {
			return '/src/assets/images/misc/Tier_' + this.entityTier.slice(-1) + '_Icon.webp';
		}
	}
  }
}
</script>

<style scoped lang="scss">
.entity-card {
	position: relative;
	border: 2px solid blue; /* For debugging */
}

.img-tier {
	position: absolute;
	top: 0;
	width: 40%;

	z-index: 3;
}

.user-tier {
	left: 0;
}

.opponent-tier {
	right: 0;
}

.img-entity {
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
