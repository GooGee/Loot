<template>
    <b-table-simple hover caption-top>
        <caption>
            <h1>Change Harvest Amount</h1>
            <p>"HarvestResourceItemAmountClassMultipliers"</p>
        </caption>
        <b-thead>
            <b-tr>
                <b-th width="30%">Name</b-th>
                <b-th>Multiplier</b-th>
            </b-tr>
        </b-thead>
        <b-tbody>
            <b-tr v-for="item in manager.filtered" :key="item.name">
                <b-td>
                    <b-form-checkbox v-model="item.harvest.included">{{ item.label }}</b-form-checkbox>
                </b-td>
                <b-td>
                    <b-form-input
                        v-model.number="item.harvest.multiplier"
                        type="number"
                        min="0.01"
                        max="100"
                        step="0.01"
                    ></b-form-input>
                </b-td>
            </b-tr>
        </b-tbody>
    </b-table-simple>
</template>

<script lang="ts">
import Vue from 'vue'
import bus from '../model/bus'

export default Vue.extend({
    name: 'HarvestList',
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
})
</script>
