<template>
  <el-table
    :data="plans"
    border
    :cell-style="cellstyle"
    stripe="true"
    style="width: 100%">

    <el-table-column
      label="套餐编号"
      prop="planid"
      header-align="center"
      align="center"></el-table-column>

    <el-table-column
      label="套餐名称"
      prop="planname"
      header-align="center"
      align="center"></el-table-column>

    <el-table-column
      label="套餐描述"
      prop="planintroduction"
      header-align="center"
      align="center"></el-table-column>

    <el-table-column
      label="套餐金额(人名币/元)"
      prop="planmoney"
      header-align="center"
      align="center"></el-table-column>

    <el-table-column
      fixed="right"
      label="操作"
      width="100"
      header-align="center"
      align="center">
        <el-button @click="handleClick(scope.row)" type="text" size="small">报名</el-button>
    </el-table-column>
  </el-table>
</template>

<script>
import {request_local} from "../../request"
import { ElMessage } from 'element-plus'

export default {
  // 套餐界面
  name: "Plans",
  props: ["drivingschoolid"],
  data() {
    return {
      plans: [{planid: '1001',planname: "普通套餐",planmoney: 3999,planintroduction: "没啥要描述的"},
              {planid: '1002',planname: "奢华套餐",planmoney: 4999,planintroduction: "没啥要描述的"},
              {planid: '1003',planname: "至尊套餐",planmoney: 6999,planintroduction: "没啥要描述的"}]
    }
  },
  created() {
    // 获取当前驾校的套餐信息
    request_local({})
      .then(res => {
        if(res.data){
          this.$router.push('');
        }
      })
      .catch(err => {
        ElMessage.error('与服务器失去连接 ╮(╯_╰)╭');
      })
  },
  methods: {
    handleClick(selectRow) {

    },
    cellstyle(row,column,rowIndex,columnIndex) {
      if (row.column.label === "套餐金额(人名币/元)") {
        return "font-size: 20px;font-weight:bold; color: #ffd700;";
      }
    }
  }
};
</script>

<style scoped>

</style>