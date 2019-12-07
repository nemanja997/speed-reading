<template>
    <nav class="navbar navbar-expand-lg navbar-light main-navbar">
        <router-link tag="a" to="/" class="navbar-brand" href="#">Speed reader</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
            <a class="navbar-brand" href="https://github.com/nemanja997/speed-reading"><i class="fa fa-github fa-lg" aria-hidden="true"></i> Github</a>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "MainNavbar"
    }
</script>

<style>
.main-navbar{
    background-color:#f3f3f3;
}
</style>