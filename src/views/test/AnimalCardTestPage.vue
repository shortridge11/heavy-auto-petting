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
      <div class="col-3">
        <EntityCard 
          entityType="Pet" entityName="Deer" entityTier="tier5" 
          :cardWidth="getCardWidth()" :cardHeight="getCardHeight()" 
          petAttack="1" petHealth="1" />
      </div>
      <div class="col-3">
        <EntityCard 
          entityType="Pet" entityName="Dragon" entityTier="xp0" 
          :cardWidth="getCardWidth()" :cardHeight="getCardHeight()" 
          petAttack="50" petHealth="50" :petIsOpponent="true"/>
      </div>
      <div class="col-3">
        <EntityCard 
          entityType="Item" entityName="Chocolate" entityTier="tier5" 
          :cardWidth="getCardWidth()" :cardHeight="getCardHeight()" />
      </div>
      <div class="col-2">
        <!-- spacer -->
      </div>
    </div>
	</div>
</template>

<script>
import EntityCard from '../components/EntityCard.vue';
import Slider from '@vueform/slider'

export default {
  name: 'AnimalCardTestPage',
  props: {
    msg: String
  },
  components: {
    EntityCard,
    Slider
  },
  methods: {
    getCardWidth: function () {
      return Number(this.cardWidth);
    },
    getCardHeight: function () {
      return Number(this.cardHeight);
    }
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
