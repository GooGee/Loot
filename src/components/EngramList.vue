<template>
    <b-table-simple hover caption-top>
        <caption>
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
        </caption>
        <b-thead>
            <b-tr>
                <b-th width="30%">Name</b-th>
                <b-th>Tag</b-th>
            </b-tr>
        </b-thead>
        <b-tbody>
            <b-tr v-for="item in manager.filtered" :key="item.name">
                <b-td>{{ item.label }}</b-td>
                <b-td>
                    <TagList :list="item.tagxx"></TagList>
                </b-td>
            </b-tr>
        </b-tbody>
    </b-table-simple>
</template>

<script lang="ts">
import Vue from 'vue'
import bus from '../model/bus'
import TagList from './TagList.vue'

export default Vue.extend({
    name: 'EngramList',
    components: { TagList },
    data() {
        return {
            bus,
            manager: bus.EngramManager,
        }
    },
    created() {
        this.manager.tag = 'egg'
    },
    computed: {},
    methods: {},
})
</script>
