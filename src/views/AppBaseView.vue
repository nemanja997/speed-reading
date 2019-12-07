<template>
    <div id="page-wrapper">
        <main-navbar></main-navbar>
        <div class="container">

            <router-view/>

        </div>
    </div>
</template>

<script>
    import MainNavbar from '../components/TheMainNavbar';
    export default {
        name: "AppBaseView",
        components:{
            MainNavbar
        },
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
</style>