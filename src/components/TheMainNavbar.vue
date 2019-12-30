<template>

    <nav class="navbar navbar-expand-lg navbar-light main-navbar">
        <div class="container">
            <router-link tag="a" to="/" class="navbar-brand font-weight-bold" href="#">Speed reader</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav m-auto">
                    <router-link tag="li" to="/" class="nav-item" active-class="active" exact>
                        <a class="nav-link" href="#">Custom text</a>
                    </router-link>
                    <router-link tag="li" to="/news" class="nav-item" active-class="active" exact>
                        <a class="nav-link" href="#">Read news</a>
                    </router-link>

                </ul>
                <!--<a class="navbar-brand" href="https://github.com/nemanja997/speed-reading"><i class="fa fa-github fa-lg"-->
                                                                                              <!--aria-hidden="true"></i>-->
                    <!--Github</a>-->
                <button class="btn btn-info font-weight-bold px-3"
                        @click.prevent="$refs.settingsModal.open()">
                    <i class="fa fa-cog" aria-hidden="true"></i> &nbsp; Settings
                </button>
            </div>
        </div>
        <!--modal-->
        <sweet-modal ref="settingsModal"
                     title="Reading settings"
                     modal-theme="light">
            <reading-settings-form @settingsSaved="closeModal"></reading-settings-form>
        </sweet-modal>
        <!--modal-->
    </nav>


</template>

<script>
    import {SweetModal} from 'sweet-modal-vue';
    import ReadingSettingsForm from './settings/ReadingSettingsForm'

    export default {
        name: "MainNavbar",
        components: {
            SweetModal,
            ReadingSettingsForm
        },
        methods:{
            closeModal() {
                this.$refs.settingsModal.close();
            }
        }
    }
</script>

<style>

</style>