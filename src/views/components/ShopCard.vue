<template>
	<div class="shop-card" :style="getCardStyle()">
		<img class="shop-tier-img" :src="getEntityTierPath()" />

		<img class="shop-entity-img" :src="getEntityPath()" />

		<img class="shop-pedestal-img" src="../../assets/images//layout/shop-pedestal-with-shadow.png" />

		<template v-if="isPet()">
			<img class="shop-stats-img" src="../../assets/images/layout/animal-stats-template.png" />
			<span class="card-text text-attack">{{getAttack()}}</span>
			<span class="card-text text-health">{{getHealth()}}</span>
		</template>
	</div>
</template>

<script>
import MixinUtils from '../../js/MixinUtils.vue';

export default {
  name: 'ShopCard',
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
	entityType: {
		type: String,
		required: true,
		validator(value) {
			return ['pet', 'item'].includes(value)
		}
	},
	entityName: {
		type: String,
		required: true,
	},
  },
  mixins: [
	MixinUtils
  ],
  methods: {
	isPet: function () {
		return this.entityType === 'pet';
	},
	isItem: function () {
		return this.entityType === 'item';
	},

	getCardStyle: function () {
		return 'width:' + this.cardWidth + 'rem;height:' + this.cardHeight + 'rem';
	},
    getEntityPath: function () {
	  var subfolder = this.isPet() ? "pets" : "items";
      return '/src/assets/images/' + subfolder + '/' + this.entityName + '.webp';
    },
	getEntityTierPath: function () {
		//let self = this;
		//var tier = this.isPet() ? MixinUtils.getPetTier(this.entityName) : MixinUtils.getItemTier(this.entityName);
		var tier = this.isPet() ? this.getPetTier(this.entityName) : this.getItemTier(this.entityName);
		//return '/src/assets/images/misc/Tier_' + tier + '_Icon.webp';
		return '/src/assets/images/misc/Tier_' + tier + '_Icon.webp';
	},

	getAttack: function () {
		return this.getPetAttack(this.entityName);
	},
	getHealth: function () {
		return this.getPetHealth(this.entityName);
	},
  }
}
</script>

<style scoped lang="scss">
.shop-card {
	position: relative;
	border: 2px solid blue; /* For debugging */
}

.shop-tier-img {
	position: absolute;
	top: 0;
	left: 0;
	width: 40%;

	z-index: 3;
}

.shop-entity-img {
	position: absolute;
	
	z-index: 2;
	height: 60%;

	top: 50%;
	left: 50%;
	
	-webkit-transform: translate(-50%, -60%) scaleX(-1);
  	transform: translate(-50%, -60%) scaleX(-1);
}

.shop-pedestal-img {
	position: absolute;
	top: 40%;
	width: 100%;
	
	z-index: 1;
}
.shop-stats-img {
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
