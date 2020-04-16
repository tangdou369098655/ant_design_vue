<template>
  <page-view :title="title">
    <div id="myChart" ref="mapBox" style="width: 100%; height: 500px"></div>
  </page-view>
</template>
<script>
import { PageView } from '@/layouts'
import echarts from 'echarts'
// 設置圖表基礎配置項和數據
const myOption = {
  title: {
    text: '粒子計數器',
    link: 'http://localhost:8000/',
    subtext: '線體信息一覽表',
    left: 'center',
    align: 'right'
  },
  // title: {
  //     text: '折线图堆叠'
  // },
  tooltip: {
    trigger: 'axis'
  },
  legend: { // 工站名稱
    data: ['必須對應', '联盟广告', '视频广告', '直接访问', '搜索引擎']
  },
  grid: {
    left: '5%', // 圖表距離左邊的距離
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false, // 時間數組['2020/03/17 00:00', '2020/03/17 00:30', '2020/03/17 01:00'..., '2020/03/18 00:00']
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '必須對應', // 放um03  對應的數據
      type: 'line',
      stack: '0',
      data: [120, 200, 101, 134, 90, 230, 210]
    },
    {
      name: '联盟广告',
      type: 'line',
      stack: '1',
      data: [220, 200, 191, 234, 290, 330, 310]
    },
    {
      name: '视频广告',
      type: 'line',
      stack: '2',
      data: [150, 200, 201, 154, 190, 330, 410]
    },
    {
      name: '直接访问',
      type: 'line',
      stack: '3',
      data: [320, 200, 301, 334, 390, 330, 320]
    },
    {
      name: '搜索引擎',
      type: 'line',
      stack: '4',
      data: [820, 200, 901, 934, 1290, 1330, 1320]
    }
  ]
}
export default {
  components: {
    PageView
  },
  data() {
    return {}
  },
  mounted() {
    // 初始化echarts實例
    this.myChart = echarts.init(this.$refs.mapBox)
    // 設置圖表的配置項和數據
    this.getData()
  },
  methods: {
    // 獲取數據，設置圖表配置項和數據1
    getData() {
      // const list = [{},{}]
      // myOption.series = list
      this.myChart.setOption(myOption)
    },
    // 獲取數據，設置圖表配置項和數據2
    // 設置圖表自定縮放1
    resizeTheChart() {
      console.log('縮放執行中~~~')
      if (this.$refs && this.$refs.mapBox) {
        const myChartNode = document.getElementById('myChart')
        if (myChartNode) {
          myChartNode.style.height = myChartNode.offsetWidth * 0.6 + 'px'
        }
        this.myChart.resize()
      }
    }
    // 設置圖表自定縮放2
  },
  computed: {
    title() {
      return this.$route.meta.title
    }
  },
  activated() {
    // 設置圖表自定義縮放
    window.addEventListener('resize', this.resizeTheChart)
  },
  deactivated() {
    window.removeEventListener('resize', this.resizeTheChart)
  }
}
</script>
