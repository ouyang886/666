<template>
  <el-table
    v-loading="listLoading"
    :data="list"
    element-loading-text="数据加载中"
    border
    fit
    highlight-current-row
  >
    <el-table-column label="序号" width="70" align="center">
      <template slot-scope="scope">
        {{ (page - 1) * limit + scope.$index + 1 }}
      </template>
    </el-table-column>

    <el-table-column prop="name" label="名称" width="80" />

    <el-table-column label="头衔" width="80">
      <template slot-scope="scope">
        {{ scope.row.level === 1 ? "高级讲师" : "首席讲师" }}
      </template>
    </el-table-column>

    <el-table-column prop="intro" label="资历" />

    <el-table-column prop="gmtCreate" label="添加时间" width="160" />

    <el-table-column prop="sort" label="排序" width="60" />

    <el-table-column label="操作" width="200" align="center">
      <template slot-scope="scope">
        <router-link :to="'/edu/teacher/edit/' + scope.row.id">
          <el-button type="primary" size="mini" icon="el-icon-edit"
            >修改</el-button
          >
        </router-link>
        <el-button
          type="danger"
          size="mini"
          icon="el-icon-delete"
          @click="removeDataById(scope.row.id)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import axios from "axios";
import { Loading } from "element-ui";
export default {
  name: "Home1",

  data() {
    return {
      list: [],
      page: 1, //当前页
      limit: 10,
      total: 0,
      listLoading: false,
      teacherQuery: {},
    };
  },

  mounted() {
    this.getList();
    this.Loading()
  },

  methods: {
    getList() {
      axios({
        method: "get",
        url: `http://localhost:8001/eduservice/teacher/pageTeacher/${this.page}/${this.limit}`,
      }).then((res) => {
        this.list = res.data.data.records;
        console.log(this.list);
      });
    },
    Loading() {
      this.listLoading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>