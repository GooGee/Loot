<template>
    <b-table-simple hover caption-top>
        <caption></caption>
        <b-thead>
            <b-tr>
                <b-th width="30%">Name</b-th>
                <b-th>Multiplier</b-th>
            </b-tr>
        </b-thead>
        <b-tbody>
            <b-tr v-for="item in manager.filtered" :key="item.name">
                <b-td>{{ item.label }}</b-td>
                <b-td>
                    <b-form-input v-model.number="item.Multiplier" type="number" min="0.01" max="100" step="0.01"></b-form-input>
                </b-td>
            </b-tr>
        </b-tbody>
    </b-table-simple>
</template>

<script lang="ts">
import Vue from 'vue'
import bus from '../model/bus'

export default Vue.extend({
    name: 'ResourceList',
    data() {
        return {
            bus,
            manager: bus.game.EngramManager,
        }
    },
    created() {
        this.manager.map = ''
        this.manager.tag = 'harvestable'
        this.manager.text = ''
    },
    computed: {},
    methods: {},
})
</script>
