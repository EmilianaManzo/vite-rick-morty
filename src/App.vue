<script>
  import axios from 'axios';
  import { store } from './data/store'
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
  export default {
    components:{
      Header,
      Main
    },
    data(){
      return{
        store,
      }
    },

    methods:{
      getApi(){
        console.log('CI SIAMO!');
        console.log(this.store);
        axios.get(this.store.apiUrl, {
          params:{
            character : 20
          }
        })
        .then(result =>{
          this.store.cardInfo = result.data
          console.log(this.store.cardInfo);
        })
        .catch(error => {
          console.log(error);
        })
      }
    },

    mounted(){
      this.getApi()
    }
  }
</script>

<template>

  <Header />
  <Main />

</template>

<style lang="scss">
@use './assets/scss/main.scss' as * ; 

</style>