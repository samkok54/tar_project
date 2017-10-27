<template>
  <div class="hello">
    <h2>addcustomer</h2>
    <input type="text" v-model="name_en" placeholder="name_en"><br>
    <input type="text" v-model="name_th" placeholder="name_th" ><br>
    <input type="text" v-model="code" placeholder="code" ><br>
    <input type="text" v-model="address" placeholder="address" ><br>
    <input type="text" v-model="context" placeholder="context" ><br>
    <input type="text" v-model="token" placeholder="token" ><br>
    <br>
    <br><select class="ui dropdown" v-model="role">
    <option value="">role</option>
    <option value="admin">admin</option>
    <option value="user">user</option>
    </select>
    
    <br>
    <br><button @click="hello()">submit</button>

    {{result}}
    
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      data: 'Thanaphon tar ',
      name_th: '',
      name_en: '',
      code: '',
      address: '',
      context: '',
      token: '',
      role: '',
      result: ''
    }
  },
  methods: {
    hello () {
      this.$http.post('http://172.16.34.182:5000/addcustomer', { name_en: this.name_en, name_th: this.name_th, code: this.code, address: this.address, context: this.context, token: this.token, role: this.role }).then((response) => {
        this.result = response.body
        console.log(this.result)
      }, (response) => {
        console.log('Error')
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
