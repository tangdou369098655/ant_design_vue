<template>
  <page-view :title="title">
    <div class="information_maintenance">
      <!-- 頂部內容1 -->
      <!-- 按鈕組1 -->
      <div class="button_group">
        <!-- 查詢 -->
        <a-button type="primary" class="button_s" @click="mySearch">查詢</a-button>
        <!-- 新增 -->
        <a-button type="primary" class="button_s" @click="myIncreased">新增</a-button>
        <!-- 導入 -->
        <a href="javascript:;" class="button_s my_file ant-btn-primary ant-btn">
          <input type="file" @change="importExcel" class="my_input" />導入
        </a>
        <!-- 導出 -->
        <a-button type="primary" class="button_s" @click="myGetDate">導出</a-button>
        <!-- 導出模板 -->
        <a-button type="primary" class="button_m" @click="myExport">導出模板</a-button>
      </div>
      <!-- 按鈕組2 -->
      <!-- 頂部下拉框1 -->
      <div class="top">
        <!-- 廠區 -->
        <div class="item">
          <span class="label">廠區</span>
          <a-select defaultValue="lucy" style="width: 230px" :loading="false">
            <a-select-option value="lucy">Lucy</a-select-option>
          </a-select>
        </div>
        <!-- 製程 -->
        <div class="item">
          <span class="label">製程</span>
          <a-select defaultValue="lucy" style="width: 230px" :loading="false">
            <a-select-option value="lucy">Lucy</a-select-option>
          </a-select>
        </div>
        <!-- 樓層 -->
        <div class="item">
          <span class="label">樓層</span>
          <a-select defaultValue="lucy" style="width: 230px" :loading="false">
            <a-select-option value="lucy">Lucy</a-select-option>
          </a-select>
        </div>
        <!-- 線體 -->
        <div class="item">
          <span class="label">線體</span>
          <a-select defaultValue="lucy" style="width: 230px" :loading="false">
            <a-select-option value="lucy">Lucy</a-select-option>
          </a-select>
        </div>
      </div>
      <!-- 頂部下拉框2 -->
      <!-- 頂部內容2 -->
      <!-- 表格區域1 -->
      <div class="small-table-spacing">
        <a-table
          :columns="columns"
          :dataSource="dataArr"
          rowKey="id"
          :scroll="{x:6000, y: 500 }"
          bordered
          :pagination="false"
        >
          <template slot="action" slot-scope="text, record">
            <div class="editable-row-operations">
              <span>
                <a @click="() => save(record)">修改</a>
                <span style="margin: 0px 8px;">|</span>
                <a-popconfirm title="Sure to delete?" @confirm="() => cancel(record)">
                  <a>刪除</a>
                </a-popconfirm>
              </span>
            </div>
          </template>
        </a-table>
      </div>
      <!-- 表格區域2 -->
      <!-- 彈出框1 -->
      <a-modal
        v-model="alertModalVisible"
        title="Title"
        :closable="true"
        @ok="handleOk"
        width="800"
        @cancel="handleCancel"
      >
        <template slot="footer">
          <a-button 
            key="back" 
            @click="handleCancel"
          >
          取消
          </a-button>
          <a-button key="submit" type="primary" :loading="submitLoading" @click="handleOk">Submit</a-button>
        </template>
        <!-- 模態框內容1 -->
        <div class="particle_modal">
          <InputFrame :myinputs="myFormdata"></InputFrame>
          <div class="input_frame">
            <a-card size="small" title="粒子數量設定" style="width: 49%">
              <div class="card_items">
                <span class="card_span"></span>
                <span class="card_center">最小值</span>
                <span class="card_center">最大值</span>
              </div>
              <div class="card_items" v-for="(item, i) in cardData" :key="i">
                <span class="card_span">{{ item.text }}</span>
                <a-input-number
                  class="items_input"
                  v-model="item.minv"
                  :disabled="item.disabled"
                  :style="item.minvstyle ? item.mainstyle : ''"
                  @change="item.change($event)"
                  :min="item.min ? item.min : 0"
                  :max="item.max ? item.max : 999999"
                  :step="item.step ? item.step : 0.1"
                />
                <a-input-number
                  class="items_input"
                  v-model="item.maxv"
                  :disabled="item.disabled"
                  :style="item.maxvstyle ? item.mainstyle : ''"
                  @change="item.change($event)"
                  :min="item.min ? item.min : 0"
                  :max="item.max ? item.max : 999999"
                  :step="item.step ? item.step : 0.1"
                />
              </div>
            </a-card>
            <a-card size="small" title="粒子數量設定" style="width: 49%">
              <div class="card_items">
                <span class="card_span"></span>
                <span class="card_center">最小值</span>
                <span class="card_center">最大值</span>
              </div>
              <div class="card_items" v-for="(item, i) in cardData" :key="i">
                <span class="card_span">{{ item.text }}</span>
                <a-input-number
                  class="items_input"
                  v-model="item.minv"
                  :disabled="item.disabled"
                  :style="item.minvstyle ? item.mainstyle : ''"
                  @change="item.change($event)"
                  :min="item.min ? item.min : 0"
                  :max="item.max ? item.max : 999999"
                  :step="item.step ? item.step : 0.1"
                />
                <a-input-number
                  class="items_input"
                  v-model="item.maxv"
                  :disabled="item.disabled"
                  :style="item.maxvstyle ? item.mainstyle : ''"
                  @change="item.change($event)"
                  :min="item.min ? item.min : 0"
                  :max="item.max ? item.max : 999999"
                  :step="item.step ? item.step : 0.1"
                />
              </div>
            </a-card>
          </div>
        </div>
        <!-- 模態框內容2 -->
      </a-modal>
      <!-- 彈出框2 -->
    </div>
  </page-view>
</template>
<script>
import mockData from './common-assets/mockData'
import moment from 'moment'
import { PageView } from '@/layouts'
import InputFrame from './InputFrame'
import ParticleAlert from './ParticleAlert'
import toExcel from './common-assets/common.js'
export default {
  components: {
    PageView,
    ParticleAlert,
    InputFrame
  },
  data() {
    return {
      // 彈出框
      alertModalVisible: false,
      submitLoading: false,
      myFormdata: [],
      myFormdataObj: mockData.myFormdataObj,
      cardData: [],
      cardDataObj: mockData.cardData,
      // 彈出框
      dbArea: '', // 廠區
      productionProcess: '', // 製程
      floor: '', // 樓層
      line: '', // 線體
      btnDis: {
        // 禁用狀態
        dbArea: false, // 廠區
        productionProcess: false, // 製程
        floor: false, // 樓層
        line: false, // 線體
        search: false, // 查詢按鈕
        add: false // 添加按鈕
      },
      // 表格區域1
      countArr: [],
      dataArr: [],
      columns: [],
      // 表格區域2
      // 導出表格所需資料
      excelFirstTh: []
      // 導出表格所需資料
    }
  },
  created() {
    this.getDate()
    // this.setFormdata()
    this.myFormdata = this.setFormdata(this.myFormdataObj)
    this.cardData = this.setFormdata(this.cardDataObj)
  },
  mounted() {
    this.setColumns()
  },
  methods: {
    setFormdata(myObj) {
      const newArr = []
      Object.values(myObj).forEach(_ => {
        newArr.push(_)
      })
      console.log(newArr)
      return newArr
    },
    // 引入模態框組件1
    handleOk() {
      this.submitLoading = true
      this.myFormdata.forEach(_ => {
        console.log(_.text)
        console.log(_.value)
      })
      // console.log(this.myFormdata)
      setTimeout(() => {
        this.alertModalVisible = false
        this.submitLoading = false
      }, 3000)
    },
    handleCancel() {
      console.log(Date.now())
      console.log('取消啦~~')
      this.submitLoading = false
      this.alertModalVisible = false
    },
    // 引入模態框組件2
    // 查詢mySearch
    mySearch() {},
    // 查詢mySearch
    // 新增
    myIncreased() {
      console.log(Date.now())
      this.alertModalVisible = true
    },
    // 新增
    // 導入
    importExcel(e) {},
    // 導入
    // 導出表格數據
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    },
    myGetDate() {
      // 这段每个都加了数据处理成的格式备注，很容易明白
      // const th = ['姓名', '年龄', '年级', '分数']
      const th = this.excelFirstTh
      // const filterVal = ['name', 'age', 'grade', 'score']
      const filterVal = this.excelFirstTh
      // const dataSource = [
      //   { name: '小绵羊', age: '12', grade: '六年级', score: '100' },
      //   { name: '小猪猪', age: '23', grade: '五年级', score: '98' }
      // ]
      const dataSource = this.dataArr
      var data = this.formatJson(filterVal, dataSource)
      // data得到的值为[["小绵羊","12","六年级","100"],["小猪猪,"23","五年级","98"]]
      // 注意：二维数组里的每一个元素都应是字符串类型，否则导出的表格对应单元格为空
      toExcel({ th, data, fileName: '设备导出数据', fileType: 'xlsx', sheetName: 'sheet名' })
    },
    // 導出模板1
    myExport() {
      // get請求寫法1
      var elemIF = document.createElement('iframe')
      elemIF.src = 'http://10.195.229.200:8080/exportExcelDatas.do?tableName=MLBII.C_SMO_STATION_TYPE&quary='
      elemIF.style.display = 'none'
      document.body.appendChild(elemIF)
      // get請求寫法2
    },
    // 導出模板2
    // 這個函數作用是輸入表格內容data以及表頭裡的dataIndex，返回一個需要合併的數組，只是單個的列需要合併的1
    // 舉例：每次只能返回=>Name: (8) [6, 0, 0, 0, 0, 0, 1, 1]
    conutfun(dataIndex) {
      var dataArr1 = this.dataArr
      var myArray = new Array(dataArr1.length) // 聲明一個數組，每個對應保存的是rowspan的值
      // console.log(dataArr1)
      var myKeyName = '' // 保存上一個值
      var count = 0 // 保存相同的值出現的次數
      var startIndex = 0 // 保存第一次這個值出現的位置
      for (var i = 0; i < dataArr1.length; i++) {
        var val = dataArr1[i][dataIndex]
        if (i === 0) {
          myKeyName = val
          count = 1
          myArray[0] = 1
        } else {
          if (val === myKeyName) {
            count++
            myArray[startIndex] = count
            myArray[i] = 0
          } else {
            count = 1
            myKeyName = val
            startIndex = i
            myArray[i] = 1
          }
        }
      }
      // console.log(myArray)
      return myArray
    },
    // 這個函數作用是輸入表格內容data以及表頭裡的dataIndex，返回一個需要合併的數組，只是單個的列需要合併的2
    // 這個函數的作用是把表格的表頭部分輸入，然後生成一個大對象，對象的key是對應的表格內容列名，數組的value對應的表格合併的列1
    // Name: (8) [6, 0, 0, 0, 0, 0, 1, 1]
    // age: (8) [1, 1, 1, 1, 4, 0, 0, 0]
    // age3: (8) [6, 0, 0, 0, 0, 0, 2, 0]
    // age4: (8) [5, 0, 0, 0, 0, 3, 0, 0]
    // agetwo: (8) [8, 0, 0, 0, 0, 0, 0, 0]
    // oid: (8) [1, 1, 1, 1, 1, 1, 1, 1]
    countArrFun() {
      var myNewArray = {}
      for (var i = 0; i < this.columns.length; i++) {
        const _ = this.columns[i]
        const arr = this.conutfun(_.dataIndex)
        myNewArray[_.dataIndex] = arr
      }
      // console.log(myNewArray)
      return myNewArray
    },
    // 這個函數的作用是把表格的表頭部分輸入，然後生成一個數組，數組的key是對應的表格內容列名，數組的value對應的表格合併的列2
    setColumns() {
      // 聲明一個對象，key是表格的標題，value 是表格每列的寬度
      var myObj = {
        process_Name: 150,
        floor_Name: 100,
        line_Name: 100,
        station_Code: 100,
        // particle: 100,
        work_Date: 150,
        date_type: 100,
        lyz: 100,
        uyz: 100,
        l0: 100,
        l1: 100,
        l2: 100,
        l3: 100,
        l4: 100,
        l5: 100,
        l6: 100,
        l7: 100,
        l8: 100,
        l9: 100,
        l10: 100,
        l11: 100,
        l12: 100,
        l13: 100,
        l14: 100,
        l15: 100,
        l16: 100,
        l17: 100,
        l18: 100,
        l19: 100,
        l20: 100,
        l21: 100,
        l22: 100,
        l23: 100,
        l24: 100,
        l25: 100,
        l26: 100,
        l27: 100,
        l28: 100,
        l29: 100,
        l30: 100,
        l31: 100,
        l32: 100,
        l33: 100,
        l34: 100,
        l35: 100,
        l36: 100,
        l37: 100,
        l38: 100,
        l39: 100,
        l40: 100,
        l41: 100,
        l42: 100,
        l43: 100,
        l44: 100,
        l45: 100,
        l46: 100,
        l47: 100,
        id: 100,
        action: 100
      }
      // 聲明一個新的數組，用來放新生成的colums
      var newarr = []
      Object.keys(myObj).forEach((_, i) => {
        this.excelFirstTh.push(_)
        // 如果表格標題不是這幾個字段的話，就設置不用合併單元格，正常
        // 最外層if else添加刪除按鈕，修改按鈕
        if (_ === 'action') {
          newarr.push({
            title: _,
            dataIndex: _,
            width: myObj[_],
            fixed: 'right',
            scopedSlots: { customRender: _ }
          })
        } else {
          // 分類設置單元格合併項1
          if (['work_Date', 'process_Name', 'floor_Name', 'line_Name', 'station_Code', 'date_type'].indexOf(_) < 0) {
            newarr.push({
              title: _,
              dataIndex: _,
              width: myObj[_],
              customRender: (value, row, index) => {
                const obj = {
                  children: value,
                  attrs: {}
                }
                if (this.countArr[_]) {
                  obj.attrs.rowSpan = 1
                }
                if (+value > row.uyz || +value < row.lyz) {
                  obj.attrs.style = 'color:red'
                }
                return obj
              }
            })
          } else {
            // 並且如果有重複字段的話，向下合併
            newarr.push({
              title: _,
              dataIndex: _,
              width: myObj[_],
              customRender: (value, row, index) => {
                const obj = {
                  children: value,
                  attrs: {}
                }
                if (this.countArr[_]) {
                  // 向下合併
                  obj.attrs.rowSpan = this.countArr[_][index]
                }
                return obj
              }
            })
          }
          // 分類設置單元格合併項2
        }
        // 最外層if else添加刪除動作，修改動作
      })
      this.columns = newarr
    },
    cancel(e) {
      console.log(e)
    },
    save(e) {
      console.log(e)
    },
    // 初始獲取數據
    getDate() {
      const url = 'http://10.251.178.247:8080/sur/closedWip/getWipClosed?applicationNo=ZZHH20200325144343'
      // this.axios.get(url).then(_ => {
      const _ = {}
      this.dataArr = _.result
      this.countArr = this.countArrFun()
      // })
    }
  },
  computed: {
    title() {
      return this.$route.meta.title
    }
  }
}
</script>
<style lang="less">
@import url('./common-assets/index.less');
.information_maintenance {
  // 下拉框代碼1
  .top {
    display: flex;
    // justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    margin: 5px 0px 20px 0px;
    .item {
      padding: 5px 8px;
      margin-right: 10px;
    }
    // 設置關於下拉框label1
    .item > .label::after {
      content: ':';
      position: relative;
      top: -0.5px;
      margin: 0 8px 0 2px;
    }
    .item > .label {
      padding-right: 8px;
    }
    // 設置關於下拉框label2
  }
  // 下拉框代碼2
  // 按鈕組代碼1
  .button_group {
    .button_s {
      width: 78px;
      margin: 5px 10px 5px 5px;
    }
    .button_m {
      width: 100px;
      margin: 5px 10px 5px 5px;
    }
    .my_file {
      position: relative;
      .my_input {
        position: absolute;
        opacity: 0;
        width: 78px;
        top: 0;
        left: 0;
      }
    }
  }
  // 按鈕組代碼2
}

// .editable-row-operations a {
//   margin-right: 10px;
// }
.input_frame {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.particle_modal {
  .card_items {
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;

    .card_span {
      width: 10%;
      text-align: right;
      display: inline-block;
      line-height: 32px;
    }
    .card_center,
    .items_input {
      width: 40%;
      display: inline-block;
      text-align: center;
    }
  }
}
</style>
