<template>
	<div id="pet-container" class="container-fluid">
		<div class="row">
			<div class="col-12">
				<img src="../assets/xp0.png" />
			</div>
			<div class="col-12">
				<img :src="getPetPath()" />
			</div>
			<div class="col-12">
				<img src="../assets/animal-stats-template.png" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'item-display',
  props: {
	petType: String,
	pet_attack: Number,
	pet_health: Number,
	pet_xp: Number
  },
  methods: {
    getPetPath: function () {
      return '../assets/turtle-pack/pets/' + this.petType + '.webp';
    }
  }
}
</script>

<style>
#pet-container {
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
