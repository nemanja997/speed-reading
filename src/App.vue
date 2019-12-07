<template>
  <div id="app">

    <app-base-view></app-base-view>

  </div>
</template>

<script>
  import AppBaseView from './views/AppBaseView';
  export default{
      name:'app',
      components:{
          AppBaseView
      }
  }
</script>

<style lang="scss"  rel="stylesheet/scss">
  @import "./assets/scss/style";
</style>