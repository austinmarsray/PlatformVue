<template>
  <el-cascader size="large" :options="options" v-model="selectedOptions" @change="handleChange"></el-cascader>
</template>

<script>
import { regionData , CodeToText} from 'element-china-area-data'

export default {
  data () {
    return {
      options: regionData,
      selectedOptions: [],
    }
  },
  methods: {
    handleChange (value) {
      console.log(CodeToText[value[0]]+CodeToText[value[1]]+CodeToText[value[2]]);
    }
  }
}
</script>

<style>

</style>