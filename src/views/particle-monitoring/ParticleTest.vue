<template>
  <page-view :title="title">
    <div>test</div>
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
          oid: '1'
        },
        {
          Name: '小明',
          age: '3434',
          agetwo: 'aa',
          age3: 'bb',
          age4: 'cc',
          oid: '2'
        },
        {
          Name: '小明',
          age: '34343',
          agetwo: 'aa',
          age3: 'bb',
          age4: 'cc',
          oid: '3'
        },
        {
          Name: '小明',
          age: '43434',
          agetwo: 'aa',
          age3: 'bb',
          age4: 'cc',
          oid: '4'
        },
        {
          Name: '小明',
          age: '4343',
          agetwo: 'aa',
          age3: 'bb',
          age4: 'cc',
          oid: '5'
        },
        {
          Name: '小明',
          age: '4343',
          agetwo: 'aa',
          age3: 'bb',
          age4: 'cc1',
          oid: '6'
        },
        {
          Name: '小明222小明',
          age: '43434',
          agetwo: 'aa',
          age3: 'bb1',
          age4: 'cc1',
          oid: '7'
        },
        {
          Name: '小明333小明',
          age: '4343',
          agetwo: 'aa',
          age3: 'bb1',
          age4: 'cc1',
          oid: '8'
        }
      ],
      columns: [
        {
          title: '结构名称',
          dataIndex: 'Name',
          customRender: (value, row, index) => {
            const obj = {
              children: value,
              attrs: {}
            }
            // console.log(this.countArr['Name'])
            // console.log(this.countArr['Name'][index])
            // obj.attrs.rowSpan = this.countArr['Name'][index]
            return obj
          }
          // customRender (_, row, Tindex) {
          //   // const obj = {
          //   //   children :value,
          //   //   attrs: {}
          //   // }
          //   let rowSpan = 1
          //   let arrIndex = 0
          //   DataArr.forEach((item, Dindex) => {
          //     if (item.oid === row.oid) {
          //       arrIndex = Dindex // 先获取Name所在的arr的Dindex
          //     }
          //   })
          //   if (Tindex === 0) {
          //     // 当值在多个页面出现时重新记录rowSpan
          //     DataArr.forEach((item, Dindex) => {
          //       if (Dindex > arrIndex) {
          //         if (item.Name === row.Name) {
          //           rowSpan += 1
          //         }
          //       }
          //     })
          //   } else if (DataArr[arrIndex].Name === DataArr[arrIndex - 1].Name) {
          //     rowSpan = 0
          //   } else {
          //     DataArr.forEach((item, Dindex) => {
          //       if (Dindex > arrIndex) {
          //         if (item.Name === row.Name) {
          //           rowSpan += 1
          //         }
          //       }
          //     })
          //   }
          //   return {
          //     children: row.Name,
          //     attrs: {
          //       rowSpan
          //     }
          //   }
          // }
        },
        {
          title: '屬性222',
          dataIndex: 'age'
        },
        {
          title: '屬性2',
          dataIndex: 'agetwo'
        },
        {
          title: '屬性3',
          dataIndex: 'age3'
        },
        {
          title: '屬性4',
          dataIndex: 'age4'
        }
      ]
    }
  },
  methods: {
    conutfun(title) {
      const DataArr1 = JSON.parse(JSON.stringify(this.DataArr))
      var myArray = new Array(DataArr1.length) // 聲明一個數組，每個對應保存的是rowspan的值
      console.log(DataArr1)
      var mykeyname = '' // 保存上一個值
      var count = 0 // 保存相同的值出現的次數
      var startindex = 0 // 保存第一次這個值出現的位置
      for (var i = 0; i < DataArr1.length; i++) {
        var val = DataArr1[i][title]
        // console.log(val)
        // console.log(i)
        // console.log(title)
        if (i === 0) {
          mykeyname = val
          count = 1
          myArray[0] = 1
          // console.log('1', i, myArray)
        } else {
          if (val === mykeyname) {
            count++
            myArray[startindex] = count
            myArray[i] = 0
            // console.log('2', i, myArray)
          } else {
            count = 1
            mykeyname = val
            startindex = i
            myArray[i] = 1
            // console.log('3', i, myArray)
          }
        }
      }
      return myArray
    },
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
  },
  mounted() {
    this.countArr = JSON.parse(JSON.stringify(this.countArrFun()))
    console.log(this.countArr)
    this.renderContent = (value, row, index) => {
      const obj = {
        children: value,
        attrs: {}
      }
      // 在這裡得不到我想要的值
      console.log(this.countArr['Name'][index])
          if (this.countArr['Name'][index] !== 0) {
            obj.attrs.rowSpan = this.countArr['Name'][index]
          }
          // obj.attrs.rowSpan = this.countArr['Name'][index]
          console.log(this.columns)
      return obj
    }
    // 不准我這樣子寫奇葩
    // this.columns.forEach( (_) => _.customRender = this.renderContent)
    for (var i = 0; i < this.columns.length; i++) {
      this.columns[i].customRender = this.renderContent
    //   this.columns[i].customRender = (value, row, index) => {
    //   const obj = {
    //     children: value,
    //     attrs: {}
    //   }
    //   // 在這裡得不到我想要的值
    //   console.log(this.countArr[(this.columns[i].dataIndex)][index])
    //       // if (this.countArr['Name'][index] !== 1) {
    //       //   obj.attrs.rowSpan = this.countArr['Name'][index]
    //       // }
    //       obj.attrs.rowSpan = this.countArr[(this.columns[i].dataIndex)][index]
    //   return obj
    // }
    }
  },
  computed: {
    title() {
      return this.$route.meta.title
    }
  }
}
</script>
