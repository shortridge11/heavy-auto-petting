<template>
	<div id="team-container" class="container-fluid">
		<div id="team-row" class="row">
			<div class="col-2">
				<span> Pre Team Spacer </span>
			</div>
			<div class="col-1 animal-col">
				<itemDisplay pet-type="Beaver" />
			</div>
			<div class="col-1 animal-col">
				<itemDisplay pet-type="Monkey" />
			</div>
			<div class="col-1 animal-col">
				<itemDisplay pet-type="Crocodile" />
			</div>
			<div class="col-1 animal-col">
				<itemDisplay pet-type="Whale" />
			</div>
			<div class="col-1 animal-col">
				<itemDisplay pet-type="Deer" />
			</div>
			<div class="col-5">
				<span> Post Team Spacer </span>
			</div>
		</div>
	</div>
</template>

<script>
import itemDisplay from  '../components/item-display.vue'

export default {
  name: 'team-data',
  props: {
    msg: String
  },
  components: {
	itemDisplay
  }
}
</script>

<style>
#team-container {
	height: 100%;
	padding: 0;
	margin: 0;
}

#team-row {
	height: 100%;
	margin: 0;
	padding: 0;
	/* border: 2px solid yellow; */ 
}

.animal-col {
	height: 100%;
	/* border: 2px solid pink; */
}

.team-animal {
	max-height: 100%;
	max-width: 100%;
}

</style>
