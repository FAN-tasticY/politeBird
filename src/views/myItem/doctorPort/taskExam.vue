<template>

    <div>
        <el-table
            :data="tableData"
            border
        >
            <el-table-column
                type="index"
                label="序号"
                width="70"
            ></el-table-column>

            <el-table-column
                prop="name"
                label="考核项目"
            ></el-table-column>

            <el-table-column
                prop="score"
                label="项目评分"
            ></el-table-column>

            <el-table-column
                prop="person"
                label="考核人员"
            ></el-table-column>

            <el-table-column label="操作">
                <template slot-scope="{row}">
                    <a href="javascript:;" style="color:blue;" @click.prevent="change(row)">修改评分</a>
                </template>
            </el-table-column>

        </el-table>
        <div >
            <el-pagination
                style="float:right;marginTop:10px;"
                background
                layout="prev, pager, next"
                :total="100"
                >
            </el-pagination>
        </div>
        <div>
            <el-dialog title="修改评分" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="请输入分数" :label-width="formLabelWidth">
                <el-input v-model="form.score" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
            </el-dialog>
        </div>
    </div>

    
</template>

<script>
export default {
    data(){
        return {
            tableData:[
                {
                    name:'解剖学',
                    score:'85分',
                    person:'许灵玲'
                },
                {
                    name:'生物化学',
                    score:'75分',
                    person:'许灵玲'
                },
                {
                    name:'生理学',
                    score:'95分',
                    person:'许灵玲'
                },
                {
                    name:'免疫学',
                    score:'99分',
                    person:'许灵玲'
                },
                {
                    name:'细胞学',
                    score:'88分',
                    person:'许灵玲'
                },
                {
                    name:'生理学',
                    score:'85分',
                    person:'许灵玲'
                },
                {
                    name:'药理学',
                    score:'85分',
                    person:'许灵玲'
                },
                {
                    name:'心理学',
                    score:'100分',
                    person:'许灵玲'
                },   
            ],
             dialogTableVisible: false,
            dialogFormVisible: false,
            form: {
                score: '',
            },
            formLabelWidth: '120px'
        }
    },
    methods:{
        change(row){
            this.form = row  // 联动 正常情况下就是这头将数据收集好了，然后将数据好的数据发请求提交，然后table重新获取数据就完事了

            // this.form.score = row.score  // 这两种方式，可以解决联动问题
            // this.form = {...row}
            this.dialogFormVisible = true
        }
    }
}
</script>

<style>

</style>