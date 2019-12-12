<template>
    <div id="page-wrapper">
        <main-navbar></main-navbar>
        <div class="container">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
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
    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.2s;
        transition-property: opacity,transform;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0;
        transform: translate(1em);
    }
</style>