import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations.js';

export default{
    state() {
      return {
        name: null,
        token: null,
        refreshToken: null,
        userId: '',
        expiresIn: null,
        isAuth: false,
        didAutoLogout: false,
      };
    },
    mutations,
    actions, 
    getters
};