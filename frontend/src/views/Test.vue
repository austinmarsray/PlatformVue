<template>
<!--  <FPractice/>-->
<!--   <Steps/> -->
  <Carousel/>
  <DistributionSelect/>
</template>

<script>
import FPractice from "../components/Subject1/PracticeF"
import Steps from "../components/Steps"
import Carousel from "../components/School/Carousel"
import DistributionSelect from "@/components/School/DistributionSelect";

export default({
  name: "Test",
  components:{
    FPractice,
    Steps,
    Carousel,
    DistributionSelect
  }
})
</script>
