<template>
    <div id="app">
        <Bar />
        
        <Home v-if="bus.tab.is('home')" />
        <CrateList v-if="bus.tab.is('crate')" />
        <CreatureList v-if="bus.tab.is('creature')" />
        <EngramList v-if="bus.tab.is('engram')" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import bus from './model/bus'
import Bar from './components/Bar.vue'
import Home from './components/Home.vue'
import CrateList from './components/CrateList.vue'
import CreatureList from './components/CreatureList.vue'
import EngramList from './components/EngramList.vue'

export default Vue.extend({
    name: 'app',
    components: {
      Bar,
      Home,
      CrateList,
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
