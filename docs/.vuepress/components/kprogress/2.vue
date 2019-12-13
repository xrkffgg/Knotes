<template>
  <div class="demo">
    <div>
      <k-progress :percent="10" ></k-progress>
      <k-progress :percent="20" type="success" :line-height="8"></k-progress>
      <k-progress :percent="30" type="warning" :line-height="10"></k-progress>
      <k-progress :percent="40" type="error" :line-height="12"></k-progress>
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