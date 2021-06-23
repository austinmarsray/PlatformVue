<!--模块延后处理-->
<template>
  <qrcode-vue :value="qrcode"></qrcode-vue>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
// import alipaySdk from '@/request/alipaydemo'

export default {
  name: "Payment",
  components: {
    QrcodeVue
  },
  data() {
    return {
      qrcode: "https://openapi.alipaydev.com/gateway.do",
    }
  },
  created() {
    console.log("testing")
    // const result = alipaySdk.exec('alipay.trade.precreate',{},{});
    // console.log(result)
   },
  methods: {

  }
};
</script>

<style scoped>

</style>