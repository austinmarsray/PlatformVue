<template>
<div class="practice-container">
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

  <el-row v-if="isJudgeFinish">
    <el-col :span="12" :offset="6">
        <el-card style="margin-top:20px">
        <div>
          <p><span style="color: red">{{judgmentAns}}</span></p>
          <p><span style="color: red">{{"正确答案:"+question.key}}</span></p>
          <p><span>{{"\n"+question.explains}}</span></p>
        </div>
    </el-card>
    </el-col>
  </el-row>
  <div style="position: absolute;bottom: 20px;left: 0;right: 0;">
    <el-button @click="get_last_question()" icon="el-icon-arrow-left">上一题</el-button>
    <el-button @click="get_next_question()" icon="el-icon-arrow-right">下一题</el-button>
  </div>
</div>
</template>

<script>
import {request_remote,request_local} from "../request/index"
import { ElMessage } from 'element-plus'

export default ({
  name: "FPractice",
  data(){
    return {
      questionList: [],
      Selection: "",
      questionIndex: 0,
      judgmentAns: "",
      isJudgeFinish: false,
      question: {
              // questionID: 2273,
              // question: "驾驶机动车在道路上违反道路交通安全法的行为，属于什么行为？",
              // questionType: "2",
              // optionA: "违章行为",
              // optionB: "违法行为",
              // optionC: "过失行为",
              // optionD: "违规行为",
              // key: "B",
              // explains: "“违反道路交通安全法”，违反法律法规即为违法行为。官方已无违章/违规的说法。",
              // licenseType: "客车",
              // subjectType: "科目一",
              // imageURL: ""
      }
    }
  },
  mounted(){
    request_remote({url:'/queryQuestionList',method:'GET',params: {
      apiKey: "Pu53RNp380586a3d6c33439c32bf441ce8cb659e822a5cf",
      page: Math.ceil(Math.random()*10),
      pageSize: 100,
      licenseType: 0,
      subjectType: 0
    }})
    .then(res => {
      if(res.data.statusCode === "000000"){
        let questions = res.data.result.driverQuestionList;
        for(let i=0;i<questions.length;i++){
          this.questionList.push(questions[i]);
        }
        this.question = this.questionList[this.questionIndex];
        this.questionIndex = this.questionIndex + 1;
        console.log(this.questionList)
        // console.log(res.data)
      }
    })
    .catch(err => {
      ElMessage.error('与服务器失去连接 ╮(╯_╰)╭');
    })
  },
  methods:{
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
})
</script>

<style scoped>
.practice-container{
  height: 680px;
}
</style>
