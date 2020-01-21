<template>
    <div id="app">
        <Bar />
        
        <Home v-if="bus.tab.is('home')" />
        <LootList v-if="bus.tab.is('Loot')" />
        <CreatureList v-if="bus.tab.is('creature')" />
        <EngramList v-if="bus.tab.is('engram')" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import bus from './model/bus'
import Bar from './components/Bar.vue'
import Home from './components/Home.vue'
import LootList from './components/LootList.vue'
import CreatureList from './components/CreatureList.vue'
import EngramList from './components/EngramList.vue'

export default Vue.extend({
    name: 'app',
    components: {
      Bar,
      Home,
      LootList,
      CreatureList,
      EngramList,
    },
    data() {
        return {
            bus,
        }
    },
})
</script>
