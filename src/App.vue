<template>
  <div id="app">
    <div class="head-bg">
      <div class="head-container">
        <p class="title f20">医药库存管理</p>
        <ul class="nav">
          <router-link
            v-for="menu in menus"
            :to="menu.url"
            :key="menu.title"
            custom
            v-slot="{ href, navigate, isActive }"
          >
            <li :href="href" @click="navigate" :class="[isActive && 'active']">
              {{ menu.title }}
            </li>
          </router-link>
          <!-- <router-link
          v-for="menu in menus"
          :to="menu.url"
          :key="menu.title"
          tag="li"
        >
          {{ menu.title }}
        </router-link> -->
        </ul>
        <div>
          <span class="people f12">{{ info }}</span>
          <span class="quit f12 pointer" @click="exit"> 退出 </span>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: "",
      userExitLink: "",
      menus: [
        { title: "药品管理", url: "/home" },
        { title: "库存管理", url: "/about" },
        { title: "销售记录", url: "/devicedetection" },
        { title: "人员管理", url: "/res" },
      ],
    };
  },
  created() {
    this.$http.get('/index/config')
      .then(res => {
        this.info = res.data.info;
        this.userExitLink = res.data.userExitLink;
      })
      .catch(e => console.log(e))
  },
  methods: {
    exit() {
      window.location.href = this.userExitLink;
    }
  },
};
</script>
<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}
.pointer {
  cursor: pointer;
}
</style>
