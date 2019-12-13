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
    </div>
  </div>
</template>

<script>
import kProgress from '../src/progress';

export default {
  components: {
    kProgress,
  },
}
</script>

<style>
  .demo {
    width: 60%;
  }
</style>