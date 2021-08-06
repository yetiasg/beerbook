export default{
    getUserId(state){
        if(!state.userId || !state.token || !state.refreshToken) return null
        else return state.userId
    },
    getToken(state){
        if(!state.userId || !state.token || !state.refreshToken) return null
        else return state.token
    }
}