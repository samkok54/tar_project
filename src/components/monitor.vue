<template>
  <div class="hello"><br>
    <div class="ui middle aligned center aligned grid">
      <div class="column">
        <h2 class="ui image header">
        </h2>
         <div>
          <center><vue-highcharts :options="options" ref="lineCharts" style="height:330px;width:800px;"></vue-highcharts>
          <br>
          <!-- <button @click="load">load</button>
          <button @click="testgetvalue()">load2</button> -->
          </center>
        </div>
         <form  class="ui large form">
          <div class="ui stacked secondary  segment" style="margin-right: 500px;margin-left: 500px;opacity: 0.5;padding-bottom: 17px;">
            <div class="field">
            <label style="text-align: center;">Startime</label>
              <div class="ui icon input">
                <input type="text" v-model="startTime" placeholder="startTime">
              </div>
            </div>
            <div class="field">
             <label style="text-align: center;">Endtime</label>
              <div class="ui icon input">
                <input type="text" v-model="endTime" placeholder="endTime">
              </div>
            </div>
             <label>Type</label>
            <select class="ui dropdown" v-model="type">
             <option class="ui left icon input" value="">Type</option>
             <i class="lock icon"></i>
             <option value="interin">interin</option>
             <option value="interout">interout</option>
           </select>
           <br>
           <select class="ui dropdown" v-model="custserviceId">
             <option class="ui left icon input" value="">ID</option>
             <i class="lock icon"></i>
             <option v-for="item in resultgetservice['results']" :value="item['customer service id']" >{{item['Name customer service']}} ({{item['customer service id']}})</option>
           </select>
           <div class="ui fluid large teal submit button" style="margin-top: 25px;" @click="testgetvalue()"  >Submit</div><br>
           <div class="ui buttons">
           <button class="ui labeled icon button active" style="margin-left: 150px" @click="toLogin()">
              <i class="left chevron icon"></i>
              Back
            </button>
          </div>
        </div>
        <div class="ui error message"></div>
        <center>
        </center>
      </form>
        {{result['value']}}
        {{result['date']}}
        {{token}}
        ----------------->{{custId}}
        <br>
    </div>
  </div>
</div>
</template>
<script>
import VueHighcharts from 'vue2-highcharts'
export default{
  components: {
    VueHighcharts
  },
  data () {
    return {
      result: '',
      custserviceId: '',
      startTime: '',
      endTime: '',
      type: '',
      resultgetservice: '',
      token: '',
      custId: '',
      asyncData: {
        name: 'Interin',
        marker: {
          symbol: 'square'
        },
        data: []
      },
      options: {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'Monitor Bandwidth'
        },
        xAxis: {
          categories: []
        },
        yAxis: {
          title: {
            text: 'Bandwidth'
          }
        },
        tooltip: {
          crosshairs: true,
          shared: true
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          spline: {
            marker: {
              radius: 4,
              lineColor: '#666666',
              lineWidth: 1
            }
          }
        },
        series: []
      }
    }
  },
  created () {
    this.token = localStorage.getItem('token')
    this.custId = localStorage.getItem('custId')
  },
  watch: {
    type: function (newQuestion) {
      this.asyncData = {
        name: this.type,
        marker: {
          symbol: 'square'
        },
        data: []
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
  },
  methods: {
    toLogin () {
      this.$router.push('/test')
    },
    testgetvalue () {
      this.$http.post('http://203.150.54.141:5000/getvalue', { 'customer service id': this.custserviceId,
        'start time': this.startTime,
        'end time': this.endTime,
        'type': this.type
      }).then((response) => {
        this.result = response.body
        // console.log(this.result)
        this.asyncData['data'] = this.result['value']
        this.options['categories'] = this.result['date']
        console.log(this.options)
        console.log(this.asyncData)
        let lineCharts = this.$refs.lineCharts
        lineCharts.delegateMethod('showLoading', 'Loading...')
        setTimeout(() => {
          lineCharts.addSeries(this.asyncData, this.options)
          lineCharts.hideLoading()
        }, 2000)
      }, (response) => {
        console.log('Error')
      })
    },
    load () {
      let lineCharts = this.$refs.lineCharts
      lineCharts.delegateMethod('showLoading', 'Loading...')
      setTimeout(() => {
        lineCharts.addSeries(this.asyncData)
        lineCharts.hideLoading()
      }, 2000)
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
  width: 200vh;
  /*margin-bottom: 0px;*/
  /*display: block;*/
  position: 100vh;
}
</style>
