<template>
    <div>
        <form ref="customTextForm" action="" class=" h-100 text-center">
            <h2>Enter your text here:</h2>
            <div class="form-group">
          <textarea required v-model="text" class="form-control" id="insertTextArea"
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


    export default {
        name: "TextinputForm",
        data() {
            return {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ' +
                    'do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
                    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ' +
                    'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ' +
                    'in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' +
                    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ' +
                    'officia deserunt mollit anim id est laborum.',
            }
        },
        methods: {
            start() {
                if (this.text !== '') {
                    this.$store.commit('addReadingText', this.text);
                    this.$router.push('/read');
                }else{
                    this.$refs.customTextForm.reportValidity();
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