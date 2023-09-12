<template>
	<div id="team-container">
		<div class="row">
			<div class="col-2">
				<span> Pre Team Spacer </span>
			</div>
			<div class="col-1 animal-col">
				<pet-card pet-type="Beaver" />
			</div>
			<div class="col-1 animal-col">
				<pet-card pet-type="Monkey" />
			</div>
			<div class="col-1 animal-col">
				<pet-card pet-type="Crocodile" />
			</div>
			<div class="col-1 animal-col">
				<pet-card pet-type="Whale" />
			</div>
			<div class="col-1 animal-col">
				<pet-card pet-type="Deer" />
			</div>
			<div class="col-5">
				<span> Post Team Spacer </span>
			</div>
		</div>
	</div>
</template>

<script>
import PetCard from  './PetCard.vue';

export default {
  name: 'CurrentLineup',
  props: {
    msg: String
  },
  components: {
	PetCard,
  }
}
</script>

<style scoped lang="scss">

</style>
