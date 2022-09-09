//路由配置
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login/login.vue'
import Main from '../pages/Main.vue'
import Home1 from '../pages/home/home1.vue'
import Home2 from '../pages/home/home2.vue'
import User from '../pages/User/index.vue'
import mall from '../pages/mall/index.vue'
import page1 from '../pages/other/page1.vue'
import page2 from '../pages/other/page2.vue'
Vue.use(VueRouter);

//防止跳转相同路径时保错

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const router =  new VueRouter({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/',
            name: 'Main',
            component: Main,
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: Home1,
                },
                {
                    path: '/home2',
                    name: 'home2',
                    component: Home2,
                },
                {
                    path: '/user',
                    name: 'user',
                    component: User
                },
                {
                    path: '/mall',
                    name: 'mall',
                    component: mall
                }
                ,
                {
                    path: '/page1',
                    name: 'page1',
                    component: page1
                },

                {
                    path: '/page2',
                    name: 'page2',
                    component: page2
                }
            ], redirect: '/user'
        },


        // {
        //     path:'/user',
        //     name:'User',
        //     component:User,

        // }
    ],
    mode: 'history'
})
router.beforeEach((to, from, next) => {
	// store.commit('getToken')
	var token=localStorage.getItem('form')
	console.log(token);
	// const token = store.state.user.token
    if(to.path!=='/login'){
        if(token==='admin'){
            next()
        }
    }
    else{
        next()
    }
})


export default router