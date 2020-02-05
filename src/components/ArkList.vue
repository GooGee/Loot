<template>
    <b-table-simple hover caption-top>
        <caption>
            <EngramFilter :manager="manager">
                <div class="col-3">
                    <b-form-select v-model="manager">
                        <b-form-select-option :value="bus.game.CreatureManager">Creature</b-form-select-option>
                        <b-form-select-option :value="bus.game.EngramManager">Engram</b-form-select-option>
                        <b-form-select-option :value="bus.game.LootManager">Loot</b-form-select-option>
                    </b-form-select>
                </div>
            </EngramFilter>
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
        <b-tfoot>
            <b-tr>
                <b-td></b-td>
                <b-td>
                    <b-button @click="addTag" variant="outline-primary"> + </b-button>
                </b-td>
            </b-tr>
        </b-tfoot>
    </b-table-simple>
</template>

<script lang="ts">
import Vue from 'vue'
import bus from '../model/bus'
import EngramFilter from './EngramFilter.vue'
import TagList from './TagList.vue'

export default Vue.extend({
    name: 'ArkList',
    components: { EngramFilter, TagList },
    data() {
        return {
            bus,
            manager: bus.game.EngramManager,
        }
    },
    created() {},
    computed: {},
    methods: {
        addTag() {
            const name = prompt('Please input the Tag')
            if (name) {
                this.manager.filtered.forEach(item => {
                    if (item.tagxx.indexOf(name) === -1) {
                        item.tagxx.push(name)
                    }
                })
                try {
                    const tag = this.manager.TagManager.make(name)
                    this.manager.TagManager.add(tag)
                } catch (error) {
                    console.error(error)
                }
            }
        },
    },
})
</script>
