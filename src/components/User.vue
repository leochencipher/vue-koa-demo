<template>
  <div class="user">
    <!-- 模板中使用$loadingRouteData -->
    <div v-if="$loadingRouteData">
      Loading ...
    </div>
    <div v-if="!$loadingRouteData">
      <h2>This is  user!</h2>
      <p></p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      message: '',
      user: ''
    }
  },
  route: {
    // 激活
    activate (transition) {
      console.log('/hello activated!')
      transition.next()
    },
    // 禁用
    deactivate (transition) {
      console.log('/hello deactivated!')
      transition.next()
    },

    data: ({to: {params: { userId }}}) => ({
      user: userId,
      message: 'message fetched!'
    })
  }
}
</script>
<style></style>
