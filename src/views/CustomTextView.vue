<template>
    <div class="custom-text-container">
        <div class="container">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
        <div class="container p-5 ">
            <div class="row">
                <div class="col">
                    <div class="about-section  text-center">
                        <!--<h2>About Speed Reading</h2>-->
                        <!--<p>Speed reading is the process of rapidly recognizing and absorbing phrases or sentences-->
                            <!--on a page all at once, rather than identifying individual words.</p>-->
                        <!--<p>There are different techniques that you can use to improve your reading speed. All of them-->
                            <!--involve skimming a page rather than "sub-vocalizing" each word as you were likely taught at-->
                            <!--school.</p>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CustomTextView"
    }
</script>

<style scoped>
    .custom-text-container {
        background-image: url('../../public/images/stars_background.png');
        background-size: cover;
        background-repeat: no-repeat;
    }
    .about-section p{
        font-size:1.3em;
        color: #60646b;
    }
    .about-section h2{
        font-size:2.5em;
        color: #32363d;
        font-weight:600;
    }
</style>