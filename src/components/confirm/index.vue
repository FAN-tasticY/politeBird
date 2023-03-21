<template>
   <div>
                <hr/>
                <el-card>
                <div class='confirm'>
                    <div>
                        <span>直播主题</span>
                        <br/>
                        <el-input placeholder="请输入直播主题" style="marginTop:10px;width:200px;"></el-input>
                    </div>
                    <div>
                        <span>主讲医生</span>
                        <br/>

                        <el-input placeholder="请输入医生姓名" style="marginTop:10px;width:200px;"></el-input>
                    </div>
                    <div>
                        <span>直播日期</span>
                        <br/>

                        <el-input placeholder="请输入时间" style="marginTop:10px;width:200px;"></el-input>
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
</template>

<script>
export default {
    name:'confirm'
}
</script>

<style>
    .my-confirm{
        width: 800px;
        height: 1100px;
    }
    .confirm{
        display: flex;
        justify-content: space-between;
    }
</style>