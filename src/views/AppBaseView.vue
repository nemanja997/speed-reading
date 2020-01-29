<template>
    <div id="page-wrapper" class="d-flex flex-column">
        <the-main-navbar></the-main-navbar>
        <div class="container-fluid content-container">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
        <the-footer></the-footer>
    </div>
</template>

<script>
    import TheMainNavbar from '../components/partials/TheMainNavbar';
    import TheFooter from '../components/partials/TheFooter';
    import axios from 'axios';

    export default {
        name: "AppBaseView",
        components:{
            TheMainNavbar,
            TheFooter
        },
        data() {
            return {
                darkMode: false
            }
        },
        mounted(){
          axios.get('/.netlify/functions/news').then(response => console.log(response.data));
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
