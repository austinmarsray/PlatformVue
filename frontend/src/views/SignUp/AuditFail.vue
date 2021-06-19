<template>
  <div>审核失败</div>
  <div>审核建议{{advice}}</div>
  <el-button type="primary" @click="toSignUpInfo">重新提交</el-button>
</template>

<script>
import {request_local} from "@/request"
import { ElMessage } from 'element-plus'

export default {
  name: "AuditFail",
  data() {
    return {
      advice: ""
    }
  },
  created() {
    request_local({})
      .then(res => {
        this.advice = res.data.advice;
      })
      .catch(err => {
        ElMessage.error('与服务器失去连接 ╮(╯_╰)╭');
      })
  },
  methods: {
    toSignUpInfo(){
      this.$router.push('/home/signup/signup-info');
    },
  }
};
</script>

<style scoped>

</style>