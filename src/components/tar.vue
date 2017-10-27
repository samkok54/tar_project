<template>
  <div class="hello">
    <h2>Thanaphon </h2>
    <input type="text" v-model="name" placeholder="ชื่อ">
    <input type="text" v-model="starttime" >
    <input type="text" v-model="endtime" >
    <button @click="hello()">select</button>
  
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
   <tr v-for="k in result">
    <td> {{k['Customer :']}}</td>
    <td> {{k['DomesticIn']}}</td>
    <td> {{k['DomesticOut']}}</td>
   </tr>
     </tbody>

   </table>
   </center>
<p v-if="name == 'jam'">oK</p>
<p v-else-if="name == 'tar'">good</p>
<p v-else-if="name == 'both'">bad</p>
<p v-else>GG</p>


<div class="ui segment" style="height: 300px;">
  <div class="ui active dimmer">
    <div  class="ui text loader">Loading</div>
  </div>
</div>

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
      result: ''
    }
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
