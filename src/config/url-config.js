var urlConfig = {};

urlConfig.install = function(Vue) {
  Vue.prototype.$urlConfig = {
    topology: "/topology/",
    health: "/health/",
    detection: "/detection/",
    resource: "/resource/"
  };
};
export default urlConfig;
