<template>
    <div id="app">
        <Bar />
        <Home />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Bar from './components/Bar.vue'
import Home from './components/Home.vue'

export default Vue.extend({
    name: 'app',
    components: {
      Bar,
      Home,
    },
})
</script>
