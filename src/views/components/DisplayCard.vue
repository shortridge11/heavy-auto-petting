<template>
	<div class="pet-card" :style="getCardStyle()">
        <v-select :options="assetList" label="display" :class="displaySelect ? '' : 'd-none'"
        class="select" :clearable="false" ref="select" @option:selected="updateSelectedVal"/>
		<img class="xp-or-tier" v-if="isPet" :src="getXpPath()" />
        <img class="xp-or-tier" v-if="isShop" :src="getTierPath()" />
		<img class="pet-animal-img" :src="getPetImagePath()" @click="selectNewAsset" />
		<img class="pet-pedestal-img" src="../../assets/images/layout/shopPedestalWithShadow.png" />

        <template v-if="!isShopFood">
            <img class="pet-stats-img" src="../../assets/images/layout/animalStatsTemplate.png" />
            <span class="card-text text-attack">{{ asset.attack }}</span>
            <span class="card-text text-health">{{ asset.health }}</span>
        </template>

        
	</div>
</template>

<script>
import MixinUtils from '../../js/MixinUtils.vue';

export default {
    name: 'DisplayCard',
    mixins: [MixinUtils],
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
    emits: [ 'updatePet' ],
    data:()=>({
        cardWidth: 8,
        cardHeight: 12,
        assetList: [],
        displaySelect: false,
    }),
    mounted: function() {
        if(this.isPet || this.isShopPet) {
            this.assetList = this.getAllPets();
        } else if (this.isShopFood) {
            this.assetList = this.getAllItems();
        }
    },
    methods: {
        getPetImagePath: function () {
            let path = '';
            if(this.isPet || this.isShopPet) {
                path = '/src/assets/images/pets/' + this.asset.name + '.webp';
            } else if (this.isShopFood) {
                path = '/src/assets/images/items/' + this.asset.name + '.webp';
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
            return '/src/assets/images/misc/iconTier' + this.asset.tier + '.webp';
        },
        selectNewAsset: function () {
            this.displaySelect = true;
            this.$refs.select.open = true;
        },
        updateSelectedVal: function (newVal) {
            let self = this;
            let asset = {
                name: newVal.name,
                index: self.asset.index
            }
            this.$emit('updateAsset', asset)
            this.displaySelect = false;
        }
    },
    computed: {
        isPet: function () { return this.type === 'pet'; },
        isShopPet: function () { return this.type === 'shopPet'; },
        isShopFood: function () { return this.type === 'shopItem'; },
        isShop: function () { return this.isShopFood || this.isShopPet; },
    },
}
</script>

<style scoped lang="scss">
.pet-card {
	position: relative;
    cursor: pointer;
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
	transform:translateX(-50%);
}

.text-health {
	right: 25%;
	transform:translateX(50%);
}

.select {
    z-index: 10;
}
</style>
