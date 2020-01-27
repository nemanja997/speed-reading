<template>
    <div>
        <form ref="customTextForm" action="" class=" h-100 text-center">
            <h2>Enter your text here:</h2>
            <div class="form-group">
          <textarea required v-model.trim="text" class="form-control" id="insertTextArea"
                    placeholder="Enter text for speed reading here...">

          </textarea>
            </div>
            <div class="row">
                <div class="col">
                    <button @click.prevent="start" class="btn btn-block btn-primary btn-shadow btn-lg">
                        Speed read &nbsp; &nbsp; <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </form>

    </div>

</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "TextinputForm",
        data() {
            return {
                text: '',
            }
        },
        mounted() {

            this.text = this.readingText;
        },
        computed: {
            ...mapState({
                readingText: state => state.readingText
            })
        },
        methods: {
            start() {
                if (this.text === '') {
                    this.$refs.customTextForm.reportValidity();
                } else {
                    this.$store.commit('addReadingText', this.text);
                    this.$router.push('/read');
                }
            }
        }
    }
</script>

<style>
    #insertTextArea {
        resize: none;
        height: 40vh;
        border-width: 0px;
        border-color: #e4e6f2;
        border-width: 2px;
        border-style: dashed;
    }
</style>
