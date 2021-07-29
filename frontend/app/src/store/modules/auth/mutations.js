export default{
    setUserData(state, payload){
        state.token = payload.token
        state.refreshToken = payload.refreshToken
        state.userId = payload.userId
        state.isAuth = true
    },
    logout(state){
        state.token = null
        state.refreshToken = null
        state.userId = null
        state.isAuth = false
    }
}