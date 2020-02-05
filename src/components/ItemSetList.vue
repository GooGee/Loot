<template>
    <div class="row">
        <div class="col-12">
            <h1 class="inline">ItemSet List</h1>
            <span style="margin-left: 11px;"></span>
            <b-button @click="add" variant="outline-primary"> + </b-button>
            <br />
            <br />
        </div>
        <div class="col-4">
            <b-list-group>
                <b-list-group-item
                    v-for="set in bus.game.ItemSetManager.list"
                    @click="selected = set"
                    :active ="selected == set"
                    button
                    :key="set.name"
                >
                    {{ set.label }}
                </b-list-group-item>
            </b-list-group>
        </div>
        <div v-if="selected" class="col-8">
            <div class="row">
                <div class="col-6">
                    <b-form-input v-model="selected.label"></b-form-input>
                </div>
                <div class="col-6">
                    <b-button-group>
                        <b-button @click="remove(selected)" variant="outline-danger"> - </b-button>
                        <b-button @click="bus.editSet(selected)" variant="outline-primary"> Edit </b-button>
                    </b-button-group>
                </div>
            </div>
            <br />
            <ul>
                <li v-for="item in selected.EntryManager.list" :key="item.name">{{ item.label }}</li>
            </ul>
        </div>
    </div>
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
            selected: null,
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
                this.selected = set
            }
        },
        remove(set) {
            if (confirm('Are you sure?')) {
                this.manager.remove(set)
                this.selected = null
            }
        },
    },
})
</script>
