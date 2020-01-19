<template>
    <b-table striped hover caption-top :items="manager.list" :fields="fields">
        <template v-slot:table-caption>
            <select>
                <option value="">All</option>
            </select>
        </template>
    </b-table>
</template>

<script lang="ts">
import Vue from 'vue'
import bus from '../model/bus'

export default Vue.extend({
    name: 'CrateList',
    data() {
        return {
            bus,
            manager: bus.CrateManager,
            fields: [
                {
                    key: 'name',
                    label: 'Name',
                },
                {
                    key: 'MinItemSets',
                    label: 'Min Amount',
                },
                {
                    key: 'MaxItemSets',
                    label: 'Max Amount',
                },
                {
                    key: 'minQuality',
                    label: 'Min Quality',
                },
                {
                    key: 'maxQuality',
                    label: 'Max Quality',
                },
            ],
        }
    },
    created() {},
    computed: {},
    methods: {},
})
</script>
