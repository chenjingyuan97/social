"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      current: 0,
      tabs: ["骑行", "羽毛球", "摩托车", "乒乓球"]
    };
  },
  methods: {
    changeTab(e) {
      console.log(e);
      this.current = e;
    },
    pushActive() {
      console.log(11);
      common_vendor.index.navigateTo({
        url: "/pages/publishActive/index"
      });
    }
  }
};
if (!Array) {
  const _easycom_v_tabs2 = common_vendor.resolveComponent("v-tabs");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_v_tabs2 + _easycom_uni_icons2)();
}
const _easycom_v_tabs = () => "../../uni_modules/v-tabs/components/v-tabs/v-tabs.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_v_tabs + _easycom_uni_icons)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.changeTab),
    b: common_vendor.o(($event) => $data.current = $event),
    c: common_vendor.p({
      tabs: $data.tabs,
      modelValue: $data.current
    }),
    d: common_vendor.p({
      type: "bars",
      size: "20"
    }),
    e: common_vendor.p({
      type: "location-filled",
      size: "20"
    }),
    f: common_vendor.p({
      type: "plusempty",
      size: "20"
    }),
    g: common_vendor.o((...args) => $options.pushActive && $options.pushActive(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/wegoo/socializing/pages/socialPage/index.vue"]]);
wx.createPage(MiniProgramPage);
