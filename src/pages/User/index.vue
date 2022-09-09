<template>
  <div>
    <div class="p"><el-button @click="dialogFormVisible = true">新增</el-button>
    <div>
<el-input v-model="input" placeholder="请搜索" style="width: 400px">       
    </el-input>
    <el-button @click="search" icon="el-icon-search" circle></el-button>
    </div>
    
    </div>
    
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form>
        <el-form-item label="日期" :label-width="formLabelWidth">
          <el-input v-model="adddata.date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="adddata.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="省" :label-width="formLabelWidth">
          <el-input v-model="adddata.province" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="市" :label-width="formLabelWidth">
          <el-input v-model="adddata.city" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="adddata.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮编" :label-width="formLabelWidth">
          <el-input v-model="adddata.zip" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">确 定</el-button>
      </div>
    </el-dialog>

    <el-table :data="fil" max-height="500" style="width: 100%">
      <el-table-column
        :prop="key"
        :label="val"
        v-for="(val, key) in table"
        :key="key"
      >
      </el-table-column>

      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData, scope)"
            type="text"
            size="small"
          >
            移除
          </el-button>
          <el-button
            @click.native.prevent="updataRow(scope.$index, tableData, scope)"
            type="text"
            size="small"
          >
            修改
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  
  name: "User",

  data() {
    return {
        input: '',
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: "120px",
      tableData: [
        {
          date: "2016-05-03",
          name: "王",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-02",
          name: "王虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "小",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
      ],
      table: {
        date: "日期",
        name: "姓名",
        province: "省",
        city: "市区",
        address: "地址",
        zip: "邮编",
      },
      fil:[],
      adddata: {
        date: "",
        name: "",
        province: "",
        city: "",
        address: "",
        zip: "",
      },
    };
  },

  mounted() {
     this.fil= this.tableData.filter((item)=>{           
            return !item.name.indexOf(this.input)
            } )
  },
 

  methods: {
    deleteRow(index, rows, scope) {
      rows.splice(index, 1);
      this.fil= this.tableData
    },
    updataRow(index, rows, scope) {},
    add(){
      this.dialogFormVisible = false;
      this.tableData.push(this.adddata);
      this.adddata={}
    },
    search(){
        this.fil= this.tableData.filter((item)=>{           
            return !item.name.indexOf(this.input)
            } )
    }
  },
};
</script>

<style lang="css" scoped>
.p{
    padding-top: 0px;
    display: flex;
     justify-content: space-between;
}
</style>