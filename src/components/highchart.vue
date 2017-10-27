<template>
<div><br>
<button id="submitadd" style="visibility: visible;">login</button>
<button id="interin" style="visibility: hidden;">Inter in</button>
<button id="interout" style="visibility: hidden;">Inter out</button>
</div>  
</template>
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<script>
var data = { username: 'tar', password: 'thanaphon'
}
var interin = {
  customerserviceid: '2',
  starttime: '2017-10-06 12:00:00+0000',
  endtime: '2017-10-06 14:00:00+0000',
  type: 'interin'
}
var interout = {
  customerserviceid: '2',
  starttime: '2017-10-06 12:00:00+0000',
  endtime: '2017-10-06 14:00:00+0000',
  type: 'interout'
}
var responsetoken
var listdate
var listdata
$('#submitadd').click(function () {
  this.username = $('#txtusername').val()
  this.password = $('#txtpassword').val()
  this.role = $('#txtrole').val()
  $.ajax({
    url: 'http://203.150.54.141:5000/login',
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function (response) {
      responsetoken = response.token
      console.log(responsetoken)
      $('#interin').css('visibility', 'visible')
      $('#interout').css('visibility', 'visible')
      $('#submitadd').css('visibility', 'hidden')
    },
    error: function (error) {
      console.log(error)
    }
  })
})
$('#interin').click(function () {
  $.ajax({
    url: 'http://203.150.54.141:5000/getvalue',
    type: 'POST',
    data: JSON.stringify(interin),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function (response) {
      listdate = response.date
      listdata = response.value
      console.log(listdate)
      console.log(listdata)
      $('#container').css('visibility', 'visible')
      'Highcharts'.setOptions({
        global: {
          useUTC: false
        }
      })
      'Highcharts'.chart('container', {
        chart: {
          type: 'line'
        },
        title: {
          text: 'Monitor Bandwidth'
        },
        subtitle: {
          text: 'inter'
        },
        xAxis: {
          type: 'datetime',
          labels: { format: '{value:%Y-%b-%e %H:%M:%S %A}' },
          categories: listdate },
        yAxis: {
          title: { text: 'Bandwidth (kbps)' }
        },
        plotOptions: {
          line: { dataLabels: { enabled: true }, enableMouseTracking: false }
        },
        series: [{ name: 'Inter Bandwidth in', data: listdata }]
      })
    },
    error: function (error) {
      console.log(error)
    }
  })
})
$('#interout').click(function () {
  $.ajax({
    url: 'http://203.150.54.141:5000/getvalue',
    type: 'POST',
    data: JSON.stringify(interout),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function (response) {
      listdate = response.date
      listdata = response.value
      console.log(listdate)
      console.log(listdata)
      $('#container').css('visibility', 'visible')
      'Highcharts'.setOptions({
        global: {
          useUTC: false
        }
      })
      'Highcharts'.chart('container', {
        chart: {
          type: 'line'
        },
        title: {
          text: 'Monitor Bandwidth'
        },
        subtitle: {
          text: 'inter'
        },
        xAxis: {
          type: 'datetime',
          labels: { format: '{value:%Y-%b-%e %H:%M:%S %A}' },
          categories: listdate
        },
        yAxis: {
          title: { text: 'Bandwidth (kbps)' }
        },
        plotOptions: {
          line: {
            dataLabels: { enabled: true
            },
            enableMouseTracking: false
          }
        },
        series: [{
          name: 'Inter Bandwidth out',
          data: listdata
        }]
      })
    },
    error: function (error) {
      console.log(error)
    }
  })
})
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data: 'Thanaphon tar ',
      name: '',
      name2: '',
      starttime: '',
      endtime: '',
      result: '',
      token: ''
    }
  },
  methods: {
    hello () {
      this.$http.post('http://203.150.54.141:5000/getcustomer', { token: this.token }).then((response) => {
        this.result = response.body
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
