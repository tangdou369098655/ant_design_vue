<template>
  <page-view :title="title">
    <h1>第一種數據結構，前端渲染</h1>
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
      // DataArr: [
      //   {
      //     Name: '小明',
      //     age: '343',
      //     agetwo: 'aa',
      //     age3: 'bb',
      //     age4: 'cc',
      //     oid: '1'
      //   },
      //   {
      //     Name: '小明',
      //     age: '3434',
      //     agetwo: 'aa',
      //     age3: 'bb',
      //     age4: 'cc',
      //     oid: '2'
      //   },
      //   {
      //     Name: '小明',
      //     age: '34343',
      //     agetwo: 'aa',
      //     age3: 'bb',
      //     age4: 'cc',
      //     oid: '3'
      //   },
      //   {
      //     Name: '小明',
      //     age: '43434',
      //     agetwo: 'aa',
      //     age3: 'bb',
      //     age4: 'cc',
      //     oid: '4'
      //   },
      //   {
      //     Name: '小明',
      //     age: '4343',
      //     agetwo: 'aa',
      //     age3: 'bb',
      //     age4: 'cc',
      //     oid: '5'
      //   },
      //   {
      //     Name: '小明',
      //     age: '4343',
      //     agetwo: 'aa',
      //     age3: 'bb',
      //     age4: 'cc1',
      //     oid: '6'
      //   },
      //   {
      //     Name: '小明222小明',
      //     age: '4343',
      //     agetwo: 'aa',
      //     age3: 'bb1',
      //     age4: 'cc1',
      //     oid: '7'
      //   },
      //   {
      //     Name: '小明333小明',
      //     age: '4343',
      //     agetwo: 'aa',
      //     age3: 'bb1',
      //     age4: 'cc1',
      //     oid: '8'
      //   }
      // ],
      DataArr: [
        {
          Name: '小明1',
          age: '3431',
          agetwo: 'aa1',
          age3: 'bb1',
          age4: 'cc1',
          oid: '1'
        },
        {
          Name: '小明2',
          age: '34342',
          agetwo: 'aa2',
          age3: 'b2b',
          age4: 'cc2',
          oid: '2'
        },
        {
          Name: '小明3',
          age: '343433',
          agetwo: 'aa3',
          age3: 'bb3',
          age4: 'cc3',
          oid: '3'
        },
        {
          Name: '小明4',
          age: '434344',
          agetwo: 'aa4',
          age3: 'bb4',
          age4: 'cc4',
          oid: '4'
        },
        {
          Name: '小明5',
          age: '43435',
          agetwo: 'aa5',
          age3: 'bb5',
          age4: 'cc5',
          oid: '5'
        },
        {
          Name: '小明6',
          age: '43436',
          agetwo: 'aa6',
          age3: 'bb6',
          age4: 'cc16',
          oid: '6'
        },
        {
          Name: '小明222小明7',
          age: '43437',
          agetwo: 'aa7',
          age3: 'bb17',
          age4: 'cc17',
          oid: '7'
        },
        {
          Name: '小明333小明8',
          age: '43438',
          agetwo: 'aa8',
          age3: 'bb18',
          age4: 'cc18',
          oid: '8'
        }
      ],
      columns: [
        {
          title: 'id',
          dataIndex: 'oid',
          customRender: (value, row, index) => {
            const obj = {
              children: value,
              attrs: {}
            }
            if (this.countArr['oid']) {
              obj.attrs.rowSpan = this.countArr['oid'][index]
            }
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
            if (this.countArr['Name']) {
              obj.attrs.rowSpan = this.countArr['Name'][index]
            }
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
            if (this.countArr['age']) {
              obj.attrs.rowSpan = this.countArr['age'][index]
            }
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
            if (this.countArr['agetwo']) {
              obj.attrs.rowSpan = this.countArr['agetwo'][index]
            }
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
            if (this.countArr['age3']) {
              obj.attrs.rowSpan = this.countArr['age3'][index]
            }
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
            if (this.countArr['age4']) {
              obj.attrs.rowSpan = this.countArr['age4'][index]
            }
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
    // oid: (8) [1, 1, 1, 1, 1, 1, 1, 1]
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
