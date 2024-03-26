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
        this.store.cardInfo =[];
        console.log('CI SIAMO!');
        console.log(this.store);
        axios.get(this.store.apiUrl, {
          params: this.store.queryParam
        })
        .then(result =>{
          console.log(result.data);
          this.store.cardInfo = result.data.results
          console.log(this.store.cardInfo);
        })
        .catch(error => {
          console.log(error);
        })
      }
    },

    mounted(){
      this.getApi();
    }
  }
</script>

<template>

  <Header @searchName="getApi" />
  <Main />

</template>

<style lang="scss">
@use './assets/scss/main.scss' as * ; 

</style>