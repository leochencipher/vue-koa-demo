<!-- 登录模块 -->
<template>
  <div class="sign">
    <h2>这是登录注册页面</h2>
    <p>
      <!-- 使用指令v-link 进行导航  -->
      <a v-link="{ path: '/sign', exact: true }">登录</a>
      <a v-link="{ path: '/sign/signup', exact: true  }">注册</a>
    </p>
    <!-- 嵌套的外链 -->
    <router-view class="view" keep-alive transition transition-mode="out-in"></router-view>
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

</style>
