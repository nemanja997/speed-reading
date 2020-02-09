<template>
    <div class="news-container container">
        <h1 class="mt-4 text-center">Read news</h1>
        <div class="row mt-4">
            <article-card v-for = "article in pageArticles"
                          :key = "article._id"
                          :article-title = "article.title"
                          :article-text = "article.body"
                          :imageUrl = "article.imageUrl"
            ></article-card>
        </div>
        <div class="row justify-content-end">
            <div class="col-auto">
                <pagination/>
            </div>
        </div>
    </div>
</template>

<script>
    import ArticleCard from '../components/news/ArticleCard';
    import { mapState } from 'vuex';
    import Pagination from '../components/news/Pagination'
    export default {
        name: "NewsView",
        components: {
            ArticleCard,
            Pagination
        },
        data(){
            return {
                currentPage: 1,
                perPage: 9
            }
        },
        computed: {
            ...mapState({
                articles: 'articles'
            }),
            pageArticles(){
                return this.articles.slice(0,9);
            }

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
