<template>
  <span class="badge">
    <slot></slot>
  </span>
</template>

<style scoped> 
  @media screen and (min-width: 361px) {
    .badge {
      display: inline-block;
      padding: 1.1rem 1.2rem;
      background-color: #fcf0da;
      border-radius: 15px;
    } 
  }
</style>
 