<template>
  <div class="demo">
    <div>
      <k-progress :percent="40" active></k-progress>
      <k-progress :percent="60" active active-color="#f12711"></k-progress>
      <k-progress :percent="80" active :color="['#f5af19', '#f12711', '#9254de', '#40a9ff', '#5cdbd3']"></k-progress>
      <k-progress :percent="100" :color="['#f5af19', '#f12711', '#9254de', '#40a9ff', '#5cdbd3']" :color-flow="true"></k-progress>
    </div>
  </div>
</template>

<script>
import kProgress from '../src/kprogress';

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