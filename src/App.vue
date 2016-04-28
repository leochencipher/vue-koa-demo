<template>
  <nv-head></nv-head>
  <div class="container clearfix">
    <top-nav></top-nav>
  </div>
  <!-- <nav-foot></nav-foot> -->
<!--   <div>
<p>
使用指令v-link 进行导航
<a v-link="{ path: '/home', exact: true, activeClass: 'active'}">Go to Home</a>
<a v-link="{ path: '/menu', exact: true, activeClass: 'active'}">Go to Menu</a>
<a v-link="{ path: '/hello', exact: true, activeClass: 'active'}">Go to Hello</a>
<a v-link="{ name: 'user', params: { userId: 123 }, exact: true, activeClass: 'active'}">Go to User</a>
</p>
  路由外链
  <router-view transition-mode="out-in" keep-alive></router-view>
</div> -->
</template>

<script>
// import $ from './assets/js/jquery.js'
import './assets/css/main.css'
import './assets/css/style.css'

import NvHead from './components/_header'
import TopNav from './components/_topnav'
// import NavFoot from './components/_footer'
/*import SideBar from './components/SideBar'*/

export default {
  ready () {

  },
  data () {
    return {

    }
  },
  components: {
    NvHead,
    TopNav
  }
}

</script>

<style>

body {
  font-family:"Microsoft YaHei","微软雅黑","SimSun","宋体",Arial,sans-serif;
}
.container {
  min-width: 1200px;
}

/* html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  background-color: #eee;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  padding: 0 20px;
  border-radius: 5px;
  display: inline-block;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px;
}
#app .v-link-active {
    color: red;
} */
</style>
