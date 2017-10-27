<template>
  <div class="hello">
    <h2>Add Router</h2>
    <br>
    <input type="text" v-model="name" placeholder="name"><br>
    <input type="text" v-model="Host" placeholder="Host" ><br>
    <input type="text" v-model="Comunity" placeholder="Comunity"><br>
    <button @click="summit()">summit</button>

   <br>
   <br>
   <br>
   <center><table v-if="name != 'jam'" class="ui very basic collapsing celled table">
   <thead>
    <tr><th>Customer</th>
    <th>DomesticIn</th>
    <th>DomesticOut</th>
  </tr></thead>
  <tbody>

  </tbody>

   </table>
   </center>
<p v-if="name == 'jam'">oK</p>
<p v-else-if="name == 'tar'">good</p>
<p v-else-if="name == 'both'">bad</p>



  </div>
</template>


<script>
export default {
  name: 'customer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data: 'Thanaphon tar ',
      name: '',
      Host: '',
      Comunity: '',
      result: ''
    }
  },
  methods: {
    customer () {
      this.$http.post('http://0.0.0.0:5000/test', {name: this.name, Address: this.Address, Contact: this.Contact}).then((response) => {
        this.result = response.body[1]
        console.log(this.result)
        alert('jam')
      }, (response) => {
        console.log(response)
      })
    },
    summit () {
      console.log(this.JSON())
      alert('Success')
    },
    JSON () {
      var data = {
        name: this.name,
        Host: this.Host,
        Comunity: this.Comunity
      }
      return data
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
