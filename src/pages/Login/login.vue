<template>
  <div class="loginbg">
    <div class="loginbox">
      <h2 class="login-title">系统登录</h2>
      <el-form
        class="login-container"
        :model="form"
        status-icon
        :rules="rules"
        ref="form"
      >
        <!-- 请输入用户名 -->
        <el-form-item
          prop="username"
          style="margin-top: 30px"
          label="用户名"
          class="username"
        >
          <el-row>
            <el-col class="icon">
              <!-- 引用图标 -->
              <label><span class="el-icon-s-custom"></span></label>
            </el-col>
            <el-col>
              <el-input
                v-model="form.username"
                placeholder="请输入用户名"
                class="nameInput"
                type="input"
                auto-complete="off"
              ></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <!-- 请输入密码 -->
        <el-form-item prop="password" style="margin-top: 30px" label="密码">
          <el-row>
            <el-col class="icon">
              <!-- 引用图标 -->
              <label><span class="el-icon-lock"></span></label>
            </el-col>
            <el-col>
              <el-input
                v-model="form.password"
                placeholder="请输入密码"
                type="password"
                auto-complete="off"
                class="pwdInput"
              ></el-input>
            </el-col>
          </el-row>
        </el-form-item>

        <!-- 登录提交按钮 -->
        <el-form-item class="loginBtn">
          <el-button
            size="medium"
            @click="handleLogin"
            class="loginBtn"
            type="submit"
          >
            登录
          </el-button>
        </el-form-item>
        <!-- <el-form-item>
          <a href="./register" class="register">注册</a>
        </el-form-item> -->
        <!-- <button class="register" @click.prevent="handleRegister">注册</button> -->
        
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {},
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            message: "用户名长度不能小于3位",
            trigger: "blur",
          },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },

  methods: {
    handleLogin(){
      console.log(this.form);
      localStorage.setItem("form",this.form.password)
      this.$router.push({
            name:'home'
        })
    }
      /* const token=Mock.random.guid()
        this.$store.commit('setToken',token)
        this.$router.push({name:'home'}) */
    },
};
</script>

<style  scoped>
.loginbg {
  width: 100%;
  height: auto;
  background: url("../../../public/images/login5.png") no-repeat center;
  background-size: cover;
  overflow: hidden;
  position: relative;
}
.loginbox {
  top: -150px;
  left: 50px;
  width: 336px;
  height: 440px;
  margin-top: 230px;
  margin-left: 60px;
  padding: 30px 32px;
  box-shadow: 0px 0px 15px rgba(5, 19, 47, 0.7);
  opacity: 1;
  background-color: transparent;
  position: relative;
  border-radius: 20px;
}
.loginbox h2 {
  margin-top: 40px;
  color: black;
  font-weight: 700;
  font-size: 35px;
  text-align: center;
}
.loginbox h2:hover {
  font-size: 36px;
  transition: all 1s ease-in-out;
  cursor: pointer;
}

.loginBtn {
  background-color: rgb(75, 75, 75);
  width: 200px;
  color: white;
  font-weight: 700;
  position: absolute;
  top: 200px;
  left: 50px;
  border-radius: 15px;
}
.loginBtn:hover {
  background-color: black;
  color: white;
  border-radius: 15px;
}
.icon {
  color: black;
  font-size: 20px;
  position: absolute;
  top: 40px;
  left: -25px;
}
</style>
>