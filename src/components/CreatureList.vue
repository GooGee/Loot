<template>
    <b-table-simple hover caption-top>
        <caption>
            <h1>Replace Creature</h1>
            <p>"NPCReplacements"</p>
        </caption>
        <b-thead>
            <b-tr>
                <b-th width="30%">Name</b-th>
                <b-th>To</b-th>
            </b-tr>
        </b-thead>
        <b-tbody>
            <b-tr v-for="item in manager.list" :key="item.name">
                <b-td>
                    <b-form-checkbox v-model="item.included">{{ item.label }}</b-form-checkbox>
                </b-td>
                <b-td>
                    <b-form-select
                        v-if="selected == item"
                        v-model="item.ToClassName"
                        :options="manager.list"
                        value-field="name"
                        text-field="label"
                    ></b-form-select>
                    <b-button v-else @click="selected = item" variant="outline-primary"> {{ item.ToClassName || '+' }} </b-button>
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
            selected: null,
        }
    },
    created() {},
    computed: {},
    methods: {},
})
</script>
