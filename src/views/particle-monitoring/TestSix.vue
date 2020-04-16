<template>
  <div class="particle_box">
    <!-- 打開模態框1 -->
    <a-button type="primary" @click="showModal">Open Modal with customized footer</a-button>
    <a-button type="primary" @click="showModal2">showModal2</a-button>
    <a href="javascript:;" class="a-upload">
      <input type="file" @change="myUpload" />点击这里上传文件
    </a>
    <a href="javascript:;" class="file">
      选择文件
      <input type="file" name id />
    </a>
    <!-- 打開模態框2 -->
    <a-modal v-model="visible" title="Title" onOk="handleOk" width="800">
      <template slot="footer">
        <a-button key="back" @click="handleCancel">Return</a-button>
        <a-button key="submit" type="primary" :loading="loading" @click="handleOk">Submit</a-button>
      </template>
      <!-- 模態框內容1 -->
      <div class="particle_modal"></div>
      <!-- 模態框內容2 -->
    </a-modal>
    <div style="margin-top: 20px;">
      <InputFrame :myinputs="myinputs1"></InputFrame>
    </div>
    <div>
      <!-- 引入模態框組件1 -->
      <ParticleAlert
        :submitLoading="submitLoading"
        :handleOk="myHandleOk"
        :handleCancel="myHandleCancel"
        v-model="alertModalVisible"
      >
        <div style="margin-top: 20px;">
          <InputFrame :myinputs="myinputs1"></InputFrame>
        </div>
      </ParticleAlert>
      <!-- 引入模態框組件2 -->
    </div>
  </div>
</template>
<script>
import moment from 'moment'
import InputFrame from './InputFrame'
// 引入模態框組件1
import ParticleAlert from './ParticleAlert'
// 引入模態框組件2
export default {
  components: {
    InputFrame,
    // 引入模態框組件1
    ParticleAlert
    // 引入模態框組件2
  },
  data() {
    return {
      // 引入模態框組件1
      alertModalVisible: false,
      submitLoading: false,
      // 引入模態框組件2
      loading: false,
      visible: false,
      myinputs1: [
        {
          type: 'input', // 輸入框類型
          text: 'SerialNumber Length', // 輸入框span
          spanstyle: { color: 'black' }, // span樣式
          placeholder: 'SerialNumber Length', // 輸入框placeholder
          value: 'SerialNumber Length', // 輸入框值
          disabled: false,
          mainstyle: {}, // 輸入框樣式
          change: e => {
            console.log(e)
          }, // 輸入框變動事件
          notice: 'Please select model type and plant area first',
          star: true
        },
        {
          type: 'input', // 輸入框類型
          text: 'Initial acqion', // 輸入框span
          spanstyle: { color: 'black' }, // span樣式
          placeholder: 'Initial acqtion', // 輸入框placeholder
          value: 'Initial acquisition', // 輸入框值
          disabled: false,
          mainstyle: {}, // 輸入框樣式
          change: e => {
            console.log(e)
          }, // 輸入框變動事件
          notice: 'Please select model type and plant area first',
          star: true
        },
        {
          type: 'text_area', // 輸入框類型
          text: 'Initial', // 輸入框span
          spanstyle: { color: 'black' }, // span樣式
          placeholder: 'Initial acquisition', // 輸入框placeholder
          value: 'Initial acquisition', // 輸入框值
          disabled: false,
          mainstyle: {}, // 輸入框樣式
          change: e => {
            console.log(e)
          }, // 輸入框變動事件
          notice: 'Please select model type and plant area first',
          star: true
        },
        {
          type: 'input_number', // 輸入框類型
          text: 'Initial', // 輸入框span
          spanstyle: { color: 'black' }, // span樣式
          value: 2, // 輸入框值
          disabled: false,
          mainstyle: {}, // 輸入框樣式
          change: e => {
            console.log(e)
          }, // 輸入框變動事件
          notice: 'Please select model type and plant area first',
          star: true,
          min: 2,
          max: 888,
          step: 0.5
        },
        {
          type: 'select', // 輸入框類型
          text: '下拉選', // 輸入框span
          spanstyle: { color: 'black' }, // span樣式
          placeholder: '請選擇', // 輸入框placeholder
          value: 'a', // 輸入框值
          disabled: false,
          mainstyle: {}, // 輸入框樣式
          change: e => {
            console.log(e)
          }, // 輸入框變動事件
          notice: 'Please select model type and plant area first',
          star: true,
          selectData: ['a', 'b', 'c']
        },
        {
          type: 'date', // 輸入框類型
          text: '請選擇時間', // 輸入框span
          spanstyle: { color: 'black' }, // span樣式
          // placeholder: '請選擇', // 輸入框placeholder
          // value: moment().endOf('day'), // 輸入框值
          value: moment(new Date()).subtract(2, 'days'),
          disabled: false,
          mainstyle: {}, // 輸入框樣式
          change: e => {
            console.log(e)
          }, // 輸入框變動事件
          notice: 'Please select model type and plant area first',
          star: true
        },
        {
          type: 'radio', // 輸入框類型
          text: '單選', // 輸入框span
          spanstyle: { color: 'black' }, // span樣式
          value: 'a', // 輸入框值
          disabled: false,
          mainstyle: {}, // 輸入框樣式
          change: e => {
            console.log(e)
          }, // 輸入框變動事件
          notice: 'Please select model type and plant area first',
          star: true,
          radioData: ['a', 'b', 'c']
        }
      ]
    }
  },
  methods: {
    myUpload(e) {
      const myData = {
        status: '',
        result: []
      }
      if (e.target.files[0]) {
        console.log(e.target.files[0].type)
        if (e.target.files[0].type === 'text/plain') {
          const fileReader = new FileReader()
          fileReader.readAsText(e.target.files[0], 'utf-8')
          fileReader.onload = () => {
            console.log(fileReader.result)
          }
          // fileReader.readAsText(e.target.files[0]);
        } else {
          myData.status = 'error'
          return myData
        }
      }
    },
    // 引入模態框組件1
    myHandleOk() {
      this.submitLoading = true
      setTimeout(() => {
        this.alertModalVisible = false
        this.submitLoading = false
      }, 3000)
    },
    myHandleCancel() {
      console.log('asdf')
      this.submitLoading = false
      this.alertModalVisible = false
    },
    // 引入模態框組件2
    showModal2() {
      this.myInputs = this.myinputs1
      this.alertModalVisible = true
    },
    showModal() {
      this.visible = true
    },
    handleOk(e) {
      this.loading = true
      setTimeout(() => {
        this.visible = false
        this.loading = false
      }, 3000)
    },
    handleCancel(e) {
      this.visible = false
    }
  }
}
</script>
<style lang="less">
// 上傳文件
/*a  upload */
.a-upload {
  padding: 4px 10px;
  height: 20px;
  line-height: 20px;
  position: relative;
  cursor: pointer;
  color: #888;
  background: #fafafa;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  display: inline-block;
  *display: inline;
  *zoom: 1;
}

.a-upload input {
  position: absolute;
  font-size: 100px;
  right: 0;
  top: 0;
  opacity: 0;
  filter: alpha(opacity=0);
  cursor: pointer;
}

.a-upload:hover {
  color: #444;
  background: #eee;
  border-color: #ccc;
  text-decoration: none;
}
.file {
  position: relative;
  display: inline-block;
  background: #d0eeff;
  border: 1px solid #99d3f5;
  border-radius: 4px;
  padding: 4px 12px;
  overflow: hidden;
  color: #1e88c7;
  text-decoration: none;
  text-indent: 0;
  line-height: 20px;
}
.file input {
  position: absolute;
  font-size: 100px;
  right: 0;
  top: 0;
  opacity: 0;
}
.file:hover {
  background: #aadffd;
  border-color: #78c3f3;
  color: #004974;
  text-decoration: none;
}
// 上傳文件
</style>
