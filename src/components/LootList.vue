<template>
    <b-table striped hover caption-top :items="manager.filtered" :fields="fields">
        <template v-slot:table-caption>
            <div class="row">
                <div class="col-4">
                    <b-form-select
                        v-model="manager.map"
                        :options="manager.MapManager.list"
                        value-field="name"
                        text-field="name"
                    >
                        <b-form-select-option value="">All Map</b-form-select-option>
                    </b-form-select>
                </div>
                <div class="col-4">
                    <b-form-select
                        v-model="manager.tag"
                        :options="manager.TagManager.list"
                        value-field="name"
                        text-field="name"
                    >
                        <b-form-select-option value="">Any Tag</b-form-select-option>
                    </b-form-select>
                </div>
            </div>
        </template>
    </b-table>
</template>

<script lang="ts">
import Vue from 'vue'
import bus from '../model/bus'

export default Vue.extend({
    name: 'LootList',
    data() {
        return {
            bus,
            manager: bus.LootManager,
            fields: [
                {
                    key: 'label',
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
