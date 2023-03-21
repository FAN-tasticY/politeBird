<template>
    <div class="grandfather">
        <div class="panel" ref="nav">
            <span class="topFont">星期五 12:30</span>
            <!-- 如何展示的逻辑我们已经在组件中处理好了 -->
            <Dialog :content="obj.name" v-for="(obj,index) in dataList" :key="index" :numIndex="obj.id" />   
        </div>
        <el-card>
            <div style="marginLeft:10%;">
                <span class="el-icon-s-promotion"></span>
                <el-divider direction="vertical" ></el-divider>
                <el-input style="width:80%;" v-model="userInput" @keyup.enter.native="addInfo" @blur="addInfo" ref="inputContent"></el-input>
            </div>
        </el-card>
    </div>
</template>

<script>

import Dialog from '@/views/myItem/popDialog/index.vue'
export default {
    mounted(){
        this.$refs.inputContent.focus()
    },
    components:{
        Dialog
    },
    data(){
        return {
            name:'你好啊',
            userInput:'',
            dataList:[
                {
                    name:'您好'
                    ,id:1
                },
                {
                    name:'请问有什么我可以帮您的'
                    ,id:1

                },
                {
                    name:'你好你好你好'
                    ,id:12

                },
                {
                    name:'你好'
                    ,id:1

                },
                {
                    name:'你好'
                    ,id:1

                }
            ]
        }
    },
    methods:{
        addInfo(){
            if(!this.userInput.trim()){
                return
            }
            let obj = {
                name:this.userInput,
                id:2
            }

            let obj1 = {
                name:'请稍后，正在为您转接人工客服中……',
                id:1
            }

            let obj2 = {
                name:'您好,请问有什么需要帮助的吗',
                id:1
            }
            this.dataList.push(obj)
            this.dataList.push(obj1)
            this.userInput = ''

            setTimeout(() => {
                // 为什么这里箭头函数，就是因为this是静态的，也就是说系统调用的时候this不会指向windows
                this.dataList.push(obj2)
                // 好像还是等待界面渲染完成才可以继续进行
                this.$nextTick(()=>{
                  this.scrollToBottom()
                })
            }, 3000);
            
            // 这滚动条如何自动定位啊

            this.$nextTick(()=>{
                this.scrollToBottom()
            }) 

        },
        scrollToBottom() {
            const nav = this.$refs.nav;
            nav.scrollTop = nav.scrollHeight;
        }
    }
}
</script>

<style>
    .panel{
        background-color: rgb(136, 189, 136);
        /* width: 500px; */
        height: 500px;
        padding-left: 20px;
        padding-right: 20px;
        overflow: hidden;
        max-height: 500px;
        overflow: auto;

    }
    .topFont{
        display: block;
        margin-left: 42%;
        margin-top: 2%;
        color: rgb(109, 97, 146);
    }
    .grandfather{
        /* overflow: auto; */
    }
</style>