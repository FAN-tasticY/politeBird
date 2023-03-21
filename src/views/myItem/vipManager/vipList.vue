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
            <a href="javascript:;" style="color:blue;marginLeft:3px;" v-if="isOpen" @click="showList">展开</a>
            <a href="javascript:;" style="color:blue;marginLeft:3px;" v-else @click="showList">收起</a>

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
            prop="trainee"
            label="结对实习生"
            width="100"
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
            width="100"
            >
              <template slot-scope="{row,$index}">
                <a href="javascript:;" style="color:blue;" @click="setDoctor(row,$index)">设置医生</a>
                <br>
                <a href="javascript:;" style="color:blue;" @click="setTrainee(row,$index)">设置实习生</a>
              </template>


            </el-table-column>
          </el-table>

        <el-dialog
            title="更改实习生"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <span>
              <span style="display:block;marginBottom:10px;">
                实习生:
              </span>
              <el-input  v-model="showTrainee" @keyup.native.enter="confirmTrainee" ref="inputText"></el-input>
            </span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="confirmTrainee">确 定</el-button>
            </span>
        </el-dialog>

        <el-dialog
            title="更改医生"
            :visible.sync="dialogVisible1"
            width="30%"
            :before-close="handleClose">

  
              <el-form :model="form">
                  <el-form-item label="医生:" label-width="120px">
                  <el-input v-model="form.doctor"  ref="inputText" @keyup.native.enter="confirmDoctor" autocomplete="off"></el-input>
                  </el-form-item>
              </el-form>
            
            <!-- <span>
              <span style="display:block;marginBottom:10px;">
                医生:
              </span>
              <el-input  v-model="showDoctor" @keyup.native.enter="confirmDoctor" ref="inputText"></el-input>
            </span> -->
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="confirmDoctor">确 定</el-button>
            </span>
        </el-dialog>
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
                   ,trainee:'杨思雨'
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
                   ,trainee:'周林林'

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
                   ,trainee:'周冬雨'

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
                   ,trainee:'赵陆'

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
                   ,trainee:'杨丽'

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
                   ,trainee:'杨帆'

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
                   ,trainee:'赵露丝'

                }
            ],
            isOpen:true,
            dialogVisible:false,
            dialogVisible1:false,

            showTrainee:''
            ,index:''
            ,showDoctor:''
            ,form:{
              doctor:''
            }
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
        showList(){
            this.isOpen = !this.isOpen
        },
        setTrainee(row,index){
          this.dialogVisible = true
          // 展示加收集
          this.showTrainee = row.trainee
          this.index = index
          // this.$refs.inputText.focus()
          this.$nextTick(()=>{
            // 这个东西总是组件渲染之后再显示
            // console.log(this.$refs.inputText);
            this.$refs.inputText.focus()
          })
        },
        handleClose(done) {
            this.$confirm('确认关闭？').then(_ => {

              done();
            }).catch(_ => {

            });
        },
        confirmTrainee(){
          this.dialogVisible = false
          this.tableData[this.index].trainee = this.showTrainee

        },
        setDoctor(row,index){
          this.dialogVisible1 = true
          // 对象数据类型的复制，产生了联动效果
          // this.form = row
          this.form = {...row}
          this.index = index
          this.$nextTick(()=>{
            this.$refs.inputText.focus()
          })
        },
        confirmDoctor(){
          this.tableData[this.index].doctor = this.form.doctor
          this.dialogVisible1 = false

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