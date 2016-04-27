<template>
  <div class="hello">
    <a v-on:click="sayHello">
      <h1></h1>
    </a>
  </div>
</template>

<script>
// import '../assets/js/jquery.js';

export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
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

    data () {
      console.log(2222)
    }
  },

  methods: {
    sayHello () {
      console.log('hello', this.$http)
      this.$http(
        {
          url: 'http://127.0.0.1:8080/static/book.json',
          method: 'GET'
        }
      ).then(function (response) {
        console.log(response)
      }, function (response) {
        console.log(response)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
