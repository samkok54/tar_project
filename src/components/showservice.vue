          <template>

          <div>
                      <center><h3>Service</h3></center>
                      <br>
                      <table class="ui fixed single line celled table">
                        <thead>
                          <tr>
                          <th>Service id *</th>
                            <th>Site id</th>
                            <th title="Customer id">Customer id</th>
                            <th title="Customer service id">Customer service id</th>
                            <th>Interface id</th>
                            <th>Netobject ID</th>
                            <th>Description</th>
                            <th style="width: 150px">Edit/Delete</th>
                          </tr></thead>
                        <tbody>
                          <tr v-for="item in resultgetservice['results']">
                                <td>{{item['service id']}}</td>
                                <td>{{item['site id']}}</td>
                                <td>{{item['customer id']}}</td>
                                <td>{{item['customer service id']}}</td>
                                <td>{{item['interface service id']}}</td>
                                <td>{{item['netobject id']}}</td>
                                <td>{{item['description']}}</td>
                                <td>
                                <button class="mini ui button yellow" @click="editservice()">
                                  Edit
                                </button>
                                <button class="mini ui button red">
                                  Delete
                                </button></td>
                              </td>
                          </tr>
                        </tbody>
                      </table>
                      {{token}}
                </div>
                </template>
<script>
import _ from 'lodash'
// import CustomerSite from './sub/CustomerSite.vue'
export default {
  name: 'hello',
  // components: {
  //   'customer-site': CustomerSite
  // },
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
    console.log('showservice' + this.token)
    this.showservice()
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
