<template>
  <footer>
   <p>created by {{createdBy.username}} - <a :href="createdBy.repo">{{createdBy.repo}}</a></p>
  </footer>
</template>

<script>
import config from '../../config.js';
export default {
  computed: {
    createdBy(){
      return config.AUTHOR;
    }
  }
}
</script>

<style scoped>
  p{
    font-size: 0.8rem;
  }

  @media screen and (max-width: 360px) {
    footer{
      height: calc((100vh - 85vh)/2);
    }
  }

  @media screen and (min-width: 361px) and (max-width: 768px){
    footer{
      height: calc((100vh - 84vh)/2);
    }
  }

  @media screen and (min-width: 768px){
    footer{
      height: calc((100vh - 83vh)/2);
    }
  }

  footer{
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>