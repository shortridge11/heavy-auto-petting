<template>
	<div class="pet-card" :style="getCardStyle()">
		<img class="xp-or-tier" v-if="isPet" :src="getXpPath()" />
        <img class="xp-or-tier" v-if="isShop" :src="getTierPath()" />
		<img class="pet-animal-img" :src="getPetImagePath()" />
		<img class="pet-pedestal-img" src="../../assets/images/layout/shop-pedestal-with-shadow.png" />

        <template v-if="!isShopFood">
            <img class="pet-stats-img" src="../../assets/images/layout/animal-stats-template.png" />
            <span class="card-text text-attack">{{ asset.attack }}</span>
            <span class="card-text text-health">{{ asset.health }}</span>
        </template>
	</div>
</template>

<script>
export default {
    name: 'DisplayCard',
    props: {
        asset: {
            type: Object,
            required: true,
        },
        type: {
            type: String,
            required: true,
            description: 'pet/shopPet/shopItem',
        },
    },
    data:()=>({
        cardWidth: 8,
        cardHeight: 12,
    }),
    methods: {
        getPetImagePath: function () {
            let path = '';
            if(this.isPet || this.isShopPet) {
                path = '/src/assets/images/pets/' + this.asset.image + '.webp';
            } else if (this.isShopFood) {
                path = '/src/assets/images/items/' + this.asset.image + '.webp';
            }
            return path;
        },
        getCardStyle: function () {
            return 'width:' + this.cardWidth + 'rem;height:' + this.cardHeight + 'rem';
        },
        getXpPath: function () {
            return '/src/assets/images/misc/xp' + this.asset.xp + '.png';
        },
        getTierPath: function () {
            return '/src/assets/images/misc/Tier_' + this.asset.tier + '_Icon.webp';
        },
    },
    computed: {
        isPet: function () { return this.type === 'pet'; },
        isShopPet: function () { return this.type === 'shopPet'; },
        isShopFood: function () { return this.type === 'shopItem'; },
        isShop: function () { return this.isShopFood || this.isShopPet; },
    }
}
</script>

<style scoped lang="scss">
.pet-card {
	position: relative;
}

.xp-or-tier {
	position: absolute;
	z-index: 3;
	top: -2rem;;
	width: 40%;
}

.pet-animal-img {
	position: absolute;
	z-index: 2;
	height: 55%;
	top: 45%;
	left: 50%;
    -webkit-transform: translate(-50%, -60%) scaleX(-1);
    transform: translate(-50%, -60%) scaleX(-1);

}

.pet-pedestal-img {
	position: absolute;
	z-index: 1;
	top: 40%;
	width: 100%;
}
.pet-stats-img {
    z-index: 4;
	position: absolute;
	bottom: 0;
	width: 100%;
}

/* This should be somewhere else */
@font-face {
  font-family: LapsusProBold;
  src: url(../../assets/fonts/LapsusPro-Bold.otf);
}

.card-text {
	position: absolute;
	z-index: 5;
	font-size: 3em;
	bottom: -0.5rem;
	color: white;
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
