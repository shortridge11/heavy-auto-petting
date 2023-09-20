<template>
	<div id="team-container">
		<div class="row">
			<div class="col-2">
			</div>
			<template v-for="pet in pets" :key="pet.name">
				<div class="col-1">
					<display-card :asset="pet" type="pet" />
				</div>
			</template>
		</div>
	</div>
</template>

<script>
import DisplayCard from  './DisplayCard.vue';

export default {
	name: 'CurrentLineup',
	props: {
		pets: {
            type: Array,
            required: true,
        },
	},
	components: {
		DisplayCard,
	},
	mounted: function() {
		console.log(this.pets)
	}
}
</script>

<style scoped lang="scss">

</style>
