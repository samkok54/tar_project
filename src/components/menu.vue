          <template>

          <div><br><br>
          <center><img src="../assets/netka_re.png"></center>
          <div class="ui secondary  menu">
            <a class="active item" @click="comeback()">
              Home
            </a>


            <router-link to="/cus/jo" active-class="active">
        <a class="item" style="padding-left: 6%;">
           <!-- <i class="large add circle icon" style="float: left;padding-right: 4vh;margin-top: -0.5vh;"></i> -->
          jo
        </a>
      </router-link>
      <router-link to="/cus/jam" active-class="active">
        <a class="item" style="padding-left: 6%;">
           <!-- <i class="large add circle icon" style="float: left;padding-right: 4vh;margin-top: -0.5vh;"></i> -->
          jam
        </a>
      </router-link>

           
            <router-link to="/monitor" active-class="active">
        <a class="item" style="padding-left: 6%;">
           <!-- <i class="large add circle icon" style="float: left;padding-right: 4vh;margin-top: -0.5vh;"></i> -->
          Monitoring
        </a>
      </router-link>
<!-- 
      <router-link :to="/monitor" active-class="active">
        <a class="item" style="padding-left: 6%;">
           <i class="large add circle icon" style="float: left;padding-right: 4vh;margin-top: -0.5vh;"></i>
          Monitoring
        </a>
      </router-link> -->
            <!-- <a class="item" @click ="Clickmapcustomer()" v-if="userRole==='admin'">
              Admin
            </a>
            <a class="item" @click ="signup()" v-if="userRole==='admin'">
              User Management
            </a> -->
            <div class="right menu">
              <div class="item">
                <div class="ui icon input">
                  <input type="text" placeholder="Search...">
                  <i class="search link icon"></i>
                </div>
              </div>
              <a class="ui item" @click ="logout()">
                Logout
              </a>
            </div>
          </div>
          <br>
          <div class="ui grid">
            <div class="five wide column">
           <div class="ui vertical pointing menu">
            <!-- <a class="item" style="background-color: white" @click ="custA()" > -->
              <!-- {{result}} -->
            <!-- </a> -->
            <button class="ui secondary basic button" style="width: 194px;height: 45px;" @click="toggleCustomerList()">Customer</button>
            <div class="item" v-for= "item in result['results']" v-show="isOpenCustomerList">
              <customer-site 
                :customer="item"
                :customerServices="resultgetservice['results']"
                :services="resultshowservicename['results']"></customer-site>
            </div>

                        <div v-if="userRole==='admin'">
                          <div class="item">
                          <h4>Customer</h4> 
                          <a class="item" style="opacity: 0.8;" @click="addcust()">
                            <h5>Add customer</h5>
                          </a>
                          <a class="item" style="opacity: 0.8;" @click="showcust()">
                            <h5>Show customer</h5>
                          </a>
                          </div>
                          <div class="item">
                          <h4>Site</h4> 
                          <a class="item" style="opacity: 0.8;" @click="Clickaddsite()">
                            <h5>Add Site</h5>
                          </a>
                          <a class="item" style="opacity: 0.8;" @click="Clickshowsite()">
                            <h5>Show Site</h5>
                          </a>
                          </div>
                          <div class="item">
                          <h4>Customer Service</h4> 
                          <a class="item" style="opacity: 0.8;" @click="Clickaddservice()">
                            <h5>Add Customer Service</h5>
                          </a>
                         <!--  <a class="item" style="opacity: 0.8;" @click="showservice()">
                            <h5>Show Customer Service</h5>
                          </a> -->
                          <router-link to="/showservice" active-class="active">
        <a class="item" style="padding-left: 6%;">
           <!-- <i class="large add circle icon" style="float: left;padding-right: 4vh;margin-top: -0.5vh;"></i> -->
          Show Customer Service
        </a>
      </router-link>
                          <a class="item" style="opacity: 0.8;" @click="Clickshowoneservice()">
                            <h5>Show One Customer Service</h5>
                          </a>
                          </div>
                           <div class="item">
                          <h4>Service</h4> 
                          <a class="item" style="opacity: 0.8;" @click="addservicename()">
                            <h5>Add Service</h5>
                          </a>
                          <a class="item" style="opacity: 0.8;" @click="showservicename()">
                            <h5>Show Service</h5>
                          </a>
                          </div>
                          <div class="item">
                          <h4>Router</h4> 
                          <a class="item" style="opacity: 0.8;" @click="addnode()">
                            <h5>Add Router</h5>
                          </a>
                          <a class="item" style="opacity: 0.8;" @click="shownode()">
                            <h5>Show Router</h5>
                          </a>
                          </div>
                          <div class="item">
                          <h4> Login Management</h4> 
                          <a class="item" style="opacity: 0.8;" @click="signup()">
                            <h5>Add Login</h5>
                          </a>
                          <a class="item" style="opacity: 0.8;" @click="showlogin()">
                            <h5>Show Login</h5>
                          </a>
                           <a class="item" style="opacity: 0.8;" @click="Clickmapcustomer()">
                            <h5>User Management </h5>
                          </a>
                          </div>
                        </div>
                      </div>


 </div>
                    <div class="ten wide column"> 
                      <router-view></router-view>  
                    </div>
                  </div>
                  <div class="ui grid">
                  </div>
                  <!-- {{token}} -->
                </div>
                </template>
<script>
import _ from 'lodash'
import CustomerSite from './sub/CustomerSite.vue'
export default {
  name: 'hello',
  components: {
    'customer-site': CustomerSite
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data: 'Thanaphon tar ',
      name: '',
      result: '',
      token: '',
      S: '',
      results: '',
      address: '',
      role: '',
      code: '',
      select: '',
      resultSite: '',
      resultshowcust: '',
      customerid: [],
      siteid: '1',
      resultgetservice: '',
      Clickservice: false,
      point: [''],
      ss: false,
      selects: '',
      Click: false,
      email: '',
      namecustomer: '',
      phone: '',
      website: '',
      ff: false,
      Clickshowsite1: false,
      resultshowsite: '',
      idlv1: [],
      idlv2: [],
      netobjectid: '',
      description: '',
      serviceid: '',
      service: [],
      resultaddservice: '',
      serviceadd: false,
      Clickaddservicename: false,
      resultservicename: '',
      nixup: '',
      nixdown: '',
      iigup: '',
      iigdown: '',
      resultshowservicename: '',
      Clickshowservicename: false,
      Clickaddnode: false,
      host: '',
      comstr: '',
      pop: '',
      region: '',
      zone: '',
      resultaddnode: '',
      Clickshownode: false,
      resultshownode: '',
      resultshowrouter: '',
      count: 0,
      count1: 0,
      count2: 0,
      resultshowinterface: '',
      interface: [],
      routerid: [],
      addrouters: false,
      resultshowoneservice: '',
      Clickoneservice: false,
      name_th: '',
      name_en: '',
      context: '',
      loginid: '',
      resultmapcustomer: '',
      Clickmapcus: false,
      resultidcus: '',
      mapcus: false,
      H: '',
      addnetobj: '',
      resultshownetobj1: '',
      resultshownetobj2: '',
      resultshownetobj4: '',
      userRole: 'user',
      currentPage: 'home',
      item: '',
      isSiteOptionOpen: [],
      ifsername: '',
      resultmaplogin: {},
      isOpenCustomerList: false
    }
  },
  created () {
    this.token = localStorage.getItem('token')
    this.userRole = localStorage.getItem('role')
    this.loginid = localStorage.getItem('loginid')
    this.customer()
  },
  watch: {
    service: function (newQuestion) {
      for (var i = 0; i < this.service.length; i++) {
        this.$http.post('http://203.150.54.141:5000/getinterface', { token: this.token, routerid: this.service[i] }).then((response) => {
          this.resultshowinterface = response.body
          console.log(this.resultshowinterface)
        }, (response) => {
          console.log('Error')
        })
      }
    }
  },
  mounted () {
    // get service customer
    this.$http.post('http://203.150.54.141:5000/getservicecustomer', { token: this.token }).then((response) => {
      this.resultgetservice = response.body
      console.log(this.resultgetservice)
    }, (response) => {
      console.log('Error')
    })
    // get services
    this.$http.post('http://203.150.54.141:5000/getservice', { token: this.token }).then((response) => {
      this.resultshowservicename = response.body
      console.log(this.resultshowservicename)
    }, (response) => {
      console.log('Error')
    })
  },
  methods: {
    showlogin () {
      this.changePage('show-login')
      this.$http.post('http://203.150.54.141:5000/getid', { token: this.token }).then((response) => {
        this.resultidcus = response.body
        console.log(this.resultidcus)
      }, (response) => {
        console.log('Error')
      })
    },
    signup () {
      this.$router.push('/signup')
    },
    changePage (name) {
      this.currentPage = name
    },
    Clickmapcustomer () {
      this.changePage('map-customer')
      this.$http.post('http://203.150.54.141:5000/getid', { token: this.token }).then((response) => {
        this.resultidcus = response.body
        console.log(this.resultidcus)
      }, (response) => {
        console.log('Error')
      })
      this.$http.post('http://203.150.54.141:5000/getcustomer', { token: this.token }).then((response) => {
        this.resultshowcust = response.body
        console.log(this.resultshowcust)
      }, (response) => {
        console.log('Error')
      })
    },

    mapcustomer () {
      this.role = 'admin'
      let formData = {
        loginid: this.loginid,
        customerid: this.customerid,
        token: this.token,
        role: this.role
      }
      console.log(JSON.stringify(formData))
      this.$http.post('http://203.150.54.141:5000/mapid', JSON.stringify(formData)).then((response) => {
        this.resultmapcustomer = response.body
        console.log(this.resultmapcustomer)
        alert(this.resultmapcustomer)
      }, (response) => {
        if (response.body === 'Map login sussess') {
          this.resultmapcustomer = response.body
          console.log(this.resultmapcustomer)
          alert(this.resultmapcustomer)
        }
      })
    },
    Clickshowoneservice () {
      this.changePage('show-one-service')
      this.$http.post('http://203.150.54.141:5000/getsite', { token: this.token }).then((response) => {
        this.resultshowsite = response.body
        console.log(this.resultshowsite)
      }, (response) => {
        console.log('Error')
      })
    },
    showoneservice () {
      this.$http.post('http://203.150.54.141:5000/getoneservicecustomer', { token: this.token, siteid: this.siteid }).then((response) => {
        this.resultshowoneservice = response.body
        console.log(this.resultshowoneservice)
      }, (response) => {
        console.log('Error')
      })
    },
    Calcountmap () {
      this.mapcus = true
      // this.customerid = this.customerid + 1
      this.count2 = this.count2 + 1
    },
    Calcountnet () {
      this.addnetobj = true
      this.count1 = this.count1 + 1
    },
    Calcount () {
      this.addrouters = true
      this.count = this.count + 1
    },
    shownode () {
      this.changePage('show-node')
      this.$http.post('http://203.150.54.141:5000/getrouter', { token: this.token }).then((response) => {
        this.resultshownode = response.body
        console.log(this.resultshownode)
      }, (response) => {
        console.log('Error')
      })
    },
    submitaddnode () {
      this.role = 'admin'
      this.$http.post('http://203.150.54.141:5000/addrouter', { name: this.name, host: this.host, comstr: this.comstr, pop: this.pop, region: this.region, zone: this.zone, token: this.token, role: this.role }).then((response) => {
        this.resultaddnode = response.body
        console.log(this.resultaddnode)
        alert('Success')
      }, (response) => {
        console.log('Error')
      })
    },
    addnode () {
      this.changePage('add-node')
    },
    showservicename () {
      this.changePage('show-service-name')
      this.$http.post('http://203.150.54.141:5000/getservice', { token: this.token }).then((response) => {
        this.resultshowservicename = response.body
        console.log(this.resultshowservicename)
      }, (response) => {
        console.log('Error')
      })
    },
    addservicename () {
      this.changePage('add-service-name')
    },
    submitaddservicename () {
      this.role = 'admin'
      this.$http.post('http://203.150.54.141:5000/addservicename', { name: this.name, nixup: this.nixup, nixdown: this.nixdown, iigup: this.iigup, iigdown: this.iigdown, token: this.token, role: this.role }).then((response) => {
        this.resultservicename = response.body
        console.log(this.resultservicename)
        alert('Success')
      }, (response) => {
        console.log('Error')
      })
    },
    comeback () {
      this.$router.push('/test')
    },
    testjava () {
      this.$router.push('/monitor')
    },
    Clickshowsite () {
      this.changePage('show-site')
      this.$http.post('http://203.150.54.141:5000/getsite', { token: this.token }).then((response) => {
        this.resultshowsite = response.body
        console.log(this.resultshowsite)
      }, (response) => {
        console.log('Error')
      })
    },
    submitaddsite () {
      this.role = 'admin'
      this.$http.post('http://203.150.54.141:5000/addsite', { name: this.name, customerid: this.customerid, address: this.address, email: this.email, namecustomer: this.namecustomer, phone: this.phone, website: this.website, token: this.token, role: this.role }).then((response) => {
        this.resultaddsite = response.body
        console.log(this.resultaddsite)
        alert('Success')
      }, (response) => {
        console.log('Error')
      })
    },
    submitcust () {
      this.role = 'admin'
      this.$http.post('http://203.150.54.141:5000/addcustomer', { name_en: this.name_en, name_th: this.name_th, code: this.code, address: this.address, context: this.context, token: this.token, role: this.role }).then((response) => {
        this.resultgetservice = response.body
        console.log(this.resultgetservice)
        alert(this.resultgetservice)
      }, (response) => {
        console.log('Error')
        alert('Error')
      })
    },
    Clickaddsite () {
      this.changePage('add-site')
      this.$http.post('http://203.150.54.141:5000/getcustomer', { token: this.token }).then((response) => {
        this.resultshowcust = response.body
        console.log(this.resultshowcust)
      }, (response) => {
        console.log('Error')
      })
    },
    addcust () {
      this.changePage('add-cust')
    },
    showcust () {
      this.changePage('show-cust')
      this.$http.post('http://203.150.54.141:5000/getcustomer', { token: this.token }).then((response) => {
        this.resultshowcust = response.body
        console.log(this.resultshowcust)
      }, (response) => {
        console.log('Error')
      })
    },
    logout () {
      localStorage.clear()
      this.$router.push('/customer')
    },
    Clickaddservice () {
      this.changePage('add-service')
      this.$http.post('http://203.150.54.141:5000/getcustomer', { token: this.token }).then((response) => {
        this.resultshowcust = response.body
        console.log(this.resultshowcust)
      }, (response) => {
        console.log('Error')
      })
      this.$http.post('http://203.150.54.141:5000/getrouter', { token: this.token }).then((response) => {
        this.resultshowrouter = response.body
        console.log(this.resultshowrouter)
      }, (response) => {
        console.log('Error')
      })
      this.$http.post('http://203.150.54.141:5000/getservice', { token: this.token }).then((response) => {
        this.resultgetservice = response.body
        console.log(this.resultgetservice)
      }, (response) => {
        console.log('Error')
      })
      this.$http.post('http://203.150.54.141:5000/getsite', { token: this.token }).then((response) => {
        this.resultshowsite = response.body
        console.log(this.resultshowsite)
      }, (response) => {
        console.log('Error')
      })
      this.$http.post('http://203.150.54.141:5000/getnetobjectlv1', { token: this.token }).then((response) => {
        this.resultshownetobj1 = response.body
        console.log(this.resultshownetobj1)
      }, (response) => {
        console.log('Error')
      })
    },
    SelectNetobjectLv1 () {
      this.$http.post('http://203.150.54.141:5000/getnetobjectlv2', { idlv1: this.idlv1, token: this.token }).then((response) => {
        this.resultshownetobj2 = response.body
        console.log(this.resultshownetobj2)
      }, (response) => {
        console.log('Error')
      })
    },
    SelectNetobjectLv2 () {
      this.$http.post('http://203.150.54.141:5000/getnetobjectlv4', { idlv2: this.idlv2, token: this.token }).then((response) => {
        this.resultshownetobj4 = response.body
        console.log(this.resultshownetobj4)
      }, (response) => {
        console.log('Error')
      })
    },
    Clicksubmitaddservice () {
      this.role = 'admin'
      this.$http.post('http://203.150.54.141:5000/addservice', { netobjectid: this.netobjectid, customerid: this.customerid, description: this.description, serviceid: this.serviceid, name: this.name, siteid: this.siteid, service: this.service, token: this.token, role: this.role, ifsername: this.ifsername }).then((response) => {
        this.resultaddservice = response.body
        console.log(this.resultaddservice)
        alert('Success')
      }, (response) => {
        console.log('Error')
      })
    },
    showservice () {
      this.changePage('show-service')
      this.$http.post('http://203.150.54.141:5000/getservicecustomer', { token: this.token }).then((response) => {
        this.resultgetservice = response.body
        console.log(this.resultgetservice)
      }, (response) => {
        console.log('Error')
      })
    },
    customer () {
      this.$http.post('http://203.150.54.141:5000/getcustomer', { token: this.token }).then((response) => {
        let customerInfo = response.body
        if (this.userRole === 'admin') {
          this.result = customerInfo
        } else {
          this.$http.post('http://203.150.54.141:5000/getmaplogin', { loginid: this.loginid, token: this.token }).then((response) => {
            this.resultmaplogin = response.body
            let custIdList = _.uniq(this.resultmaplogin[this.loginid])
            let custInfo = { results: [] }
            _.forEach(custIdList, (cid) => {
              _.forEach(customerInfo.results, (cust) => {
                if (cid === cust['customer id']) {
                  custInfo.results.push(cust)
                }
              })
            })
            this.result = custInfo
          }, (response) => {
            console.log('Error')
          })
        }
        console.log(this.result)
      }, (response) => {
        console.log('Error')
      })
    },
    toggleCustomerList () {
      this.isOpenCustomerList = !this.isOpenCustomerList
    },
    custSite () {
      this.$http.post('http://203.150.54.141:5000/getonesite', { token: this.token, customerid: this.customerid }).then((response) => {
        this.results = response.body
        console.log(this.results)
      }, (response) => {
        console.log('Error')
      })
    },
    custservice () {
      this.$http.post('http://203.150.54.141:5000/getoneservicecustomer', { token: this.token, siteid: this.siteid }).then((response) => {
        this.resultSite = response.body
        console.log(this.resultSite)
      }, (response) => {
        console.log('Error')
      })
    },
    custB () {
      this.$http.post('http://203.150.54.141:5000/getsite', { token: this.token }).then((response) => {
        this.result = response.body
        console.log(this.result)
      }, (response) => {
        console.log('Error')
      })
    },
    custS (id) {
      this.H = !this.H
      this.select = id
      this.$http.post('http://172.16.34.182:5000/getsite', { token: this.token, id: this.id }).then((response) => {
        this.results = response.body
        console.log(this.results)
      }, (response) => {
        console.log('Error')
      })
    },
    editnode () {
      this.changePage('add-node')
      console.log()
      // this.customer()
      // console.log('result', this.result)
    },
    editUser (customerId) {
      this.changePage('add-cust')
      this.$http.post('http://203.150.54.141:5000/getonecustomer', { token: this.token, customerid: customerId }).then((response) => {
        let custInfo = response.body.results[0]
        console.log(custInfo)
        this.name_en = custInfo['name en']
        this.name_th = custInfo['name th']
        this.code = custInfo['customer code']
        this.address = custInfo['address']
        this.context = custInfo['context']
      }, (response) => {
        console.log('Error')
      })
      console.log()
      // this.customer()
      // console.log('result', this.result)
    },
    editservice () {
      this.changePage('add-service')
      console.log()
      // this.customer()
      // console.log('result', this.result)
    },
    editservicename () {
      this.changePage('add-service-name')
      alert()
      // this.customer()
      // console.log('result', this.result)
    },
    editsite () {
      this.changePage('add-site')
      console.log()
      // this.customer()
      // console.log('result', this.result)
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
  margin: 0 10vh;
}

a {
  color: #42b983;
}
.hello {
  background: url('');
  /*background: gray;*/
  height: 100%;
  width: 100%;
  /*margin-bottom: 0px;*/
  /*display: block;*/
  position: 100vh;
}
</style>
