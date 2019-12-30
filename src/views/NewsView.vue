<template>
    <div class="news-container container">
        <h1>Read news</h1>
        <div class="row">
            <div v-for="number in 20" class="col-12 col-md-6 col-lg-4">
                    <div class="card article-card">
                        <div class="card-body">
                            <div class="card-image mb-3" style="height:200px;">
                                <img class="img-fluid" src="../../public/images/test.jpg" alt="">
                            </div>
                            <h2>Heading {{number}}</h2>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eligendi illo laborum officia
                            quae,
                            repellendus. At doloremque doloribus mollitia neque similique!
                            Deserunt earum libero odio quis recusandae reprehenderit suscipit tenetur.
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewsView",
        methods: {
            onCardHover() {
                console.log('hover');
            }
        }
    }
</script>

<style scoped>
    .article-card {
        border: none;
        box-shadow: 0px 6px 12px 0 rgba(13, 31, 61, 0.04);
        margin-bottom: 30px;
        transition: all 0.3s ease;
    }

    .article-card:hover {
        transform: translateY(-4px);
    }
</style>