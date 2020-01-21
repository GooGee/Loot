<template>
    <div id="app">
        <Bar />

        <div class="container">
            <Home v-if="bus.tab.is('Home')" />
            <ArkList v-if="bus.tab.is('Ark')" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import bus from './model/bus'
import Bar from './components/Bar.vue'
import Home from './components/Home.vue'
import ArkList from './components/ArkList.vue'

export default Vue.extend({
    name: 'app',
    components: {
        Bar,
        Home,
        ArkList,
    },
    data() {
        return {
            bus,
        }
    },
})
</script>
