<template>
  <router-view/>
</template>

<script>
import {request_local} from "../../request"
import { ElMessage } from 'element-plus'

export default {
  name: "SignUp",
  created(){
    // 获取用户状态
    request_local({})
      .then(res => {
        // 未报名: 转到驾校选择
        if(res.data){
          this.$router.push('');
        }
        // 已报名审核中: 转到等待审核页面
        else if(res.data){
          this.$router.push('');
        }
        // 已报名审核失败: 转到审核失败页面
        else{
          this.$router.push('');
        }
      })
      .catch(err => {
        ElMessage.error('与服务器失去连接 ╮(╯_╰)╭');
      })
  },
};
</script>

<style scoped>

</style>