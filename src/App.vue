<template>
    <div id="app">
        <Bar />

        <div class="container">
            <Home v-if="bus.tab.is('Home')" />
            <ArkList v-if="bus.tab.is('Ark')" />
            <CreatureList v-if="bus.tab.is('Creature')" />
            <LootList v-if="bus.tab.is('LootList')" />
            <ResourceList v-if="bus.tab.is('Resource')" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import bus from './model/bus'
import Bar from './components/Bar.vue'
import Home from './components/Home.vue'
import ArkList from './components/ArkList.vue'
import CreatureList from './components/CreatureList.vue'
import LootList from './components/LootList.vue'
import ResourceList from './components/ResourceList.vue'

export default Vue.extend({
    name: 'app',
    components: {
        Bar,
        Home,
        ArkList,
        CreatureList,
        LootList,
        ResourceList,
    },
    data() {
        return {
            bus,
        }
    },
})
</script>
