<template>
  <page-view :title="title">
    <h1>第二種數據結構，後端渲染</h1>
    <a-table :columns="columns" :dataSource="DataArr" row-key="id" bordered>
      <template slot="name" slot-scope="text">
        <a href="javascript:;">{{ text }}</a>
      </template>
    </a-table>
  </page-view>
</template>
<script>
import { PageView } from '@/layouts'
export default {
  // name: 'particleTest',
  components: {
    PageView
  },
  data() {
    return {
      renderContent: function() {},
      countArr: [],
      DataArr: [
        {
          Name: '小明',
          age: '343',
          agetwo: 'aa',
          age3: 'bb',
          age4: 'cc',
          orderid: '1',
          Name_RS: 6,
          age_RS: 1,
          agetwo_RS: 8,
          age3_RS: 6,
          age4_RS: 5,
          orderid_RS: 1
        },
        {
          Name: '小明',
          age: '3434',
          agetwo: 'aa',
          age3: 'bb',
          age4: 'cc',
          orderid: '2',
          Name_RS: 0,
          age_RS: 1,
          agetwo_RS: 0,
          age3_RS: 0,
          age4_RS: 0,
          orderid_RS: 1
        },
        {
          Name: '小明',
          age: '34343',
          agetwo: 'aa',
          age3: 'bb',
          age4: 'cc',
          orderid: '3',
          Name_RS: 0,
          age_RS: 1,
          agetwo_RS: 0,
          age3_RS: 0,
          age4_RS: 0,
          orderid_RS: 1
        },
        {
          Name: '小明',
          age: '43434',
          agetwo: 'aa',
          age3: 'bb',
          age4: 'cc',
          orderid: '4',
          Name_RS: 0,
          age_RS: 1,
          agetwo_RS: 0,
          age3_RS: 0,
          age4_RS: 0,
          orderid_RS: 1
        },
        {
          Name: '小明',
          age: '4343',
          agetwo: 'aa',
          age3: 'bb',
          age4: 'cc',
          orderid: '5',
          Name_RS: 0,
          age_RS: 4,
          agetwo_RS: 0,
          age3_RS: 0,
          age4_RS: 0,
          orderid_RS: 1
        },
        {
          Name: '小明',
          age: '4343',
          agetwo: 'aa',
          age3: 'bb',
          age4: 'cc1',
          orderid: '6',
          Name_RS: 0,
          age_RS: 0,
          agetwo_RS: 0,
          age3_RS: 0,
          age4_RS: 3,
          orderid_RS: 1
        },
        {
          Name: '小明222小明',
          age: '4343',
          agetwo: 'aa',
          age3: 'bb1',
          age4: 'cc1',
          orderid: '7',
          Name_RS: 1,
          age_RS: 0,
          agetwo_RS: 0,
          age3_RS: 2,
          age4_RS: 0,
          orderid_RS: 1
        },
        {
          Name: '小明333小明',
          age: '4343',
          agetwo: 'aa',
          age3: 'bb1',
          age4: 'cc1',
          orderid: '8',
          Name_RS: 1,
          age_RS: 0,
          agetwo_RS: 0,
          age3_RS: 0,
          age4_RS: 0,
          orderid_RS: 1
        }
      ],
      columns: [
        {
          title: 'id',
          dataIndex: 'orderid',
          customRender: (value, row, index) => {
            console.log('row', row)
            console.log('index', index)
            console.log('value', value)
            const obj = {
              children: value,
              attrs: {}
            }
              obj.attrs.rowSpan = row['orderid' + '_RS'] || 0
            return obj
          }
        },
        {
          title: '结构名称',
          dataIndex: 'Name',
          customRender: (value, row, index) => {
            const obj = {
              children: value,
              attrs: {}
            }
              obj.attrs.rowSpan = row['Name' + '_RS'] || 0
            return obj
          }
        },
        {
          title: '屬性222',
          dataIndex: 'age',
          customRender: (value, row, index) => {
            const obj = {
              children: value,
              attrs: {}
            }
              obj.attrs.rowSpan = row['age' + '_RS'] || 0
            return obj
          }
        },
        {
          title: '屬性2',
          dataIndex: 'agetwo',
          customRender: (value, row, index) => {
            const obj = {
              children: value,
              attrs: {}
            }
              obj.attrs.rowSpan = row['agetwo' + '_RS'] || 0
            return obj
          }
        },
        {
          title: '屬性3',
          dataIndex: 'age3',
          customRender: (value, row, index) => {
            const obj = {
              children: value,
              attrs: {}
            }
              obj.attrs.rowSpan = row['age3' + '_RS'] || 0
            return obj
          }
        },
        {
          title: '屬性4',
          dataIndex: 'age4',
          customRender: (value, row, index) => {
            const obj = {
              children: value,
              attrs: {}
            }
              obj.attrs.rowSpan = row['age4' + '_RS'] || 0
            return obj
          }
        }
      ]
    }
  },
  methods: {
    // 這個函數作用是輸入表格內容data以及表頭裡的dataIndex，返回一個需要合併的數組，只是單個的列需要合併的1
    conutfun(dataIndex) {
      const DataArr1 = JSON.parse(JSON.stringify(this.DataArr))
      var myArray = new Array(DataArr1.length) // 聲明一個數組，每個對應保存的是rowspan的值
      console.log(DataArr1)
      var mykeyname = '' // 保存上一個值
      var count = 0 // 保存相同的值出現的次數
      var startindex = 0 // 保存第一次這個值出現的位置
      for (var i = 0; i < DataArr1.length; i++) {
        var val = DataArr1[i][dataIndex]
        if (i === 0) {
          mykeyname = val
          count = 1
          myArray[0] = 1
        } else {
          if (val === mykeyname) {
            count++
            myArray[startindex] = count
            myArray[i] = 0
          } else {
            count = 1
            mykeyname = val
            startindex = i
            myArray[i] = 1
          }
        }
      }
      return myArray
    },
    // 這個函數作用是輸入表格內容data以及表頭裡的dataIndex，返回一個需要合併的數組，只是單個的列需要合併的2
    // 這個函數的作用是把表格的表頭部分輸入，然後生成一個大對象，對象的key是對應的表格內容列名，數組的value對應的表格合併的列1
    // Name: (8) [6, 0, 0, 0, 0, 0, 1, 1]
    // age: (8) [1, 1, 1, 1, 4, 0, 0, 0]
    // age3: (8) [6, 0, 0, 0, 0, 0, 2, 0]
    // age4: (8) [5, 0, 0, 0, 0, 3, 0, 0]
    // agetwo: (8) [8, 0, 0, 0, 0, 0, 0, 0]
    // orderid: (8) [1, 1, 1, 1, 1, 1, 1, 1]
    countArrFun() {
      var mynewarray = {}
      for (var i = 0; i < this.columns.length; i++) {
        const _ = this.columns[i]
        const arr = this.conutfun(_.dataIndex)
        mynewarray[_.dataIndex] = arr
      }
      console.log(mynewarray)
      return mynewarray
    }
    // 這個函數的作用是把表格的表頭部分輸入，然後生成一個數組，數組的key是對應的表格內容列名，數組的value對應的表格合併的列2
  },
  mounted() {
    this.countArr = JSON.parse(JSON.stringify(this.countArrFun()))
  },
  computed: {
    title() {
      return this.$route.meta.title
    }
  }
}
</script>
