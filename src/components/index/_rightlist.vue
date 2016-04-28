<!-- 右边组件 -->
<template>
  <div class="right-list clearfix">
    <content></content>
    <gong-gao></gong-gao>
  </div>
</template>
<script>
import Content from './_content'
import GongGao from './_gonggao'

  export default {
    data () {
      return {
      }
    },
    components: {
      Content,
      GongGao
    }
  }
</script>
<style scoped>
  .right-list {
    position: relative;
    margin-top: 14px;
    margin-left: 15px;
    background-color: lightgreen;
    margin-left: 337px;
  }
  .right-list span {
    font-size: 16px;
    display: inline-block;
    background-color: #fff;
  }
</style>
