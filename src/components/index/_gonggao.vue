<!-- 公告组件 -->
<template>
  <div class="gonggao">
    <h2>最新公告</h2>
    <ul>
      <li>这里公告内容这里公告内容这里公告内容...2016-4-23</li>
      <li>这里公告内容这里公告内容这里公告内容...2016-4-23</li>
      <li>这里公告内容这里公告内容这里公告内容...2016-4-23</li>
      <li>这里公告内容这里公告内容这里公告内容...2016-4-23</li>
      <li>这里公告内容这里公告内容这里公告内容...2016-4-23</li>
    </ul>
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
.gonggao {
/*   position: absolute;
top: 0;
right: 0; */

  float: right;
  width: 327px;
  height: 31px;
  margin-right: 23px;
}
.gonggao h2 {
  font-size: 16px;

}
.gonggao ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.gonggao li {
  overflow: hidden;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  box-orient: vertical;
  display: -webkit-box;
  display: box;
}
</style>
