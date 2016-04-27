<template>
  <div class="app">
    <span v-on:click=updateMessage>  </span>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'not updated'
    }
  },
  methods: {
    updateMessage () {
      this.msg = 'updated'
      console.log(this.$el.textContent)
      this.$nextTick(function () {
        console.log(this.$el.textContent)
      })
    }
  }
}
</script>
<style></style>
