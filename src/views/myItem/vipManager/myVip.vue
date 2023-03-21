<template>
  <div style="padding:10px;">
      <el-card >

          <div class="top" v-if="!isOpen">
            手机号码 : <el-input v-model="input1" placeholder="请输入" 
            style="width:15%;marginRight:5%;"
            size="medium"
            ></el-input>

            患者姓名 : <el-input v-model="input2" placeholder="请输入" 
            style="width:15%;marginRight:5%"
            size="medium"
            ></el-input>

            

            患者性别 : <el-select v-model="select" slot="prepend" placeholder="请选择" style="width:15%;marginRight:5%"
            size="medium">

                <el-option label="男" value="1"></el-option>
                <el-option label="女" value="2"></el-option>
                
            </el-select>
          </div>

          <div style="marginTop:10px;">
            加入时间 :  <el-date-picker v-model="input4" type="date" placeholder="请选择日期"
            style="width:15%;marginRight:5%"
            size="medium"
            ></el-date-picker>


            结对医生 : <el-input v-model="input5" placeholder="请输入" 
            style="width:15%;marginRight:5%;"
            size="medium"
            ></el-input>

            信息状态 : <el-select v-model="select1" slot="prepend" placeholder="请选择" style="width:15%;marginRight:5%"
            size="medium">
                <el-option label="未完善信息" value="1"></el-option>
                <el-option label="已完善信息" value="2"></el-option>
                <el-option label="全部" value="3"></el-option>

                
            </el-select>

          </div>

        <div style="float:right;marginTop:10px;marginBottom:20px;">
            <el-button @click="reset">重置</el-button>
            <el-button type="primary">查询</el-button>
            <a href="javascript:;" v-if="isOpen" style="color:blue;" @click="changeState">
                展开
            </a>
            <a href="javascript:;" v-else style="color:blue;" @click="changeState">
                收起
            </a>
        </div>
      </el-card>

      <el-card style="marginTop:10px;">
          <div class="row">
              <span>会员列表</span>
              <el-button type="primary" icon="el-icon-plus" @click="open">添加会员</el-button>
          </div>
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
            label="姓名"
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
            prop="id"
            label="身份证号"
            >
            </el-table-column>
            <el-table-column
            prop="address"
            label="家庭地址"
            >
            </el-table-column>
            <el-table-column
            prop="time"
            label="加入时间"
            >
            </el-table-column>
            <el-table-column
            prop="vip"
            label="vip"
            >
            </el-table-column>
            <el-table-column
            prop="doctor"
            label="结对医生"
            >
            </el-table-column>

            

            <el-table-column
            prop="room"
            label="科室"
            >
            </el-table-column>

            <el-table-column
            prop="caozuo"
            label="操作"
            >
            <!-- <template slot-scope="{row}">
                <a href="javacript:;" style="color:blue;">
                    {{row.caozuo}}
                </a>
            </template> -->

            <a href="javascript:;" style="color:blue;">会员详情</a>

            </el-table-column>
        </el-table>
      </el-card>
      <el-pagination
        layout="prev, pager, next"
        :total="1000"
        style="marginTop:10px;float:right;"
        background
        >
    </el-pagination>
  </div>
</template>

<script>
import { DatePicker } from 'element-ui';

export default {
    name: '',
    components: {
        DatePicker
    },
    data(){
        return {
            input1:'',
            input2:'',
            input3:'',
            select:'',
            input4:''
            ,input5:''
            ,input6:''
            ,select1:''
            ,
            tableData:[
                {
                   phone:'185****3516'
                   ,name:'邢佳辉'
                   ,gender:'男'
                   ,age:'20'
                   ,id:'211251xxxxxxxx6215'
                   ,address:'中国上海'
                   ,time:'2023年1月15日'
                   ,vip:'是'
                   ,doctor:'许灵玲'
                   ,room:'康复医学科'
                },
                {
                   phone:'185****2153'
                   ,name:'边驰'
                   ,gender:'男'
                   ,age:'45'
                   ,id:'211121xxxxxxxx5285'
                   ,address:'中国广东'
                   ,time:'2023年2月18日'
                   ,vip:'是'
                   ,doctor:'许灵玲'
                   ,room:'康复医学科'
                },
               
                {
                   phone:'185****2155'
                   ,name:'李本旭'
                   ,gender:'男'
                   ,age:'66'
                   ,id:'211362xxxxxxxx1526'
                   ,address:'中国河北'
                   ,time:'2023年2月20日'
                   ,vip:'否'
                   ,doctor:'许灵玲'
                   ,room:'康复医学科'
                },
                {
                   phone:'188****2555'
                   ,name:'王锦涛'
                   ,gender:'男'
                   ,age:'56'
                   ,id:'211425xxxxxxxx1215'
                   ,address:'中国河南'
                   ,time:'2023年3月17日'
                   ,vip:'否'
                   ,doctor:'许灵玲'
                   ,room:'康复医学科'
                },
                {
                   phone:'188****3154'
                   ,name:'朱小强'
                   ,gender:'男'
                   ,age:'32'
                   ,id:'211256xxxxxxxx5879'
                   ,address:'中国四川'
                   ,time:'2023年3月22日'
                   ,vip:'否'
                   ,doctor:'许灵玲'
                   ,room:'康复医学科'
                },
                {
                   phone:'151****6225'
                   ,name:'卢龙'
                   ,gender:'男'
                   ,age:'20'
                   ,id:'211422xxxxxxxx5215'
                   ,address:'中国上海'
                   ,time:'2023年5月25日'
                   ,vip:'是'
                   ,doctor:'许灵玲'
                   ,room:'康复医学科'
                },
                {
                   phone:'151****5625'
                   ,name:'梁策'
                   ,gender:'男'
                   ,age:'20'
                   ,id:'211321xxxxxxxx6616'
                   ,address:'中国上海'
                   ,time:'2023年6月1日'
                   ,vip:'是'
                   ,doctor:'许灵玲'
                   ,room:'康复医学科'
                }
            ],
            isOpen:true
        }
    },
    methods:{
        reset(){
            this.input1 = ''
            this.input2 = ''
            this.input3 = ''
            this.input4 = ''
            this.input5 = ''
            this.input6 = ''
            this.select = ''
            this.select1 = ''
        },
        open() {
        this.$confirm('增加直播', '新增直播', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
        },
        changeState(){
            this.isOpen = !this.isOpen
        }
    }
}
</script>

<style lang='scss' scoped>
    .row{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    // .top{
    //     display: flex;
    //     justify-content: space-between;
    // }

</style>