<template>

    <nav class="navbar navbar-expand-lg navbar-light main-navbar">
        <div class="container">
            <router-link tag="a" to="/" class="navbar-brand font-weight-bold" href="#">Speed reader</router-link>
            <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav m-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" active-class="active" exact>
                            Custom text
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/news" class="nav-link" active-class="active" exact>
                            News
                        </router-link>
                    </li>

                </ul>
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