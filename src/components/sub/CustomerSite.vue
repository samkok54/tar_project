<template>
  <div @click="isOpen=!isOpen; getSite()" class="cust-list">
    {{customer['name en']}}
    <div v-for="item in siteData" v-if="item['name customer'] == customer['name en'] && isOpen">
      <div class="site">
        {{item['name ']}} ({{item['site id']}})
        <div class="popup-box-service">
          <div class="service-list"
            v-for="service in serviceName" 
            v-if="service['siteId']===item['site id']" 
            @click="serviceMonitor(service[('customerId')])">
            <!-- {{service['serviceName']}} ({{service['serviceId']}}) - {{service['customerName']}} -->
            {{service['customerName']}}
            ({{service[('customerId')]}})
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['customer', 'customerServices', 'services'],
  data () {
    return {
      token: '',
      isOpen: false,
      siteData: []
    }
  },
  mounted () {
    $('.ui.dropdown').dropdown()
    this.token = localStorage.getItem('token')
  },
  methods: {
    serviceMonitor (custId) {
      localStorage.setItem('custId', custId)
      this.$router.push('/monitoroneService')
    },
    getSite () {
      // alert('sssssssssss')
      this.$http.post('http://203.150.54.141:5000/getsite', { token: this.token }).then((response) => {
        if (response.body) {
          this.siteData = response.body.results
        }
        console.log(this.siteData)
      }, (response) => {
        console.log('Error')
      })
    }
  },
  computed: {
    serviceName () {
      let list = []
      this.customerServices.map(custService => {
        list.push({
          siteId: custService['site id'],
          serviceId: custService['service id'],
          customerName: custService['Name customer service'],
          customerId: custService['customer service id']
        })
        // this.services.map(service => {
        //   if (custService['service id'] === service['service id']) {
        //     list.push({
        //       siteId: custService['site id'],
        //       serviceId: custService['service id'],
        //       serviceName: service['service name'],
        //       customerName: custService['Name customer service']
        //     })
        //   }
        // })
      })
      return list
    }
  }
}
</script>

<style scoped>
  .cust-list {
    position: relative;
  }
  .site {
    width: 100%;
    padding: 10px 0;
    position: relative;
  }
  .site:hover {
    background: #CCCCCC;
  }
  .site:hover .popup-box-service {
    visibility: visible;
  }
  .popup-box-service {
    visibility: hidden;
    position: absolute;
    top: 0px;
    left: 145px;
    width: 300px;
    background: #FFFFFF;
    border-radius: 5px;
    border: 1px solid #AAA;
    padding: 10px;
    z-index: 99;
  }
  .service-list {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .service-list:hover {
    cursor: pointer;
    background: #CCCCCC;
  }
</style>