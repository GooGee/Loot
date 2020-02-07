<template>
    <div class="row">
        <slot></slot>
        <div :class="css">
            <b-form-select
                v-model="manager.map"
                :options="manager.MapManager.list"
                value-field="name"
                text-field="name"
            >
                <template v-slot:first>
                    <b-form-select-option value="">-- Any Map --</b-form-select-option>
                </template>
            </b-form-select>
        </div>
        <div :class="css">
            <b-form-select v-model="manager.tag" :options="tagxx" value-field="name" text-field="name">
                <template v-slot:first>
                    <b-form-select-option value="">-- Any Tag --</b-form-select-option>
                </template>
            </b-form-select>
        </div>
        <div :class="css">
            <b-form-input
                v-on:keyup.enter="manager.text = $event.target.value"
                :value="manager.text"
                placeholder="Search"
            ></b-form-input>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'EngramFilter',
    props: {
        manager: {
            type: Object,
            required: true,
        },
        inline: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            tagxx: [],
        }
    },
    created() {
        this.sort()
    },
    watch: {
        manager() {
            this.sort()
        },
    },
    computed: {
        css() {
            if (this.inline) {
                return 'col-3'
            }
            return 'col-12'
        },
    },
    methods: {
        sort() {
            this.tagxx = this.manager.TagManager.list.sort((aaa, bbb) => aaa.name.localeCompare(bbb.name))
        },
    },
})
</script>
