<template>
    <div>
        <div>
            <h1 class="inline">Ark Loot</h1>
            <span style="margin: 11px;">{{ bus.game.sourceVersion }}</span>
            <b-button-group>
                <b-button @click="save" variant="outline-success"> Download </b-button>
                <b-button @click="deploy" variant="outline-success"> Deploy </b-button>
            </b-button-group>
            <br />
            <br />
            <b-form-file @change="load($event)" accept=".json"></b-form-file>
            <b-form-file @change="update($event)" accept=".json" style="display: none;"></b-form-file>
        </div>
        <br />
        <b-card-group deck>
            <b-card title="Creature">
                <b-card-text>{{ bus.game.CreatureManager.list.length }}</b-card-text>
            </b-card>
            <b-card title="Engram">
                <b-card-text>{{ bus.game.EngramManager.list.length }}</b-card-text>
            </b-card>
            <b-card title="Loot">
                <b-card-text>{{ bus.game.LootManager.list.length }}</b-card-text>
            </b-card>
        </b-card-group>

        <b-modal id="deploy-modal" hide-footer size="xl" title="Paste the text to Game.ini">
            <textarea v-model="text" class="form-control" rows="16" spellcheck="false"></textarea>
            <div>
                <b-button class="mt-3" variant="outline-danger" @click="$bvModal.hide('deploy-modal')">
                    Close
                </b-button>
            </div>
        </b-modal>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import bus from '../model/bus'
import { read, download } from '../helper'
import Game from '../model/Ark/Game'

export default Vue.extend({
    name: 'Home',
    data() {
        return {
            bus,
            text: '',
        }
    },
    methods: {
        load(event) {
            const file = event.target.files[0]
            read(file, json => {
                if (!json.version) {
                    this.$bvToast.toast('Invalid file!', { title: 'Error', variant: 'danger', solid: true })
                    return
                }

                try {
                    bus.game.clear()
                    bus.game.load(json)
                    this.$bvToast.toast('Success!', { title: 'Info', variant: 'success', solid: true })
                } catch (error) {
                    this.$bvToast.toast(error.message, { title: 'Error', variant: 'danger', solid: true })
                }
            })
        },
        update(event) {
            const file = event.target.files[0]
            read(file, json => {
                try {
                    bus.update(json)
                    this.$bvToast.toast('Success!', { title: 'Info', variant: 'success', solid: true })
                } catch (error) {
                    this.$bvToast.toast(error.message, { title: 'Error', variant: 'danger', solid: true })
                }
            })
        },
        save() {
            const json = JSON.stringify(bus.game)
            download('loot.json', json)
        },
        deploy() {
            this.text = bus.game.deploy()
            this.$bvModal.show('deploy-modal')
        },
    },
})
</script>
