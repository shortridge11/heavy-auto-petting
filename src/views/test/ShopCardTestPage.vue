<template>
	<div class="container animal-card-test">
    <div class="row">
      <div class="col-12">
        <slider v-model="cardWidth" :lazy="false" :min="6" :max="24" />
      </div>
    </div>
    <div class="row">
      <div class="col-1">
        <slider v-model="cardHeight" :lazy="false" orientation="vertical" :min="12" :max="36" />
      </div>
      <div class="col-3">
        <shop-card entityType="pet" entityName="Deer"
          :cardWidth="getCardWidth()" :cardHeight="getCardHeight()" />
      </div>
      <div class="col-3">
        <shop-card entityType="pet" entityName="Dragon"
          :cardWidth="getCardWidth()" :cardHeight="getCardHeight()" />
      </div>
      <div class="col-3">
        <shop-card entityType="Item" entityName="Chocolate"
          :cardWidth="getCardWidth()" :cardHeight="getCardHeight()" />
      </div>
      <div class="col-2">
        <!-- spacer -->
      </div>
    </div>
	</div>
</template>

<script>
import ShopCard from '../components/ShopCard.vue';
import Slider from '@vueform/slider'

export default {
  name: 'ShopCardTestPage',
  props: {
    msg: String
  },
  components: {
    ShopCard,
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
