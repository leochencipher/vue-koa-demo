<!-- 右边组件 -->
<template>
  <div class="content">
    <div class="list_head">
      <button class="button">添加</button>
      <button class="button">修改</button>
      <button class="button">删除</button>
      <button class="button">绑定角色</button>
    </div>
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
  .content {
    position: relative;

  }
  .content .list_head {
    padding-left: 10px;
    background-color: #fff;
  }
  .content .button {
    color: #666;
    background-color: #fff;
    border: 1px solid #ccc;
  }
  .content .list_head:first-of-type {
    margin-left: 10px;
  }

</style>
