<template>
  <div>
      <el-table
      :data="hasSuccessTaskData"
      border
      >
        <el-table-column
        type="index"
        label="序号"
        width="70"
        ></el-table-column>

        <el-table-column
        prop="userInput"
        label="任务名称"
        ></el-table-column>

        <el-table-column
        label="状态"
        >
            <template slot-scope="{row}">
                已完成
            </template>
        </el-table-column>

      </el-table>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters(['hasSuccessTaskData'])
    }
}
</script>

<style>

</style>