<template>
  <div style="padding:10px;">

      <div class="sy1">
        <a  :class="state === 1 ? 'borderStyle':''  " @click="state = 1">自有视频</a>
        <a :class="state === 2 ? 'borderStyle':'' " @click="state = 2">平台视频</a>
      </div>


      <el-card >
          <div class="sy">
            
            <span>

            评估分类 :   <el-select v-model="select" slot="prepend" placeholder="请选择"
             style="width:150px;"
            size="medium"
            >
           <el-option label="脑卒中" value="1"></el-option>
    
                </el-select>
            </span>

            <span>

            视频名称 : <el-input v-model="input2" placeholder="请输入" 
            style="width:150px;"
            size="medium"
            ></el-input>
                
            </span>

            <span>
            视频分类 : <el-select v-model="select1" slot="prepend" placeholder="请选择"
             style="width:150px;"
            size="medium"
            >
           <el-option label="其他" value="1"></el-option>
           <el-option label="力量训练" value="2"></el-option>
           <el-option label="柔韧性训练" value="3"></el-option>
           <el-option label="有氧功能训练" value="4"></el-option>
           <el-option label="平衡训练" value="5"></el-option>

    
                </el-select>

            </span>

          

                <span>

              <el-button @click="reset">重置</el-button>
              <el-button type="primary">查询</el-button>
                </span>
          </div>
      </el-card>

      <el-card style="marginTop:20px;" v-if="state === 1">
          <div class="row">
              <span>视频管理</span>
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
            prop="sort"
            label="评估分类"
            >
            </el-table-column>
            <el-table-column
            prop="video"
            label="视频名称"
            >
            </el-table-column>
            <el-table-column
            prop="videoSort"
            label="视频分类"
            >
            </el-table-column>
            <el-table-column
            prop="size"
            label="视频大小"
            >
            </el-table-column>
            
            <el-table-column
            prop="time"
            label="视频时长"
            >
            </el-table-column>

            <el-table-column
            prop="people"
            label="上传人"
            >
            </el-table-column>

            <el-table-column
            prop="uploadTime"
            label="上传时间"
            >
            </el-table-column>

            <el-table-column
            prop="caozuo"
            label="操作"
            >
            <template slot-scope="{row}">
                <a href="javacript:;" style="color:blue;">
                    <!-- 这里row就是那个对象 -->
                    查看
                </a>
                <br>

                <a href="javacript:;" style="color:blue;">
                    <!-- 这里row就是那个对象 -->
                    编辑
                </a>
                <br>

                <a href="javacript:;" style="color:blue;">
                    <!-- 这里row就是那个对象 -->
                    删除
                </a>
                <br>
            </template>

            <!-- <a href="javascript:;" style="color:blue;">会员详情</a> -->

            </el-table-column>
        </el-table>

      </el-card>

      <el-card style="marginTop:20px;" v-else>
          <div class="row">
              <span>视频管理</span>
              <div style="display:flex;justifyContent:spaceEvenly;alignItems:center;">
                <el-button type="primary" icon="el-icon-plus" @click="open">添加直播</el-button>

                <el-tooltip class="item" effect="dark" content="刷新" placement="top">
                    <span class="el-icon-refresh-right" style="marginLeft:10px;fontSize:27px;"></span>
                </el-tooltip>

                 <el-tooltip class="item" effect="dark" content="密度" placement="top">
                    <span class="el-icon-edit-outline" style="margin:0 10px;fontSize:27px;"></span>
                </el-tooltip>

                 <el-tooltip class="item" effect="dark" content="设置" placement="top">
                    <span class="el-icon-setting" style="fontSize:27px;"></span>
                </el-tooltip>
              </div>
          </div>
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
            prop="sort"
            label="评估分类"
            >
            </el-table-column>
            <el-table-column
            prop="video"
            label="视频名称"
            >
            </el-table-column>
            <el-table-column
            prop="videoSort"
            label="视频分类"
            >
            </el-table-column>
            <el-table-column
            prop="size"
            label="视频大小"
            >
            </el-table-column>
            
            <el-table-column
            prop="time"
            label="视频时长"
            >
            </el-table-column>

            <el-table-column
            prop="people"
            label="上传人"
            >
            </el-table-column>

            <el-table-column
            prop="uploadTime"
            label="上传时间"
            >
            </el-table-column>

            <el-table-column
            prop="caozuo"
            label="操作"
            >
            <template slot-scope="{row}">
                <a href="javacript:;" style="color:blue;">
                    <!-- 这里row就是那个对象 -->
                    查看
                </a>
                <br>

                <a href="javacript:;" style="color:blue;">
                    <!-- 这里row就是那个对象 -->
                    编辑
                </a>
                <br>

                <a href="javacript:;" style="color:blue;">
                    <!-- 这里row就是那个对象 -->
                    删除
                </a>
                <br>
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

export default {
    data(){
        return {
            select:''
            ,
            state:1,
            tableData1:[
                {
                    sort:'脑卒中'
                    ,video:'养生小妙招'
                    ,videoSort:'其他'
                    ,size:'12MB'
                    ,time:'00:30:28'
                    ,people:'曹灵修'
                    ,uploadTime:'2023-03-03'
                },
                {
                    sort:'脑卒中'
                    ,video:'养生小妙招'
                    ,videoSort:'其他'
                    ,size:'12MB'
                    ,time:'00:30:28'
                    ,people:'曹灵修'
                    ,uploadTime:'2023-03-03'
                },
                {
                    sort:'脑卒中'
                    ,video:'养生小妙招'
                    ,videoSort:'其他'
                    ,size:'12MB'
                    ,time:'00:30:28'
                    ,people:'曹灵修'
                    ,uploadTime:'2023-03-03'
                },
                {
                    sort:'脑卒中'
                    ,video:'养生小妙招'
                    ,videoSort:'其他'
                    ,size:'12MB'
                    ,time:'00:30:28'
                    ,people:'曹灵修'
                    ,uploadTime:'2023-03-03'
                },
                {
                    sort:'脑卒中'
                    ,video:'养生小妙招'
                    ,videoSort:'其他'
                    ,size:'12MB'
                    ,time:'00:30:28'
                    ,people:'曹灵修'
                    ,uploadTime:'2023-03-03'
                },
                {
                    sort:'脑卒中'
                    ,video:'养生小妙招'
                    ,videoSort:'其他'
                    ,size:'12MB'
                    ,time:'00:30:28'
                    ,people:'曹灵修'
                    ,uploadTime:'2023-03-03'
                },
            ]
            ,
            tableData:[
                {
                    sort:'脑卒中'
                    ,video:'养生小妙招'
                    ,videoSort:'其他'
                    ,size:'12MB'
                    ,time:'00:30:28'
                    ,people:'曹灵修'
                    ,uploadTime:'2023-03-03'
                },
            ],
            input1 : ''
            ,input2:''
            ,input3:''
            ,select1:''
        }
    }
    ,
    methods:{
        reset(){
            this.input2 = ''
            this.select = ''
            this.select1 = ''
        },
        print(rowData){
            console.log(rowData);
        },
         open() {
        this.$confirm('添加视频', {
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
            message: '添加视频成功!'
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

<style lang="scss" scoped>
    .sy{
        display: flex;
        justify-content: space-between;
    }
    .sy1{
        display: flex;
        justify-content: space-between;
        width: 150px;
        height: 30px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .borderStyle{
        height: 30px;
        display: block;
        border-bottom: 4px solid blue;
    }
    .row{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
   .my-confirm{
    //    由于名称一样，而组件还注册了，所以受到了影响
        width: 90% !important ;
        /* height: 98%; */
    }
    .confirm{
        display: flex;
        justify-content: space-between;
    }
    .scroll-wrapper {
        /* max-width: 100x; */
        max-height: 500px !important;
        overflow: auto;

    }
</style>