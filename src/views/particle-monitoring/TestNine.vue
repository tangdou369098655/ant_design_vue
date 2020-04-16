<template>
  <div>
    <a-button type="primary" @click="showModal">Open Modal with customized button props</a-button>
    <a-modal
      title="Basic Modal"
      v-model="visible"
      @ok="handleOk"
      :okButtonProps="{ props: {disabled: true} }"
      :cancelButtonProps="{ props: {disabled: true} }"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        visible: false,
      }
    },
    methods: {
      showModal() {
        this.visible = true
      },
      handleOk(e) {
        console.log(e)
        this.visible = false
      },
      handleCancel(e) {
        console.log(e)
        this.visible = false
      },
    },
  };
</script>
