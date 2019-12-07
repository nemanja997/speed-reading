<template>
  <div>
    <div class="settings-container p-4">
      <form action="" class=" h-100 text-center">
        <div class="form-group">
          <textarea v-model="text" class="form-control" id="insertTextArea" placeholder="Enter text for speed reading here..."></textarea>
        </div>
          <div class="row">
            <div class="col-6 text-left">
              <button class="btn btn-block btn-primary btn-shadow btn-lg" @click.prevent="$refs.settingsModal.open()">
                <i class="fa fa-cog" aria-hidden="true"></i> &nbsp; Settings
              </button>
            </div>
            <div class="col-6">
              <button @click.prevent="start" class="btn btn-block btn-primary btn-shadow btn-lg"> Speed read</button>
            </div>
          </div>

      </form>
      <sweet-modal ref="settingsModal"
                   title="Settings for reeading"
                   modal-theme="light">
        <reading-settings-form @settingsSaved="closeModal"></reading-settings-form>
      </sweet-modal>
     
    </div>
  </div>
</template>

<script>
    import { SweetModal } from 'sweet-modal-vue';
    import ReadingSettingsForm from '../components/reading/ReadingSettingsForm'

export default {
  name: 'home',
    components: {
        SweetModal,
        ReadingSettingsForm
    },
    data(){
    return{
        text:'',
    }
  },
    methods:{
        start(){
            if(this.text !== ''){
                this.$store.commit('addReadingText',this.text);
                this.$router.push('/read');
            }
        },
        closeModal(){
            this.$refs.settingsModal.close();
        }
    }

}
</script>

<style lang="scss">
  .sweet-modal .sweet-title > h2{
    line-height: 64px;
  }
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
      background: #fff;
      border-radius: 0.25rem;
      box-shadow: 0 0 20px rgba(43,45,56,.1);
  }
</style>
