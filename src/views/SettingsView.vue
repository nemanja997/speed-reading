<template>
  <div>
    <div class="settings-container p-4">
      <form action="" class=" h-100 text-center">
        <div class="form-group">
          <textarea v-model="text" class="form-control" id="insertTextArea" placeholder="Enter text for speed reading here..."></textarea>
        </div>
          <div class="row">
            <div class="col-3 text-left">
              <button class="btn btn-primary btn-shadow" @click.prevent="$refs.settingsModal.open()">
                <i class="fa fa-cog fa-2x" aria-hidden="true"></i>
              </button>
            </div>
            <div class="col-3">
            </div>
            <div class="col-3">
            </div>
            <div class="col-3">
              <button @click.prevent="start" class="btn btn-block btn-primary btn-shadow btn-lg"> Speed read</button>
            </div>
          </div>

      </form>
      <sweet-modal ref="settingsModal"
                   title="Settings for reeading"
                   modal-theme="light">
        This is an alert.
      </sweet-modal>
     
    </div>
  </div>
</template>

<script>
    import { SweetModal } from 'sweet-modal-vue';

export default {
  name: 'home',
    components: {
        SweetModal
    },
    data(){
    return{
        text:'',
        fontSize:40,
        chunks:1,
        wordsPerMinute:200
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
      border-color: #e4e6f2;
      border-width: 2px;
      border-style:dashed;
  }
  .settings-container{
      margin-top:5vh;
    border-radius: 0.25rem;
      background: #fff;
      border-radius: 5px;
      box-shadow: 0 0 20px rgba(43,45,56,.1);
  }
</style>
