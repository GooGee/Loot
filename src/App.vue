<template>
    <div id="app">
        <Home />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Home from './components/Home.vue'

export default Vue.extend({
    name: 'app',
    components: {
      Home,
    },
})
</script>
