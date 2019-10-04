<template>
  <div>
    <div class="settings-container p-4">
      <form action="" class=" h-100 text-center">
        <div class="form-group">
          <textarea v-model="text" class="form-control" id="insertTextArea" placeholder="Enter text for speed reading here..."></textarea>
        </div>
          <div class="row">
            <div class="col-3">
              <div class="form-group row">
                <label class="col-8 col-form-label">Words per minute:</label>
                <div class="col-4">
                  <input v-model="fontSize" class="form-control" type="number">
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="form-group row">
                <label class="col-8 col-form-label">Chunks:</label>
                <div class="col-4">
                  <input v-model="chunks" class="form-control" type="number">
                </div>
              </div>
            </div>
            <div class="col-3">
              <button @click.prevent="start" class="btn btn-block btn-success btn-lg"> Speed read</button>
            </div>
            <div class="col-3">
              <button @click.prevent="start" class="btn btn-block btn-success btn-lg"> Speed read</button>
            </div>
          </div>

      </form>
     
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data(){
    return{
        text:'',
        fontSize:40,
        chunks:1
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

<style lang="scss">
  #insertTextArea {
    resize:none;
    height:40vh;
    border-width: 0px;
  }
  .settings-container{
    background-color:#e1e1e1;
    border-radius: 0.25rem;
  }
</style>
