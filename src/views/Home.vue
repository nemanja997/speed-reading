<template>
  <div>
    <div class="bg-light p-4">
      <form action="" class=" h-100 text-center">
        <div class="form-group">
          <textarea class="form-control" id="insertText" style="height:40vh" placeholder="Enter text for speed reading here..."></textarea>
        </div>
        <button class="btn btn-success btn-lg"> Speed read</button>
      </form>
     
    </div>
  </div>
</template>
<style lang="scss">
  #insertText {
    resize:none;
  }
</style>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
