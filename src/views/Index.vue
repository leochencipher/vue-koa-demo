<!-- 后台主页模块 -->
<template>
  <div class="page clearfix">
    <side-bar></side-bar>
    <right-list></right-list>
  </div>
</template>
<script>
  import SideBar from '../components/index/_sidebar'
  import RightList from '../components/index/_rightlist'

  export default {
    data () {
      return {
      }
    },
    components: {
      SideBar,
      RightList
    }
  }
</script>
<style scoped>
.page {
  position: relative;
  background-color: #eee;
}
</style>
