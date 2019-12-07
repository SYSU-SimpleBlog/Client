import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state(){
        return{
            user: null,
            token: null,
            isLogin: '0'
        }
    },
    getters: {
        getStorage: function (state) {
            if(!state.user){
                state.user = JSON.parse(localStorage.getItem(key))
                state.isLogin = localStorage.getItem(isLogin)
            }
            return state.user
        }
    },
    mutations: {
        $_setLogin(state, value) {
            state.isLogin = value
            localStorage.setItem('isLogin', value)
        },
        $_setStorage(state, value) {
            state.user = value
            localStorage.setItem('user', JSON.stringify(value))
        },
        $_removeStorage(state) {
            state.user = null
            state.isLogin = '0'
            localStorage.removeItem('user')
            localStorage.removeItem('isLogin')
        }
    }
});

export default store;
