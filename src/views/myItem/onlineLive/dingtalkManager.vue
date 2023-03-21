<template>
  <div>
      <el-card class="num1">直播设置</el-card>
      <el-card>
          <div class="sy">
            
            <span>

            开始时间 : <el-input v-model="input1" placeholder="请输入" 
            style="width:150px;"
            size="medium"
            ></el-input>
            </span>

            <span>

            结束时间 : <el-input v-model="input2" placeholder="请输入" 
            style="width:150px;"
            size="medium"
            ></el-input>
                
            </span>

            <span>
            参会人数 : <el-input v-model="input3" placeholder="请输入" 
            style="width:150px;"
            size="medium"
            ></el-input>

            </span>

            <span>

            直播日期 :  <el-date-picker v-model="input4" type="date" placeholder="请选择日期"
            style="width:150px;"
            size="medium"
            
            ></el-date-picker>
            </span>

                <span>

              <el-button @click="reset">重置</el-button>
              <el-button type="primary">查询</el-button>
                </span>
          </div>

      </el-card>
      <el-card style="margin:20px 0;">
          <div class="sy">
            
            <span>

            会议号码 : <el-input v-model="input5" placeholder="请输入" 
            style="width:150px;"
            size="medium"
            ></el-input>
            </span>

            <span>

            会议形式 : <el-input v-model="input6" placeholder="请输入" 
            style="width:150px;"
            size="medium"
            ></el-input>
                
            </span>

            <span>
            会议专家 : <el-input v-model="input7" placeholder="请输入" 
            style="width:150px;"
            size="medium"
            ></el-input>

            </span>

            <span>

            预约时间 :  <el-date-picker v-model="input8" type="date" placeholder="请选择日期"
            style="width:150px;"
            size="medium"
            
            ></el-date-picker>
            </span>

                <span>

              <el-button @click="reset">重置</el-button>
              <el-button type="primary">查询</el-button>
                </span>
          </div>

      </el-card>
      
      <el-card style="marginBottom:20px;">
        <span class="demonstration">直播时长 (时)</span>
        <el-slider
        v-model="value2"
        :step="10"
        show-stops>
        </el-slider>
      </el-card>

      <el-card style="marginBottom:20px;">
        <span class="demonstration">直播时长 (分)</span>
        <el-slider
        v-model="value3"
        :step="10"
        show-stops>
        </el-slider>
      </el-card>
    
      <el-card>
          <div class="sy1">
            <el-button type="primary" @click="pushTo">确定</el-button>
            <el-button @click="resetAll">取消</el-button>
          </div>
      </el-card>
  </div>
</template>

<script>
export default {
    data(){
        return {
            input1:'',
            input2:'',
            input3:'',
            input4:'',
            input5:'',
            input6:'',
            input7:'',
            input8:'',
            value2:3,
            value3:40
        }
    },
    methods:{
        pushTo(){
            this.$router.push({path:'/online/dingtalk'})
            
        },
        reset(){

        },
        resetAll(){
            this.input1 = '',
            this.input2 = '',
            this.input3 = '',
            this.input4 = '',
            this.input5 = '',
            this.input6 = '',
            this.input7 = '',
            this.input8 = ''
        }
    }
}
</script>

<style>
    .num1{
        margin-top: 20px;
        text-align: center;
        margin-bottom: 20px;
    }
    .sy{
        display: flex;
        justify-content: space-between;
    }
    .sy1{
        display: flex;
        justify-content: space-around;
    }

</style>