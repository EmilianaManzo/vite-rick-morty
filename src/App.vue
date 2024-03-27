<script>
  import axios from 'axios';
  import { store } from './data/store'
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
  import Paginator from './components/partials/Paginator.vue';
  export default {
    components:{
      Header,
      Main,
      Paginator
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
          console.log(result);
          this.store.cardInfo = result.data.results
          this.store.pageInfo.pages = result.data.info.pages
          console.log(this.store.pageInfo.pages);
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
  <Paginator @nextPage="getApi" />

</template>

<style lang="scss">
@use './assets/scss/main.scss' as * ; 

</style>