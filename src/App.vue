<template>
    <div id="app">
        <Bar />

        <div class="container">
            <Home v-if="bus.tab.is('Home')" />
            <ArkList v-if="bus.tab.is('Ark')" />
            <CreatureList v-if="bus.tab.is('Creature')" />
            <ItemSet v-if="bus.tab.is('ItemSet')" />
            <Loot v-if="bus.tab.is('Loot')" />
            <LootList v-if="bus.tab.is('LootList')" />
            <HarvestList v-if="bus.tab.is('Harvest')" />
            <StackList v-if="bus.tab.is('Stack')" />
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
import Loot from './components/Loot.vue'
import LootList from './components/LootList.vue'
import HarvestList from './components/HarvestList.vue'
import StackList from './components/StackList.vue'

export default Vue.extend({
    name: 'app',
    components: {
        Bar,
        Home,
        ArkList,
        CreatureList,
        ItemSet,
        Loot,
        LootList,
        HarvestList,
        StackList,
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
