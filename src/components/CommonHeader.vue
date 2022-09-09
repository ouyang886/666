<template>
  <div class="content">
    <div class='k'>
    <el-button icon="el-icon-menu" size="mini" @click="change"></el-button>
    <!-- <h3 style="color: #fff" id="w">首页</h3> -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="item in tags"
        :key="item.path"
        :to="{ path: item.path }"
        class="s"
        
        >{{ item.label }}</el-breadcrumb-item
      >
    </el-breadcrumb>
</div>

    <div class="ren">
      <el-dropdown size="mini" trigger="click">
        <span class="el-dropdown-link w">
          <el-button
            icon="el-icon-platform-eleme"
            size="medium"
            circle
          ></el-button>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonHeader",

  data() {
    return {};
  },
  computed: {
    tags() {
      return this.$store.state.tab.tabsList;
    },
  },
  mounted() {},

  methods: {
    change() {
      console.log(this.$store.state.tab.tabsList);
      this.$store.commit("CollapseMune");
    },
    logOut(){
      this.$store.commit('clearToken')
      this.$store.commit('clearMenu')
      localStorage.setItem("form",'')
      this.$router.push('/login')
    }
  },
};
</script>

<style lang="less">
.content {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
.k{
  display: flex;
}
#w {
  display: flex;
}
.el-dropdown {
  margin-right: 0px;
}
.el-breadcrumb__inner.is-link {
  color: rgb(241, 240, 240) !important;
  line-height: 100%;
}
.el-breadcrumb{
  line-height: 2 !important;
  margin-left: 30px;
}
</style>