export default{
  setAmountOfBeers(state, payload){
    state.amountOfBeers = payload;
  },
  setAmountOfPages(state, payload){
    state.amountOfPages = payload;
  },
  setCurrentPage(state, payload){
    state.currentPage = payload
  },
  setSelectedBeer(state, payload){
    state.selectedBeer = payload
  }
}