<template>
  <div class="foo">
    <h2>This is foo!</h2>
    <p>
      <!-- 使用指令v-link 进行导航  -->
      <a v-link="{ path: '/foo' }">Go to /foo</a>
      <a v-link="{ path: '/foo/bar' }">Go to /foo/bar</a>
      <a v-link="{ path: '/foo/baz' }">Go to /foo/baz</a>
    </p>
    <!-- 嵌套的外链 -->
    <router-view></router-view>
  </div>
</template>
<script>
// import '../assets/js/jquery.js';
export default {
  data () {
    return {
    }
  }
}
</script>
<style scoped>

</style>
