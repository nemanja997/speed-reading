<template>
    <div class="container">
        <div class="text-center my-4">
            <h1 class="page-heading">Speed reader</h1>
        </div>
        <div class="fixed-switch-container">
            <toggle-button v-model="darkMode" @change="changeTheme"
                           :labels="{checked: 'Dark', unchecked: 'Light'}"
                           :width="70"
                           :height="27"
                           color="#3e4f69"
                           :font-size="14"
                           :speed="500"/>
        </div>

        <router-view/>

    </div>
</template>

<script>
    export default {
        name: "AppBaseView",
        data() {
            return {
                darkMode: false
            }
        },
        methods: {
            changeTheme() {
                if (this.darkMode) {
                    document.querySelector('body').classList.add('dark-mode');
                } else {
                    document.querySelector('body').classList.remove('dark-mode');
                }
            }
        }
    }
</script>

<style lang="scss">
    .fixed-switch-container {
        position: fixed;
        left: 20px;
        top: 20px;
    }
    .page-heading{
        color: $text-dark;
    }
</style>