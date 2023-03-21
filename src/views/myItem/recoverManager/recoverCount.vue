<template>
  <div style="padding:10px;">
      <el-card >
          <div class="container">
            <div class="width">
                会员姓名
                <br>
                <!-- select中的vmodel收集的是value的值，展示的却是label的值 -->
                <el-select v-model="select" slot="prepend" placeholder="请选择" style="marginTop:10px;width:80%;marginBottom:20px;"
                size="medium"
                >
                    <el-option label="邢佳辉" value="比尔盖茨"></el-option>
                    <el-option label="朱小强" value="mayun"></el-option>
                    <el-option label="王锦涛" value="mahuateng"></el-option>
                </el-select>
                <br>
                出生日期
                <br>
                <el-input style="marginTop:10px;width:80%;marginBottom:20px;"
                size="medium"
                :disabled="true"
                v-model="watchState.dateOfBirth"
                ></el-input>
                <br>
                民族
                <br>
                <el-input 
                size="medium"
                style="marginTop:10px;width:80%;marginBottom:20px;"
                :disabled="true"
                v-model="watchState.nation"
                ></el-input>

            </div>

            <div class="width">
                身份证号
                <br>
                <el-input
                style="marginTop:10px;width:80%;marginBottom:20px;"
                size="medium"
                :disabled="true"
                v-model="watchState.id"
                ></el-input>
                <br>
                年龄
                <br>
                <el-input style="marginTop:10px;width:80%;marginBottom:20px;"
                size="medium"
                :disabled="true"
                v-model="watchState.age"
                ></el-input>
                <br>
                地址
                <br>
                <el-input 
                size="medium"
                style="marginTop:10px;width:80%;marginBottom:20px;"
                :disabled="true"
                v-model="watchState.address"
                ></el-input>

            </div>

            <div class="width">
                性别
                <br>
                <el-select v-model="watchState.gender" slot="prepend" placeholder="请选择" style="marginTop:10px;width:80%;marginBottom:20px;"
                size="medium"
                :disabled="true"
                >
                    <el-option label="男" value="1"></el-option>
                    <el-option label="女" value="2"></el-option>
                </el-select>
                <br>
                手机号
                <br>
                <el-input style="marginTop:10px;width:80%;marginBottom:20px;"
                size="medium"
                :disabled="true"
                v-model="watchState.phone"
                ></el-input>
                <br>
                详细地址
                <br>
                <el-input 
                size="medium"
                style="marginTop:10px;width:80%;marginBottom:20px;"
                :disabled="true"
                v-model="watchState.detailAddress"
                ></el-input>

            </div>
          </div>
      </el-card>
    


      <el-card style="marginTop:20px;">
          <div class="row">
              <!-- 哈哈，咋写来着，这个东西叫做排他属性 -->
              <span :class="state === 1 ? 'borderStyle' : '' " @click="state = 1">生理检测</span>
              <span :class="state === 2 ? 'borderStyle' : '' " @click="state = 2">医学评估</span>
              <span :class="state === 3 ? 'borderStyle' : '' " @click="state = 3">医药处方</span>
          </div>
        
        <el-table
            v-if="state === 4"
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

         <el-table
            v-if="state === 3"
            style="width: 100%;marginTop:20px;"
            :data="tableData"
            height="250"
            border>


            <el-table-column
            type="index"
            label="序号"
            width="180">
            </el-table-column>


            <el-table-column
            prop="mingcheng"
            label="视频名称"
            width="180">
            </el-table-column>
            <el-table-column
            prop="leixing"
            label="视频类型"
            width="180">
            </el-table-column>
            <el-table-column
            prop="shichang"
            label="视频时长">
            </el-table-column>

            <el-table-column
            prop="xunlian"
            label="训练频次">
                <template slot-scope="{row}">
                    <div>
                        <el-input size="mini" v-model="pinci"> </el-input>
                    </div>
                </template>
            </el-table-column>

            <el-table-column
            prop="caozuo"
            label="操作"
            >
                 <a href="javascript:;" style="color:blue;">删除</a>

            </el-table-column>
        </el-table>
          
        <el-table
            :data="patient"
            border
            v-if="state === 2"
            style="width: 100%;height:600px;marginTop:30px;"
            class="tableStyle"
            >

                <el-table-column
                type="index"
                label="序号"
                width="50"
                >
                </el-table-column>
                <el-table-column
                prop="name"
                label="姓名"
                
                >
                </el-table-column>
                <el-table-column
                prop="pulm"
                label="意识及状态"
                width="100"
                >
                </el-table-column>

                <el-table-column
                prop="bodyTempratrue"
                label="肌力"
                >
                </el-table-column>

                <el-table-column
                prop="breath"
                label="坐位平衡"
                >
                </el-table-column>

                <el-table-column
                prop="date"
                label="感觉功能"
                >
                </el-table-column>

                <el-table-column
                prop="tuyan"
                label="吞咽功能"
                >
                </el-table-column>

                <el-table-column
                prop="pain"
                label="疼痛"
                >
                </el-table-column>


                <el-table-column
                prop="pingfen"
                label="视觉模拟评分(VAS)"
                width="100"
                >
                    
                    <template slot-scope="{row}">
                        <el-input size="mini"></el-input>
                    </template>
                </el-table-column>

                <el-table-column
                prop="zhiti"
                label="肢体肿胀"
                >
                </el-table-column>

                <el-table-column
                prop="zhishu"
                label="ADL(BartheI)指数"
                width="100"
                >
                    
                    <template slot-scope="{row}">
                        <el-input size="mini"></el-input>
                    </template>
                </el-table-column>

                <el-table-column
                prop="piantan"
                label="偏瘫"
                >
                </el-table-column>
                <el-table-column
                prop="fenqi"
                label="Brunnstorm分期（上）"
                width="150"
                >
                    
                    <template slot-scope="{row}">
                        <el-input size="mini"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                prop="guanjie"
                label="关节活动度"
                >
                </el-table-column>
                <el-table-column
                prop="jizhang"
                label="肌张力"
                >
                </el-table-column>
                <el-table-column
                prop="zhanli"
                label="站立平衡"
                >
                </el-table-column>
                <el-table-column
                prop="fuzhu"
                label="辅助工具"
                >
                </el-table-column>

                <el-table-column
                prop="butai"
                label="步态分析"
                >
                </el-table-column>

                <el-table-column
                prop="buwei"
                label="疼痛部位"
                >
                </el-table-column>

                <el-table-column
                prop="yuyan"
                label="语言功能"
                >
                </el-table-column>

                <el-table-column
                prop="renzhi"
                label="认知心理评价"
                >
                </el-table-column>

                <el-table-column
                prop="miaoshu"
                label="心肺功能（肺功能表述）"
                width="150"
                >
                    
                    <template slot-scope="{row}">
                        <el-input size="mini"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                prop="shou"
                label="Brunnstorm分期（手）"
                width="150"
                >
                    <template slot-scope="{row}">
                        <el-input size="mini"></el-input>
                    </template>
                </el-table-column>

                <el-table-column
                prop="xia"
                label="Brunnstorm分期（下）"
                width="150"
                >
                    
                    <template slot-scope="{row}">
                        <el-input size="mini"></el-input>
                    </template>
                </el-table-column>

        </el-table>
        
      </el-card>
  </div>
</template>

<script>
export default {
    data(){
        return {
            select:'比尔盖茨',
            mahuateng:{
                dateOfBirth:'1971年10月29日',
                nation:'汉族'
                ,id:'211422xxxxxxxx5215'
                ,age:'52'
                ,address:'中国广东'
                ,gender:'男'
                ,phone:'15042974921'
                ,detailAddress:'汕头市潮南区'
            },
            mayun:{
                dateOfBirth:'1964年9月10日',
                nation:'汉族'
                ,id:'211422xxxxxxxx5215'
                ,age:'59'
                ,address:'中国浙江'
                ,gender:'男'
                ,phone:'15042974921'
                ,detailAddress:'浙江省嵊州市谷来镇'
            },
            gaici:{
                dateOfBirth:'1955年10月28日',
                nation:'美籍'
                ,id:'211422xxxxxxxx5215'
                ,age:'68'
                ,address:'美国华盛顿'
                ,gender:'男'
                ,phone:'15042974921'
                ,detailAddress:'西雅图'
            },
            state:3,
            tableData:[
                {
                    mingcheng:'春季养生小妙招'
                    ,leixing:'视频指导'
                    ,shichang:'00:02:32'
                    ,xunlian:'2次/天'
                }
            ],
            patient:[
                        {
                            name:'朱小强',
                            pulm:'清晰',
                            bodyTempratrue:'正常',
                            breath:'II',
                            date:'异常',
                            tuyan:'可疑'
                            ,pain:'无疼痛'
                            ,pingfen:''
                            ,zhiti:'无肿胀'
                            ,zhishu:''
                            ,xinfei:'II'
                            ,piantan:'左侧'
                            ,fenqi:''
                            ,guanjie:'正常'
                            ,jizhang:'异常'
                            ,zhanli:'III'
                            ,fuzhu:'不需要'
                            ,butai:'正常步态'
                            ,buwei:'手臂'
                            ,yuyan:'理解异常'
                            ,renzhi:'睡眠异常'
                            ,miaoshu:''
                            ,shou:''
                            ,xia:''
                        },
                        {
                            name:'蔡秋雨',
                            pulm:'清晰',
                            bodyTempratrue:'异常',
                            breath:'I',
                            date:'异常',
                            tuyan:'正常'
                            ,pain:'疼痛'
                            ,pingfen:''
                            ,zhiti:'无肿胀'
                            ,zhishu:''
                            ,xinfei:'III'
                            ,piantan:'无'
                            ,fenqi:''
                            ,guanjie:'异常'
                            ,jizhang:'异常'
                            ,zhanli:'III'
                            ,fuzhu:'不需要'
                            ,butai:'正常步态'
                            ,buwei:'臀部'
                            ,yuyan:'语言异常'
                            ,renzhi:'睡眠异常'
                            ,miaoshu:''
                            ,shou:''
                            ,xia:''
                        },
                        {
                            name:'刘国强',
                            pulm:'模糊',
                            bodyTempratrue:'异常',
                            breath:'I',
                            date:'异常',
                            tuyan:'异常'
                            ,pain:'无疼痛'
                            ,pingfen:''
                            ,zhiti:'肿胀'
                            ,zhishu:''
                            ,xinfei:'III'
                            ,piantan:'右侧'
                            ,fenqi:''
                            ,guanjie:'正常'
                            ,jizhang:'正常'
                            ,zhanli:'I'
                            ,fuzhu:'需要支架'
                            ,butai:'异常步态'
                            ,buwei:'小腿'
                            ,yuyan:'理解异常'
                            ,renzhi:'饭量异常'
                            ,miaoshu:''
                            ,shou:''
                            ,xia:''
                        },
                        {
                            name:'王楠',
                            pulm:'清晰',
                            bodyTempratrue:'正常',
                            breath:'II',
                            date:'异常',
                            tuyan:'正常'
                            ,pain:'疼痛'
                            ,pingfen:''
                            ,zhiti:'肿胀'
                            ,zhishu:''
                            ,xinfei:'III'
                            ,piantan:'无'
                            ,fenqi:''
                            ,guanjie:'异常'
                            ,jizhang:'异常'
                            ,zhanli:'I'
                            ,fuzhu:'不需要'
                            ,butai:'正常步态'
                            ,buwei:'腰'
                            ,yuyan:'理解异常'
                            ,renzhi:'认知异常'
                            ,miaoshu:''
                            ,shou:''
                            ,xia:''
                        },
                        {
                            name:'谭利花',
                            pulm:'清晰',
                            bodyTempratrue:'正常',
                            breath:'II',
                            date:'异常',
                            tuyan:'可疑'
                            ,pain:'无疼痛'
                            ,pingfen:''
                            ,zhiti:'无肿胀'
                            ,zhishu:''
                            ,xinfei:'II'
                            ,piantan:'左侧'
                            ,fenqi:''
                            ,guanjie:'正常'
                            ,jizhang:'异常'
                            ,zhanli:'III'
                            ,fuzhu:'不需要'
                            ,butai:'正常步态'
                            ,buwei:'手臂'
                            ,yuyan:'理解异常'
                            ,renzhi:'睡眠异常'
                            ,miaoshu:''
                            ,shou:''
                            ,xia:''
                        },
                        {
                            name:'王鑫其',
                            pulm:'清晰',
                            bodyTempratrue:'异常',
                            breath:'I',
                            date:'异常',
                            tuyan:'正常'
                            ,pain:'疼痛'
                            ,pingfen:''
                            ,zhiti:'无肿胀'
                            ,zhishu:''
                            ,xinfei:'III'
                            ,piantan:'无'
                            ,fenqi:''
                            ,guanjie:'异常'
                            ,jizhang:'异常'
                            ,zhanli:'III'
                            ,fuzhu:'不需要'
                            ,butai:'正常步态'
                            ,buwei:'臀部'
                            ,yuyan:'语言异常'
                            ,renzhi:'睡眠异常'
                            ,miaoshu:''
                            ,shou:''
                            ,xia:''
                        },
                        {
                            name:'刘雨珩',
                            pulm:'模糊',
                            bodyTempratrue:'异常',
                            breath:'I',
                            date:'异常',
                            tuyan:'异常'
                            ,pain:'无疼痛'
                            ,pingfen:''
                            ,zhiti:'肿胀'
                            ,zhishu:''
                            ,xinfei:'III'
                            ,piantan:'右侧'
                            ,fenqi:''
                            ,guanjie:'正常'
                            ,jizhang:'正常'
                            ,zhanli:'I'
                            ,fuzhu:'需要支架'
                            ,butai:'异常步态'
                            ,buwei:'小腿'
                            ,yuyan:'理解异常'
                            ,renzhi:'饭量异常'
                            ,miaoshu:''
                            ,shou:''
                            ,xia:''
                        },
                        {
                            name:'朱一冰',
                            pulm:'清晰',
                            bodyTempratrue:'正常',
                            breath:'II',
                            date:'异常',
                            tuyan:'正常'
                            ,pain:'疼痛'
                            ,pingfen:''
                            ,zhiti:'肿胀'
                            ,zhishu:''
                            ,xinfei:'III'
                            ,piantan:'无'
                            ,fenqi:''
                            ,guanjie:'异常'
                            ,jizhang:'异常'
                            ,zhanli:'I'
                            ,fuzhu:'不需要'
                            ,butai:'正常步态'
                            ,buwei:'腰'
                            ,yuyan:'理解异常'
                            ,renzhi:'认知异常'
                            ,miaoshu:''
                            ,shou:''
                            ,xia:''
                        }
            ],
            pinci:1
        }
    },
    // 你是真的不好使啊
    computed:{
        watchState(){
            if(this.select === '比尔盖茨'){
                return {
                        dateOfBirth:'1955年10月28日',
                        nation:'美籍'
                        ,id:'211422xxxxxxxx5215'
                        ,age:'68'
                        ,address:'美国华盛顿'
                        ,gender:'男'
                        ,phone:'15042974921'
                        ,detailAddress:'西雅图'
                    }
            }else if(this.select === 'mayun'){
                return {
        
                        dateOfBirth:'1964年9月10日',
                        nation:'汉族'
                        ,id:'211422xxxxxxxx5215'
                        ,age:'59'
                        ,address:'中国浙江'
                        ,gender:'男'
                        ,phone:'15042974921'
                        ,detailAddress:'浙江省嵊州市谷来镇'
            
                }
            }else if(this.select === 'mahuateng'){
                return {
                        dateOfBirth:'1971年10月29日',
                        nation:'汉族'
                        ,id:'211422xxxxxxxx5215'
                        ,age:'52'
                        ,address:'中国广东'
                        ,gender:'男'
                        ,phone:'15042974921'
                        ,detailAddress:'汕头市潮南区'
                }
            }else{
                return {}
            }
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .width{
        width:28%;
    }
    .container{
        display: flex;
        justify-content: space-around;
    }
    .row{
        width: 300px;
        height: 20px;
        display: flex;
        justify-content: space-between;
        .borderStyle{
            display: block;
            width: 64px;
            height: 30px;
            border-bottom: 4px solid blue;
        }
    }
    .tableStyle{
        max-width: 100%;
        max-height: 100%;
        overflow: auto;
    }
</style>