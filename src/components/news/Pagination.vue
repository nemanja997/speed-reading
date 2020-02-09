<template>
    <ul class="pagination">
        <li><a href="javascript:void(0)">«</a></li>
        <li><a class="w3-red" href="javascript:void(0)">1</a></li>
        <li><a href="javascript:void(0)">2</a></li>
        <li><a href="javascript:void(0)">3</a></li>
        <li><a href="javascript:void(0)">4</a></li>
        <li><a href="javascript:void(0)">5</a></li>
        <li><a href="javascript:void(0)">6</a></li>
        <li><a href="javascript:void(0)">»</a></li>
    </ul>
</template>

<script>
    export default {
        name: "Pagination"
    }
</script>

<style scoped lang="scss"  rel="stylesheet/scss">
.pagination{
    display: inline-block;
    padding: 0;
    margin: 8px 0;

    li{
        display: inline;
    }
    a {
        color: black;
        float: left;
        padding: 8px 16px;
        text-decoration: none;
    }
}
</style>