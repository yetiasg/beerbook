import router from '../../../router.js'

export default{
    async login(context, payload){
        const {email, password} = payload;
        try{
            const response = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })

            const resData = await response.json()
            if(!response.ok){
                let error = new Error(resData.error.message || 'Failed to authenticate.')
                throw error;
            }
            const {token, refToken, _id} = resData;
            const userPayload = {
                token: token,
                refreshToken: refToken,
                userId: _id
            }
            context.commit('setUserData', userPayload)
            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refToken);
            localStorage.setItem('userId', _id);
        }catch (error){
            console.log(error)
        }
    },
    async register(context, payload){
        const {email, password, passwordRepeat} = payload;
        try{
            const response = await fetch('http://localhost:8080/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    repeat_password: passwordRepeat
                })
            })

            
            const resData = await response.json()
            if(!response.ok){
                let error = new Error(resData.error.message || 'Failed to authenticate.')
                throw error;
            }
            const {token, refToken, _id} = resData;
            const userPayload = {
                token: token,
                refreshToken: refToken,
                userId: _id
            }
            context.commit('setUserData', userPayload)
            localStorage.setItem('token', token)
            localStorage.setItem('refreshToken', refToken)
            localStorage.setItem('userId', _id)
        }catch (error){
            console.log(error.message)
        }
    },
    async refreshAuth(context){
        try{
            const refreshToken = localStorage.getItem('refreshToken')
            if(refreshToken.length < 1) throw new Error('Unauthorized')
            const response = await fetch('http://localhost:8080/auth/refresh', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    refToken: refreshToken
                })
            })

            const resData = await response.json()
            if(!response.ok){
                const error = resData.error
                throw error;
            }
            const {token, refToken, userId} = resData;
            const userPayload = {
                token: token,
                refreshToken: refToken,
                userId: userId
            }
            
            localStorage.setItem('token', token)
            localStorage.setItem('refreshToken', refToken)
            localStorage.setItem('userId', userId)
            context.commit('setUserData', userPayload)
        }catch (error){
            if(error.status === 401){
                context.dispatch('logout')
                router.replace('/auth')
            }
        }
    },
    tryLogin(context){
        const token = localStorage.getItem('token')
        const refreshToken = localStorage.getItem('refreshToken')
        const userId = localStorage.getItem('userId')
        if(token.length > 0 && refreshToken.length > 0 && userId.length > 0){
            const userPayload = {
                token,
                refreshToken,
                userId
            }
            context.commit('setUserData', userPayload)
        }else{
            context.dispatch('logout')
            router.replace('/auth')
            throw new Error('Unauthorized')
        }
    },
    logout(context){
        context.commit('logout')
        localStorage.removeItem('token')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('userId')
    }
}