<template>
  <div style="padding:10px;">
      <el-card >
          <div class="sy">
            
            <span>

            手机号 : <el-input v-model="input1" placeholder="请输入" 
            style="width:150px;"
            size="medium"
            ></el-input>
            </span>

            <span>

            会员姓名 : <el-input v-model="input2" placeholder="请输入" 
            style="width:150px;"
            size="medium"
            ></el-input>
                
            </span>

            <span>
            性别 : <el-input v-model="input2" placeholder="请输入" 
            style="width:150px;"
            size="medium"
            ></el-input>

            </span>

            <span>

            评估时间 :  <el-date-picker v-model="input3" type="date" placeholder="请选择日期"
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

      <el-card style="marginTop:20px;">
          记录列表
          <el-table
            :data="tableData"
            border
            style="width: 100%;marginTop:15px;">
            <el-table-column
            label="序号"
            type="index"
            width="118"
            >
            </el-table-column>
            <el-table-column
            prop="phone"
            label="手机号"
            >
            </el-table-column>
            <el-table-column
            prop="name"
            label="会员姓名"
            >
            </el-table-column>
            <el-table-column
            prop="gender"
            label="性别"
            >
            </el-table-column>
            <el-table-column
            prop="age"
            label="年龄"
            >
            </el-table-column>
            
            <el-table-column
            prop="room"
            label="科室"
            >
            </el-table-column>

            <el-table-column
            prop="doctor"
            label="评估医生"
            >
            </el-table-column>

            <el-table-column
            prop="zhouqi"
            label="训练周期"
            >
            </el-table-column>

            <el-table-column
            prop="time"
            label="训练时间"
            >
            </el-table-column>


            <el-table-column
            prop="end"
            label="训练结束时间"
            >
            </el-table-column>

            <el-table-column
            prop="caozuo"
            label="操作"
            >
            <template slot-scope="{row}">
                <a href="javacript:;" style="color:blue;">
                    <!-- 这里row就是那个对象 -->
                    {{row.caozuo}}
                </a>
            </template>

            <!-- <a href="javascript:;" style="color:blue;">会员详情</a> -->

            </el-table-column>
        </el-table>

      </el-card>
  </div>
</template>

<script>
import request from '@/utils/request.js'
export default {
    data(){
        return {
            tableData:[],
            input1 : ''
            ,input2:''
            ,input3:''

        }
    }
    ,
    mounted(){
        //使用vuex吗？
        this.getInfoList()
    },
    methods:{
        async getInfoList(){
            try {
                const result = await request.get('/getInfo')
                if(result.code === 20000){
                    //请求成功了，则将数据存储到tableData中
                    this.tableData = result.data
                }
            } catch (error) {
                console.log(error);
            }
        },
        reset(){
            this.input1 = ''
            this.input2 = ''
            this.input3 = ''
        },
        print(rowData){
            console.log(rowData);
        }
    }
}
</script>

<style lang="scss" scoped>
    .sy{
        display: flex;
        justify-content: space-between;
    }
</style>