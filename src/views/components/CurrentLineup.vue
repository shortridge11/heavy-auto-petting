<template>
	<div id="team-container">
		<div class="row">
			<div class="col-2">
				<span> Pre Team Spacer </span>
			</div>
			<div class="col-1 animal-col">
				<pet-display pet-type="Beaver" />
			</div>
			<div class="col-1 animal-col">
				<pet-display pet-type="Monkey" />
			</div>
			<div class="col-1 animal-col">
				<pet-display pet-type="Crocodile" />
			</div>
			<div class="col-1 animal-col">
				<pet-display pet-type="Whale" />
			</div>
			<div class="col-1 animal-col">
				<pet-display pet-type="Deer" />
			</div>
			<div class="col-5">
				<span> Post Team Spacer </span>
			</div>
		</div>
	</div>
</template>

<script>
import PetDisplay from  './PetDisplay.vue';

export default {
  name: 'CurrentLineup',
  props: {
    msg: String
  },
  components: {
	PetDisplay
  }
}
</script>

<style scoped lang="scss">

</style>
