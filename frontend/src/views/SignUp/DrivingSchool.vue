<template>
  <el-page-header @back="goBack" content="驾校详情"></el-page-header>
  <el-row>
    <el-descriptions :column="4" border>
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-user"></i>
          驾校名称
        </template>
        {{DrivingSchoolName}}
      </el-descriptions-item>

      <el-descriptions-item>
        <template #label>
          <i class="el-icon-mobile-phone"></i>
          联系电话
        </template>
        {{telphone}}
      </el-descriptions-item>

      <el-descriptions-item>
        <template #label>
          <i class="el-icon-location-outline"></i>
          驾校地址
        </template>
        {{address}}
      </el-descriptions-item>

      <el-descriptions-item>
        <template #label>
          <i class="el-icon-tickets"></i>
          驾校评分
        </template>
        <el-rate v-model="score" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
      </el-descriptions-item>

      <el-descriptions-item>
        <template #label>
          <i class="el-icon-tickets"></i>
          驾校简介
        </template>
<!--        <div v-text="introduction"></div>-->
        <div class="text-wrapper">{{introduction}}</div>
        </el-descriptions-item>
    </el-descriptions>
  </el-row>

  <el-row type="flex" justify="center">
    <el-col :span="9">
      <el-image class="image-style" :src="imageurl[0]"></el-image>
    </el-col>
    <el-col :span="9">
      <el-image class="image-style" :src="imageurl[1]"></el-image>
    </el-col>
  </el-row>
  <el-row type="flex" justify="center">
    <el-col :span="9">
      <el-image class="image-style" :src="imageurl[2]"></el-image>
    </el-col>
    <el-col :span="9">
      <el-image class="image-style" :src="imageurl[3]"></el-image>
    </el-col>
  </el-row>

  <el-row>
    <Plans :drivingschoolid="drivingschoolid"></Plans>
  </el-row>

</template>

<script>
import Plans from './Plans'

export default {
  name: "DrivingSchool",
  data() {
    return {
      drivingschoolid: "12345",
      DrivingSchoolName: "安行驾校",
      imageurl: ["https://pic1.58cdn.com.cn//www/n_v2180da635510b47c59b28deb863770fd1_8c6801a9148ace04.jpg",
                  "https://pic1.58cdn.com.cn//nowater/jxt/n_v2f8c5b09f02db4b688ad6f8bd3b6ef926.png",
                  "https://pic1.58cdn.com.cn//www/n_v2e4961e962a1b4486ad629c767f409785_51f9179a3902d2db.jpg",
                  "https://pic1.58cdn.com.cn///www/n_v270ca60912231496c8ab40544be1f81b5_ec4bad03bed4d595.jpg"],
      score: 4.5,
      telphone: "18520152208",
      address: "广州市天河区林和西路167号威尼国际",
      introduction: "广州安行驾校成立于2003年8月，旗下有多家驾校是专业从事汽车驾驶员培训的大型企业，十几余载的积淀，铸就雄厚实力。\n安行驾校是广东省交通运输管理局认证通过的广州大型综合类驾校，至2017年5月安行驾校规模已达到天河区第一，广东前十，发展迅速，经营理念超前致力于打造广州驾校第一品牌.\n安行驾校荣誉：\n2005年荣获“广州著名诚信驾校”2006年3月荣获“广州十大品牌驾校”\n2006年9月荣获“省重点学车单位”\n2009年荣获“技术领先驾校”\n2012年荣获“文明驾驶培训学校”\n2013年荣获“广州通过率前三驾校”\n2014年荣获“广州优秀模范单位”\n2015年荣获“驾培模范企业”\n2017年荣获“VR学车体验学校” \n\n为什么会那么多人选择安行驾校?\n【安行驾校十大优势】\n　　1：报名学车考试一次性收费，绝无隐形收费。\n　　2：学员学车定点接送，公交直达场地、随到随学。\n　　3：考场规模场地，教练队伍廉洁一流，拒绝吃拿卡要。\n　　4：考试通过率高，名额充足，速度快。\n　　5：天河区、白云区、海珠区场地全新设备，广州一流。\n　　6：专业的训练场地随到随学、联合自办考场。一次性考试合格率在90 以上。\n　　7：会长单位享受优先安排考试特权。\n　　8：广州十大老牌驾校之一，学车有保障。\n　　9：驾校一点通五星会员单位\n\n关于教练\n＊保证随到随练 杜绝 吃 拿 卡现象 一旦发现驾校会给教练批评和2000元罚款\n＊资深教练任教，教练平均教龄8年以上，具有丰富考试应变经验\n＊不计时培训，考试通过率高\n＊教练员的及格率、出勤率、廉正等各方面的表现与分配制度综合起来进行考评"
    }
  },
  components: {
    Plans
  },
  created() {

  },
  methods: {
    goBack() {
      this.$router.back(-1);
    }
  }
};
</script>

<style scoped>
.text-wrapper {
  white-space: pre-wrap;
}
.image-style{
  width: 500px;
  height: 400px;
}
</style>