<template>
    <div class="row">
        <div class="col-8">
            <b-table-simple hover caption-top>
                <caption>
                    <h1>{{ bus.loot.label }}</h1>

                    <b-modal id="item-modal" hide-footer title="Item List">
                        <ul v-if="set">
                            <li v-for="item in set.EntryManager.list" :key="item.name">
                                {{ item.MinQuantity }} {{ item.label }}
                            </li>
                        </ul>
                        <div>
                            <b-button class="mt-3" variant="outline-danger" @click="$bvModal.hide('item-modal')">
                                Close
                            </b-button>
                        </div>
                    </b-modal>
                </caption>
                <b-thead>
                    <b-tr>
                        <b-th width="30%">Name</b-th>
                        <b-th>Weight</b-th>
                        <b-th width="40%">Item List</b-th>
                    </b-tr>
                </b-thead>
                <b-tbody>
                    <b-tr v-for="set in manager.list" :key="set.name">
                        <b-td>
                            <b-button @click="remove(set)" variant="outline-danger"> - {{ set.label }} </b-button>
                        </b-td>
                        <b-td>
                            <b-form-input v-model.number="set.SetWeight" type="number" min="1" step="1"></b-form-input>
                        </b-td>
                        <b-td>
                            <div v-if="set.EntryManager.list.length">{{ set.EntryManager.list[0].label }}</div>
                            <b-link @click="show(set)" href="#"> Show All </b-link>
                        </b-td>
                    </b-tr>
                </b-tbody>
                <b-tfoot>
                    <b-tr>
                        <b-td></b-td>
                        <b-td>
                            <b-button @click="setWeight" variant="outline-primary"> Set </b-button>
                        </b-td>
                        <b-td></b-td>
                    </b-tr>
                </b-tfoot>
            </b-table-simple>
        </div>
        <div class="col-4">
            <h4>ItemSet</h4>
            <ul>
                <li v-for="set in bus.game.ItemSetManager.list" :key="set.name">
                    <b-button @click="add(set)" variant="outline-primary"> + {{ set.label }} </b-button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import bus from '../model/bus'

export default Vue.extend({
    name: 'Loot',
    data() {
        return {
            bus,
            manager: bus.loot.ItemSetManager,
            set: null,
        }
    },
    created() {},
    computed: {},
    methods: {
        add(set) {
            try {
                this.manager.add(set)
            } catch (error) {
                this.$bvToast.toast(`${set.label} already exists!`, { title: 'Error', variant: 'danger', solid: true })
            }
        },
        remove(set) {
            if (confirm('Are you sure?')) {
                this.manager.remove(set)
            }
        },
        setWeight() {
            const value = prompt('Please input the Weight', '1')
            if (value !== null) {
                this.manager.list.forEach(item => {
                    item.SetWeight = parseInt(value)
                })
            }
        },
        show(set) {
            this.set = set
            this.$bvModal.show('item-modal')
        },
    },
})
</script>
