"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {
    this.loadSuccess();
  },
  methods: {
    loadSuccess() {
      setTimeout(() => {
        common_vendor.index.navigateTo({
          url: "/pages/socialPage/index"
        });
      }, 1e3);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/wegoo/socializing/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
