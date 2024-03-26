<script>
import { store } from '../data/store';
  export default {
    data(){
      return{
        store,
        name: ''
      }
    },
    methods:{
      searchName(){
        this.store.queryParam = {
          offset: 0,
          name: this.name
        }
        this.$emit('searchName')
        console.log('ciao')
      }
    }
  }
</script>

<template>
  <header>
    <div class="container text-center">
      <h1 class=" fw-bold my-4"> - Rick&Morty -</h1>
      <form action="">
        <input 
        v-model.trim="name"
        @keyup.enter="searchName()"
        class="form-control w-25 " list="datalistOptions" id="exampleDataList" placeholder="Search name">

        <datalist id="datalistOptions">
          <option
          v-for="card in this.store.cardInfo"
          :key="card.id"
          :value="card.name"></option>
        </datalist>

        <label for="" class="mx-2">
          <select class="form-select" name="" id="">
          </select>
        </label>

        <button type="button" class="btn btn-info mx-2 ">Search</button>
        <button type="button" class="btn btn-warning mx-2">Reset</button>
    </form>
    </div>


  </header>
</template>


<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;

input{
  display: inline-block !important;
}

</style>