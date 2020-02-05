<template>
    <div class="row">
        <div class="col-4">
            <h1>Replace Creature</h1>
            <p>"NPCReplacements"</p>
            <div>
                <b-form-select
                    v-model="manager.map"
                    :options="manager.MapManager.list"
                    value-field="name"
                    text-field="name"
                ></b-form-select>
            </div>
            <br />
        </div>
        <div class="col-8"></div>

        <div class="col-12">
            <b-table-simple hover caption-top>
                <caption>
                    <b-modal id="creature-modal" hide-footer title="Select a Creature">
                        <div v-if="selected">
                            <b-form-select
                                v-model="selected.ToClassName"
                                :options="manager.filtered"
                                value-field="name"
                                text-field="label"
                            ></b-form-select>
                        </div>
                        <div>
                            <b-button class="mt-3" variant="outline-danger" @click="$bvModal.hide('creature-modal')">
                                Close
                            </b-button>
                        </div>
                    </b-modal>
                </caption>
                <b-thead>
                    <b-tr>
                        <b-th width="50%">Name</b-th>
                        <b-th>Replace</b-th>
                    </b-tr>
                </b-thead>
                <b-tbody>
                    <b-tr v-for="item in manager.filtered" :key="item.name">
                        <b-td>
                            <b-form-checkbox v-model="item.included">{{ item.label }}</b-form-checkbox>
                        </b-td>
                        <b-td>
                            <b-button @click="show(item)" variant="outline-primary">
                                {{ item.ToClassName || '+' }}
                            </b-button>
                        </b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>
        </div>
    </div>
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
    methods: {
        show(item) {
            this.selected = item
            this.$bvModal.show('creature-modal')
        },
    },
})
</script>
