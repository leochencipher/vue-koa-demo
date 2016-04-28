<!-- 角色模块 -->
<template>
  <div class="user">
    <side-bar></side-bar>
    <!-- 嵌套的外链 -->
    <router-view class="view" keep-alive transition transition-mode="out-in"></router-view>
  </div>
</template>
<script>
import SideBar from '../components/_sidebar'

export default {
  data () {
    return {
    }
  },
  components: {
    SideBar
  }
}
</script>
<style scoped>

</style>
