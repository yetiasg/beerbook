<template>
  <footer>
   <p>created by cherryvue.com</p>
  </footer>
</template>

<style scoped>
  @media screen and (max-width: 360px) {
    p{
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 360px) {
    footer{
      height: calc((100vh - 88vh)/2);
    }
  }

  @media screen and (min-width: 361px) and (max-width: 768px){
    footer{
      height: calc((100vh - 88vh)/2);
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px){
    footer{
      height: calc((100vh - 86vh)/2);
    }
  }

  @media screen and (min-width: 1025px){
    footer{
      height: calc((100vh - 85vh)/2);
    }
  }

  footer{
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>