<template>
    <div>
        <div class="p-4 read-container">
            <span class="read-text" v-text="chunk">Text asdasdasd asdasdasdas</span>
        </div>
        <div class="controls-container">

        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "Read",
        data(){
            return{
                chunk: '',
                splitedText: [],
                intervalId: {}
            }
        },
        mounted(){
            this.splitedText = this.text.split(" ");
            this.startReading();
        },
        computed:{
        ...mapState({
            text: state => state.text,
            })
        },
        methods:{
            startReading(){
                this.intervalId = setInterval(()=> {
                    if( this.splitedText.length > 0 ){
                        this.chunk = this.splitedText.shift();
                    }else{
                        this.chunk = '';
                        clearInterval(this.intervalId);
                    }
                }, 500);
            }
        }
    }
</script>

<style scoped>
    .read-container{
        height:500px;
        text-align:center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color:#e1e1e1;
        border-radius: 0.25rem;

    }
    .read-text{
        color:black;
        font-size:40px;
    }
    .controls-container{

    }
</style>