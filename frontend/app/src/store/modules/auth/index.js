import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default{
    state(){
        return{
            token: null,
            refreshToken: null,
            userId: null,
            isAuth: false
        }
    },
    mutations,
    actions,
    getters
}