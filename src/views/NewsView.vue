<template>
    <div class="news-container container">
        <h1 class="mt-4 text-center">Read news</h1>
        <div class="row mt-4">
            <article-card v-for = "article in articles"
                          :key = "article._id"
                          :article-title = "article.title"
                          :article-text = "article.body"
                          :imageUrl = "article.imageUrl"
            ></article-card>
        </div>
    </div>
</template>

<script>
    import ArticleCard from '../components/news/ArticleCard';
    import { mapState } from 'vuex';
    export default {
        name: "NewsView",
        components: {
            ArticleCard
        },
        computed: {
            ...mapState({
                articles: 'articles'
            })
        },
        methods: {
            onCardHover() {
                console.log('hover');
            }
        }
    }
</script>

<style scoped>

</style>
