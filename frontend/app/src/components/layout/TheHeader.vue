<template>
  <header>
    <p><router-link to="/">beerbook</router-link></p>
    <base-button v-if="whereAmI !== '/auth'" class="accountBtn" link mode="clearBtn" :to="`${whereAmI}auth`">konto</base-button>
  </header>
</template>

<script>
export default {
  computed:{
    whereAmI(){
      return this.$route.path;
    }
  }
}
</script>

<style scoped>
  @media screen and (max-width: 360px) {
    p{
      font-size: 1.2rem;
      padding: 0 0 0 5%;
    }
    .accountBtn{
      padding: 0 5% 0 0;
    }
  }

  header{
    width:100%;
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>