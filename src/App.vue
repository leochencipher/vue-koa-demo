<template>
  <div>
    <h1>Hello App!</h1>
    <p>
      <!-- 使用指令v-link 进行导航  -->
      <a v-link="{ path: '/foo', exact: true, activeClass: 'active'}">Go to Foo</a>
      <a v-link="{ path: '/bar'}">Go to Bar</a>
      <a v-link="{ path: '/hello'}">Go to Hello</a>
      <a v-link="{ name: 'user', params: { userId: 123 }}">Go to User</a>
    </p>
    <!-- 路由外链 -->
    <router-view class="view" transition="test" transition-mode="out-in" keep-alive></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style src="../node_modules/bootstrap/dist/css/bootstrap.css"></style>
<style>
html {
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
}
</style>
