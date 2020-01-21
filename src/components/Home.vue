<template>
    <div>
        <h1>Ark Loot</h1>
        <div>
            <b-button-group>
                <b-button variant="outline-primary"> Load </b-button>
                <b-button @click="save" variant="outline-success"> Download </b-button>
                <b-button @click="deploy" variant="outline-success"> Deploy </b-button>
            </b-button-group>
            <b-form-file @change="load($event)" accept=".json"></b-form-file>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import bus from '../model/bus'
import Game from '../model/Ark/Game'

export default Vue.extend({
    name: 'Home',
    data() {
        return {
            bus,
        }
    },
    methods: {
        load(event) {
            const file = event.target.files[0]
            this.read(file, json => {
                try {
                    const game = new Game()
                    game.load(json)
                    bus.game = game
                } catch (error) {
                    this.$bvToast.toast(error)
                }
            })
        },
        save() {
            const json = JSON.stringify(bus.game)
            this.download('loot.json', json)
        },
        read(file, callback) {
            const reader = new FileReader()
            reader.onload = event => {
                const json = JSON.parse(event.target.result)
                callback(json)
            }
            reader.readAsText(file)
        },
        download(name, json) {
            const blob = new Blob([json], { type: 'application/json' })
            const link = document.createElement('a')
            link.download = name
            link.href = URL.createObjectURL(blob)
            link.style = 'display: none'
            document.body.appendChild(link)
            link.click()
            URL.revokeObjectURL(link.href)
        },
        deploy() {},
    },
})
</script>
