<template>
  <div>
    <div class="bg-light p-5"  style="height:500px;">
      <form action="" class=" h-100">
        <div class="form-group h-100">
          
          <textarea class="form-control h-100" id="insertText"></textarea>
        </div>
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
