<template>
    <b-table-simple hover caption-top>
        <caption>
            <h1>Change Loot Crate</h1>
            <p>"ConfigOverrideSupplyCrateItems"</p>
            <div>
                <b-form-select
                    v-model="manager.map"
                    :options="manager.MapManager.list"
                    value-field="name"
                    text-field="name"
                ></b-form-select>
            </div>
        </caption>
        <b-thead>
            <b-tr>
                <b-th width="30%">Name</b-th>
                <b-th colspan="2">Quality (min - max)</b-th>
                <b-th colspan="2">Amount (min - max)</b-th>
                <b-th width="30%">ItemSet List</b-th>
            </b-tr>
        </b-thead>
        <b-tbody>
            <b-tr v-for="loot in manager.filtered" :key="loot.name">
                <b-td>
                    <b-form-checkbox v-model="loot.included">{{ loot.label }}</b-form-checkbox>
                </b-td>
                <b-td>
                    <b-form-input
                        v-model.number="loot.minQuality"
                        type="number"
                        min="1"
                        max="10"
                        step="0.05"
                    ></b-form-input>
                </b-td>
                <b-td>
                    <b-form-input
                        v-model.number="loot.maxQuality"
                        type="number"
                        min="1"
                        max="10"
                        step="0.05"
                    ></b-form-input>
                </b-td>
                <b-td>
                    <b-form-input
                        v-model.number="loot.MinItemSets"
                        type="number"
                        min="1"
                        max="100"
                        step="1"
                    ></b-form-input>
                </b-td>
                <b-td>
                    <b-form-input
                        v-model.number="loot.MaxItemSets"
                        type="number"
                        min="1"
                        max="100"
                        step="1"
                    ></b-form-input>
                </b-td>
                <b-td>
                    <div>
                        <b-button @click="bus.editLoot(loot)" variant="outline-primary"> Edit </b-button>
                    </div>
                    <ul>
                        <li v-for="set in loot.ItemSetManager.list" :key="set.name">{{ set.label }}</li>
                    </ul>
                </b-td>
            </b-tr>
        </b-tbody>
        <b-tfoot>
            <b-tr>
                <b-td colspan="3"></b-td>
                <b-td>
                    <b-button @click="setMin" variant="outline-primary"> Set </b-button>
                </b-td>
                <b-td>
                    <b-button @click="setMax" variant="outline-primary"> Set </b-button>
                </b-td>
                <b-td></b-td>
            </b-tr>
        </b-tfoot>
    </b-table-simple>
</template>

<script lang="ts">
import Vue from 'vue'
import bus from '../model/bus'

export default Vue.extend({
    name: 'LootList',
    data() {
        return {
            bus,
            manager: bus.game.LootManager,
        }
    },
    created() {
        this.manager.map = 'Island'
        this.manager.tag = ''
        this.manager.text = ''
    },
    computed: {},
    methods: {
        setMin() {
            const value = prompt('Please input the Min Amount', 1)
            if (value !== null) {
                this.manager.filtered.forEach(item => {
                    item.MinItemSets = parseInt(value)
                })
            }
        },
        setMax() {
            const value = prompt('Please input the Max Amount', 1)
            if (value !== null) {
                this.manager.filtered.forEach(item => {
                    item.MaxItemSets = parseInt(value)
                })
            }
        },
    },
})
</script>
