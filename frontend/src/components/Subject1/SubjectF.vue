<template>
  <el-row type="flex" justify="center" style="margin-top: 200px;">

    <el-col  :span="4">
      <el-card shadow="hover" class="box-card" @click="exam">
        <img src="../../assets/exam.svg" class="img-class">
        <div>模拟考试</div>
      </el-card>
    </el-col>

    <el-col  :span="2"></el-col>

    <el-col :span="4">
      <el-card  shadow="hover" class="box-card" @click="practice">
        <img src="../../assets/practice.svg" class="img-class">
        <div>随机练习</div>
      </el-card>
    </el-col>

    <el-col  :span="2"></el-col>

    <el-col :span="4">
      <el-card shadow="hover" class="box-card" @click="sign_for_exam">
        <img src="../../assets/signup.svg" class="s-img-class">
        <div style="margin-top: 35px">报名考试</div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "SubjectF",
  data() {
    return {

    }
  },
  methods: {
    exam() {
      this.$router.push("/home/examf");
    },
    practice() {
      this.$router.push("/home/practicef")
    },
    sign_for_exam() {
      window.open("https://122.gov.cn/m/index/", '_blank');
    },
  }
};
</script>

<style scoped>
.box-card {
  height: 100%;
}
.img-class {
  width: 100%;
  height: 90%;
  margin-left: 5px;
  margin-top: 5px;
  margin-right: 5px;
}
.s-img-class {
  width: 100%;
  height: 90%;
  margin-left: 5px;
  margin-top: 40px;
  margin-right: 5px;
}
/deep/ .el-card__body {
  padding: 0px !important;
}
</style>