<template>
    <b-table-simple hover caption-top>
        <caption>
            <h1>Change Loot Crate</h1>
            <p>"ConfigOverrideSupplyCrateItems"</p>
            <EngramFilter :manager="manager"></EngramFilter>
            <b-modal id="loot-modal" hide-footer title="Select a source Loot">
                <b-list-group>
                    <b-list-group-item v-for="loot in lootxx" @click="select(loot)" :key="loot.name">
                        {{ loot.label }}
                    </b-list-group-item>
                </b-list-group>
                <div>
                    <b-button class="mt-3" variant="outline-danger" @click="$bvModal.hide('loot-modal')">
                        Close
                    </b-button>
                </div>
            </b-modal>
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
                    <b-button-group>
                        <b-button @click="bus.editLoot(loot)" variant="outline-primary"> Edit </b-button>
                        <b-button @click="copy(loot)" variant="outline-success"> Load </b-button>
                    </b-button-group>
                    <ul>
                        <li v-for="set in loot.ItemSetManager.list" :key="set.name">{{ set.label }}</li>
                    </ul>
                </b-td>
            </b-tr>
        </b-tbody>
        <b-tfoot>
            <b-tr>
                <b-td>
                    <b-button @click="selectAll" variant="outline-primary"> All </b-button>
                </b-td>
                <b-td></b-td>
                <b-td></b-td>
                <b-td>
                    <b-button @click="setMin" variant="outline-primary"> Set </b-button>
                </b-td>
                <b-td>
                    <b-button @click="setMax" variant="outline-primary"> Set </b-button>
                </b-td>
                <b-td>
                    <b-button @click="update" variant="outline-primary"> Update </b-button>
                </b-td>
            </b-tr>
        </b-tfoot>
    </b-table-simple>
</template>

<script lang="ts">
import Vue from 'vue'
import bus from '../model/bus'
import EngramFilter from './EngramFilter.vue'

export default Vue.extend({
    name: 'LootList',
    components: { EngramFilter },
    data() {
        return {
            bus,
            manager: bus.game.LootManager,
            destination: null,
            includeAll: false,
        }
    },
    created() {},
    computed: {
        lootxx() {
            return bus.game.LootManager.list.filter(loot => loot.ItemSetManager.list.length)
        },
    },
    methods: {
        copy(destination) {
            this.destination = destination
            this.$bvModal.show('loot-modal')
        },
        select(loot) {
            this.$bvModal.hide('loot-modal')
            this.destination.ItemSetManager.clear()
            this.destination.ItemSetManager.load(loot.ItemSetManager)
        },
        selectAll() {
            this.includeAll = !this.includeAll
            this.manager.filtered.forEach(loot => (loot.included = this.includeAll))
        },
        setMin() {
            const value = prompt('Please input the Min Amount', '1')
            if (value !== null) {
                this.manager.filtered.forEach(item => {
                    item.MinItemSets = parseInt(value)
                })
            }
        },
        setMax() {
            const value = prompt('Please input the Max Amount', '1')
            if (value !== null) {
                this.manager.filtered.forEach(item => {
                    item.MaxItemSets = parseInt(value)
                })
            }
        },
        update() {
            bus.game.updateLoot()
            this.$bvToast.toast('Loot updated!', { title: 'Info', solid: true })
        },
    },
})
</script>
