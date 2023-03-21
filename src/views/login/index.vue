<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">

      <div class="bg">
        <div class="title-container">
          <span style="display:block;">
            <img src="http://www.limaoniao.com.cn/logo.png" style="marginLeft:110px;width:108px;height:44px;">
          </span>
          <h3 class="title">康复管理中心</h3>
        </div>

        
        <div class="sy1">
          <a  :class="state === 1 ? 'borderStyle':''  " @click="changeState1" >医生登录</a>
          <a :class="state === 2 ? 'borderStyle':'' " @click="changeState2"  >专家登录</a>
          <a :class="state === 3 ? 'borderStyle':'' " @click="changeState3">实习生登录</a>
          <!-- <a :class="state === 4 ? 'borderStyle':'' " @click="changeState4">患者登录</a> -->
        </div>
      
      <div v-if="state === 1">
        <!-- 因为这里prop绑定的是username的值，所以验证时候拿到的就是username里面的值 -->
        <el-form-item prop="username">
          <div style="textAlign:center;">
          <el-input
           ref="username"
            v-model="loginForm.username"
            placeholder="Username"
            name="username"
            type="text"
            tabindex="1"
            auto-complete="on"
            size="medium"
            style="width:300px;"
          >
          </el-input>
          </div>
        </el-form-item>

        <el-form-item prop="password">
          <div style="textAlign:center;">
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="Password"
            name="password"
            tabindex="2"
            auto-complete="on"
            @keyup.enter.native="handleLogin"
            size="medium"
            style="width:300px;"
          />
          
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
          </div>
        </el-form-item>

        <el-button :loading="loading" type="primary" style="width:84%;margin-bottom:30px;marginLeft:30px;" @click.native.prevent="handleLogin">Login</el-button>

        <div class="tips">
          <span style="margin-right:20px;">用户名: doctor</span>
          <span> 密码: 000000</span>
        </div>
      </div>

      <div v-else-if="state === 2">
        <el-form-item prop="username">
          <div style="textAlign:center;">
          <el-input
            ref="username"
            v-model="loginForm.username"
            placeholder="Username"
            name="username"
            type="text"
            tabindex="1"
            auto-complete="on"
            size="medium"
            style="width:300px;"
          >
          </el-input>
          </div>
        </el-form-item>

        <el-form-item prop="password">
          <div style="textAlign:center;">
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="Password"
            name="password"
            tabindex="2"
            auto-complete="on"
            @keyup.enter.native="handleLogin"
            size="medium"
            style="width:300px;"
          />
          
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
          </div>
        </el-form-item>

        <el-button :loading="loading" type="primary" style="width:84%;margin-bottom:30px;marginLeft:30px;" @click.native.prevent="handleLogin">Login</el-button>

        <div class="tips">
          <span style="margin-right:20px;">用户名: professor</span>
          <span> 密码: 000000</span>
        </div>
      </div>

      <div v-else-if="state === 3">
        <!-- 因为这里prop绑定的是username的值，所以验证时候拿到的就是username里面的值 -->
        <el-form-item prop="username">
          <div style="textAlign:center;">
          <el-input
           ref="username"
            v-model="loginForm.username"
            placeholder="Username"
            name="username"
            type="text"
            tabindex="1"
            auto-complete="on"
            size="medium"
            style="width:300px;"
          >
          </el-input>
          </div>
        </el-form-item>

        <el-form-item prop="password">
          <div style="textAlign:center;">
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="Password"
            name="password"
            tabindex="2"
            auto-complete="on"
            @keyup.enter.native="handleLogin"
            size="medium"
            style="width:300px;"
          />
          
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
          </div>
        </el-form-item>

        <el-button :loading="loading" type="primary" style="width:84%;margin-bottom:30px;marginLeft:30px;" @click.native.prevent="handleLogin">Login</el-button>

        <div class="tips">
          <span style="margin-right:20px;">用户名: trainee</span>
          <span> 密码: 000000</span>
        </div>
      </div>

      <div v-else>
        <!-- 因为这里prop绑定的是username的值，所以验证时候拿到的就是username里面的值 -->
        <el-form-item prop="username">
          <div style="textAlign:center;">
          <el-input
           ref="username"
            v-model="loginForm.username"
            placeholder="Username"
            name="username"
            type="text"
            tabindex="1"
            auto-complete="on"
            size="medium"
            style="width:300px;"
          >
          </el-input>
          </div>
        </el-form-item>

        <el-form-item prop="password">
          <div style="textAlign:center;">
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="Password"
            name="password"
            tabindex="2"
            auto-complete="on"
            @keyup.enter.native="handleLogin"
            size="medium"
            style="width:300px;"
          />
          
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
          </div>
        </el-form-item>

        <el-button :loading="loading" type="primary" style="width:84%;margin-bottom:30px;marginLeft:30px;" @click.native.prevent="handleLogin">Login</el-button>

        <div class="tips">
          <span style="margin-right:20px;">用户名: patient</span>
          <span> 密码: 000000</span>
        </div>
      </div>
      </div>
    </el-form>
  </div>
</template>

<script>


import { validUsername } from '@/utils/validate'
import {decideRoutes} from '@/router/index.js'

export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      // value = admin
      console.log(value);
      if (!validUsername(value)) {
        callback(new Error('用户名错误'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码长度不能少于六位'))
      } else {
        callback()
      }
    }
    return {
      state:1,
      loginForm: {
        // prop绑定谁就验证谁吗？？？ 对的prop绑定谁则方法就验证谁
        
        username:'',
        password:''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  mounted(){
   this.$store.dispatch('app/changeLoginIndex',this.state)
  //  this.$dispatch('changeLoginIndex',this.state)
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        let localIndex = JSON.parse(localStorage.getItem('index_key'))
        if (valid) {
          this.loading = true
          // 对这里拿到的是一个promise实例 dispatch实例成功了，那么该处就调用成功的回调函数。
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            if(localIndex === 1){
              this.$router.push({ path:'/' })
              this.loading = false
            }else if(localIndex === 2){
              this.$router.push({ path:'/guidemanager/guideplan' })
              this.loading = false
            }else if(localIndex === 3){
              this.$router.push({ path:'/traineePort/practiceTask' })
              this.loading = false
            }else{
              this.$router.push({ path:'/recoverTrain/bodyGuide' })
              this.loading = false
            }




          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    changeState1(){
      this.state = 1
      this.loginForm.username = ''
      this.loginForm.password = ''
      this.$store.dispatch('app/changeLoginIndex',this.state)

    },
    changeState2(){
      this.state = 2
      this.loginForm.username = ''
      this.loginForm.password = ''
   this.$store.dispatch('app/changeLoginIndex',this.state)

    },
    changeState3(){
      this.state = 3
      this.loginForm.username = ''
      this.loginForm.password = ''
   this.$store.dispatch('app/changeLoginIndex',this.state)

    },
    changeState4(){
      this.state = 4
      this.loginForm.username = ''
      this.loginForm.password = ''
   this.$store.dispatch('app/changeLoginIndex',this.state)

    }
  }
}
</script>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;



.login-container {
  min-height: 100%;
  width: 100%;
  // background-color: $bg;
  background-image: url(http://www.limaoniao.com.cn/bg.svg);
  overflow: hidden;
  .bg{
    background-color:white;
    width: 360px;
    height: 400px;
    border-radius: 15px;
  }

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 90px 24px 0;
    margin: 0 auto;
    // margin-left: 36%;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: black;
    margin-bottom: 10px;
    margin-left: 30px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;
    
    .title {
      font-size: 26px;
      color: black;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 50px;
    top: 2px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
.sy1{
        display: flex;
        justify-content: space-between;
        width: 350px;
        height: 30px;
        margin: 0 auto;
        margin-top: 20px;
        margin-bottom: 20px;
        
    }
.borderStyle{
        height: 30px;
        display: block;
        border-bottom: 4px solid blue;
    }
</style>
