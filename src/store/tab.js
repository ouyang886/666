import Cookies from "js-cookie"

export default {
    state: {
        isCollapse: false,
        tabsList: [
            {
                path: '/user',
                name: 'user',
                label: '首页',
                icon: 'user'
            },
            {
                path: '/home',
                name: 'home',
                label: 'home',
                icon: 'user'
            }
        ],
        currentMenu: null,
        menu: []
    },
    mutations: {
        CollapseMune(state) {
            //console.log(!state.isCollapse);
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state, val) {
            if (val.name !== 'user') {
                state.currentMenu = val
                const result = state.tabsList.findIndex(item => item.name === val.name)
                if (result == -1) {
                    state.tabsList.push(val)
                }
            }
            else {
                state.currentMenu = null
            }
        },
        closeTag(state, val) {
            const result = state.tabsList.findIndex(item => item.name === val.name)
            state.tabsList.splice(result, 1)
        },
        setMenu(state, val) {
            state.menu = val
            Cookies.set('menu', JSON.stringify(val))
        },
        clearMenu(state) {
            state.menu = []
            Cookies.remove('menu')
        },
        addMenu(state, router) {
            if (!Cookies.get('menu')) {
                return
            }
            const menu = JSON.parse(Cookies.get('menu'))
            state.menu = menu
            const menuArray = []
            menu.forEach(item => {
                if (item.children) {
                    item.children = item.children.map(item => {
                        item.component = () => import(`../pages/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)
                } else {
                    item.component = () => import(`../pages/${item.url}`)
                    menuArray.push(item)
                }
            });
            //路由的动态添加
            menuArray.forEach(item => {
                router.addRoute('Main', item)
            })
        }
    }
}