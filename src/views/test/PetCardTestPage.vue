<template>
	<div class="container animal-card-test">
    <div class="row">
      <div class="col-12">
        {{ cardWidth }} <Slider v-model="cardWidth" :lazy="false" :min="6" :max="24" />
      </div>
    </div>
    <div class="row">
      <div class="col-1">
        {{ cardHeight }} <Slider v-model="cardHeight" :lazy="false" orientation="vertical" :direction="rtl" :min="12" :max="36" />
      </div>
      <div class="col-2">
        <PetCard petName="Deer" petOwner="user" :petAttack="1" :petHealth="1" :petXp="0" />
      </div>
      <div class="col-2">
        <PetCard petName="Badger" petOwner="user" :petAttack="3" :petHealth="2" :petXp="0" />
      </div>
      <div class="col-2">
        <PetCard petName="Scorpion" petOwner="user" :petAttack="1" :petHealth="1" :petXp="0" />
      </div>
      <div class="col-2">
        <PetCard petName="Dragon" petOwner="opponent" :petAttack="50" :petHealth="44" :petXp="1"  />
      </div>
      <div class="col-2">
        <PetCard petName="Zombie_Fly" petOwner="opponent" :petAttack="3" :petHealth="2" :petXp="0" />
      </div>
      <div class="col-1">
        <!-- spacer -->
      </div>
    </div>
	</div>
</template>

<script>
import PetCard from '../components/PetCard.vue';
import Slider from '@vueform/slider'

export default {
  name: 'PetCardTestPage',
  props: {
    msg: String
  },
  components: {
    PetCard,
    Slider
  },
  /*methods: {
  },*/
  /*data() {
    return {
      cardWidth: 12,
      cardHeight: 18
    }
  }*/
}
</script>

<style src="@vueform/slider/themes/default.css"></style>
<style scoped lang="scss">
</style>
