<template>
  <footer>
   <p>created by cherryvue.com</p>
  </footer>
</template>

<style scoped>

  @media screen and (max-width: 360px) {
    footer{
      height: calc((100vh - 85vh)/2);
    }

    p{
      font-size: 0.8rem;
    }
  }

  @media screen and (min-width: 361px) and (max-width: 768px){
    footer{
      height: calc((100vh - 84vh)/2);
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px){
    footer{
      height: calc((100vh - 83vh)/2);
    }
  }

  @media screen and (min-width: 1025px){
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