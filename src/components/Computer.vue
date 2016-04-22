<template>
  <div class="app">
    <span></span>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        msg: 'hi'
      }
    },
    computed: {
      example () {
        return Date.now() + this.msg
      }
    }
  }
</script>
<style></style>
