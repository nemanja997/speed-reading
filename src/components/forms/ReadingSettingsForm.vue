
<template>
    <div>
        <div style="padding-bottom:24px;">
            <div class="preview-settings text-center" :style="{ 'font-size': settings.fontSize + 'px', 'font-family': settings.fontFamily }">
                {{previewTextChunks}}
            </div>
        </div>

        <form @submit.prevent="saveSettings">
            <div class="form-row">
                <div class="form-group col">
                    <label for="wordsPerMinute">Word per minute:</label>
                </div>
                <div class="form-group col">
                    <select id="wordsPerMinute" class="form-control" v-model="settings.wordsPerMinute">
                        <option v-for="number in [200,300,350,400,450,500,550,600]" :value="number">{{number}}</option>
                    </select>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col">
                    <label for="numberOfChunks">Number of chunks:</label>
                </div>
                <div class="form-group col">
                    <select id="numberOfChunks" class="form-control" v-model="settings.chunks">
                        <option v-for="number in [1,2,3,4,5]" :value="number">{{number}}</option>
                    </select>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col">
                    <label for="fontSize">Font size:</label>
                </div>
                <div class="form-group col">
                    <select id="fontSize" class="form-control" v-model="settings.fontSize">
                        <option v-for="number in [16,24,32,40,50]" :value="number">{{number}}</option>
                    </select>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col">
                    <label for="fontFamily">Font:</label>
                </div>
                <div class="form-group col">
                    <select id="fontFamily" class="form-control" v-model="settings.fontFamily">
                        <option v-for="font in ['Arial','Lato']" :value="font">{{font}}</option>
                    </select>
                </div>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-info btn-shadow px-5 pull-right">Save</button>
            </div>
        </form>
    </div>

</template>


<script>
    import { mapState } from 'vuex';
    import { storeReadSettings } from '../../helpers/localStorage';
    export default {
        name: "ReadingSettingsForm",
        data(){
            return {
                settings: {
                    chunks: 1,
                    fontSize: 40,
                    wordsPerMinute: 200,
                    fontFamily: 'Arial'
                },
                previewText:'Lorem ipsum dolor sit amet'
            }
        },
        mounted(){
            this.settings = this.readingSettings;
        },
        computed:{
            previewTextChunks(){
                return  this.previewText.split(" ").slice(0, this.settings.chunks).join(' ');
            },
            ...mapState({
                readingSettings: state => state.settings
            })
        },
        methods:{
            saveSettings(){
                this.$store.commit('addSettings', this.settings);
                storeReadSettings(this.settings);
                this.$emit('settingsSaved');
            }
        }

    }
</script>

<style>
    .preview-settings{
        min-height:180px;
        text-align:center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
</style>
