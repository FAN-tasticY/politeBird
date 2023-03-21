<template>
  <div style="padding:10px;">
      <el-card >
          <div>
            直播主题 : <el-input v-model="input1" placeholder="请输入" 
            style="width:15%;marginRight:5%;"
            size="medium"
            ></el-input>

            主讲医师 : <el-input v-model="input2" placeholder="请输入" 
            style="width:15%;marginRight:32%"
            size="medium"
            ></el-input>

            
            
              <el-button @click="reset">重置</el-button>
              <el-button type="primary">查询</el-button>
          </div>
      </el-card>

      <el-card style="marginTop:10px;">
          <div class="row">
              <span>直播计划表</span>
              <div style="display:flex;justifyContent:spaceEvenly;alignItems:center;">
                <el-button type="primary" icon="el-icon-plus" @click="open">添加直播</el-button>

                <el-tooltip class="item" effect="dark" content="刷新" placement="top">
                    <span class="el-icon-refresh-right" style="marginLeft:10px;fontSize:27px;"></span>
                </el-tooltip>

                <el-tooltip class="item" effect="dark" content="密度" placement="top">
                     <div>
                        <el-popconfirm
                            confirm-button-text='确定'
                            cancel-button-text='不用了'
                            icon="el-icon-info"
                            icon-color="red"
                            title="确定修改密度吗？"
                        >
                            <span class="el-icon-edit-outline" slot="reference" style="margin:0 10px;fontSize:27px;"></span>
                            <!-- <el-button slot="reference">删除</el-button> -->
                        </el-popconfirm>
                     </div>
                </el-tooltip>

                 <el-tooltip class="item" effect="dark" content="设置" placement="top">
                    <span class="el-icon-setting" style="fontSize:27px;" @click="open1"></span>
                </el-tooltip>
              </div>
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
            prop="zhibo"
            label="直播主题"
            >
            </el-table-column>
            <el-table-column
            prop="zhujiang"
            label="主讲医生"
            >
            </el-table-column>
            <el-table-column
            prop="yisheng"
            label="医生职称"
            >
            </el-table-column>
            <el-table-column
            prop="riqi"
            label="直播日期"
            >
            </el-table-column>
            <el-table-column
            prop="kaishi"
            label="开始时间"
            >
            </el-table-column>
            <el-table-column
            prop="jieshu"
            label="结束时间"
            >
            </el-table-column>
            <el-table-column
            prop="shichang"
            label="直播时长"
            >
            </el-table-column>
            <el-table-column
            prop="chuangjian"
            label="创建人"
            >
            </el-table-column>
            <el-table-column
            prop="time"
            label="创建时间"
            >
            </el-table-column>

            <el-table-column
            prop="caozuo"
            label="操作"
            >

            <template slot-scope="{row}">
                <a href="javacript:;" style="color:blue;">
                    {{row.caozuo}}
                </a>
            </template>
            </el-table-column>
  </el-table>


      </el-card>
  </div>
</template>

<script>
import { DatePicker } from 'element-ui';


export default {
    name: '',
    components: {
        DatePicker,
        
    },
    data(){
        return {
            input1:'',
            input2:'',
            input3:'',
            tableData:[
                {
                    zhibo:'脑卒中',
                    zhujiang:'许灵玲',
                    yisheng:'主刀医师'
                    ,riqi:'2023年3月3日'
                    ,kaishi:'8:00'
                    ,jieshu:'12:00'
                    ,shichang:'4小时'
                    ,chuangjian:'医生'
                    ,time:'2022年'
                    ,caozuo:'查看'
                },
                
            ]
        }
    },
    methods:{
        reset(){
            this.input1 = ''
            this.input2 = ''
            this.input3 = ''

        },
        open() {
        this.$confirm('新增直播', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          customClass: 'my-confirm',
           message:<div class="scroll-wrapper">
                <div>
                    添加直播
                </div>
                <hr/>
                <el-card>
                <div class='confirm'>
                    <div>
                        <span>直播主题</span>
                        <br/>
                        <el-input placeholder="请输入直播主题" style="marginTop:10px;width:70%;"></el-input>
                    </div>
                    <div>
                        <span>主讲医生</span>
                        <br/>

                        <el-input placeholder="请输入医生姓名" style="marginTop:10px;width:70%;"></el-input>
                    </div>
                    <div>
                        <span>直播日期</span>
                        <br/>

                        <el-input placeholder="请输入时间" style="marginTop:10px;width:70%;"></el-input>
                    </div>
                </div>
                    
                </el-card>
                <el-card style="marginTop:20px;">
                    <div>
                        <span>直播封面</span>
                        <br/>
                        <el-button type="primary" size="small" style="marginTop:5px;">点击上传</el-button>
                        <br/>
                        <span style="fontSize:12px;color:#ccc;">建议上传690*360的图片作为封面</span>
                    </div>
                    <div style="marginTop:50px;">
                        <span>直播背景</span>
                        <br/>
                        <el-button type="primary" size="small" style="marginTop:5px;">点击上传</el-button>
                    </div>

                    <div>
                        <el-switch
                            active-text="邀约专家"
                            style="marginTop:30px;"
                            >
                        </el-switch>
                    </div>

                    <div style="marginTop:20px;">
                        <span >直播介绍</span>
                        <br/>
                        <el-input type="textarea" placeholder="请输入直播介绍" style="marginTop:20px;"></el-input>
                    
                    </div>

                </el-card>
            </div>
        }).then(() => {
          this.$message({
            type: 'success',
            message: '添加成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消添加'
          });          
        });
        },
        open1(){
          this.$confirm(
            <div>
                <div style="margin:20px 0;">
                     <el-checkbox>序号</el-checkbox>
                    <el-checkbox>直播主题</el-checkbox>
                    <el-checkbox>主讲医生</el-checkbox>
                    <br/>
                </div>
                <div style="margin:20px 0;">
                     <el-checkbox>时间</el-checkbox>
                    <el-checkbox>开始时间</el-checkbox>
                    <el-checkbox>结束时间</el-checkbox>
                    <br/>
                </div>
                <div style="margin:20px 0;">
                     <el-checkbox>总时长</el-checkbox>
                    <el-checkbox>创建人</el-checkbox>
                    <el-checkbox>创建主题</el-checkbox>
                    <br/>
                </div>
                <div style="margin:20px 0;">
                     <el-checkbox>医生职称</el-checkbox>
                    <el-checkbox>操作</el-checkbox>
                    <el-checkbox>创建时间</el-checkbox>
                    <br/>
                </div>
            </div>
            
            ,'更改设置', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          customClass: 'my-confirm'
        //   type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '设置成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消设置'
          });          
        });
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
     .my-confirm{
        width: 90%;
        /* height: 98%; */
    }
    .confirm{
        display: flex;
        justify-content: space-between;
    }
    .scroll-wrapper {
        /* max-width: 100x; */
        max-height: 500px;
        overflow: auto;

    }

</style>