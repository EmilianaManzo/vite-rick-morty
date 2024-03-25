<script>
  export default {
    props:{
      name: String,
      status: String,
      species: String,
      image: String
    }
  }
</script>

<template>
  <div class="col my-5 ">
    <div class="" style="width: 18rem;">
      <img :src="image" class="card-img-top rounded-circle " :alt="name">
      <div class="card-body rounded-pill my-2 text-center">
        <h5 class="card-title my-1 ">{{ name }}</h5>
        <div class="line my-3 "></div>
        <p class="card-text m-0 ">{{ status }}</p>
        <p class="card-text">{{ species }}</p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/main.scss' as *;

.card-body{
  border: 2px solid rgb(187, 159, 240);
  .line{
    border: 1px solid rgb(187, 159, 240);
    width: 30%;
    position: relative;
    left: 50%;
    transform: translate(-50%);
    
  }
  color: #110834;
}

</style>