<template>
  <div>
    <div class="settings-container p-4">
      <text-input-form></text-input-form>
    </div>
  </div>
</template>

<script>
  import TextInputForm from '../components/settings/TextinputForm'
  export default {
    name: 'home',
      components:{
          TextInputForm
      }
  }

</script>

<style lang="scss">
  .settings-container{
      margin-top:5vh;
      background: #fff;
      border-radius: 0.25rem;
      box-shadow: 0 0 20px rgba(43,45,56,.1);
  }
</style>
