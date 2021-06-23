<template>
  <Steps/>
  <router-view></router-view>
  <div style="position: fixed;z-index: 100;bottom: 20px;left: 10;right: 0;">
    <el-button icon="el-icon-edit" type="primary" circle></el-button>
  </div>
</template>

<script>
import Steps from "../components/Steps"

export default {
  name: "Home",
  components: {
    Steps,
  }
}
</script>

<style scoped>

</style>