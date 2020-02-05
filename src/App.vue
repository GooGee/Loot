<template>
    <div id="app">
        <Bar />

        <div class="container">
            <Home v-if="bus.tab.is('Home')" />
            <ArkList v-if="bus.tab.is('Ark')" />
            <CreatureList v-if="bus.tab.is('Creature')" />
            <ItemSet v-if="bus.tab.is('ItemSet')" />
            <ItemSetList v-if="bus.tab.is('ItemSetList')" />
            <Loot v-if="bus.tab.is('Loot')" />
            <LootList v-if="bus.tab.is('LootList')" />
            <ResourceList v-if="bus.tab.is('Resource')" />
        </div>

        <br />
        <br />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import bus from './model/bus'
import Bar from './components/Bar.vue'
import Home from './components/Home.vue'
import ArkList from './components/ArkList.vue'
import CreatureList from './components/CreatureList.vue'
import ItemSet from './components/ItemSet.vue'
import ItemSetList from './components/ItemSetList.vue'
import Loot from './components/Loot.vue'
import LootList from './components/LootList.vue'
import ResourceList from './components/ResourceList.vue'

export default Vue.extend({
    name: 'app',
    components: {
        Bar,
        Home,
        ArkList,
        CreatureList,
        ItemSet,
        ItemSetList,
        Loot,
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

<style>
.inline {
    display: inline-block;
}
</style>
