          <template>

          <div class="hello"><br><br>
          <center><img src="../assets/netka_re.png"></center>
          <div class="ui secondary  menu">
            <a class="active item" @click="comeback()">
              Home
            </a>
            <a class="item" @click ="testjava()" v-if="userRole==='admin'">
              Monitoring
            </a>
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
<!-- 
            <a class="item" v-for= "(item, index) in result['results']"style="opacity: 0.8;" >
              <p @click.self="item.isOpen=!item.isOpen">sadsdsdsd</p>
              <h5>{{item['name en']}}</h5>
              <p>{{item.isOpen}}</p>
              <div v-if="isSiteOptionOpen[index]">{{item}}</div>
            </a> -->
                     <!-- <div class="item" v-if="A" style="font-size: 12px" @click ="service()">
                          Site A
                          <div class="item" v-if="serviceA" style="font-size: 10px">
                            service A
                          </div>
                     </div>
                          <div class="item" v-if="A" style="font-size: 12px">
                          Site B
                        </div> -->
                    <!--     <a class="item" @click ="custB()">
                          Customer B
                        </a>
                        <div class="item" v-if="B" v-for= "(item,index) in result">
                          {{index}}
                        </div> -->
                    <!-- <div class="item" v-if="B" style="font-size: 12px">
                          Site C
                          </div>
                          <div class="item" v-if="B" style="font-size: 12px">
                          Site D
                        </div> -->
                        <!-- <a class="item" @click="service()">
                          <h4>Service</h4>
                        </a> -->
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
                          <a class="item" style="opacity: 0.8;" @click="showservice()">
                            <h5>Show Customer Service</h5>
                          </a>
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
                      <!-- --==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--== -->
                      <div v-if="currentPage === 'show-one-service'">
                      <br>
                      <br>
                      <center><h3>Site Service</h3></center>
                      <br>
                      <label>Select Site</label>
                      <select class="ui dropdown" style="height: 42px; width: 330px;margin-right: 30px; margin-left:25px" v-model="siteid">
                           <option class="ui left icon input"</option>
                        <i class="lock icon"></i>
                        <option v-for="itemq in resultshowsite['results']" :value="itemq['site id']">{{itemq['name ']}}</option>
                         </select>
                          <button class="ui primary button" @click="showoneservice()">
                          Submit
                        </button><br>
                        <br>
                        <table>
                          <tr>
                            <td>Name customer service</td>
                            <td>Created Date</td>
                            <td>Edit last date</td>
                            <td>Name Site</td>
                          </tr>
                          <tr v-for="item in (resultshowoneservice['results'])">
                            <td>{{item['customer service name']}}</td>
                            <td>{{item['created date']}}</td>
                            <td>{{item['edit last date']}}</td>
                            <td>{{item['site id']}}</td>
                          </tr>
                        </table>
                         </div>
                      <!-- --==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--== -->
                      <div class="ten wide column">
                      <div v-if="currentPage === 'show-login'">
                      <center><h3>Show login</h3></center>
                      <br>
                      <table class="ui fixed single line celled table">
                        <thead>
                          <tr>
                          <th>Login ID</th>
                            <th>Name</th>
                            <th style="width: 150px">Edit/Delete</th>
                          </tr></thead>
                        <tbody>
                          <tr v-for="(item,index) in resultidcus">
                                <td>{{item}}</td>
                                <td>{{index}}</td>
                                <td>
                                <button class="mini ui button yellow">
                                  Edit
                                </button>
                                <button class="mini ui button red">
                                  Delete
                                </button></td>
                              </td>
                          </tr>
                        </tbody>
                      </table>
                      </div>
                      <div v-if="currentPage === 'show-service'">
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
                      </div>
                      <div v-if="currentPage === 'show-cust'">
                      <center><label><h3>Show Customer</h3></label></center>
                        <table class="ui fixed single line celled table">
                          <thead>
                            <tr><th>Name En *</th>
                            <th>Name Th</th>
                            <th>Address</th>
                            <th>Context</th>
                            <th>Customer Code</th>
                            <th>Customer ID</th>
                            <th style="width: 150px">Edit/Delete</th>
                          </tr></thead>
                          <tbody>
                            <tr v-for="item in resultshowcust['results']">
                                <td>{{item['name en']}}</td>
                                <td>{{item['name th']}}</td>
                                <td>{{item['address']}}</td>
                                <td>{{item['context']}}</td>
                                <td>{{item['customer code']}}</td>
                                <td>{{item['customer id']}}</td>
                                <td>
                                <button class="mini ui button yellow" @click="editUser(item['customer id'])">
                                  Edit
                                </button>
                                <button class="mini ui button red">
                                  Delete
                                </button></td>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <br>
                      </div>
                      <div v-if="currentPage === 'show-site'">
                      <center><h3>Show Site</h3></center>
                      <br>
                        <table class="ui fixed single line celled table">
                          <thead>
                           <tr><th>Name *</th>
                            <th>Name Customer</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Website</th>
                            <th>Site id</th>
                            <th style="width: 150px">Edit/Delete</th>
                          </tr></thead>
                          <tbody>
                            <tr v-for="item in resultshowsite['results']">
                            <td>{{item['name ']}}</td>
                            <td>{{item['name customer']}}</td>
                            <td>{{item['address']}}</td>
                            <td>{{item['email']}}</td>
                            <td>{{item['phone']}}</td>
                            <td>{{item['website']}}</td>
                            <td>{{item['site id']}}</td>
                            <td>
                                <button class="mini ui button yellow" @click="editsite()">
                                  Edit
                                </button>
                                <button class="mini ui button red">
                                  Delete
                                </button></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div v-if="currentPage === 'add-site'">
                      <center><h3>Add Site </h3></center>
                      <br>
                        <div class="ui form">
                        <div class="two fields">
                          <table style="margin-right: 100px">
                              <tr>
                                <td> <h5>Name(Site)</h5></td>
                                <td> <h5 style="margin-left: 30px">Customer</h5></label></td>
                              </tr>
                               <tr>
                                <td>
                          <input v-model="name" placeholder="Name_site" type="text" style="height: 42px; margin-right: 365px">
                              </td>
                              <td><select class="ui dropdown" style="height: 42px; width: 170px;margin-right: 30px; margin-left:25px" v-model="customerid">
                           <option class="ui left icon input"</option>
                           <i class="lock icon"></i>
                           <option v-for="item in resultshowcust['results']" 
                             :value="item['customer id']">
                           {{item['name en']}}
                           </option>
                         </select></td>
                            </tr>
                        </table>
                          </div>
                           <div class="field">                           
                              <label>Code</label>
                              <input v-model="code" placeholder="Code" type="text">
                            </div>
                             <div class="field">
                              <label>Address</label>
                              <input v-model="address" placeholder="Address" type="text">
                            </div>
                             <div class="field">
                              <label>Email</label>
                              <input v-model="email" placeholder="Email" type="text">
                            </div>
                             <div class="field">
                              <label>Name customer</label>
                              <select class="ui dropdown" v-model="namecustomer">
                               <option class="ui left icon input"</option>
                               <i class="lock icon"></i>
                               <option v-for="item in resultshowcust['results']"
                               :value="item['name en']">{{item['name en']}}</option>
                             </select>
                            </div>
                              <div class="field">
                              <label>Phone</label>
                              <input v-model="phone" placeholder="Phone" type="text">
                            </div>
                            <div class="field">
                              <label>Website</label>
                              <input v-model="website" placeholder="Website" type="text">
                            </div>
                            <!-- <div class="field">
                              <label>Token</label>
                              <input v-model="token" placeholder="Token" type="text">
                            </div>
                              <div class="field">
                                <label>Role</label>
                                 <select class="ui dropdown" style="width: 111px" v-model="role">
                                   <option class="ui left icon input"</option>
                                   <i class="lock icon"></i>
                                   <option value="admin">admin</option>
                                   <option value="user">user</option>
                                 </select>
                              </div> -->
                          <div class="inline field">
                            
                        <br>
                        <br>
                        <button class="ui primary button" @click="submitaddsite()">
                          Submit
                        </button>
                      </div>
                    </div>  
                    </div>
                    <!-- --==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--== -->
                    <div v-if="currentPage === 'add-service'">
                    <center><h3>Add Customer Service</h3></center>
                      <br>
                        <div class="ui form">
                        <div class="two fields">
                          <table style="margin-right: 100px">
                              <tr>
                                <td> <h5>Name Customer Service</h5></td>
                                <td> <h5 style="margin-left: 30px">Customer</h5></label></td>
                                <td> <h5>ID</h5></td>
                              </tr>
                               <tr>
                                <td>
                          <input v-model="name" placeholder="Name_service" type="text" style="height: 42px; margin-right: 365px">
                              </td>
                              <td><select class="ui dropdown" style="height: 42px; width: 170px;margin-right: 30px; margin-left:25px" v-model="customerid">
                           <option class="ui left icon input"</option>
                           <i class="lock icon"></i>
                           <option v-for="itema in resultshowcust['results']" :value="itema['customer id']">{{itema['name en']}}</option>
                         </select></td>
                              <td><input placeholder="Idcust" type="text" style=" width: 170px;height: 42px;" :value="customerid" ></td>
                            </tr>
                        </table>
                          </div>
                          <div class="field">
                              <label style="margin-right: 700px;">Interface service name</label>
                              <input v-model="ifsername" placeholder="ifsername" type="text">
                            </div>
                           <div class="field">
                              <label style="margin-right: 700px;">Description</label>
                              <input v-model="description" placeholder="description" type="text">
                            </div>
                              <button class="ui basic button" style="height: 42px; width: 175px;margin-right: 600px; margin-left:25px" @click="Calcountnet()">
                                    <i class="icon user"></i>
                                    Add Netobject
                                  </button>
                                <div class="two fields">
                            <table style="margin-right: 100px" v-if="addnetobj">
                                <tr>
                                 <!--  <td> <h5>Name(Router)</h5></td> -->
                                  <td> <h5 style="margin-left: 30px">Netobject Lv1</h5></label></td>
                                  <td> <h5>Netobject Lv2</h5></td>
                                  <td> <h5>Netobject Lv4</h5></td>
                                </tr>
                              <tr v-for="i in count1" style="margin-left: 25px;">
                              <td><select class="ui dropdown" style="height: 42px; width: 230px;margin-right: 30px; margin-left:25px" v-model="idlv1" @change="SelectNetobjectLv1()">
                               <option class="ui left icon input"</option>
                            <i class="lock icon"></i>
                            <option v-for="(item,index) in resultshownetobj1" :value="item">{{index}}</option>
                             </select></td>
                              <td>
                                <select class="ui dropdown" style="height: 42px; width: 230px;margin-right: 30px; margin-left:25px" v-model="idlv2" @change="SelectNetobjectLv2()">
                               <option class="ui left icon input"</option>
                            <i class="lock icon"></i>
                            <option v-for="(item,index) in resultshownetobj2" :value="item">{{index}}    </option>
                             </select>
                              </td>
                              <td>
                                <select class="ui dropdown" style="height: 42px; width: 230px;margin-right: 30px; margin-left:25px" v-model="netobjectid">
                               <option class="ui left icon input"</option>
                            <i class="lock icon"></i>
                            <option v-for="(item,index) in resultshownetobj4" :value="item">{{index}}    </option>
                             </select>
                              </td>
                              </tr>
                          </table>
                          </div>
                             <div class="field">
                             <label style="margin-right: 680px;">Service id</label>
                              <select class="ui dropdown" style="height: 42px; width: 170px;margin-right: 600px; margin-left:25px" v-model="serviceid">
                           <option class="ui left icon input"</option>
                           <i class="lock icon"></i>
                           <option v-for="itemd in resultgetservice['results']" :value="itemd['service id']">{{itemd['service name']}}</option>
                         </select>
                            </div>
                             <div class="field">
                             <label style="margin-right: 700px;">Siteid</label>
                              <select class="ui dropdown" style="height: 42px; width: 170px;margin-right: 600px; margin-left:25px" v-model="siteid">
                           <option class="ui left icon input"</option>
                           <i class="lock icon"></i>
                           <option v-for="itemg in resultshowsite['results']" :value="itemg['site id']">{{itemg['name ']}}</option>
                         </select>
                            </div>
                            <br>
                               <button class="ui basic button" style="height: 42px; width: 175px;margin-right: 600px; margin-left:25px" @click="Calcount()">
                                <i class="icon user"></i>
                                Add Router
                              </button>
                            <div class="two fields">
                        <table style="margin-right: 100px" v-if="addrouters">
                            <tr>
                             <!--  <td> <h5>Name(Router)</h5></td> -->
                              <td> <h5 style="margin-left: 30px">Router</h5></label></td>
                              <td> <h5>Interface</h5></td>
                            </tr>
                             <tr>
                          </tr>
                          <tr v-for="i in count" style="margin-left: 25px;">
                          <td><select class="ui dropdown" style="height: 42px; width: 330px;margin-right: 30px; margin-left:25px" v-model="service[i-1]">
                           <option class="ui left icon input"</option>
                        <i class="lock icon"></i>
                        <option v-for="itemp in resultshowrouter['results']" :value="itemp['router id']">{{itemp['routername']}}</option>
                         </select></td>
                          <td>
                            <select class="ui dropdown" style="height: 42px; width: 330px;margin-right: 30px; margin-left:25px" v-model="interface[i-1]">
                           <option class="ui left icon input"</option>
                        <i class="lock icon"></i>
                        <option v-for="(item,index) in resultshowinterface" :value="item">{{index}}    </option>
                         </select>
                          </td>
                          </tr>
                      </table>
                      </div>
                    <!-- --==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--== -->
                     <!--  <br>
                            <div class="field">
                              <label>Token</label>
                              <input v-model="token" placeholder="Token" type="text">
                            </div> -->
                          <div class="inline field">
                            <div class="ui checkbox">
                              <input type="checkbox" tabindex="0" class="hidden" style="padding-top: 12px">
                        </div>
                        <br>
                        <br>
                        <button class="ui primary button" @click="Clicksubmitaddservice()">
                          Submit
                        </button>
                      </div>
                    </div>  
                    </div>
                    <!-- --==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--== -->
                    <div v-if="currentPage === 'show-node'">
                    <center><h3>Show Router</h3></center>
                      <br>
                        <table class="ui fixed single line celled table">
                          <thead>
                            <tr><th>Router Name *</th>
                            <th>Router ID *</th>
                            <th>Community</th>
                            <th>Hostname</th>
                            <th>POP</th>
                            <th>Region</th>
                            <th>Zone</th>
                            <th style="width: 150px">Edit/Delete</th>
                          </tr></thead>
                          <tbody>
                            <tr v-for="item in resultshownode['results']">
                                <td>{{item['routername']}}</td>
                                <td>{{item['router id']}}</td>
                                <td>{{item['community string']}}</td>
                                <td>{{item['hostname']}}</td>
                                <td>{{item['pop']}}</td>
                                <td>{{item['region']}}</td>
                                <td>{{item['zone']}}</td>
                                <td>
                                <button class="mini ui button yellow" @click="editnode()">
                                  Edit
                                </button>
                                <button class="mini ui button red">
                                  Delete
                                </button></td>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                       <div v-if="currentPage === 'add-node'">
                       <center><h3>Add Router</h3></center>
                      <br>
                        <div class="ui form">
                        <div class="field">
                        <label>Name(Router)</label>
                          <input v-model="name" placeholder="Namerouter" type="text">
                          </div>
                           <div class="field">
                              <label>Host</label>
                              <input v-model="host" placeholder="host" type="text">
                            </div>
                             <div class="field">
                              <label>Comunity</label>
                              <input v-model="comstr" placeholder="comstr" type="text">
                            </div>
                             <div class="field">
                              <label>POP</label>
                              <input v-model="pop" placeholder="pop" type="text">
                            </div>
                             <div class="field">
                              <label>Region</label>
                              <input v-model="region" placeholder="region" type="text">
                            </div>
                             <div class="field">
                              <label>Zone</label>
                              <input v-model="zone" placeholder="zone" type="text">
                            </div>
                            <!-- <div class="field">
                              <label>Token</label>
                              <input v-model="token" placeholder="Token" type="text">
                            </div>
                              <div class="field">
                                <label>Role</label>
                                 <select class="ui dropdown" style="width: 111px" v-model="role">
                                   <option class="ui left icon input"</option>
                                   <i class="lock icon"></i>
                                   <option value="admin">admin</option>
                                   <option value="user">user</option>
                                 </select>
                              </div> -->
                          <div class="inline field">
                            
                        <br>
                        <br>
                        <button class="ui primary button" @click="submitaddnode()">
                          Submit
                        </button>
                      </div>
                    </div>  
                    </div>
                    <!-- --==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--== -->
                     <div v-if="currentPage==='map-customer'">
                     <center><h3>Manage Customer</h3></center>
                        <div class="ui form">
                          <div class="field">
                             <label style="margin-right: 695px;">User</label>
                              <select class="ui dropdown" style="height: 42px; width: 170px;margin-right: 600px; margin-left:25px" v-model="loginid">
                           <option class="ui left icon input"</option>
                           <i class="lock icon"></i>
                           <option v-for="(item,index) in resultidcus" :value="item">{{index}}</option>
                         </select>
                            </div>
                            <div class="field">
                            
                         <!-- --==--==--==--==--==--==--==--==--==-->
                          <button class="ui basic button" style="height: 42px; width: 175px;margin-right: 600px; margin-left:25px" @click="Calcountmap()">
                                <i class="icon user"></i>
                                Customer ID
                              </button>
                            <div class="two fields">
                        <table style="margin-right: 100px" v-if="mapcus">
                            <tr>
                             <!--  <td> <h5>Name(Router)</h5></td> -->
                              <td> <h5 style="margin-left: 30px">Customer</h5></label></td>
                            </tr>
                             <tr>
                          </tr>
                          <tr v-for="i in count2" style="margin-left: 25px;">
                          <td><select class="ui dropdown" style="height: 42px; width: 330px;margin-right: 30px; margin-left:25px" v-model="customerid[i-1]">
                           <option class="ui left icon input"</option>
                        <i class="lock icon"></i>
                        <option v-for="item in resultshowcust['results']" :value="item['customer id']">{{item['name en']}}
                        </option>
                         </select></td>
                          </tr>
                      </table>
                      </div>
                         <button class="ui primary button" @click="mapcustomer()">
                          Submit
                        </button>
                            </div>
                          </div>
                        </div>
                  <!-- --==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--== -->
                     <div v-if="currentPage === 'show-service-name'">
                     <center><h3>Show Service Name</h3></center>
                        <table class="ui fixed single line celled table">
                          <thead>
                            <tr><th style="width: 100px" >Name *</th>
                            <th>Service id</th>
                            <th>Inter upload</th>
                            <th>Inter Download</th>
                            <th>Domestic upload</th>
                            <th>Domestic download</th>
                            <th style="width: 150px">Edit/Delete</th>
                          </tr>
                          </tr></thead>
                          <tbody>
                            <tr v-for="item in resultshowservicename['results']">
                               <td>{{item['service name']}}</td>
                                <td>{{item['service id']}}</td>
                                <td>{{item['inter upload speed']}}</td>
                                <td>{{item['inter download speed']}}</td>
                                <td>{{item['domestic upload speed']}}</td>
                                <td>{{item['domestic download speed']}}</td>
                                <td>
                                <button class="mini ui button yellow" @click="editservicename(item['service id'])">
                                  Edit
                                </button>
                                <button class="mini ui button red">
                                  Delete
                                </button></td>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                       <div v-if="currentPage === 'add-service-name'">
                       <center><h3>Add service</h3></center>
                       <br>
                        <div class="ui form">
                        <div class="field">
                        <label>Nameservice</label>
                          <input v-model="name" placeholder="Name_service" type="text">
                          </div>
                           <div class="field">
                              <label>Domestic upload speed</label>
                              <input v-model="nixup" placeholder="nixup" type="text">
                            </div>
                             <div class="field">
                              <label>Domestic download speed</label>
                              <input v-model="nixdown" placeholder="nixdown" type="text">
                            </div>
                             <div class="field">
                              <label>Inter upload speed</label>
                              <input v-model="iigup" placeholder="ligup" type="text">
                            </div>
                             <div class="field">
                              <label>Inter download speed</label>
                              <input v-model="iigdown" placeholder="ligdown" type="text">
                            </div>
                           <!--  <div class="field">
                              <label>Token</label>
                              <input v-model="token" placeholder="Token" type="text">
                            </div> -->
                              <!-- <div class="field">
                                <label>Role</label>
                                 <select class="ui dropdown" style="width: 111px" v-model="role">
                                   <option class="ui left icon input"</option>
                                   <i class="lock icon"></i>
                                   <option value="admin">admin</option>
                                   <option value="user">user</option>
                                 </select>
                              </div> -->
                          <div class="inline field">
                           
                        <br>
                        <br>
                        <button class="ui primary button" @click="submitaddservicename()">
                          Submit
                        </button>
                      </div>
                    </div>  
                    </div>
                    <!-- --==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--== -->
                      <div class="ui form" v-if="currentPage === 'add-cust'">
                      <center><h3>Add Customer </h3></center>
                      <br>
                      <div class="two fields">
                      <div class="field">
                          <label>Name(TH)</label>
                          <input v-model="name_th" placeholder="Full Name TH" type="text">
                        </div>
                        <div class="field error">
                          <label>Name(En)</label>
                          <input v-model="name_en" placeholder="Full Name EN" type="text">
                        </div>
                      </div>
                       <div class="field">
                          <label>Code</label>
                          <input v-model="code" placeholder="Code" type="text">
                        </div>
                         <div class="field">
                          <label>Address</label>
                          <input v-model="address" placeholder="Address" type="text">
                        </div>
                         <div class="field">
                          <label>Context</label>
                          <input v-model="context" placeholder="Contaxt" type="text">
                        </div>
                       <!--  <div class="field">
                          <label>Token</label>
                          <input v-model="token" placeholder="Contaxt" type="text">
                        </div>
                      <div class="field">
                        <label>Role</label>
                         <select class="ui dropdown" style="width: 111px" v-model="role">
                           <option class="ui left icon input"</option>
                           <i class="lock icon"></i>
                           <option value="admin">admin</option>
                           <option value="user">user</option>
                         </select>
                      </div> -->
                      <div class="inline field">
                       
                        <br>
                        <br>
                        <button class="ui primary button" @click="submitcust()">
                          Submit
                        </button>
                      </div>
                    </div>  
                    </div>
                    <div class="six wide column"></div>
                  </div>
                  <div class="ui grid">
                  </div>
                  {{token}}
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
