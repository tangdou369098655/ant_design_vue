<template>
  <div>通用函數頁面</div>
</template>
<script>
// 導出表格數據1
import toExcel from '../common.js'
// 導出表格數據2
export default {
  methods: {
    // 導出表格數據1
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    },
    myGetDate() {
      // 这段每个都加了数据处理成的格式备注，很容易明白
      const th = ['參數1', '參數2', '參數3', '參數4']
      const filterVal = ['name', 'age', 'grade', 'score']
      const dataSource = [
        { name: '值1', age: '值2', grade: '值3', score: '值4' },
        { name: '值1', age: '值2', grade: '值3', score: '值4' }
      ]
      var data = this.formatJson(filterVal, dataSource)
      // data得到的值为[["小绵羊","12","六年级","100"],["小猪猪,"23","五年级","98"]]
      // 注意：二维数组里的每一个元素都应是字符串类型，否则导出的表格对应单元格为空
      toExcel({ th, data, fileName: '设备导出数据', fileType: 'xlsx', sheetName: 'sheet名' })
    },
    // 導出表格數據2
    // 導出模板方法-get、兩種-post、一種
    // get導出模板方案一：通过创建iframe的方式1
    myGetExport1() {
      // get請求寫法1
      const elemIF = document.createElement('iframe')
      elemIF.src = ''
      elemIF.style.display = 'none'
      document.body.appendChild(elemIF)
      // get請求寫法2
    },
    // get導出模板方案一：通过创建iframe的方式2
    // get導出模板方案二：不太好用哦~~通过a标签的链接向后端服务发get请求，接收后端的文件流1
    downloadTemplate() {
      const url = ''
      const a = document.createElement('a')
      a.style.display = 'none'
      a.setAttribute('target', '_blank')
      a.href = url
      a.click()
      // window.open(url);
    },
    // get導出模板方案二：通过a标签的链接向后端服务发get请求，接收后端的文件流2
    // post方法導出模板方案一fetch：1
    myFetch() {
      requestData = {
        no: this.noArr, //這個給的是勾選的no列表
        // no: this.myLists,//這個給的是勾選的id列表
        partsn: this.data4.map(_ => (_ = _.no))
      }
      //下载execl文件
      const url = ''
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      })
        .then(res => res.blob())
        .then(data => {
          this.showSpin = false
          let blobUrl = window.URL.createObjectURL(data)
          const a = document.createElement('a')
          a.style.display = 'none'
          a.setAttribute('target', '_blank')
          a.download = '<List>'
          a.href = blobUrl
          a.click()
        })
    },
    // post方法導出模板方案一fetch：2
    // post方法導出模板方案二axios：1
    myPostExport() {
      // post請求文件寫法1
      const url = ''
      const formData = new FormData()
      formData.append('file', '123')
      this.axios({
        method: 'post',
        url: url,
        data: formData,
        responseType: 'blob' // 表明返回服務器返回的數據類型
      }).then(_ => {
        const content = _
        const blob = new Blob([content])
        const fileName = '測試表格.xls'
        if ('download' in document.createElement('a')) {
          // 非IE下载
          const aLink = document.createElement('a')
          aLink.download = fileName
          aLink.style.display = 'none'
          aLink.href = URL.createObjectURL(blob)
          aLink.setAttribute('target', '_blank')
          document.body.appendChild(aLink)
          aLink.click()
          URL.revokeObjectURL(aLink.href) // 释放URL 对象
          document.body.removeChild(aLink)
        } else {
          // IE10+下载
          navigator.msSaveBlob(blob, fileName)
        }
      })
      // post請求文件寫法2
    },
    // post方法導出模板2
    // 導入表格的方法1
    // 導入表格的方法2
    // 導入文本讀取文本的方法1
    myUploadTxt(e) {
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
    // 導入文本讀取文本的方法2
    // 導入文本讀取表格的方法1
    // 上传表格1
    readExcel(e) {
      //表格导入
      const files = e.target.files
      // console.log(files);
      if (files.length <= 0) {
        //如果没有文件名
        return false
      } else if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
        // this.msg.error('上传格式不正确，请上传xls或者xlsx格式');
        return false
      }

      const fileReader = new FileReader()
      fileReader.onload = (ev) => {
        try {
          const data = ev.target.result
          const workbook = XLSX.read(data, {
            type: 'binary'
          })
          const wsname = workbook.SheetNames[0] //取第一张表
          const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]) //生成json表格内容
          // console.log(ws);
          const excellist = [] //清空接收数据
          //编辑数据
          for (var i = 0; i < ws.length; i++) {
            excellist.push(ws[i])
          }
          // 此时得到的是一个内容是对象的数组需要处理
          // console.log(excellist);
          let arr1 = excellist.map(_ => Object.values(_)[0])
          // console.log(arr1);
          this.resultArr = arr1.map((_, idx) => {
            return {
              id: idx + 1,
              name: idx + 1,
              age: _
            }
          })
          // console.log(this.resultArr)
        } catch (e) {
          // console.log('出错了')
          return false
        }
      }
      fileReader.readAsBinaryString(files[0])
      // 如果需要後台處理表格數據，就執行如下操作1
      // 如果是發送後台解析，就這樣發送1
      // let url =  '';
      // let myformdataFile = {
      //   file: e.target.files[0]
      // }
      // if (e.target.files[0]) {
      //   this.http.post(url, myformdataFile).subscribe((res: any) => {
      //     if (res.status == 'success') {
      //       console.log(res)
      //     } else {
      //       this.msg.warning(res.message);
      //       return false;
      //     }
      //   });
      // }
      // 如果是發送後台解析，就這樣發送2
      // 如果需要後台處理表格數據，就執行如下操作2
    },
    // 上传表格2
    // 導入文本讀取表格的方法2
    // 輸入文本檢測過濾空格函數形成數組
    // 用戶輸入數據使用空格，逗號，隔開，我們需要分解成數組1
    // inputvalue  字符串格式
    textValue(inputvalue) {
      if (inputvalue) {
        // 當用戶輸入用空格隔開時候使用
        let resultArr = inputvalue
          .split(/[,，\s]+/gm)
          .filter(_ => _)
          .map(item => {
            // 當用戶輸入用逗號隔開時候使用
            // let resultArr = inputvalue.split(/[,，\s]+/gm).filter(_ => _).map(item => {
            if (item.length != 0) {
              return item
            } else {
              // console.log(item)
              // this.msg.error('請重輸');
              this.resultArr = []
              return false
            }
          })
        // console.log(resultArr)
        return resultArr
      } else {
        // this.msg.error('輸入不能空');
        return false
      }
    }
    // 用戶輸入數據使用空格，逗號，隔開，我們需要分解成數組2
  }
}
</script>