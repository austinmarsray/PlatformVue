<template>
<div>
  <el-steps :active="steps" finish-status="success" simple align-center>
    <el-step @click.native="signUp" title="报名" icon="el-icon-edit"></el-step>
<!--    <el-step @click.native="physical_examination" title="体检" icon="el-icon-s-order"></el-step>-->
    <el-step @click.native="subject1" title="科目一" icon="el-icon-s-platform"></el-step>
    <el-step @click.native="subject2" title="科目二" icon="el-icon-truck"></el-step>
    <el-step @click.native="subject3" title="科目三" icon="el-icon-odometer"></el-step>
    <el-step @click.native="subject4" title="科目四" icon="el-icon-monitor"></el-step>
    <el-step @click.native="application" title="申请驾照" icon="el-icon-bank-card"></el-step>
  </el-steps>
</div>
</template>

<script>

export default({
    name: "Steps",
    data() {
        return{
            steps: 3,
        }
    },
    methods:{
        signUp() {

        },
        subject1() {
            if(this.steps < 1)
                return;

            this.$router.push("/home/subjectf")
        },
        subject2() {
            if(this.steps < 3)
                return;

            console.log("科目2");
        },
        subject3() {
            if(this.steps < 4)
                return;

            console.log("科目3");
        },
        subject4() {
            if(this.steps < 5)
                return;

            console.log("科目4");
        },
        application() {
            if(this.steps < 6)
                return;
            
            console.log("申请驾照");
        }
    }
})
</script>

<style scoped>

</style>
