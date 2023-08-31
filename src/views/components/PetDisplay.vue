<template>
	<div id="pet-container">
		<div class="row">
			<div class="col-12">
				<img src="../../assets/layout/xp0.png" />
			</div>
			<div class="col-12">
				<img :src="getPetPath()" />
			</div>
			<div class="col-12">
				<img src="../../assets/layout/animal-stats-template.png" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'PetDisplay',
  props: {
	petType: String,
	pet_attack: Number,
	pet_health: Number,
	pet_xp: Number
  },
  methods: {
    getPetPath: function () {
      return '/src/assets/images/turtle-pack/pets/' + this.petType + '.webp';
    }
  }
}
</script>

<style scoped lang="scss">

</style>
