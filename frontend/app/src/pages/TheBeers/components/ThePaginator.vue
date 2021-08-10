<template>
  <div class="pagination">
    <span class="arrow" @click="previousPage"><svg xmlns="http://www.w3.org/2000/svg" width="20.752" height="18" viewBox="0 0 20.752 20.226">
  <path id="Icon_awesome-arrow-left" data-name="Icon awesome-arrow-left" d="M11.925,21.519,10.9,22.547a1.107,1.107,0,0,1-1.57,0l-9-9a1.107,1.107,0,0,1,0-1.57l9-9a1.107,1.107,0,0,1,1.57,0L11.925,4a1.113,1.113,0,0,1-.019,1.589L6.326,10.908H19.637a1.109,1.109,0,0,1,1.112,1.112V13.5a1.109,1.109,0,0,1-1.112,1.112H6.326l5.581,5.317A1.1,1.1,0,0,1,11.925,21.519Z" transform="translate(0.004 -2.647)" fill="rgba(0,0,0,0.8)"/>
</svg>
</span>
    <span>{{currentPage}}</span>
    <span class="arrow" @click="nextPage"><svg xmlns="http://www.w3.org/2000/svg" width="20.752" height="18" viewBox="0 0 20.752 20.226">
  <path id="Icon_awesome-arrow-right" data-name="Icon awesome-arrow-right" d="M8.823,4,9.851,2.974a1.107,1.107,0,0,1,1.57,0l9,9a1.107,1.107,0,0,1,0,1.57l-9,9a1.107,1.107,0,0,1-1.57,0L8.823,21.519a1.113,1.113,0,0,1,.019-1.589l5.581-5.317H1.112A1.109,1.109,0,0,1,0,13.5V12.019a1.109,1.109,0,0,1,1.112-1.112H14.423L8.842,5.591A1.1,1.1,0,0,1,8.823,4Z" transform="translate(0 -2.647)" fill="rgba(0,0,0,0.8)"/>
</svg>
</span>
  </div>
</template>

<script>
export default {
  data(){
    return{
      currentPage: this.$store.state.requests.currentPage,
    }
  },
  methods:{
    nextPage(){
      if(this.currentPage >= this.$store.state.requests.amountOfPages) return
      this.currentPage++
      this.setCurrentPage()
    },
    previousPage(){
      if(this.currentPage <= 1) return
      this.currentPage--
      this.setCurrentPage()
    },
    setCurrentPage(){
      this.$store.commit('setCurrentPage', this.currentPage)
      window.scrollTo(0,0);
    },
  }
}
</script>

<style scoped>
  .pagination{
    width: 7rem;
    height: 3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 4rem;
    font-size: 1.4rem;
  }

  .arrow:first-child:hover{
    transform: translateX(-3px);
    transition: ease-in-out 0.1s ;
  }

    .arrow:last-child:hover{
    transform: translateX(3px);
    transition: ease-in-out 0.1s ;
  }

</style>