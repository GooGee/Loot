<template>
    <b-table-simple hover caption-top>
        <caption>
            <h1>ItemSet List</h1>
        </caption>
        <b-thead>
            <b-tr>
                <b-th width="30%">Name</b-th>
                <b-th colspan="2">Amount (min - max)</b-th>
                <b-th width="40%">Item List</b-th>
            </b-tr>
        </b-thead>
        <b-tbody>
            <b-tr v-for="set in manager.list" :key="set.name">
                <b-td>
                    <b-button-group>
                        <b-button @click="remove(set)" variant="outline-danger"> X </b-button>
                        <b-button @click="edit(set)" variant="outline-primary"> {{ set.label }} </b-button>
                    </b-button-group>
                </b-td>
                <b-td>
                    <b-form-input
                        v-model.number="set.MinNumItems"
                        type="number"
                        min="1"
                        max="100"
                        step="1"
                    ></b-form-input>
                </b-td>
                <b-td>
                    <b-form-input
                        v-model.number="set.MaxNumItems"
                        type="number"
                        min="1"
                        max="100"
                        step="1"
                    ></b-form-input>
                </b-td>
                <b-td>
                    <div>
                        <b-button @click="bus.editSet(set)" variant="outline-primary"> Edit </b-button>
                    </div>
                    <ul>
                        <li v-for="item in set.EntryManager.list" :key="item.name">{{ item.label }}</li>
                    </ul>
                </b-td>
            </b-tr>
        </b-tbody>
        <b-tfoot>
            <b-tr>
                <b-td>
                    <b-button @click="add" variant="outline-primary"> + </b-button>
                </b-td>
                <b-td></b-td>
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
    name: 'ItemSetList',
    data() {
        return {
            bus,
            manager: bus.game.ItemSetManager,
        }
    },
    created() {},
    computed: {},
    methods: {
        add() {
            const name = prompt('Please input the name', 'ItemSet1')
            if (name) {
                const now = new Date()
                const set = this.manager.make(now.toISOString())
                set.label = name
                this.manager.add(set)
            }
        },
        edit(set) {
            const name = prompt('Please input the name', set.label)
            if (name) {
                set.label = name
            }
        },
        remove(set) {
            if (confirm('Are you sure?')) {
                this.manager.remove(set)
            }
        },
        setMin() {
            const value = prompt('Please input the Min Amount', 1)
            if (value !== null) {
                this.manager.list.forEach(item => {
                    item.MinNumItems = parseInt(value)
                })
            }
        },
        setMax() {
            const value = prompt('Please input the Max Amount', 1)
            if (value !== null) {
                this.manager.list.forEach(item => {
                    item.MaxNumItems = parseInt(value)
                })
            }
        },
    },
})
</script>
