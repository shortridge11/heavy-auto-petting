<template>
  <br/>
  <br/>
	<div class="container animal-card-test">
    <div class="row">
        <div class="col-1">
            <!-- empty -->
        </div>
        <div class="col-10">
            <slider v-model="cardWidth" :lazy="false" :min="6" :max="24" />
        </div>
        <div class="col-1">
            <!-- empty -->
        </div>
    </div>
    <div class="row">
      <div class="col-1">
        <slider v-model="cardHeight" :lazy="false" orientation="vertical" :min="12" :max="36" />
      </div>
      <div class="col-2">
        <pet-card :cardWidth="getCardWidth()" :cardHeight="getCardHeight()"
          petName="Deer" petOwner="user" :petAttack="1" :petHealth="1" :petXp="0" />
      </div>
      <div class="col-2">
        <pet-card :cardWidth="getCardWidth()" :cardHeight="getCardHeight()"
          petName="Badger" petOwner="user" :petAttack="3" :petHealth="2" :petXp="0" />
      </div>
      <div class="col-2">
        <pet-card :cardWidth="getCardWidth()" :cardHeight="getCardHeight()"
          petName="Scorpion" petOwner="user" :petAttack="1" :petHealth="1" :petXp="0" />
      </div>
      <div class="col-2">
        <pet-card :cardWidth="getCardWidth()" :cardHeight="getCardHeight()"
          petName="Dragon" petOwner="opponent" :petAttack="50" :petHealth="44" :petXp="1"  />
      </div>
      <div class="col-2">
        <pet-card :cardWidth="getCardWidth()" :cardHeight="getCardHeight()"
          petName="zombieFly" petOwner="opponent" :petAttack="3" :petHealth="2" :petXp="0" />
      </div>
      <div class="col-1">
        <!-- spacer -->
      </div>
    </div>
	</div>
</template>

<script>
import DisplayCard from '../components/DisplayCard.vue';
import Slider from '@vueform/slider'

export default {
  name: 'PetCardTestPage',
  props: {
    msg: String
  },
  components: {
    DisplayCard,
    Slider
  },
  methods: {
    getCardWidth: function () {
      return this.cardWidth;
    },
    getCardHeight: function () {
      return this.cardHeight;
    },
  },
  data() {
    return {
      cardWidth: 12,
      cardHeight: 18
    }
  }
}
</script>

<style src="@vueform/slider/themes/default.css"></style>
<style scoped lang="scss">
</style>
