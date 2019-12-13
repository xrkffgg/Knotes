<template>
  <div class="demo">
    <div>
      <k-progress :percent="40" ></k-progress>
      <k-progress :percent="60" active></k-progress>
      <k-progress :percent="80" active active-color="#262626"></k-progress>
      <k-progress :percent="100" active :active-color="['#820014', '#ffec3d']"></k-progress>
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