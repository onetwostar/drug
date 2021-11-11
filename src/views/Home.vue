<template>
  <div class="container">
    <div
      class="active"
      v-loading="loading"
      element-loading-text="加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.2)"
    >
    </div>
  </div>
</template>

<script>
import dw from "@/assets/images/dw.png";
import csw from "@/assets/images/icon/csw.png";
import hjsw from "@/assets/images/icon/hjsw.png";
import router from "@/assets/images/icon/router.png";
export default {
  name: "Home",
  computed: {
    
  },
  data() {
    return {
      data: null,
      loading: false
    
    };
  },
  created() {
    
  },
  mounted() {
   
  },
  methods: {
    query() {
      this.loading = true;
      this.$http
        .get(`${this.$urlConfig.topology}index`)
        .then(res => {
          
        })
        .catch(e => console.log(e))
        .finally(() => (this.loading = false));
    },
   
  
 
  
  },
};
</script>
<style scoped>
.container {
  height: calc(100% - 60px);
}
.map {
  width: 100%;
  /* min-height: 700px; */
  height: 100%;
}
.notselected {
  user-select: none;
}
.block {
  display: block;
}
.none {
  display: none;
}
.devInfo {
  background-color: #262b68;
}
.devFont {
  padding: 10px;
}
.devFont > div:nth-child(2) {
  margin-top: 5px;
}
.devFont > div {
  color: #a0bae4;
  font-size: 12px;
  text-align: center;
}
.devPerf {
  width: 100%;
  height: 100%;
  background-color: #252547;
  padding: 5px 8px 8px;
  margin-bottom: 10px;
}
.devPerf > label {
  margin-left: 5px;
  color: #a0bae4;
  font-size: 12px;
}
.devPerf > div {
  margin-left: 8px;
}
.popup {
  top: 30%;
  width: 96%;
  position: absolute;
  font-size: 12px;
  left: 20px;
  background: #1a1d3a;
  overflow-x: scroll;
  box-shadow: 3px 8px 8px #000;
}
.popup > table {
  width: 1600px;
  text-align: center;
}
.popup > table > thead {
  height: 36px;
  line-height: 36px;
  font-size: 12px;
  background: #252547;
  color: #ffffff;
}
.popup > table > tbody > tr > td {
  height: 35px;
  border-bottom: 1px solid #0a0a1d;
  color: #a0bae4;
}
.popup > table > tbody > tr > td {
  height: 35px;
  border-bottom: 1px solid #0a0a1d;
}
</style>