<template>
  <el-row type="flex" justify="center" style="margin-top: 200px">
    <el-col :span="3">
      <div class="main-text system" @click="toTheoryPractice">练习系统</div>
    </el-col>
    <el-col :span="3">
      <div class="main-text exam" @click="toTheoryPracticeExam">模拟考试</div>
    </el-col>
    <el-col :span="3">
      <div class="main-text practice" @click="toTheoryPracticeSxlx">顺序练习</div>
    </el-col>
    <el-col :span="3">
      <div class="main-text signforexam" @click="to12123">考试报名</div>
    </el-col>
  </el-row>

</template>

<script>
export default {
  name: "Subject4",
  data() {
    return {

    }
  },
  methods: {
    toTheoryPractice() {
      this.$router.push("/theorypractice");
    },
    toTheoryPracticeExam() {
      this.$router.push("/theorypractice/fzmnks");
    },
    toTheoryPracticeSxlx() {
      this.$router.push("/theorypractice/sxlx")
    },
    to12123() {
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
::v-deep .el-card__body {
  padding: 0px !important;
}
.main-text {
  width: 98px;
  height: 98px;
  color: #fff;
  font-size: 18px;
  text-align: center;
  line-height: 98px;
  border-radius: 50%;
  z-index: 3;
  position: relative;
}
.system {
  background: linear-gradient(180deg, #7ddaff, #5f8dec);
}
.exam {
  background: linear-gradient(180deg, #7DCEA0, #1E8449);
}
.practice {
  background: linear-gradient(180deg, #F9E79F, #F1C40F);
}
.signforexam {
  background: linear-gradient(180deg, #D2B4DE, #8E44AD);
}
</style>