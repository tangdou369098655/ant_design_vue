<template>
  <page-view :title="title">
    <h1>第二種數據結構，後端渲染</h1>
    <a-table :columns="columns" :dataSource="data" row-key="key" bordered>
      <!-- 這個是操作列1 -->
      <template slot="operation" slot-scope="text, record">
        <div class="editable-row-operations">
          <!-- 修改，點擊後彈框1 -->
          <a :disabled="editingKey !== ''" @click="() => editAlart(record.key)">Alert</a>
          <!-- 修改，點擊後彈框2 -->
          <!-- 刪除，點擊後彈出是否刪除1 -->
          <a-popconfirm title="Are you sure？" @confirm="() => sureDelete(record.key)">
            <a-icon slot="icon" type="question-circle-o" style="color: red" />
            <a :disabled="editingKey !== ''" href="#">Delete</a>
          </a-popconfirm>
          <!-- 刪除，點擊後彈出是否刪除2 -->
        </div>
      </template>
      <!-- 這個是操作列2 -->
    </a-table>
  </page-view>
</template>
<script>
import { PageView } from '@/layouts'
const data = [
  {
    Name: '小明1',
    key: '1',
    age: '3431',
    agetwo: 'aa1',
    age3: 'bb1',
    age4: 'cc1',
    orderid: '1',
    Name_RS: 1,
    age_RS: 1,
    agetwo_RS: 1,
    age3_RS: 1,
    age4_RS: 1,
    orderid_RS: 1
  },
  {
    Name: '小明2',
    age: '34342',
    key: '2',
    agetwo: 'aa2',
    age3: 'b2b',
    age4: 'cc2',
    orderid: '2',
    Name_RS: 1,
    age_RS: 1,
    agetwo_RS: 1,
    age3_RS: 1,
    age4_RS: 1,
    orderid_RS: 1
  },
  {
    Name: '小明3',
    age: '343433',
    agetwo: 'aa3',
    key: '3',
    age3: 'bb3',
    age4: 'cc3',
    orderid: '3',
    Name_RS: 1,
    age_RS: 1,
    agetwo_RS: 1,
    age3_RS: 1,
    age4_RS: 1,
    orderid_RS: 1
  },
  {
    Name: '小明4',
    age: '434344',
    agetwo: 'aa4',
    age3: 'bb4',
    key: '4',
    age4: 'cc4',
    orderid: '4',
    Name_RS: 1,
    age_RS: 1,
    agetwo_RS: 1,
    age3_RS: 1,
    age4_RS: 1,
    orderid_RS: 1
  },
  {
    Name: '小明5',
    age: '43435',
    key: '5',
    agetwo: 'aa5',
    age3: 'bb5',
    age4: 'cc5',
    orderid: '5',
    Name_RS: 1,
    age_RS: 1,
    agetwo_RS: 1,
    age3_RS: 1,
    age4_RS: 1,
    orderid_RS: 1
  },
  {
    Name: '小明6',
    age: '43436',
    agetwo: 'aa6',
    age3: 'bb6',
    key: '6',
    age4: 'cc16',
    orderid: '6',
    Name_RS: 1,
    age_RS: 1,
    agetwo_RS: 1,
    age3_RS: 1,
    age4_RS: 1,
    orderid_RS: 1
  },
  {
    Name: '小明222小明7',
    age: '43437',
    agetwo: 'aa7',
    key: '7',
    age3: 'bb17',
    age4: 'cc17',
    orderid: '7',
    Name_RS: 1,
    age_RS: 1,
    agetwo_RS: 1,
    age3_RS: 1,
    age4_RS: 1,
    orderid_RS: 1
  },
  {
    Name: '小明333小明8',
    age: '43438',
    agetwo: 'aa8',
    age3: 'bb18',
    key: '8',
    age4: 'cc18',
    orderid: '8',
    Name_RS: 1,
    age_RS: 1,
    agetwo_RS: 1,
    age3_RS: 1,
    age4_RS: 1,
    orderid_RS: 1
  }
]
const columns = [
  {
    title: 'id',
    dataIndex: 'orderid',
    customRender: (value, row, index) => {
      // console.log('row', row)
      // console.log('index', index)
      // console.log('value', value)
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
  },
  {
    title: 'operation',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' }
  }
]
export default {
  // name: 'particleTest',
  components: {
    PageView
  },
  data() {
    this.cacheData = data.map(item => ({ ...item }))
    return {
      editingKey: '',
      data,
      columns
    }
  },
  methods: {
    // 點擊確定刪除1
    sureDelete(key) {
      console.log('點擊刪除editingKey', key)
    },
    // 點擊確定刪除2
    // 點擊編輯按鈕彈框1
    editAlart(key) {},
    // 點擊編輯按鈕彈框2
    edit(key) {
      console.log('點擊編輯editingKey', this.editingKey)
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      console.log(target)
      this.editingKey = key
      if (target) {
        target.editable = true
        this.data = newData
      }
      console.log('編輯後editingKey', this.editingKey)
    },
    save(key) {
      const newData = [...this.data]
      console.log(newData)
      const newCacheData = [...this.cacheData]
      console.log(newCacheData)
      const target = newData.filter(item => key === item.key)[0]
      console.log(target)
      const targetCache = newCacheData.filter(item => key === item.key)[0]
      console.log(targetCache)
      if (target && targetCache) {
        delete target.editable
        this.data = newData
        Object.assign(targetCache, target)
        this.cacheData = newCacheData
      }
      this.editingKey = ''
      console.log('保存後editingKey', this.editingKey)
    },
    cancel(key) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      this.editingKey = ''
      if (target) {
        Object.assign(target, this.cacheData.filter(item => key === item.key)[0])
        delete target.editable
        this.data = newData
      }
      console.log('取消後editingKey', this.editingKey)
    }
  },
  mounted() {},
  computed: {
    title() {
      return this.$route.meta.title
    }
  }
}
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
