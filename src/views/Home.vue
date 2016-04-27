<!-- 这是后台主页 -->
<template>
  <div class="page clearfix">
    This is Home!
  </div>
</template>
<script>
  export default {
    ready () {
      console.log(111);
      console.log('$: ', $);
    },
    data () {
      return {
      }
    }
  }
</script>
<style scoped>
 .page {
  float:left;
  width: 200px;
  background-color: #eee;
}
</style>
