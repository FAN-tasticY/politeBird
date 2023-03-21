<template>
  <div>
      <el-card style="marginTop:20px;">
          1、您的身份是:
          <div style="marginTop:10px;marginLeft:85px">
              <el-checkbox>男性</el-checkbox>
              <el-checkbox>女性</el-checkbox>
              <el-checkbox>儿童</el-checkbox>
              <el-checkbox>青少年</el-checkbox>
              <el-checkbox>老人</el-checkbox>
          </div>
      </el-card>

      <el-card style="marginTop:20px;">
          2、您最近是否感到不适:
          <div style="marginTop:10px;marginLeft:85px">
              <el-checkbox>感觉良好</el-checkbox>
              <el-checkbox>感觉一般</el-checkbox>
              <el-checkbox>感觉很差</el-checkbox>
          </div>
      </el-card>

      <el-card style="marginTop:20px;">
          3、您每周进行几次有氧运动:
          <div style="marginTop:10px;marginLeft:85px">
              <el-checkbox>7次</el-checkbox>
              <el-checkbox>5次</el-checkbox>
              <el-checkbox>3次</el-checkbox>
              <el-checkbox>1次</el-checkbox>
              <el-checkbox>0次</el-checkbox>
          </div>
      </el-card>

      <el-card style="marginTop:20px;">
          4、您是否抽烟或使用其他烟草制品:
          <div style="marginTop:10px;marginLeft:85px">
              <el-checkbox>是</el-checkbox>
              <el-checkbox>否</el-checkbox>
          </div>
      </el-card>

      <el-card style="marginTop:20px;">
          5、请描述您最近的身体状况:
          <div style="marginTop:10px;marginLeft:85px">
              <el-input type="textarea" rows="4"></el-input>
          </div>
      </el-card>

      <el-card style="marginTop:20px;">
              <div class="banner-content">
                  <el-button type="primary" @click="submit">提交表单</el-button>
                  <el-button type="danger">清空表单</el-button>
              </div>
          </el-card>

  </div>
</template>

<script>
export default {
    methods:{
        submit(){
            this.$message.success('感谢配合，我们将为您生成专属指导')
        }
    }
}
</script>

<style>
    .banner-content{
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
    }
</style>