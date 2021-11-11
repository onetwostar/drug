<template>
  <div class="container containerH">
  <div class="active containerH">
    <div class="container containerH">
      <div></div>
      <div class="active containerH">
        <ul class="menu">
          <li
            class="sPointer"
            :class="{ active: tab == '设备信息维护' }"
            @click="changeTab('设备信息维护')"
          >
            <p>设备信息维护</p>
          </li>
          <li
            class="sPointer"
            :class="{ active: tab == '端口信息维护' }"
            @click="changeTab('端口信息维护')"
          >
            <p>端口信息维护</p>
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
                accordion
                :data="tree_Data"
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
      <div>
      </div>
    </div>
 
  </div>
  </div>
</template>

<script>
//import eTable from "@/components/ETable.vue";
export default {
  name: "test",
/*   components: {
    eTable
  }, */
  data() {
    return {
      isAdmin: true,
      tab: "设备信息维护"
  
 
    };
  },
  created() {
   
  },
  mounted() {
    
  },
  methods: {
    //tab标签切换
    changeTab(tabName) {
      this.tab = tabName;
     
     
    }
    
  }
};
</script>

<style scoped>
  .containerH {
    min-height: 100%;
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
  width: 260px;
}
</style>
