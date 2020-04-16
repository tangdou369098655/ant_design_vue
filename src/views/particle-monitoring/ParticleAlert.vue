<template>
  <a-modal
    v-model="visible"
    title="Title"
    :closable="true"
    @ok="handleOk"
    width="800"
    @cancel="handleCancel"
  >
    <!-- <template slot="footer">
      <a-button key="back" @click="handleCancel">取消</a-button>
      <a-button key="submit" type="primary" :loading="submitLoading" @click="handleOk">Submit</a-button>
    </template>-->
    <!-- 模態框內容1 -->
    <div class="particle_modal">
      <slot></slot>
    </div>
    <!-- 模態框內容2 -->
  </a-modal>
</template>
<script>
import InputFrame from './InputFrame'
function abc() {

}
var abc = function () {
  
}
export default {
  components: { InputFrame },
  data() {
    return {
      visible: this.value
    }
  },
  props: {
    value: Boolean,
    handleOk: Function,
    handleCancel: Function,
    submitLoading: Boolean
    // myInputs: []
  },
  watch: {
    value(val) {
      this.visible = val
    },
    visible(val) {
      this.$emit('input', val)
    }
  },
  methods: {}
}
</script>
<style lang="less" scoped>
</style>
