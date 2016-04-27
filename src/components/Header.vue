<template>
  <header class="header clearfix">
    <div class="left">
      <h1 class="logo">
        <a href="javascript:void(0)">
          <img src="../assets/logo.png" alt="logo">
        </a>
      </h1>
    </div>

    <div class="right">
      <a href="javascript:void(0)">
        <img class="avatar" src="../assets/images/avatar.jpg" alt="">
      </a>

<!--       <span class="username">
  王二
</span> -->
    </div>

  </header>
</template>
<script>
  export default {
    data () {
      return {
        msg: 'hi'
      }
    },
    computed: {
      example () {
        return Date.now() + this.msg
      }
    }
  }
</script>
<style scoped>
  .header {
    height: 78px;
  }
  .header .left {
    position: relative;
    float: left;
    width: 68%;
  }
  .header h1 {
    position: relative;
    font: 18px/59px "微软雅黑";
    width: 166px;
    height: 59px;
    line-height: 59px;
    margin-left: 73px;
    margin-top: 11px;
    margin-bottom: 9px;
  }
  .header h1 a {
    display: block;
    width: 166px;
    position: relative;
    /* overflow: hidden; */

  }
  .header h1 a img {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
  }

  .header .right {
    position: relative;
    float: left;
    width: 32%;
    /* text-align: center; */
  }
  .header .right a {
    display: block;
    width: 50px;
  }
  .header .right a .avatar {
    width: 50px;
    height: 50px;
    margin-top: 13px;
    margin-bottom: 15px;
  }
  .header .username {
    display: block;
  }

  /* .header */
</style>
