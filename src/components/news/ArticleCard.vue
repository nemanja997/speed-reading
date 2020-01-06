<template>
    <div class="col-12 col-md-6 col-lg-4">
        <div class="card article-card">
            <div class="card-body">
                <div class="card-image mb-3" style="height:200px;">
                    <img class="img-fluid" src="../../../public/images/test.jpg" alt="">
                </div>
                <h2>{{articleTitle}}</h2>
                {{articleText}}
                <div class="mt-2 font-weight-bold">
                    <a href="#">Speed read &nbsp; &nbsp; <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticleCard",
        props:{
            articleTitle: String,
            articleText:String
        },
        data(){
            return {
                isHovered: false
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