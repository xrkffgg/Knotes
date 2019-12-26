<template>
  <div class="demo">
    <div>
      <k-progress :percent="10" ></k-progress>
      <k-progress :percent="20" type="success"></k-progress>
      <k-progress :percent="30" type="warning"></k-progress>
      <k-progress :percent="40" type="error"></k-progress>
      <k-progress :percent="50" color="#9254de"></k-progress>
      <k-progress :percent="60" :color="['#f5af19', '#f12711']"></k-progress>
      <k-progress :percent="70" :color="['#40a9ff', '#5cdbd3']" bg-color="#d9f7be"></k-progress>
      <k-progress :percent="percent" :color="getColor"></k-progress>
    </div>
  </div>
</template>

<script>
import kProgress from '../src/progress';

export default {
  components: {
    kProgress,
  },
  data() {
    return {
      percent: 10,
      ifUp: true,
    }
  },
  mounted () {
    const timer = setInterval(() =>{
      if (this.ifUp) {
        this.percent = this.percent + 10
        this.percent == 100 ? this.ifUp = false : this.ifUp = true
      } else {
        this.percent = this.percent - 10
        this.percent == 10 ? this.ifUp = true : this.ifUp = false
      }
    }, 1000);
    this.$once('hook:beforeDestroy', () => clearInterval(timer));
  },
  methods: {
    getColor(percent) {
      if(percent < 25){
        return '#ffc069';
      } else if(percent < 50) {
        return '#fadb14';
      } else if(percent < 75) {
        return '#13c2c2';
      } else {
        return '#389e0d';
      }
    }
  },
}
</script>

<style>
  .demo {
    width: 60%;
  }
</style>