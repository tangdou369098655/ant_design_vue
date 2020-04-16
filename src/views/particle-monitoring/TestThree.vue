<template>
  <div class="hello">
    <!-- 初始化echarts需要一个有宽高的盒子 -->
    <div
      id="mychart"
      ref="mapbox"
      style="margin-top:10px;width:100%;min-width:300px;height:100%;min-height:400px"
    ></div>
  </div>
</template>
<script>
import echarts from 'echarts'
import 'echarts/map/js/china'
// import axios from 'axios'
// import jsonp from 'jsonp'
// const option1 = {
//   xAxis: {
//     type: 'category',
//     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//   },
//   yAxis: {
//     type: 'value'
//   },
//   series: [
//     {
//       data: [820, 932, 901, 934, 1290, 1330, 1320],
//       type: 'line'
//     }
//   ]
// }
// 使用地图先注册地图
const option2 = {
  title: { text: '疫情地图', link: 'http://tangdd.cn', subtext: '全国疫情地图一览表' },
  series: [
    {
      data: [], // 用来展示后台给的数据
      type: 'map', // 控制是折线图还是地图
      map: 'china', // 控制是那个地区地图
      label: { show: true, color: 'black', fontSize: 10 }, // 控制对应地区的汉字
      itemStyle: {
        areaColor: 'pink',
        borderColor: '#776a6a'
      }, // 控制地图的颜色还有边框
      emphasis: {
        label: {
          color: 'black',
          fontSize: 12
        },
        itemStyle: {
          areaColor: '#ccc'
        }
      }, // 控制鼠标滑过之后背景色和字体颜色
      zoom: 1 // 控制地图的放大缩小
    }
  ],
  // 分层次显示地图颜色用下面这个东西,就是地图左下角那个东西
  visualMap: [
    {
      zoom: 1,
      type: 'piecewise', // 条状
      show: true,
      splitNumber: 5, // 默认分为几条，就是看你要搞几个间断
      pieces: [
        { min: 10000 },
        { min: 1000, max: 9999 },
        { min: 100, max: 999 },
        { min: 10, max: 99 },
        { min: 1, max: 9 }
      ],
      align: 'right', // 控制字和条的位置，默认放到左边
      // orient:'horizontal',// 控制整块的位置是平铺一大长条还是垂直啥的,默认垂直
      // left:40 ,// 控制分段位置控制整块的位置
      // right:100 // 控制分段位置控制整块的位置
      // showLabel:false,// 这个没什么用处，会隐藏字
      // textStyle：{},// 这个很明显是搞字体的
      inRange: {
        symbol: 'rect',
        color: ['#ffc9c9', '#9c0505']
      }, // 这个控制小图是圆的还是方的啥的还有渐变色
      itemWidth: 8,
      itemHeight: 4
    }
  ]
}
export default {
  name: 'HelloWorld',
  components: {
    // mytop
  },
  data() {
    return {
    }
  },
  mounted() {
    this.mychart = echarts.init(this.$refs.mapbox)
    this.getData()
    console.log(this.mychart)
    // mychart.setOption(option1)
    this.mychart.setOption(option2)
    this.resizeTheChart()
    window.addEventListener('resize', this.resizeTheChart)
  },
  methods: {
    resizeTheChart() {
      console.log('第三個界面的resizez事件')
      if (this.$refs && this.$refs.mapbox) {
        const mychartNode = document.getElementById('mychart')
        if (mychartNode) {
        mychartNode.style.height = mychartNode.offsetWidth * 0.8 + 'px'
        }
        this.mychart.resize()
      }
    },
    // 接口采用自'https://renjinhui.github.io/review_vue/dist/index.html#/yqdt'
    getData() {
      // jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427&callback=__jp0',{},(err,data)=>{
      //   if(!err){
      //     console.log(data)
      //     let list = data.data.list.map(item=>({name:item.name,value:item.value}))
      //     option2.series[0].data = list;
      //     console.log(list)
      //     this.mychart.setOption(option2)//这行代码必须是DOM渲染完成才可以执行哦
      //   }
      // })

      const list = [
        { name: '北京', value: '455' },
        { name: '湖北', value: '67799' },
        { name: '广东', value: '1364' },
        { name: '浙江', value: '1232' },
        { name: '河南', value: '1273' },
        { name: '湖南', value: '1018' },
        { name: '重庆', value: '576' },
        { name: '安徽', value: '990' },
        { name: '四川', value: '539' },
        { name: '山东', value: '761' },
        { name: '吉林', value: '93' },
        { name: '福建', value: '296' },
        { name: '江西', value: '935' },
        { name: '江苏', value: '631' },
        { name: '上海', value: '358' },
        { name: '广西', value: '253' },
        { name: '海南', value: '168' },
        { name: '陕西', value: '246' },
        { name: '河北', value: '318' },
        { name: '黑龙江', value: '482' },
        { name: '辽宁', value: '125' },
        { name: '云南', value: '176' },
        { name: '天津', value: '136' },
        { name: '山西', value: '133' },
        { name: '甘肃', value: '133' },
        { name: '内蒙古', value: '75' },
        { name: '台湾', value: '67' },
        { name: '澳门', value: '12' },
        { name: '香港', value: '157' },
        { name: '贵州', value: '146' },
        { name: '西藏', value: '1' },
        { name: '青海', value: '18' },
        { name: '新疆', value: '76' },
        { name: '宁夏', value: '75' }
      ]
      option2.series[0].data = JSON.parse(JSON.stringify(list))
      console.log(list)
      this.mychart.setOption(option2) // 这行代码必须是DOM渲染完成才可以执行哦
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeTheChart)
    window.onresize = null
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
* {
  padding: 0;
  margin: 0;
}
h3 {
  margin: 40px 0 0;
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
