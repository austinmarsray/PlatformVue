<template>
  <Steps/>
  <router-view></router-view>
  <div style="position: absolute;bottom: 20px;left: 10;right: 0;">
    <el-button icon="el-icon-edit" type="primary" circle></el-button>
  </div>
</template>

<script>
import Steps from "../components/steps"

export default {
  name: "Home",
  components: {
    Steps,
  }
}
</script>

<style scoped>

</style>