<template>
  <el-carousel :interval="4000" type="card" height="400px">
    <el-carousel-item v-for="item in imgUrls" :key="item">
      <img :src="item">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      imgUrls: [],
    }
  },
  mounted() {
    this.imgUrls.push("https://cdn.jsdelivr.net/gh/austinmarsray/Image-Host/blog/bitmove/wall.jpg");
    this.imgUrls.push("https://cdn.jsdelivr.net/gh/austinmarsray/Image-Host/blog/socket1/loveiswar.png");
    this.imgUrls.push("https://cdn.jsdelivr.net/gh/austinmarsray/Image-Host/blog/SQL-Grammer-Index/932429.png");
    this.imgUrls.push("https://cdn.jsdelivr.net/gh/austinmarsray/Image-Host/test/tree_leaves_summer_100591_1920x1200.jpg");
    this.imgUrls.push("https://cdn.jsdelivr.net/gh/austinmarsray/Image-Host/top/spring.jpg");
    this.imgUrls.push("https://cdn.jsdelivr.net/gh/austinmarsray/Image-Host/top/bluebell-spring.jpg");
  },
  methods: {

  },
};
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>