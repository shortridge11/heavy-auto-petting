<template>
	<div class="main-page">
		<div class="row">
			<div class="col-12 lineup-col">
				<current-lineup :pets="lineup" />
			</div>
			<div class="col-12 shop-col">
				<display-shop :pets="shopPets" :items="shopItems" />
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
		this.lineup.push(this.findPet('beaver'));
		this.lineup.push(this.findPet('monkey'));
		this.lineup.push(this.findPet('crocodile'));
		this.lineup.push(this.findPet('whale'));
		this.lineup.push(this.findPet('deer'));

		this.shopPets.push(this.findPet('dragon'));
		this.shopPets.push(this.findPet('skunk'));
		this.shopPets.push(this.findPet('seal'));

		this.shopItems.push(this.findItem('pill'));
		this.shopItems.push(this.findItem('chocolate'));
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
