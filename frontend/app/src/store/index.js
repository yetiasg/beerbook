import {createStore} from 'vuex'

import authModule from './modules/auth'
import requestsModule from './modules/requests'

const store = createStore({
    modules:{
        auth: authModule,
        requests: requestsModule
    }
})

export default store