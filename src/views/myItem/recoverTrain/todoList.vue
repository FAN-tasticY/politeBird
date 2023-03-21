<template>
  <div>
        <el-card v-for="(obj,index) in dataList" :key="index" style="marginBottom:20px;">
            <div>
                <el-checkbox @change="uploadData(obj,index)" v-model="obj.checked">
                    <el-input size="small" style="width:500px;" v-model="obj.userInput" :ref="index" ></el-input>
                    <el-button type="danger" size="small" style="marginLeft:30px;" @click="deleteOne(obj,index)">删除</el-button>
                </el-checkbox>
            </div>
        </el-card>
        <el-card>
            <!-- 这里来一个计算属性 -->
            <el-checkbox v-model="isAll" >全选/全不选</el-checkbox>
            <div class="buttonContainer">
                <el-button type="primary" @click="hasSuccess">已完成</el-button>
                <el-button type="danger" @click="addTask">添加新任务</el-button>
            </div>
        </el-card>



  </div>
</template>

<script>
export default {
    data(){
        return {
            checked:false,
            dataList:[
                {
                    userInput:'跑步20分钟',
                    checked:true
                },
                {
                    userInput:'游泳20分钟',
                    checked:true

                },
                {
                    userInput:'散步20分钟',
                    checked:true

                },
                {
                    userInput:'慢跑20分钟',
                    checked:false

                },
                {
                    userInput:'蹲起20分钟',
                    checked:false

                },
                {
                    userInput:'俯卧撑20分钟',
                    checked:false

                },
            ],
            numList:[]
        }
    },
    methods:{
        uploadData(obj,index){
            if(obj.checked === true){
                if(this.numList.indexOf(index) >= 0){
                    // 大于0说明该数据存在
                    return
                }else{
                    this.numList.push(obj)
                }
            }else{
                // 我们分不出来obj，但系统肯定分的出来 哈哈哈完美
                this.numList.splice(this.numList.indexOf(obj),1)
            }
            console.log(2323);
        },
        init(){
            this.dataList.forEach((item)=>{
                if(item.checked){
                    this.numList.push(item)
                }
            })
        },
        hasSuccess(){
            // 两件事 ，首先将选中的数据提交上去，然后将选中的数组剔除掉
            this.$store.dispatch('app/hasSuccessTaskData',this.numList)

            // 过滤返回的是一个数组
            this.dataList = this.dataList.filter((item)=>{
              return item.checked === false
            })
            this.$message.success('恭喜完成任务，数据已存储至任务端口！祝您早日康复！')
        },
        deleteOne(obj,index){
            this.dataList.splice(index,1)
            if(obj.checked){
                this.numList.splice(this.numList.indexOf(obj),1)
            }
        },
        addTask(){
            const obj = {
                checked:false,
                userInput:''
            }
            this.dataList.push(obj)
            this.$nextTick(()=>{
                // 咋还加进来的是一个数组呢
                this.$refs[this.dataList.length-1][0].focus()
            })
        }
    },
    mounted(){
        // 初始化，加载了就筛选符合条件的
        this.init()
    },
    computed:{
        isAll:{
            get(){
                return this.dataList.every((item)=>{
                    // every每一个都符合才会返回true
                    return item.checked === true
                })
            },
            set(value){
                this.dataList.forEach((item)=>{
                  item.checked = value
                })
                if(value){
                    // 重复了那么就不添加了
                    this.dataList.forEach((item)=>{
                        // 然后这里是拿着item和numlist数组在比一轮
                        if(!this.numList.some((oneItem)=> item === oneItem)){
                            this.numList.push(item)
                        }
                    })
                }else{
                    this.numList = []
                }
            }
            //get and set
        }
    }
}
</script>

<style>
    .buttonContainer{
        display: flex;
        justify-content: space-around;
    }
</style>