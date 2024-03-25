<script>
  export default {
    
  }
</script>

<template>
  <header>
    <div class="container text-center">
      <h1 class=" fw-bold my-4"> - Rick&Morty -</h1>
      <form action="">
        <label for="" class="mx-2">
          <input type="text" class="form-control  " placeholder="Search Character">
        </label>

        <label for="" class="mx-2">
          <select class="form-select" name="" id="">
            <option selected>Select Option</option>
            <option value="">Alive</option>
            <option value="">Dead</option>
            <option value="">Unknown</option>
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

</style>