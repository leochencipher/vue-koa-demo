<!-- 面包屑组件 -->
<template>
  <div class="breadcrumbs">
    <span>用户管理 >> </span>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>
<style scoped>
  .breadcrumbs {
    letter-spacing: -7px;
    word-spacing: -4px;
    font-size: 0;
    height: 29px;
    line-height: 29px;
    background-color: #fff;
  }
  .breadcrumbs span {
    letter-spacing: normal;
    word-spacing: normal;
    height: 29px;
    display: inline-block;
    line-height: 29px;
    font-size: 12px;
    margin-left: 10px;
  }
</style>
