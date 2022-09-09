<template>
  <div>
    <div class="p">
      <div>
          <el-button @click="dialogFormVisible1 = true">新增</el-button>
          <el-button @click="findpage1">刷新</el-button>
      </div>
      
      <div>
        <el-input v-model="input" placeholder="请搜索" style="width: 400px">
        </el-input>
        <el-button
          @click="handlesearch"
          icon="el-icon-search"
          circle
        ></el-button>
      </div>
    </div>
    <el-table :data="tabledata"  border style="width: 100%" >
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="sex" label="性别" width="180"> </el-table-column>
      <el-table-column prop="company" label="所在公司"> </el-table-column>
      <el-table-column prop="tel" label="联系方式"> </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          {{ String(scope.row.status) === "0" ? "未签到" : "已签到" }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除
          </el-button>
          <el-button
            type="danger"
            size="mini"
            class="delBut non"
            @click="statusHandle(scope.row)"
          >
            {{ scope.row.status == "1" ? "取消签到" : "签到" }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
<!-- 当前页码数,每页展示多少条，总条数 -->
    <el-pagination
  background
  @current-change='handleCurrentChange'
  :current-page="pagination.currentPage"
  :page-size="pagination.pageSize"
  :total="pagination.total"
  layout="prev, pager, next"
  >
</el-pagination>

    <el-dialog title="新增操作" :visible.sync="dialogFormVisible1">
      <el-form :model="fromdata">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="fromdata.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-input v-model="fromdata.sex" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="所在公司" :label-width="formLabelWidth">
          <el-input v-model="fromdata.company" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系方式" :label-width="formLabelWidth">
          <el-input v-model="fromdata.tel" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="handleadd">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="编辑操作" :visible.sync="dialogFormVisible2">
      <el-form :model="fromdata">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="fromdata.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-input v-model="fromdata.sex" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="所在公司" :label-width="formLabelWidth">
          <el-input v-model="fromdata.company" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系方式" :label-width="formLabelWidth">
          <el-input v-model="fromdata.tel" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="handlexiugai">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "home",

  data() {
    return {
      input: "",
      pagination:{
        currentPage:1,
        pageSize:5,
        total:30,
      },
      dialogFormVisible1: false,
      dialogFormVisible2: false,
      formLabelWidth: "120px",
      tabledata: [],
      fromdata: {},
    };
  },

  created() {
    
    this.findpage1();
  },
  methods: {
    handleEdit(index, row) {
      this.dialogFormVisible2 = true;
      this.fromdata = row;
    },
    handleDelete(index, row) {//删除
      axios.delete("http://localhost:8888/customer/" + row.id).then((res) => {
        this.$message({
          message: res.data.data,
          type: "success",
        });
        this.findpage1();
      });
    },
    handleadd() {//添加操作
      axios.post("http://localhost:8888/customer/add", this.fromdata).then((res) => {
          this.$message({
            message: res.data.data,
            type: "success",
          });
          this.findpage1();
        });
      this.dialogFormVisible1 = false;
      this.fromdata = {};
    },

    handlesearch() {//搜索
      this.findpage1()
    },
    handleCurrentChange(currentPage){//页码发生改变时
      this.pagination.currentPage=currentPage
      this.findpage1()
    },
    findpage() {//查询总条数
      axios.get("http://localhost:8888/customer/cha").then((res) => {
        this.pagination.total=res.data.data
      });
    },
    findpage1(){//分页条件查询
      axios({
        method:'post',
        url:"http://localhost:8888/customer/cha1",
        data:{
          currentPage:this.pagination.currentPage,
          pageSize:this.pagination.pageSize,
          input:this.input
        }
      }).then((res)=>{
        this.tabledata = res.data.data;
        this.findpage();
      })
    },
    handlexiugai() {//编辑操作
      axios.post("http://localhost:8888/customer/updata", this.fromdata).then((res) => {
          this.$message({
            message: res.data.data,
            type: "success",
          });
          this.findpage1();
        });
      this.dialogFormVisible2 = false;
      this.fromdata = {};
    },
    statusHandle(row) {//签到状态改变
      axios(
        {
          url: "http://localhost:8888/customer/updata1",
          method:'post',
          data:{
            status:row.status,
            id:row.id
          }
        }
        ).then((res) => {
          this.$message({
            message: res.data.data,
            type: "success",
          });
          this.findpage1();
        });
    },
  },
};
</script>

<style lang="css" scoped>
.p {
  padding-top: 0px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
</style>