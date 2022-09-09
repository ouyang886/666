<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse" background-color="#545c64" 
    active-text-color="#ffdb4d"
     text-color="#fff"
     >

    <h3>{{isCollapse ? '后台':'后台管理系统'}}</h3>

   <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.path" :index="item.path">
      <i :class="'el-icon-'+item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
 
    <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">     
      <template slot="title">
        <i :class="'el-icon-'+item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </template>
      <el-menu-item-group v-for="(subItem,subIndex) in item.children" :key="subItem.path">
        <el-menu-item @click="clickMenu(subItem)" :index="subIndex.toString()">{{subItem.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    
  </el-menu>
</template>

<style lang="css" scope>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 940px;
}
.el-menu{
    border: none;
   
}h3{
        color: #fff;
        text-align:center;
        line-height:48px
    }
</style>

<script>
export default {
  data() {
    return {
     
      menu: [ 
        {
              label: '讲师管理',
              icon:'location',
              children: [
                {
                  path: '/home',
                  name: 'home',
                  label: '讲师列表',
                  url: 'other/home1'
                },
                {
                  path: '/home2',
                  name: 'home2',
                  label: '添加讲师',
                  url: 'other/home'
                }
              ]
              },
            {
              path: '/user',
              name: 'user',
              label: '用户管理',
              icon: 'user',
              url: 'User/index'
            },
            
            {
              path: '/mall',
              name: 'mall',
              label: '商品管理',
              icon: 'video-play',
              url: 'mall/index'
            },
            {
              label: '其他',
              icon: 'location',
              children: [
                {
                  path: '/page1',
                  name: 'page1',
                  label: '页面1',
                  icon: 'setting',
                  url: 'other/page1'
                },
                {
                  path: '/page2',
                  name: 'page2',
                  label: '页面2',
                  icon: 'setting',
                  url: 'other/page2'
                }
              ]
            }],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item){
        this.$router.push({
            name:item.name
        })
        this.$store.commit('selectMenu',item)
    }
  },
  computed: {
    noChildren() {
     return this.menu.filter((item) => !item.children);
    },
    hasChildren()
    {
    return this.menu.filter((item) => item.children);
    },
    isCollapse(){
      return this.$store.state.tab.isCollapse
    },
      
    },
}

</script>