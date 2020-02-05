<template>
    <b-navbar toggleable="lg" type="dark" variant="primary">
        <div class="container">
            <b-navbar-brand href="#">Ark Loot</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item :class="{ active: bus.tab.is('Home') }" @click="bus.tab.show('Home')" href="#">
                        Home
                    </b-nav-item>
                    <b-nav-item :class="{ active: bus.tab.is('Ark') }" @click="bus.tab.show('Ark')" href="#">
                        Ark
                    </b-nav-item>
                    <b-nav-item :class="{ active: bus.tab.is('Creature') }" @click="bus.tab.show('Creature')" href="#">
                        Creature
                    </b-nav-item>
                    <b-nav-item :class="{ active: bus.tab.is('Resource') }" @click="bus.tab.show('Resource')" href="#">
                        Resource
                    </b-nav-item>
                    <b-nav-item :class="{ active: bus.tab.is('LootList') }" @click="bus.tab.show('LootList')" href="#">
                        Loot
                    </b-nav-item>
                    <b-nav-item :class="{ active: bus.tab.is('ItemSet') }" @click="bus.tab.show('ItemSet')" href="#">
                        ItemSet
                    </b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="https://github.com/GooGee/Loot" target="_blank">GitHub</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </div>
    </b-navbar>
</template>

<script lang="ts">
import Vue from 'vue'
import bus from '../model/bus'

export default Vue.extend({
    name: 'Bar',
    data() {
        return {
            bus,
        }
    },
})
</script>
