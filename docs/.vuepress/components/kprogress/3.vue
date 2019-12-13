<template>
  <div class="demo">
    <div>
      <k-progress :percent="50" ></k-progress>
      <k-progress :percent="60" type="success" :show-text="false" ></k-progress>
      <k-progress :percent="80" type="warning" :format="format"></k-progress>
      <k-progress :percent="100" type="error" :format="format"></k-progress>
    </div>
  </div>
</template>

<script>
import kProgress from '../src/progress';

export default {
  components: {
    kProgress,
  },

  methods: {
    format(percent) {
      if(percent == 100){
        return '^_^'
      }
      return 'QAQ'
    }
  },
}
</script>

<style>
  .demo {
    width: 60%;
  }
</style>