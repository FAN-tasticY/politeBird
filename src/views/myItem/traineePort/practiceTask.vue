<template>
  <div>
      <el-table
      :data="traineeData"
      border
      >
        <el-table-column
        type="index"
        label="序号"
        width="70"
        ></el-table-column>

        <el-table-column
        label="开始时间"
        >
            <template slot-scope="{row}">
                <a href="javascript:;" style="display:block;" @click.prevent="open(row)">
                    {{row.input1}}
                </a>
            </template>
        </el-table-column>

        <el-table-column
        label="结束时间"
        prop="input2"
        ></el-table-column>

        <el-table-column
        label="操作项目"
        prop="input3"
        ></el-table-column>

        <el-table-column
        label="日期选择"
        prop="input4"
        ></el-table-column>

        <el-table-column
        label="项目人数"
        prop="input5"
        ></el-table-column>

        <el-table-column
        label="项目形式"
        prop="input6"
        ></el-table-column>

        <el-table-column
        label="考核专家"
        prop="input7"
        ></el-table-column>

        <el-table-column
        label="专家预约"
        prop="input8"
        ></el-table-column>
      </el-table>

      <el-pagination
        background
        layout="prev, pager, next"
        :total="10"
        style="float:right;marginTop:20px;"
        >
      </el-pagination>
  </div>
</template>

<script>
// 这里我们是有数据的
import {mapGetters} from 'vuex'
export default {
    data(){
        return {
            list:[]
        }
    },
    mounted(){
        
    },
    computed:{
        // 这个属性是直接映射到this.traineeData里面去 
        // ...mapGetters('traineeData')  // 这样写会报错的
        ...mapGetters(['traineeData'])
    },
    methods:{
        open(row){
            this.$alert(row.input1)
        },
        checkData(){
            // vuex 数据无法赋值
            if(typeof this.traineeData === 'object'){
                this.traineeData = []
            }
        }
    }
}
</script>

<style>

</style>