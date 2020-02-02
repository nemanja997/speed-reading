<template>
    <div class="col-12 col-md-6 col-lg-4 mb-4" @click="onCardClick" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
        <div class="card article-card h-100">
            <div class="card-body">
                <div class="card-image mb-3">
                    <img class="img-fluid" :src="imageUrl" alt="">
                </div>
                <h4>{{articleTitle}}</h4>
                {{shortText}}
                <div class="mt-2 font-weight-bold text-right">
                    <a href="#" v-bind:class="{ active: isHovered }">Speed read  <span class="link-arrow">→</span></a>
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
            articleText:String,
            imageUrl:{
                type:String,
                default: "./images/no-image.jpg"
            }
        },
        data(){
            return {
                isHovered: false
            }
        },
        methods: {
            onCardClick() {
                console.log('click');
            }
        },
        computed:{
            shortText(){
                return this.articleText.split(' ').slice(0,20).join(' ') + '...';
            }
        }
    }
</script>

<style scoped>
    /*TODO:Fix layout of cards without equal title sizes*/
    .article-card {
        border: none;
        box-shadow: 0px 6px 12px 0 rgba(13, 31, 61, 0.04);
        transition: all 0.3s ease;
    }

    .article-card:hover {
        transform: translateY(-4px);
    }
</style>
