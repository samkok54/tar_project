<template>
  <div class="hello">
   {{customer}}
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data: 'Thanaphon tar ',
      name: '',
      starttime: '',
      endtime: '',
      result: '',
      customer: ''
    }
  },
  created () {
    this.customer = this.$route.params.customer
  },
  methods: {
    hello () {
      this.$http.post('http://0.0.0.0:5000/test', {name: this.name, starttime: this.starttime, endtime: this.endtime}).then((response) => {
        this.result = response.body[1]
        console.log(this.result)
      }, (response) => {
        console.log(response)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
