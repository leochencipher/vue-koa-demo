<!-- 这是后台主页 -->
<template>
<div class="home">
  <bread-crumbs></bread-crumbs>
  <right-list></right-list>
</div>

<!--   <div class="page clearfix">
  This is Home!
</div> -->
</template>
<script>
import BreadCrumbs from '../components/BreadCrumbs'
import RightList from '../components/RightList'

  export default {
    ready () {

    },
    data () {
      return {
      }
    },
    components: {
      BreadCrumbs,
      RightList
    }
  }
</script>
<style scoped>
 .home {
  float: left;
  width: 75%;
  max-width: 75%;
  background-color: #ECEDF1;
 }
</style>
