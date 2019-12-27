<template>
  <div class="demo">
    <div>
      <k-progress :percent="20" ></k-progress>
      <k-progress :percent="40" status="success" type="lump" ></k-progress>
      <k-progress :percent="60" status="warning" type="lump" active :border="false" ></k-progress>
      <k-progress :percent="80" :color="['#40a9ff', '#5cdbd3']" type="lump" :cut-width="2" cut-color="#389e0d"></k-progress>
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