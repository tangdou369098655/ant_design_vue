<template>
  <div class="input_frame">
    <div class="myall_formdata" v-for="(item, i) in myinputs" :key="i">
      <!-- 普通輸入框 1-->
      <div class="table_items" v-if="item.type === 'input'">
        <span class="table_span" :title="item.text" :style="item.spanstyle">{{ item.text }}</span>
        <a-input
          class="items_input"
          :placeholder="item.placeholder"
          v-model="item.value"
          :disabled="item.disabled"
          :style="item.mainstyle ? item.mainstyle : ''"
          @change="item.change($event)"
        />
      </div>
      <!-- 普通輸入框 2-->
      <!-- 數字輸入框input_number 1-->
      <div class="table_items" v-if="item.type === 'input_number'">
        <span class="table_span" :title="item.text" :style="item.spanstyle">{{ item.text }}</span>
        <a-input-number
          class="items_input"
          v-model="item.value"
          :disabled="item.disabled"
          :style="item.mainstyle ? item.mainstyle : ''"
          @change="item.change($event)"
          :min="item.min ? item.min : 0"
          :max="item.max ? item.max : 999999"
          :step="item.step ? item.step : 0.1"
        />
      </div>
      <!-- 數字輸入框 2-->
      <!-- 文本框text_area 1-->
      <div class="table_items" v-if="item.type === 'text_area'">
        <span class="table_span" :title="item.text" :style="item.spanstyle">{{ item.text }}</span>
        <textarea
          class="items_input ant-input"
          :placeholder="item.placeholder"
          :readonly="item.disabled"
          v-model="item.value"
          :disabled="item.disabled"
          :style="item.mainstyle ? item.mainstyle : ''"
          @change="item.change($event)"
          :rows="item.rows?item.rows:'5'"
        ></textarea>
      </div>
      <!-- 文本框 2-->
      <!-- 選擇框select 1-->
      <div class="table_items" v-if="item.type === 'select'">
        <span class="table_span" :title="item.text" :style="item.spanstyle">{{ item.text }}</span>
        <a-select
          showSearch
          class="items_input"
          :placeholder="item.placeholder"
          v-model="item.value"
          :disabled="item.disabled"
          :style="item.mainstyle ? item.mainstyle : ''"
          @change="item.change($event)"
          optionFilterProp="children"
          @focus="handleFocus"
          @blur="handleBlur"
          :filterOption="filterOption"
        >
          <a-select-option
            v-for="(_, index) in item.selectData"
            :key="index"
            :value="_"
            :title="_"
          >{{ _ }}</a-select-option>
        </a-select>
      </div>
      <!-- 選擇框 2-->
      <!-- 日期輸入框date 1-->
      <div class="table_items" v-if="item.type === 'date'">
        <span class="table_span" :title="item.text" :style="item.spanstyle">{{ item.text }}</span>
        <a-date-picker
          format="YYYY-MM-DD"
          v-model="item.value"
          :disabledDate="item.disabledDate ? item.disabledDate : disabledDate"
          @change="item.change($event)"
          class="items_input"
          :disabled="item.disabled"
          :style="item.mainstyle ? item.mainstyle : ''"
        />
      </div>
      <!-- 日期輸入框 2-->
      <!-- 單選框radio 1-->
      <div class="table_items" v-if="item.type === 'radio'">
        <span class="table_span" :title="item.text" :style="item.spanstyle">{{ item.text }}</span>
        <a-radio-group
          class="items_input"
          v-model="item.value"
          :disabled="item.disabled"
          :style="item.mainstyle ? item.mainstyle : ''"
          @change="item.change($event)"
        >
          <a-radio v-for="(_, index) in item.radioData" :key="index" :title="_" :value="_">{{ _ }}</a-radio>
        </a-radio-group>
      </div>
      <!-- 單選框 2-->
      <!-- 備註信息1 -->
      <div class="table_notice" :title="item.notice" v-if="item.notice">{{ item.notice }}</div>
      <!-- 備註信息2 -->
      <!-- 小星星 1-->
      <span class="table_star" v-if="item.star === true">*</span>
      <!-- 小星星 2-->
    </div>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  data() {
    return {
      // 下面是使用案例
      //   myFormdata: [
      //   {
      //     type: 'input', // 輸入框類型
      //     text: 'SerialNumber Length', // 輸入框span
      //     spanstyle: { color: 'black' }, // span樣式
      //     placeholder: 'SerialNumber Length', // 輸入框placeholder
      //     value: 'SerialNumber Length', // 輸入框值
      //     disabled: false,
      //     mainstyle: {}, // 輸入框樣式
      //     change: e => {
      //       console.log(e)
      //     }, // 輸入框變動事件
      //     notice: 'Please select model type and plant area first',
      //     star: true
      //   },
      //   {
      //     type: 'input', // 輸入框類型
      //     text: 'Initial acqion', // 輸入框span
      //     spanstyle: { color: 'black' }, // span樣式
      //     placeholder: 'Initial acqtion', // 輸入框placeholder
      //     value: 'Initial acquisition', // 輸入框值
      //     disabled: false,
      //     mainstyle: {}, // 輸入框樣式
      //     change: e => {
      //       console.log(e)
      //     }, // 輸入框變動事件
      //     notice: 'Please select model type and plant area first',
      //     star: true
      //   },
      //   {
      //     type: 'text_area', // 輸入框類型
      //     text: 'Initial', // 輸入框span
      //     spanstyle: { color: 'black' }, // span樣式
      //     placeholder: 'Initial acquisition', // 輸入框placeholder
      //     value: 'Initial acquisition', // 輸入框值
      //     disabled: false,
      //     mainstyle: {}, // 輸入框樣式
      //     change: e => {
      //       console.log(e)
      //     }, // 輸入框變動事件
      //     notice: 'Please select model type and plant area first',
      //     star: true
      //   },
      //   {
      //     type: 'input_number', // 輸入框類型
      //     text: 'Initial', // 輸入框span
      //     spanstyle: { color: 'black' }, // span樣式
      //     value: 2, // 輸入框值
      //     disabled: false,
      //     mainstyle: {}, // 輸入框樣式
      //     change: e => {
      //       console.log(e)
      //     }, // 輸入框變動事件
      //     notice: 'Please select model type and plant area first',
      //     star: true,
      //     min: 2,
      //     max: 888,
      //     step: 0.5
      //   },
      //   {
      //     type: 'select', // 輸入框類型
      //     text: '下拉選', // 輸入框span
      //     spanstyle: { color: 'black' }, // span樣式
      //     placeholder: '請選擇', // 輸入框placeholder
      //     value: 'a', // 輸入框值
      //     disabled: false,
      //     mainstyle: {}, // 輸入框樣式
      //     change: e => {
      //       console.log(e)
      //     }, // 輸入框變動事件
      //     notice: 'Please select model type and plant area first',
      //     star: true,
      //     selectData: ['a', 'b', 'c']
      //   },
      //   {
      //     type: 'date', // 輸入框類型
      //     text: '請選擇時間', // 輸入框span
      //     spanstyle: { color: 'black' }, // span樣式
      //     // placeholder: '請選擇', // 輸入框placeholder
      //     // value: moment().endOf('day'), // 輸入框值
      //     value: moment(new Date()).subtract(2, 'days'),
      //     disabled: false,
      //     mainstyle: {}, // 輸入框樣式
      //     change: e => {
      //       console.log(e)
      //     }, // 輸入框變動事件
      //     notice: 'Please select model type and plant area first',
      //     star: true
      //   },
      //   {
      //     type: 'radio', // 輸入框類型
      //     text: '單選', // 輸入框span
      //     spanstyle: { color: 'black' }, // span樣式
      //     value: 'a', // 輸入框值
      //     disabled: false,
      //     mainstyle: {}, // 輸入框樣式
      //     change: e => {
      //       console.log(e)
      //     }, // 輸入框變動事件
      //     notice: 'Please select model type and plant area first',
      //     star: true,
      //     radioData: ['a', 'b', 'c']
      //   }
      // ]
    }
  },
  props: {
    myinputs: {
      type: Array,
      default: () => {
        return [
          // 下面為數據案例
          // {
          //   type: String, // 輸入框類型
          //   text: String, // 輸入框span
          //   spanstyle: {}, // span樣式
          //   placeholder: String, // 輸入框
          //   value: String, // 輸入框值
          //   disabled: Boolean,
          //   mainstyle: {}, // 輸入框樣式，可有可無
          //   change: Function, // 輸入框變動事件
          //   notice:'', // 備註提示信息，可有可無
          //   star: true, // 是否加小星星，可有可無
          //   min: 1, // 數字框用--最小值
          //   max: 99999, // 數字框用，最大值
          //   step: 0.1 // 數字框用，步長
          //   rows: '8' // 文本框用，列數
          //   selectData: [] // 下拉選專用，下拉選的數組
          //   radioData:['aa','bb'] // radio選項
          // }
        ]
      }
    }
  },
  methods: {
    // 選擇框select事件1
    handleBlur() {
      console.log('blur')
    },
    handleFocus() {
      console.log('focus')
    },
    filterOption(input, option) {
      return option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
    },
    // 選擇框select事件2
    // 禁用日期
    moment,
    disabledDate(current) {
      // Can not select days before today and today
      // return current && current < moment().endOf('day')
      return current && current < moment().endOf('day')
    }
  },
  mounted() {
    console.log(this.myinputs)
    console.log(moment().endOf('day'))
  }
}
</script>
<style lang="less">
// 通用formdata樣式1
.myall_formdata {
  position: relative;
  .table_notice,
  .table_star {
    position: absolute;
    font-size: 10px;
    color: red;
    // top: 32px;
    left: 140px;
    bottom: 0px;
  }
  .table_notice {
    width: 230px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .table_star {
    top: 1px;
    left: 119px;
    color: red;
  }
  .table_items > .table_span::after {
    content: ':';
    position: relative;
    margin: 0 2px 0 2px;
  }
  .table_items {
    display: inline-block;
    margin-bottom: 18px;
    .table_span {
      display: inline-block;
      vertical-align: top;
      width: 130px;
      text-align: right;
      padding-right: 15px;
      margin-right: 10px;
      white-space: nowrap;
      padding-left: 5px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .items_select,
    .items_input,
    .items_input_number,
    .items_date,
    .items_radio,
    .ant-calendar-picker {
      display: inline-block;
      width: 230px;
    }
    /deep/ span.ant-calendar-picker {
      display: inline-block;
      width: 230px;
    }
  }
}
// 通用formdata樣式2
textarea {
  resize: none;
}
</style>
