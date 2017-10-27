<template>
  <div class="hello">
    <h2>Show customer all </h2>
    <input type="text" v-model="id" placeholder="id">
    <input type="text" v-model="name" placeholder="name" >
    <button @click="hello()">select</button>

   <br>
   <br>
   <br>
   <center><table v-if="name != 'jam'" class="ui very basic collapsing celled table">
   <thead>
    <tr><th>id</th>
    <th>Customer</th>
  </tr></thead>
  <tbody>
   <tr v-for="k in result">
    <td> {{k['id_cust']}}</td>
    <td> {{k['Name']}}</td>
   </tr>
     </tbody>

   </table>
   </center>

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
      id: '',
      endtime: '',
      result: ''
    }
  },
  methods: {
    hello () {
      this.$http.post('http://0.0.0.0:5000/show_cus', { name: this.name, id: this.id }).then((response) => {
        this.result = response.body
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
