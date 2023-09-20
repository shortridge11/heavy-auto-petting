<template>
	<div class="shop-pets">
		<div class="row">
			<div class="col-2">
			</div>
			<template v-for="pet in pets" :key="pet.name">
				<div class="col-1">
					<display-card :asset="pet" type="shopPet" @updateAsset="updatePet" />
				</div>
			</template>
			<div class="col-3">
			</div>
			<template v-for="item in items" :key="item.name">
				<div class="col-1">
					<display-card :asset="item" type="shopItem" @updateAsset="updateItem" />
				</div>
			</template>
		</div>
	</div>
</template>

<script scoped>
import DisplayCard from  './DisplayCard.vue';

export default {
	name: 'DisplayShop',
	props: {
		tier: {
			type: Number,
			required: true,
			},
		pets: {
			type: Array,
			required: true,
		},
		items: {
			type: Array,
			required: true,
		},
	},
	components: {
		DisplayCard,
	},
	methods: {
		updatePet: function (pet) {
			this.$emit('updatePet', pet)
		},
		updateItem: function (item) {
			this.$emit('updateItem', item)
		},
	}
}
</script>

<style scoped lang="scss">

</style>
