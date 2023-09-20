<template>
	<div class="main-page">
		<div class="row">
			<div class="col-12 lineup-col">
				<current-lineup :pets="lineup" @updatePet="updateCurrentLineup" />
			</div>
			<div class="col-12 shop-col">
				<display-shop :pets="shopPets" :items="shopItems" @updatePet="updateShopPet" @updateItem="updateShopItem" />
			</div>
			<div class="col-12">
				<button-row/>
			</div>
		</div>
	</div>
</template>

<script>
import CurrentLineup from './components/CurrentLineup.vue';
import DisplayShop from './components/DisplayShop.vue';
import ButtonRow from './components/ButtonRow.vue';
import MixinUtils from '../js/MixinUtils.vue';

export default {
	name: 'MainPage',
	mixins: [
		MixinUtils
	],
	components: {
		CurrentLineup,
		DisplayShop,
		ButtonRow,
	},
	data:()=>({
		lineup: [],
		shopPets: [],
		shopItems: [],
		tier: 1,
	}),
	mounted: function() {
		this.initializeArrays(this.findPet('beaver'), this.lineup);
		this.initializeArrays(this.findPet('monkey'), this.lineup);
		this.initializeArrays(this.findPet('crocodile'), this.lineup);
		this.initializeArrays(this.findPet('whale'), this.lineup);
		this.initializeArrays(this.findPet('deer'), this.lineup);

		this.initializeArrays(this.findPet('dragon'), this.shopPets);
		this.initializeArrays(this.findPet('skunk'), this.shopPets);
		this.initializeArrays(this.findPet('seal'), this.shopPets);

		this.initializeArrays(this.findItem('sleepingPill'), this.shopItems);
		this.initializeArrays(this.findItem('chocolate'), this.shopItems);
	},
	methods: {
		initializeArrays: function (pet, array) {
			pet.index = array.length;
			array.push(pet);
		},
		updateCurrentLineup: function (pet) {
			let newPet = this.findPet(pet.name);
			newPet.index = pet.index
			this.lineup[pet.index] = newPet;
		},
		updateShopPet: function (pet) {
			let newPet = this.findPet(pet.name);
			newPet.index = pet.index
			this.shopPets[pet.index] = newPet;
		},
		updateShopItem: function (item) {
			let newItem = this.findItem(item.name);
			newItem.index = item.index
			this.shopItems[item.index] = newItem;
		}
	},
}
</script>

<style scoped lang="scss">
.lineup-col {
    margin-top: 15%;
}

.shop-col {
	margin-top: 2%;
}
</style>
