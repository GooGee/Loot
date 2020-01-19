<template>
    <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-navbar-brand href="#">Ark Loot</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item @click="bus.tab.show('home')" href="#">Home</b-nav-item>
                <b-nav-item @click="bus.tab.show('crate')" href="#">Crate</b-nav-item>
                <b-nav-item @click="bus.tab.show('creature')" href="#">Creature</b-nav-item>
                <b-nav-item @click="bus.tab.show('set')" href="#">ItemSet</b-nav-item>
                <b-nav-item @click="bus.tab.show('engram')" href="#">Engram</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="https://github.com/GooGee/Loot">GitHub</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
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
