<template>
    <div class="row">
        <slot></slot>
        <div class="col-3">
            <b-form-select
                v-model="manager.map"
                :options="manager.MapManager.list"
                value-field="name"
                text-field="name"
            >
                <b-form-select-option value="">All Map</b-form-select-option>
            </b-form-select>
        </div>
        <div class="col-3">
            <b-form-select
                v-model="manager.tag"
                :options="manager.TagManager.list"
                value-field="name"
                text-field="name"
            >
                <b-form-select-option value="">Any Tag</b-form-select-option>
            </b-form-select>
        </div>
        <div class="col-3">
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
    },
})
</script>
