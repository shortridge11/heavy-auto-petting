<script>

import libraryJson from '../assets/library.json';
export default {
    name: 'MixinUtils',
    data() {
        return {
            library: libraryJson
        }
    },
    methods: {
        findPet(name) {
            return this.library.pets.find(pet => pet.name === name);
        },
        findItem(name) {
            return this.library.items.find(item => item.name === name);
        },
        getPetHealth(name) {
            return this.findPet(name).health;
        },
        getPetAttack(name) {
            return this.findPet(name).attack;
        },
        getPetTier(name) {
            return this.findPet(name).tier;
        },
        getItemHealth(name) {
            return this.findItem(name).health;
        },
        getItemAttack(name) {
            return this.findItem(name).attack;
        },
        getItemTier(name) {
            return this.findItem(name).tier;
        },
    }
}
</script>