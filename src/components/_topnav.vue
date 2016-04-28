<!-- 这是后台头部导航栏 -->
<template>
  <nav class="nav">
    <ul>
      <li>
        <a v-link="{path:'/home', exact: true, activeClass: 'current'}">首页</a>
      </li>
      <li>
      <a v-link="{path:'/home', exact: true, activeClass: 'current'}">客户服务</a>
      </li>
      <li>
        <a v-link="{path:'/home', exact: true, activeClass: 'current'}">产品展示</a>
      </li>
      <li>
        <a v-link="{path:'/home', exact: true, activeClass: 'current'}">经典案例</a>
      </li>
      <li>
        <a v-link="{path:'/home', exact: true, activeClass: 'current'}">联系我们</a>
      </li>
    </ul>
  </nav>
    <!-- 路由外链 -->
  <router-view transition-mode="out-in" keep-alive></router-view>
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
/*
  首先给菜单nav设置相对定位
  在 .nav li 中使用 display: inline-bloc替代float: left;
  这样子我们可以使用text-align来对nav菜单进行左中右对齐设置
 */


/* nav */
.nav {
  position: relative;
  background-color: #393737;

  padding-left: 44px;
}
.nav ul {
  margin: 0;
  padding: 0;
  letter-spacing: -4px;
  word-spacing: -4px;
  font-size: 0;
}
.nav li {
  margin: 0 5px 0 0;
  padding: 0;
  list-style: none;
  font-size: 16px;
  letter-spacing: normal;
  word-spacing: normal;
  display: inline-block;
  *display: inline;
  zoom:1;
}
.nav a {
  display: block;
  height: 35px;
  line-height: 35px;
  padding: 0 12px;
  text-decoration: none;
  color: #999;
}
.nav a:hover {
  color: #d0d0d0;
}
.nav .current a {
  background-color: #999;
  color: #fff;
  border-radius: 5px;
}

/* right nav */
.nav.right ul {
  text-align: right;
}
/* center nav */
.nav.center ul {
  text-align: center;
}
</style>
