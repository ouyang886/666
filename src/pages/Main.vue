<template>
  <div>
    <el-container style="height: 100%">
      <el-aside width="auto">
        <CommonAside></CommonAside>
      </el-aside>
      <el-container>
        <el-header>
          <CommonHeader></CommonHeader>
        </el-header>
        <CommonTag></CommonTag>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from '@/components/CommonAside'
import CommonHeader from '@/components/CommonHeader'	
import CommonTag from '@/components/CommonTag'
export default {
  name: "Main",
  components:
  {
    CommonAside,CommonHeader,CommonTag
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style>
.el-header {
  background-color: #333;
 
  
  flex-direction: column;
}
.el-main {
  padding-top: 0;
}
</style>