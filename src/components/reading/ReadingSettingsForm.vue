
<template>
    <div>
        <div class="preview-settings text-center py-5" :style="{ 'font-size': fontSize + 'px', 'font-family': fontFamily }">
            {{previewTextChunks}}
        </div>
        <form @submit.prevent="saveSettings">
            <div class="form-row">
                <div class="form-group col">
                    <label for="wordsPerMinute">Word per minute:</label>
                </div>
                <div class="form-group col">
                        <input required class="form-control" id="wordsPerMinute" type="number" name="quantity" min="100" max="1000" v-model="wordsPerMinute">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col">
                    <label for="numberOfChunks">Number of chunks:</label>
                </div>
                <div class="form-group col">
                    <select id="numberOfChunks" class="form-control" v-model="chunks">
                        <option v-for="number in [1,2,3,4,5]" :value="number">{{number}}</option>
                    </select>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col">
                    <label for="fontSzie">Font size:</label>
                </div>
                <div class="form-group col">
                    <select id="fontSzie" class="form-control" v-model="fontSize">
                        <option v-for="number in [16,24,32,40]" :value="number">{{number}}</option>
                    </select>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col">
                    <label for="fontFamily">Font:</label>
                </div>
                <div class="form-group col">
                    <select id="fontFamily" class="form-control" v-model="fontFamily">
                        <option v-for="font in ['Arial','Lato']" :value="font">{{font}}</option>
                    </select>
                </div>
            </div>
            <button type="submit" class="btn btn-primary pull-right">Save</button>
        </form>
    </div>

</template>


<script>

    export default {
        name: "ReadingSettingsForm",
        data(){
            return {
                chunks:1,
                fontSize:40,
                wordsPerMinute:200,
                color:'black',
                fontFamily:'Arial',
                previewText:'Lorem ipsum dolor sit amet'
            }
        },
        computed:{
            previewTextChunks(){
                return  this.previewText.split(" ").slice(0, this.chunks).join(' ');
            }
        },
        methods:{
            saveSettings(){
                let settings = {
                    wordsPerMinute:this.wordsPerMinute,
                    chunks:this.chunks,
                    fontSize:this.fontSize
                };
                this.$store.commit('addSettings',settings);
                this.$emit('settingsSaved');
            }
        }

    }
</script>

<style>
    .preview-settings{
        min-height:200px;
        text-align:center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
</style>