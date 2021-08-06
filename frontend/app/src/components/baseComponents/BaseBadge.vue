<template>
  <span class="badge">
    <slot></slot>
  </span>
</template>

<style scoped>
  @media screen and (max-width: 360px) {
    .badge {
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      background-color: #fcf0da;
      width: 100%;
      height: 100vh;
    } 
  }
  
  @media screen and (min-width: 361px) {
    .badge {
      display: inline-block;
      padding: 1.1rem 1.2rem;
      box-sizing: border-box;
      background-color: #fcf0da;
      border-radius: 15px;
    } 
  }
</style>
 