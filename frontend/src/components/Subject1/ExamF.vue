<template>
<!--  废弃方案-->
  <el-container>
    <el-main style="width: calc(100% - 300px);">
      <el-container>
          <el-main style="width: calc(100% - 300px);">
            <el-row :gutter="10">
              <el-col :span="24">
                <p align="center" style="font-size:20px;font-weight: bold;">{{"["+[get_question_type()]+"]  "+question.question}}</p>
              </el-col>
            </el-row>

            <el-row v-if="isShowImg()">
              <el-col :span="24">
                <img :src="question.imageURL">
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="24">
                <el-radio-group v-model="Selection" @change="judgment">
                  <div style="margin-top: 10px" v-if="isShow(1)">
                    <el-radio :label="question.optionA" border></el-radio>
                  </div>
                  <div style="margin-top: 10px" v-if="isShow(2)">
                    <el-radio :label="question.optionB" border></el-radio>
                  </div>
                  <div style="margin-top: 10px" v-if="isShow(3)">
                    <el-radio :label="question.optionC" border></el-radio>
                  </div>
                  <div style="margin-top: 10px" v-if="isShow(4)">
                    <el-radio :label="question.optionD" border></el-radio>
                  </div>
                </el-radio-group>
              </el-col>
            </el-row>
          </el-main>

          <el-footer height="50px">
            <el-button @click="get_last_question()" icon="el-icon-arrow-left">上一题</el-button>
            <el-button @click="get_next_question()" icon="el-icon-arrow-right">下一题</el-button>
          </el-footer>

      </el-container>
    </el-main>

    <el-aside width="300px" style="height: 100%;background-color: grey">
      <div style="margin: auto;width: 50%;margin-top: 200px">
        <Countdown/>
      </div>
      <div style="margin: auto;width: 50%;margin-top: 40px">
        <div>得 分</div>
        <div style="color: red;font-size: 50px;font-weight: bold">{{score}}</div>
      </div>
    </el-aside>
  </el-container>

</template>

<script>
import {request_remote,request_local} from "../../request"
import { ElMessage } from 'element-plus'
import Countdown from "@/components/Subject1/Countdown";

export default {
  name: "ExamF",
  components: { Countdown },
  data() {
    return {
      score: 0,
      tfNum: 40,
      singleNum: 60,
      questionIndex: 0,
      questionList: [],
      Selection: "",
      judgmentAns: "",
      isJudgeFinish: false,
      question: {}
    }
  },
  // mounted(){
  //   request_remote({url:'/queryQuestionList',method:'GET',params: {
  //       apiKey: "Pu53RNp380586a3d6c33439c32bf441ce8cb659e822a5cf",
  //       page: Math.ceil(Math.random()*10),
  //       pageSize: 100,
  //       licenseType: 0,
  //       subjectType: 0
  //     }})
  //     .then(res => {
  //       if(res.data.statusCode === "000000"){
  //         let questions = res.data.result.driverQuestionList;
  //         for(let i=0;i<questions.length;i++){
  //           this.questionList.push(questions[i]);
  //         }
  //         this.question = this.questionList[this.questionIndex];
  //         this.questionIndex = this.questionIndex + 1;
  //         console.log(this.questionList)
  //         // console.log(res.data)
  //       }
  //     })
  //     .catch(err => {
  //       ElMessage.error('与服务器失去连接 ╮(╯_╰)╭');
  //     })
  // },
  methods: {
    get_next_question(){
      this.question = this.questionList[this.questionIndex];
      this.questionIndex = this.questionIndex + 1;

      this.isJudgeFinish = false;
      this.judgmentAns = "";
      this.Selection = "";
    },
    get_last_question(){
      this.questionIndex = this.questionIndex - 1;
      this.question = this.questionList[this.questionIndex];

      this.isJudgeFinish = false;
      this.judgmentAns = "";
      this.Selection = "";
    },
    get_question_type(){
      if(this.question.questionType === "1"){
        return "判断题";
      }
      else if(this.question.questionType === '2'){
        return "单选题";
      }
    },
    isShow(index){
      if(this.question.questionType === '1'){
        if(index <= 2) return true;
        else return false;
      }
      else if(this.question.questionType === '2'){
        if(index <= 4) return true;
        else return false;
      }
    },
    isShowImg() {
      if(this.question.imageURL) return true;
      else return false;
    },
    judgment_correct(){
      this.judgmentAns = "回答正确！";
      this.isJudgeFinish = true;
    },
    judgment_wrong(){
      this.judgmentAns = "回答错误！";
      this.isJudgeFinish = true;
    },
    judgment(value) {
      if(value === "") return;

      if(this.question.questionType === '1'){
        if (this.Selection === this.question.key) this.judgment_correct();
        else this.judgment_wrong();
      }

      if(this.question.questionType === '2'){
        if(this.question.key === 'A'){
          if(this.Selection === this.question.optionA) this.judgment_correct();
          else this.judgment_wrong();
        }
        else if(this.question.key === 'B'){
          if(this.Selection === this.question.optionB) this.judgment_correct();
          else this.judgment_wrong();
        }
        else if(this.question.key === 'C'){
          if(this.Selection === this.question.optionC) this.judgment_correct();
          else this.judgment_wrong();
        }
        else{
          if(this.Selection === this.question.optionD) this.judgment_correct();
          else this.judgment_wrong();
        }
      }
    },
  }
};
</script>

<style scoped>
.practice-container {

  height: 100%;
}
.el-container {
  margin-top: 0px;
  width: 100%;
  height: 698px;
}
.el-main {

}
</style>