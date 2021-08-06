import router from '../../../router.js';
import config from '../../../config.js';

// helpers----------------------------------------------
const getJSON = async(url, options) =>{
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(response.message);
    const data = await response.json();
    return data;
};
  
const expirationTime = (time) => {
    return time * 1000 * 60 * 60;
}
  //------------------------------------------------------

let timer;

export default{
    login: async (context, payload) => {
        const {email, password} = payload;
        try{
          const resData = await getJSON(`${config.BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: email,
              password: password
            })
          });
          let {token, refreshToken, userId} = resData;
          let expiresIn = expirationTime(resData.expiresIn);
          const expirationDate = new Date().getTime() + expiresIn;
    
          const userPayload = {
            token,
            refreshToken,
            userId,
            espiresIn: expirationDate
          }
    
          context.commit('setUserData', userPayload);
          localStorage.setItem('token', token);
          localStorage.setItem('refreshToken', refreshToken);
          localStorage.setItem('userId', userId);
          localStorage.setItem('expiresIn', expirationDate);
    
          timer = setTimeout(function(){
            context.dispatch('refreshAuth');
          }, expiresIn);
    
        }catch (error){
          console.log(error.message)
        }
      },

    async register(context, payload){
        const {email, password, passwordRepeat} = payload;
        try{
            const resData = await getJSON(`${config.BASE_URL}/auth/register`, {
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

            const {token, refreshToken, userId} = resData;
            let expiresIn = expirationTime(resData.expiresIn);
            const expirationDate = new Date().getTime() + expiresIn;

            const userPayload = {
                token,
                refreshToken,
                userId,
                expiresIn: expirationDate
            }

            context.commit('setUserData', userPayload);
            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('userId', userId);
            localStorage.setItem('expiresIn', expirationDate);
      
            timer = setTimeout(function(){
                context.dispatch('refreshAuth');
            }, expiresIn);
            
        }catch (error){
            console.log("Can not register now")
        }
    },
    refreshAuth: async context => {
        const refreshToken = localStorage.getItem('refreshToken')
        if(refreshToken == '') throw new Error('Unauthorized')
    
        try{
          const resData = await getJSON(`${config.BASE_URL}/auth/refresh`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              refreshToken
            })
          });

          const {token, refreshToken, userId} = resData;
          let expiresIn = expirationTime(resData.expiresIn);
          const expirationDate = new Date().getTime() + expiresIn;

            const userPayload = {
                token: token,
                refreshToken: refreshToken,
                userId: userId
            }
            
            context.commit('setUserData', userPayload);
            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('userId', userId);
            localStorage.setItem('expiresIn', expirationDate);
      
            timer = setTimeout(function(){
              context.dispatch('refreshAuth');
            }, expiresIn);

        }catch (error){
            if(error.status === 401){
                context.dispatch('logout')
            }
        }
    },
    tryLogin(context){
        const token = localStorage.getItem('token')
        const refreshToken = localStorage.getItem('refreshToken')
        const userId = localStorage.getItem('userId')

        let expiresIn = localStorage.getItem('expiresIn');

        expiresIn = +expiresIn - new Date().getTime();
        if(expiresIn < 0){
          return;
        }
    
        timer = setTimeout(function(){
          context.dispatch('refreshAuth');
        }, expiresIn);


        if(token.length > 0 && refreshToken.length > 0 && userId.length > 0){
            const userPayload = {
                token,
                refreshToken,
                userId,
                expiresIn
            }
            context.commit('setUserData', userPayload)
        }else{
            context.dispatch('logout')
        }
    },
    logout: (context) =>{
        context.commit('logout');
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('expiresIn');
        clearTimeout(timer);
        router.replace('/auth');
    },

    autoLogout: (context) => {
        context.dispatch('logout');
        context.commit('setAutoLogout');
    }
}