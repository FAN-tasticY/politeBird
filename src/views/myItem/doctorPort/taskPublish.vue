<template>
  <div>
      <!-- 任务发布 -->

      <el-card class="num1">任务设置</el-card>

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
            操作项目 : <el-input v-model="input3" placeholder="请输入" 
            style="width:150px;"
            size="medium"
            ></el-input>

            </span>

            <span>

            日期选择 :  <el-date-picker v-model="input4" type="date" placeholder="请选择日期"
            style="width:150px;"
            size="medium"
            value-format="yyyy-MM-dd"
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

            项目人数 : <el-input v-model="input5" placeholder="请输入" 
            style="width:150px;"
            size="medium"
            ></el-input>
            </span>

            <span>

            项目形式 : <el-input v-model="input6" placeholder="请输入" 
            style="width:150px;"
            size="medium"
            ></el-input>
                
            </span>

            <span>
            考核专家 : <el-input v-model="input7" placeholder="请输入" 
            style="width:150px;"
            size="medium"
            ></el-input>

            </span>

            <span>

            专家预约 :  <el-date-picker v-model="input8" type="date" placeholder="请选择日期"
            style="width:150px;"
            size="medium"
            value-format="yyyy-MM-dd"
            
            ></el-date-picker>
            </span>

                <span>

              <el-button @click="reset">重置</el-button>
              <el-button type="primary">查询</el-button>
                </span>
          </div>

      </el-card>
      <el-card>
          <div class="sy1">
            <el-button type="primary" @click="pushTo">添加任务</el-button>
            <el-button type="danger" @click="publishTask"> 发布任务至实习端口 </el-button>
            <el-button @click="resetAll">清空所有</el-button>
          </div>
      </el-card>

  </div>
</template>

<script>
export default {
    data(){
        return {
            input1 : '',
            input2 : '',
            input3 : '',
            input4 : '',
            input5 : '',
            input6 : '',
            input7 : '',
            input8 : '',
            dataForm:{

            }
            ,dataList:[]
        }
    },
    methods:{
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
        },
        pushTo(){
            const { input1,input2,input3,input4,input5,input6,input7,input8, } = this
            this.dataForm = {
                input1,
                input2,
                input3,
                input4,
                input5,
                input6,
                input7,
                input8
            }

            for(let i = 1;i<=10;i++){
                this.dataList.push(this.dataForm)
            }
            this.$message.success('任务添加成功')
        },
        publishTask(){
            this.$store.dispatch('app/showTraineePortData',this.dataList)
            this.$message.success('任务发布成功，请前往实习端口查看')
        }
    }

}
</script>

<style>
    .sy{
        display: flex;
        justify-content: space-between;
    }
    .sy1{
        display: flex;
        justify-content: space-around;
    }
    .num1{
        margin-top: 20px;
        text-align: center;
        margin-bottom: 20px;
    }
</style>