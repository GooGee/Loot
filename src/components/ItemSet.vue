<template>
    <div class="row">
        <div class="col-8">
            <b-table-simple hover caption-top>
                <caption>
                    <h1>{{ bus.set.label }}</h1>
                </caption>
                <b-thead>
                    <b-tr>
                        <b-th width="40%">Name</b-th>
                        <b-th>Weight</b-th>
                        <b-th>Amount</b-th>
                        <b-th>Blueprint Chance</b-th>
                    </b-tr>
                </b-thead>
                <b-tbody>
                    <b-tr v-for="item in manager.list" :key="item.name">
                        <b-td>
                            <b-button @click="remove(item)" variant="outline-danger"> - {{ item.label }} </b-button>
                        </b-td>
                        <b-td>
                            <b-form-input
                                v-model.number="item.EntryWeight"
                                type="number"
                                min="1"
                                step="1"
                            ></b-form-input>
                        </b-td>
                        <b-td>
                            <b-form-input v-model.number="item.quantity" type="number" min="1" step="1"></b-form-input>
                        </b-td>
                        <b-td>
                            <b-form-input
                                v-if="item.canBeBluePrint"
                                v-model.number="item.ChanceToBeBlueprintOverride"
                                type="number"
                                min="0"
                                max="1"
                                step="0.1"
                            ></b-form-input>
                        </b-td>
                    </b-tr>
                </b-tbody>
                <b-tfoot>
                    <b-tr>
                        <b-td>
                            <b-button @click="removeAll" variant="outline-danger"> - All </b-button>
                        </b-td>
                        <b-td>
                            <b-button @click="setWeight" variant="outline-primary"> Set </b-button>
                        </b-td>
                        <b-td>
                            <b-button @click="setQuantity" variant="outline-primary"> Set </b-button>
                        </b-td>
                        <b-td>
                            <b-button @click="setChance" variant="outline-primary"> Set </b-button>
                        </b-td>
                    </b-tr>
                </b-tfoot>
            </b-table-simple>
        </div>
        <div class="col-4">
            <h4>Item</h4>
            <EngramFilter :manager="bus.game.EngramManager" :inline="false"></EngramFilter>
            <ul>
                <li>
                    <b-button @click="addAll" variant="outline-success"> + All </b-button>
                </li>
                <li v-for="item in bus.game.EngramManager.filtered" :key="item.name">
                    <b-button @click="add(item)" variant="outline-primary"> + {{ item.label }} </b-button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import bus from '../model/bus'
import EngramFilter from './EngramFilter.vue'

export default Vue.extend({
    name: 'ItemSet',
    components: { EngramFilter },
    data() {
        return {
            bus,
            manager: bus.set.EntryManager,
        }
    },
    created() {
        bus.game.EngramManager.map = ''
        bus.game.EngramManager.tag = 'egg'
        bus.game.EngramManager.text = ''
    },
    computed: {},
    methods: {
        add(item) {
            try {
                bus.game.addEngramToSet(item, bus.set)
            } catch (error) {
                alert(error)
            }
        },
        addAll() {
            bus.game.EngramManager.filtered.forEach(item => {
                this.add(item)
            })
        },
        remove(item) {
            if (confirm('Are you sure?')) {
                this.manager.remove(item)
            }
        },
        removeAll() {
            if (confirm('Are you sure?')) {
                this.manager.clear()
            }
        },
        setWeight() {
            const value = prompt('Please input the Weight', '1')
            if (value !== null) {
                this.manager.list.forEach(item => {
                    item.EntryWeight = parseInt(value)
                })
            }
        },
        setQuantity() {
            const value = prompt('Please input the Amount', '1')
            if (value !== null) {
                this.manager.list.forEach(item => {
                    item.quantity = parseInt(value)
                })
            }
        },
        setChance() {
            const value = prompt('Please input the Chance', '1')
            if (value !== null) {
                this.manager.list.forEach(item => {
                    if (item.canBeBluePrint) {
                        item.ChanceToBeBlueprintOverride = parseFloat(value)
                    }
                })
            }
        },
    },
})
</script>
