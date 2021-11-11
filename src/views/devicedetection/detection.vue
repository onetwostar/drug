<template>
<div class="container containerH">
  <div class="active containerH">
    <div class="container containerH">
      <div></div>
      <div class="active containerH">
        <ul class="menu">
          <li
            class="sPointer"
            :class="{ active: tab == '设备趋势分析' }"
            @click="changeTab('设备趋势分析')"
          >
            <p>设备趋势分析</p>
          </li>
          <li
            class="sPointer"
            :class="{ active: tab == '端口趋势分析' }"
            @click="changeTab('端口趋势分析')"
          >
            <p>端口趋势分析</p>
          </li>
        </ul>
        <div>
        
          <div class="right">
            <div class="search " style="position: relative">
            
            </div>
            <div class="data">
            
            <!--     <div style="width: 100%;height: 100%;"> 
                       <echartsCommon key="approveBandwidth2" class="main" id="outApprEchart" :option="outApprOption" />
                      </div>   -->             

<!-- 
              <div  v-show="showTable" >
                  <eTable
                ref="table"
                :formParam="formParam"
                :tableColumn="tableColumn"
                :tableUrl="tableUrl"
                noInit
              />
              </div> -->

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
//import eTable from "@/components/ETable.vue";
//import echartsCommon from "@/components/EchartsCommon.vue";
export default {
  name: "About",
/*   components: {
    eTable,echartsCommon
  }, */
  data() {
    return {
      excelLoading: false,
      formParam: {},
      tableColumn: [],
      tableUrl: `${this.$urlConfig.detection}selectTableData`,
      tab: "设备趋势分析",
      index: 'cpu'
    }
  },
  created() {
   
  },
  mounted() {
   
  },
  methods: {
    
    changeTab(tab) {
      this.tab = tab;
      if(tab=="设备趋势分析"){
           
      }else {
         
      }
      //this.showTable =false;
    },



    exportExcel() {
      this.excelLoading = true;
      this.$http
        .post(`${this.$urlConfig.detection}exportExcel`, this.formParam, {
          responseType: "blob",
        })
        .then((res) => {
          this.excelLoading = false;
          // 处理返回的文件流
          const content = res.data;
          const blob = new Blob([content]);
          let fileName = decodeURI(
            res.headers["content-disposition"].split("=")[1]
          );
          if ("download" in document.createElement("a")) {
            // 非IE下载
            const link = document.createElement("a");
            link.download = fileName;
            link.style.display = "none";
            link.href = URL.createObjectURL(blob);
            document.body.appendChild(link);
            link.click();
            // 释放URL 对象
            URL.revokeObjectURL(link.href);
            document.body.removeChild(link);
          } else {
            // IE10+下载
            navigator.msSaveBlob(blob, fileName);
          }
        })
        .catch(() => (this.excelLoading = false));
    },
    

 

    
    
    
    
    
    

  }
}
</script>
<style scoped>
.btnD {
/*   position: absolute;
  right: 75px;
  bottom: 10px; */
}
.right {
  width: calc(100% - 184px);
}
.data {
  min-height: 450px;
}
.containerH {
  min-height: 100%;
}
.container {
 /*  height: 100%; */
}
.sPointer {
  cursor: pointer;
}
.el-tree {
  position: relative;
  cursor: default;
  background: #13132b;
  color: #7374b1;
  height: 450px;
}
.search >>> .el-range-input {
  background-color: #000;
}
.search {
  
  color: #a0bae4;
  background: #13132b;
  border-radius: 8px;
  margin-bottom: 16px;
}
.search > ul {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-flow: wrap;
  position: relative;
}
.search > ul > li {
  margin-top: 18px;
  padding: 0 16px;
  height: 30px;
  flex: 0 0 25%;
  box-sizing: border-box;
  line-height: 30px;
  display: flex;
}
.container > div:nth-child(2) {
  width: 100%;
}
.search > ul > li > label {
  width: 100px;
  line-height: 30px;
  margin-left: 5px;
  text-align: right;
}
.search > ul > li > label {
  width: 70px;
  line-height: 30px;
  margin-left: 5px;
  text-align: right;
}
.search > ul > li > div {
  width: 200px;
}
.li-index {
height: 30px;
    list-style: none;
    line-height: 30px;
    margin-right: 30px;
    padding: 0 10px;
    background: #232358;
    border-radius: 14px;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
}
.indexactive {
  background: #455eec;
}
.column {
  height: 54px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: #fff;
}
.main {
  width: 100%;
  height: 100%;
}
</style>