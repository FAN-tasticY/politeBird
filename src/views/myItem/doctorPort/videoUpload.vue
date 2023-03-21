<template>
  <div>
      <el-card
      style="textAlign:center;marginTop:10px;marginBottom:10px;"
      >视频设置</el-card>

      <el-card>
          <div class="sy">
            
            <span>

            视频名称 : <el-input v-model="input1" placeholder="请输入" 
            style="width:150px;"
            size="medium"
            ></el-input>
            </span>

            <span>

            视频大小 : <el-input v-model="input2" placeholder="请输入" 
            style="width:150px;"
            size="medium"
            ></el-input>
                
            </span>

            <span>
            视频内容 : <el-input v-model="input3" placeholder="请输入" 
            style="width:150px;"
            size="medium"
            ></el-input>

            </span>

            <span>

            拍摄日期 :  <el-date-picker v-model="input4" type="date" placeholder="请选择日期"
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

        <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            list-type="picture">
            <!-- 意思是我点击任何的地方都可以对吗 是因为点击事件的穿透吗 -->
                <el-button size="small" type="primary" style="marginTop:20px">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">需要上传视频文件，且不超过10G</div>
        </el-upload>

        <el-dialog :visible.sync="dialogVisible">
            <img :src="dialogImageUrl" width="100%">
        </el-dialog>

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
            dialogImageUrl: '',
            dialogVisible: false,
            fileList: [
                {   
                    name: '视频1', 
                    url: './images/1.png'
                }, 
                {   name: '视频2', 
                    url: '/images/2.png'
                },
                {   name: '视频3', 
                    url: '/images/2.png'
                },
                {   name: '视频4', 
                    url: '/images/1.png'
                }
            ]
        }
    },
    methods:{
        reset(){
            this.input1 = ''
            this.input2 = ''
            this.input3 = ''
            this.input4 = ''
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file,'who');
            this.dialogImageUrl = file.url
            this.dialogVisible = true
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
    .inner{
        
        

    }
</style>