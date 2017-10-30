<template>
  <div class="hello">
    <div class="ui middle aligned center aligned grid">
      <div class="column">
        <h2 class="ui image header">
          <br>
          <br>
          <br>
          <div class="content">
          <br>
            Sign up to your account
          </div>
        </h2>
        <form  class="ui large form">
          <div class="ui stacked secondary  segment" style="margin-right: 440px;margin-left: 440px;opacity: 0.5;padding-bottom: 17px;">
            <div class="field">
              <div class="ui left icon input">
                <i class="user icon"></i>
                <input type="text" v-model="username" placeholder="Username">
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input type="password" v-model="password" placeholder="Password">
              </div>
            </div>
            <select class="ui dropdown" v-model="role">
             <option class="ui left icon input" value="">Role</option>
             <i class="lock icon"></i>
             <option value="admin">admin</option>
             <option value="user">user</option>
           </select>
           <div class="ui fluid large teal submit button" style="margin-top: 25px;" @click="hello()"  >Signup</div><br>
           <div class="ui buttons">
           <button class="ui labeled icon button active" style="margin-left: 250px" @click="toLogin()">
              <i class="left chevron icon"></i>
              Back
            </button>
          </div>
        </div>
        <div class="ui error message"></div>
        <center><table> 
          <tr>
          username :
          <td>
          {{username}}
          </td>
          </tr>
          <tr>
            password :
            <td>
          {{password}}
          </td>
          </tr>
          <tr>
            role :
            <td>
          {{role}}
          </td>
          </tr>
        </table>
        </center>
      </form>
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
      username: '',
      password: '',
      role: '',
      result: ''
    }
  },
  methods: {
    toLogin () {
      localStorage.clear()
      this.$router.push('/menu')
    },
    hello () {
      this.$http.post('http://203.150.54.141:5000/signup', { username: this.username, password: this.password, role: this.role }).then((response) => {
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
.hello {
  background: url('../assets/8.jpg');
  /*background: gray;*/
  height: 100vh;
  width: 100%;
  /*margin-bottom: 0px;*/
  /*display: block;*/
  position: fixed;
}
</style>
