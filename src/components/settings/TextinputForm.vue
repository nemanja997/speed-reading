<template>
    <div>
        <form action="" class=" h-100 text-center">
            <div class="form-group">
          <textarea v-model="text" class="form-control" id="insertTextArea"
                    placeholder="Enter text for speed reading here...">

          </textarea>
            </div>
            <div class="row">
                <div class="col-auto text-left">
                    <button class="btn btn-block btn-info btn-shadow btn-lg px-3"
                            @click.prevent="$refs.settingsModal.open()">
                        <i class="fa fa-cog" aria-hidden="true"></i> &nbsp; Settings
                    </button>
                </div>
                <div class="col">
                    <button @click.prevent="start" class="btn btn-block btn-primary btn-shadow btn-lg">
                        Speed read &nbsp; &nbsp; <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </form>
        <sweet-modal ref="settingsModal"
                     title="Reading settings"
                     modal-theme="light">
            <reading-settings-form @settingsSaved="closeModal"></reading-settings-form>
        </sweet-modal>
    </div>

</template>

<script>
    import {SweetModal} from 'sweet-modal-vue';
    import ReadingSettingsForm from './ReadingSettingsForm'

    export default {
        name: "TextinputForm",
        components: {
            SweetModal,
            ReadingSettingsForm
        },
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
                    this.$router.push('/custom-text/read');
                }
            },
            closeModal() {
                this.$refs.settingsModal.close();
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