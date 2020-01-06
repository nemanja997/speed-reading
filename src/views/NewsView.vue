<template>
    <div class="news-container container">
        <h1 class="mt-4 text-center">Read news</h1>
        <div class="row mt-4">
            <article-card v-for="number in 20"
                          :article-title="`Heading ${number}`"
                          article-text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eligendi illo laborum officia
                quae,
                repellendus. At doloremque doloribus mollitia neque similique!
                Deserunt earum libero odio quis recusandae reprehenderit suscipit tenetur."
            ></article-card>
        </div>
    </div>
</template>

<script>
    import ArticleCard from '../components/news/ArticleCard'

    export default {
        name: "NewsView",
        components: {
            ArticleCard
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