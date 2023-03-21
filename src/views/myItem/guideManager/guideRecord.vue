<template>
  <div style="padding:10px;">
      <el-card >
          <div class="sy">
            
            <span>

            会员账号 : <el-input v-model="input1" placeholder="请输入" 
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
            指导医生 : <el-input v-model="input2" placeholder="请输入" 
            style="width:150px;"
            size="medium"
            ></el-input>

            </span>

            <span>

            计划指导时间 :  <el-date-picker v-model="input3" type="date" placeholder="请选择日期"
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
            :data="tableData1"
            border
            style="width: 100%;marginTop:15px;">
            <el-table-column
            label="序号"
            type="index"
            width="118"
            >
            </el-table-column>
            <el-table-column
            prop="vip"
            label="会员账号"
            >
            </el-table-column>
            <el-table-column
            prop="name"
            label="指导医生"
            >
            </el-table-column>
            <el-table-column
            prop="gender"
            label="计划指导时间"
            >
            </el-table-column>
            <el-table-column
            prop="age"
            label="实际指导时间"
            >
            </el-table-column>
            
            <el-table-column
            prop="id"
            label="指导方式"
            >
            </el-table-column>

            <el-table-column
            prop="address"
            label="指导时长"
            >
            </el-table-column>

            <el-table-column
            prop="time"
            label="会员姓名"
            >
            </el-table-column>

            <el-table-column
            prop="guide"
            label="会员性别"
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

    <div>
      <el-pagination
        layout="prev, pager, next"
        :total="1"
        style="marginTop:10px;float:right;"
        background
        >
    </el-pagination>
    <span style="float:right;marginTop:17px;fontSize:12px;">共1条</span>
    </div>
  </div>
</template>

<script>
import request from '@/utils/request.js'
export default {
    data(){
        return {
            tableData1:[],
            tableData:[
                {
                    vip:'15618989737',
                    name:'陆雨晨',
                    gender:'女'
                    ,age:'22'
                    ,id:'310109197111075257'
                    ,address:'河南省郑州市二七区'
                    ,time:'2023-03-27'
                    ,doctor:'徐灵玲'
                    ,caozuo:'会员详情'
                }
            ],
            input1 : ''
            ,input2:''
            ,input3:''

        }
    }
    ,
    methods:{
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