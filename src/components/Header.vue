<script>
import axios from 'axios';
import { store } from '../data/store';
  export default {
    data(){
      return{
        store,
        nameToSearch: ''
      }
    },
    methods:{
      searchName(isSearch){
        console.log('ciao')
        this.store.queryParam = {
          name: this.nameToSearch
        }
        this.$emit('searchName')
      }
    }
  }
</script>

<template>
  <header>
    <div class="container text-center">
      <h1 class=" fw-bold my-4"> - Rick&Morty -</h1>
      <form action="" @submit.prevent="false">
        <input 
        v-model.trim="nameToSearch"
        @keyup.enter="searchName"
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