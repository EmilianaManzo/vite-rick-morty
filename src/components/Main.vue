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
  <main class=" container ">
    <div class="row row-cols-2 row-cols-sm-3 row-cols-lg-4  ">
      <Card 
      v-for="card in store.cardInfo "
      :key="card.id"
      :name="card.name"
      :status="card.status"
      :species="card.species"
      :image="card.image"
      />
    </div>
    <div class="text-center my-5">
      <p>Risultati trovati: 20</p>
    </div>
  </main> 
</template>


<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;

</style>