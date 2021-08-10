<template>
  <div class="details" @click="backToBeers">
    <div class="details-container" @click.stop>
      <span class="closeModal" @click="backToBeers">x</span>
      <h3>{{selectedBeer}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      selectedBeer: this.$store.state.requests.selectedBeer
    }
  },
  methods:{
    backToBeers(){
      this.$store.commit('setSelectedBeer', null);
    }
  }
}
</script>

<style scoped>
  .details{
    width: 100%;
    height: 100vh;
    background-color: rgba(194, 194, 194, 0.705);
    z-index: 5;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .details-container{
    position: relative;
    background-color: white;
    width: 50rem;
    height: 35rem;
    border-radius: 10px;
    padding: 1rem;
  }

  .closeModal{
    position: absolute;
    right: 1rem;
    font-size: 1.4rem;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    background-color: transparent;
    text-align: center;
    border-radius: 50px;
    background-color: rgb(246, 227, 192);
  }

  .closeModal:hover{
    background-color: rgb(241, 218, 172);
    transition: ease-in 0.2s;
  }

</style>