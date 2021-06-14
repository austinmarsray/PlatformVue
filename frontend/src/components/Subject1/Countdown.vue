<template>
  <FlipDown :endDate="endTime" theme="2" type="3" @timeUp="timeOut"></FlipDown>
</template>
<script>
import FlipDown from 'vue-flip-down';

export default {
  name: "Countdown",
  components: {
    FlipDown,
  },
  computed: {
    endTime(){
      let myDate = new Date();
      return myDate.getTime()+2700000;
    }
  },
  methods: {
    timeOut() {
      // 终止考试
    }
  }
};
</script>

<style scoped>

</style>