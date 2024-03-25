<script>
  import { store } from '../data/store'
  import Card from './partials/Card.vue';
  export default {
    components:{
      Card
    },
    data(){
      return{
        store
      }
    }
  }
</script>

<template>
  <main>
    main
  </main> 
</template>


<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;

</style>