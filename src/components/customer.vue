<template>
  <div class="hello"><br>
    <div class="ui middle aligned center aligned grid">
      <div class="column">
        <h2 class="ui image header">
          <center><img src="../assets/netka_re.png" style="opacity: 0.7;" ></center>
          <div class="content" style="opacity: 0.6;"><br>
            Login 
          </div>
        </h2>
        <form action="https://s.codepen.io/voltron2112/debug/PqrEPM?" method="get" class="ui large form">
          <div class="ui stacked secondary  segment" style="margin-right: 440px;margin-left: 440px;opacity: 0.7;padding-bottom: 17px;">
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
           <!--  <select class="ui dropdown" v-model="role">
             <option class="ui left icon input" value="">Role</option>
             <i class="lock icon"></i>
             <option value="admin">admin</option>
             <option value="user">user</option>
           </select> -->
           <div class="ui fluid large teal submit button" style="margin-top: 25px; opacity: 0.8;" @click="hello()"  >submit</div><br>
        </div>
        <div class="ui error message"></div>     
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
      username: 'tar',
      password: 'thanaphon',
      role: '',
      result: '',
      test: []
    }
  },
  created () {
    this.status_login = localStorage.getItem('status')
    if (this.status_login === 'T') {
      this.$router.push('/test')
    }
  },
  methods: {
    signup () {
      this.$router.push('/signup')
    },
    hello () {
      this.role = 'admin'
      this.$http.post('http://203.150.54.141:5000/login', { username: this.username, password: this.password, role: this.role }).then((response) => {
        this.result = response.body
        console.log(this.result)
        if (this.result !== 'Fail') {
          localStorage.setItem('status', 'T')
          localStorage.setItem('token', this.result['token'])
          localStorage.setItem('role', this.result['role'])
          localStorage.setItem('loginid', this.result['id'])
          this.$router.push('/test')
        } else {
          localStorage.setItem('status', 'F')
          alert('login Fail')
        }
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
  margin: 0 100vh;
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
