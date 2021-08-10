export default{
    getBeers(state){
      const currentPage = state.currentPage;
      const perPage = state.perPage;
      const index = (currentPage - 1) * perPage;
      return state.beers.slice(index, index + perPage)
    }
}