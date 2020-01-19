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
    name: 'EngramList',
    data() {
        return {
            bus,
            manager: bus.EngramManager,
            fields: [
                {
                    key: 'name',
                    label: 'Name',
                },
            ],
        }
    },
    created() {},
    computed: {},
    methods: {},
})
</script>
