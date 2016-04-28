<!-- 后台侧边栏模块 -->
<template>
  <div class="menu_list">
    <ul class="menu_body">
      <li><a href="#">待办事项</a></li>
      <li><a href="#">未读消息</a></li>
    </ul>
  </div>
  <!-- 路由外链 -->
  <router-view transition-mode="out-in" keep-alive></router-view>
</template>
<script>

export default {
  data () {
    return {
    }
  },
  methods: {
    slideToggle (event) {
      // 获取点击对象
      var el = event.currentTarget;
      alert(el);
/*      $(el).addClass("current").next("div.menu_body").slideToggle(300).siblings("div.menu_body").slideUp("slow");
      $(el).siblings().removeClass("current");*/
    }
  }
}
</script>
<style scoped>
    .menu_list{
      width:297px;
      min-height: 336px;
      float: left;
      margin-left: 24px;
      margin-top: 14px;
      background-color: #fff;
      padding-top: 34px;
    }
    .menu_body{
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .menu_body a{
      display:inline-block;
      color:#333;
      height: 20px;
      line-height: 20px;
      padding-left: 23px;
      font-size: 14px;
      color: #333;
      cursor: pointer;
      background-color: #fff;
      text-decoration: none;
    }
    .menu_body a:hover{text-decoration:none;}
</style>

