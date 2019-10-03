<template>
    <div>
        <div class="bg-light p-4 read-container">
            <span class="read-text" v-text="chunk">Text asdasdasd asdasdasdas</span>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "Read",
        data(){
            return{
                chunk:''
            }
        },
        computed:{
        ...mapState({
            text: state => state.text,
            })
        },
        methods:{
            startReading(){

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
    }
    .read-text{
        color:black;
        font-size:2.5em;
    }
</style>