<template>
  <div>
    <div class="bg-light p-4">
      <form action="" class=" h-100 text-center">
        <div class="form-group">
          <textarea v-model="text" class="form-control" id="insertTextArea" placeholder="Enter text for speed reading here..."></textarea>
        </div>
        <button @click.prevent="start" class="btn btn-success btn-lg"> Speed read</button>
      </form>
     
    </div>
  </div>
</template>
<style lang="scss">
  #insertTextArea {
    resize:none;
    height:40vh
  }
</style>
<script>

export default {
  name: 'home',
  data(){
    return{
        text:''
    }
  },
    methods:{
        start(){
          this.$store.commit('addText',this.text);
          this.$router.push('/read');
        }
    }

}
</script>
