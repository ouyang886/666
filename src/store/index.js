import Vue from "vue";
import Vuex from 'vuex'
import tab from '@/store/tab'
import user from './user'
Vue.use(Vuex)


export default new Vuex.Store({
   
    modules:{
        tab,
        user
    },
    // state:{
    //     isCollapse:false
    // },
    // actions:{
    //     jia(state){
    //         console.log(state.state.isCollapse);
    //         state.commit('CollapseMune')
           
    //     }
    // },
    // mutations:{
    //     CollapseMune(state){
    //         //console.log(!state.isCollapse);
    //         state.isCollapse=!state.isCollapse
    //     }
    // }
})
    