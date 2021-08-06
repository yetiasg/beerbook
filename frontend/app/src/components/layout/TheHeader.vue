<template>
  <header>
    <p><router-link to="/">beerbook</router-link></p>
    <base-button v-if="((whereAmI !== '/auth') && (whereAmI !== '/beers'))" class="accountBtn" link mode="clearBtn" :to="`${whereAmI}auth`">konto</base-button>
    <base-button class="accountBtn" v-else-if="whereAmI === '/beers'" @click="logout" mode="clearBTtn" link to="/" >wyloguj</base-button>

  </header>
</template>

<script>
export default {
  computed:{
    whereAmI(){
      return this.$route.path;
    }
  }, 
    methods: {
      logout(){
        this.$store.dispatch('logout')
      }
    }
}
</script>

<style scoped>
  @media screen and (max-width: 360px) {
    header{
      height: calc((100vh - 85vh)/2);
    }
    p{
      font-size: 1.2rem;
      padding: 0 0 0 calc(((100% - 92%)/2) + 1%);
    }
    .accountBtn{
      padding: 0 calc(((100% - 92%)/2) + 1%) 0 0;
    }
  }

  @media screen and (min-width: 361px) and (max-width: 768px){
    header{
      height: calc((100vh - 84vh)/2);
    }
    p{
      font-size: 1.2rem;
      padding: 0 0 0 calc(((100% - 87%)/2) + 1%);
    }
    .accountBtn{
      padding: 0 calc(((100% - 88%)/2) + 1%) 0 0;
    }
  }

  @media screen and (min-width: 768px){
    header{
      height: calc((100vh - 83vh)/2);
    }
    p{
      font-size: 1.2rem;
      padding: 0 0 0 calc(((100% - 85%)/2) + 1%);
    }
    .accountBtn{
      padding: 0 calc(((100% - 85%)/2) + 1%) 0 0;
    }
  }

  @media screen and (min-width: 1204px){
    p{
      font-size: 1.2rem;
      padding: 0 0 0 calc(((100% - 1024px)/2));
    }
    .accountBtn{
      padding: 0 calc(((100% - 1024px)/2)) 0 0;
    }
  }

  header{
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>