<template>
    <b-table-simple hover caption-top>
        <caption></caption>
        <b-thead>
            <b-tr>
                <b-th width="30%">Name</b-th>
                <b-th>To</b-th>
            </b-tr>
        </b-thead>
        <b-tbody>
            <b-tr v-for="item in manager.filtered" :key="item.name">
                <b-td>{{ item.label }}</b-td>
                <b-td>
                </b-td>
            </b-tr>
        </b-tbody>
    </b-table-simple>
</template>

<script lang="ts">
import Vue from 'vue'
import bus from '../model/bus'

export default Vue.extend({
    name: 'CreatureList',
    data() {
        return {
            bus,
            manager: bus.game.CreatureManager,
        }
    },
    created() {},
    computed: {},
    methods: {},
})
</script>
