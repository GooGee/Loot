<template>
    <b-button-group>
        <b-button v-for="tag in list" @click="remove(tag)" :key="tag" variant="outline-secondary">{{ tag }}</b-button>
        <b-button @click="add" variant="outline-primary"> + </b-button>
    </b-button-group>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'TagList',
    props: {
        list: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {}
    },
    methods: {
        add() {
            const tag = prompt('Please input the Tag')
            if (tag) {
                if (this.list.indexOf(tag) === -1) {
                    this.list.push(tag)
                }
            }
        },
        remove(tag) {
            this.$bvModal.msgBoxConfirm('Are you sure you want to remove it?').then(result => {
                if (result) {
                    const index = this.list.indexOf(tag)
                    this.list.splice(index, 1)
                }
            })
        },
    },
})
</script>
