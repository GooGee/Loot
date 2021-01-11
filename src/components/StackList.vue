<template>
    <b-table-simple hover caption-top>
        <caption>
            <h1>Change Stack Size</h1>
            <p>"ConfigOverrideItemMaxQuantity"</p>
        </caption>
        <b-thead>
            <b-tr>
                <b-th width="30%">Name</b-th>
                <b-th>Multiplier</b-th>
            </b-tr>
        </b-thead>
        <b-tbody>
            <b-tr v-for="item in manager.filtered" :key="item.name">
                <b-td>
                    <b-form-checkbox v-model="item.stack.included">{{ item.label }}</b-form-checkbox>
                </b-td>
                <b-td>
                    <b-form-input
                        v-model.number="item.stack.multiplier"
                        type="number"
                        min="1"
                        max="1000"
                        step="1"
                    ></b-form-input>
                </b-td>
            </b-tr>
        </b-tbody>
    </b-table-simple>
</template>

<script lang="ts">
import Vue from 'vue'
import bus from '../model/bus'

export default Vue.extend({
    name: 'StackList',
    data() {
        return {
            bus,
            manager: bus.game.EngramManager,
        }
    },
    created() {
        this.manager.map = ''
        this.manager.tag = 'resource'
        this.manager.text = ''
    },
})
</script>
