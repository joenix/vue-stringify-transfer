import transfer from "./transfer";

const vueStringifyTransfer = {
  install(Vue) {
    Vue.prototype.transfer = transfer;
  }
};

export default vueStringifyTransfer;
