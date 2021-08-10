<template>
  <div class="details" @click="backToBeers">
    <div class="details-container">
      <h3>{{selectedBeerId}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      selectedBeerId: this.$store.state.requests.selectedBeer
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
    background-color: white;
    width: 50rem;
    height: 35rem;
    border-radius: 10px;
    padding: 1rem;
  }

</style>