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

body {
  font: 90%/160% Arial, Helvetica, sans-serif;
  color: #666;
  width: 900px;
  max-width: 96%;
  margin: 0 auto;
}

/* nav */
.nav {
  position: relative;
  margin: 20px 0;
}
.nav ul {
  margin: 0;
  padding: 0;
}
.nav li {
  margin: 0 5px 10px 0;
  padding: 0;
  list-style: none;
  display: inline-block;
}
.nav a {
  padding: 3px 12px;
  text-decoration: none;
  color: #999;
  line-height: 100%;
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
