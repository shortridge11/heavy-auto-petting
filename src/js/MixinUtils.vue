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
            return this.library.items.find(pet => pet.name === name);
        },
        getPetHealth(name) {
            return this.findPet(name).health;
        },
        getPetAttack(name) {
            return this.findPet(name).attack;
        },
        getItemHealth(name) {
            return this.findItem(name.health);
        },
        getItemAttack(name) {
            return this.findItem(name.attack);
        }
    }
}
</script>