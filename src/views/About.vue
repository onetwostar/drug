<template>
  <div class="container containerH">
    <div class="active containerH">
      <div class="container containerH">
        <div></div>
        <div class="active containerH">
          <ul class="menu">
            <li
              class="sPointer"
              :class="{ active: tab == '设备健康度检查' }"
              @click="changeTab('设备健康度检查')"
            >
              <p>设备健康度检查</p>
            </li>
            <li
              class="sPointer"
              :class="{ active: tab == '链路健康度检查' }"
              @click="changeTab('链路健康度检查')"
            >
              <p>链路健康度检查</p>
            </li>
          </ul>
          <div>
            <div class="left">
              <div>
                <span
                  :class="{ active: appTab == '左' }"
                  @click="changeAppTab('左')"
                  >左</span
                >
                <span
                  :class="{ active: appTab == '右' }"
                  @click="changeAppTab('右')"
                  >右</span
                >
              </div>
              <div>
                <el-tree
                  ref="tree"
                  accordion
                  :data="treeData"
                  @node-click="treeOnClick"
                  node-key="id"
                  highlight-current
                ></el-tree>
              </div>
            </div>
            <div class="right">
              <div class="search" style="position: relative">
                
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
export default {
  name: "About",
/*   components: {
    eTable
  }, */
  data() {
    return {
      excelLoading: false,
      formParam: {},
      tableColumn: [],
      tableUrl: `${this.$urlConfig.health}table`,
      treeData: [],
      tab: "设备健康度检查",
      appTab: "左",
      city: "",
      county: "",
      device: {},
      link: {},
      timeType: "1",
      subjects: [],
      date: {}
    }
  },
  created() {
    
  },
  mounted() {
    this.changeTab(this.tab);
  },
  methods: {
    
  
    changeTab(tab) {
      this.tab = tab;
    
      
    },
    changeAppTab(tab) {
      this.appTab = tab;
     
    },
    treeOnClick(data, node) {
    
    }
  }
}
</script>
<style scoped>
.containerH {
  min-height: 100%;
}
.showT {
  height: calc(100% - 130px);
}
.btnD {
  position: absolute;
  right: 75px;
  bottom: 10px;
}
.right {
  width: calc(100% - 184px);
}
.data {
  min-height: 450px;
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
  height: 160px;
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
</style>