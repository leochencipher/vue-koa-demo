<!-- 后台侧边栏模块 -->
<template>

  <div class="firstpane menu_list">
    <h3 class="menu_head current" @click="slideToggle($event)">用户管理</h3>
    <div style="display:block" class="menu_body">

    </div>
    <h3 class="menu_head" @click="slideToggle($event)">部门管理</h3>
    <div style="display:none" class="menu_body">
      <a href="#">设计部门</a>
      <a href="#">财务部门</a>
      <a href="#">策划部门</a>
    </div>
    <h3 class="menu_head" @click="slideToggle($event)">角色管理</h3>
    <div style="display:none" class="menu_body">
    </div>
    <h3 class="menu_head" @click="slideToggle($event)">日志查询</h3>
    <div style="display:none" class="menu_body">
    </div>
    <h3 class="menu_head" @click="slideToggle($event)">发布公告</h3>
    <div style="display:none" class="menu_body">
      <a href="#">已发送</a>
      <a href="#">草稿箱</a>
    </div>
  </div>
  <!-- 路由外链 -->
  <router-view transition-mode="out-in" keep-alive></router-view>
</template>
<script>
import $ from '../../assets/js/jquery.js'

export default {
  data () {
    return {
    }
  },
  methods: {
    slideToggle (event) {
      // 获取点击对象
      var el = event.currentTarget;
      $(el).addClass("current").next("div.menu_body").slideToggle(300).siblings("div.menu_body").slideUp("slow");
      $(el).siblings().removeClass("current");
    }
  }
}
</script>
<style scoped>
    .menu_list{
      width: 15%;
      min-width:200px;
      float: left;
    }
    .menu_head{
      height: 47px;
      line-height: 47px;
      padding-left: 38px;
      font-size: 14px;
      color: #525252;
      cursor: pointer;
      border-left: 1px solid #e1e1e1;
      border-right: 1px solid #e1e1e1;
      border-bottom: 1px solid #e1e1e1;
      border-top: 1px solid #F1F1F1;
      position: relative;
      margin: 0px;
      font-weight: bold;
      background: #f1f1f1 url(../../assets/images/pro_left.png) center right no-repeat;
    }
    .menu_list .current{background:#f1f1f1 url(../../assets/images/pro_down.png) center right no-repeat;}
    .menu_body{
      line-height: 38px;
      border-left: 1px solid #e1e1e1;
      background: #fff;
      border-right: 1px solid #e1e1e1;
    }
    .menu_body a{display:block;height:38px;line-height:38px;padding-left:38px;color:#777777;background:#fff;text-decoration:none;border-bottom:1px solid #e1e1e1;}
    .menu_body a:hover{text-decoration:none;}
</style>

