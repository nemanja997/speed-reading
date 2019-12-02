<template>
    <div class="read-container">
        <div class="p-4 read-text-container">
            <span class="read-text" v-text="chunk">Text asdasdasd asdasdasdas</span>
        </div>
        <div class="p-4 read-controls-container text-center">
            <vue-slider
                    v-model="sliderPosition"
                    :min="0"
                    :max="sliderLength"
                    :interval="1"
            />
            <button @click="togglePause" class="btn btn-outline-primary">
                <i class="fa fa-play" v-bind:class= "[isPaused ? 'fa-play' : 'fa-pause']" aria-hidden="true"></i>
            </button>
        </div>
    </div>
</template>

<script>

    import {mapState} from 'vuex';
    import VueSlider from 'vue-slider-component';
    import 'vue-slider-component/theme/antd.css';
    export default {
        name: "Read",
        components: {
            VueSlider
        },
        data(){
            return{
                chunk: '',
                splitedText: [],
                intervalId: {},
                isPaused: false,
                isFinished: false,
                sliderPosition:0,
                sliderLength:0
            }
        },
        mounted(){
            this.splitedText = this.text.split(" ");
            this.sliderLength = this.splitedText.length;
            this.startReading();
        },
        computed:{
        ...mapState({
            text: state => state.text,
            settings: state => state.settings,
            }),
            flashPause(){
            return 60 / this.settings.wordsPerMinute * 1000;
            }
        },
        methods:{
            startReading(){
                this.intervalId = setInterval(()=> {
                    if(!this.isPaused){
                        if( this.splitedText.length > this.sliderPosition ){
                            this.chunk = this.splitedText[this.sliderPosition];
                            this.sliderPosition+= 1;
                        }else{
                            this.chunk = '';
                            clearInterval(this.intervalId);
                        }
                    }

                }, this.flashPause);
            },
            togglePause(){
                this.isPaused = !this.isPaused;
            }
        }
    }
</script>

<style scoped>
    .read-container{
        margin-top:5vh;
        border-radius: 0.25rem;
        background: #fff;
        box-shadow: 0 0 20px rgba(43,45,56,.1);
    }
    .read-text-container{
        height:40vh;
        text-align:center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .read-text{
        color:black;
        font-size:40px;
    }
    .controls-container{

    }
</style>