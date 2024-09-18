"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      formData: {
        title: ""
      },
      rules: {}
    };
  },
  onReady() {
    this.$refs.form.setRules(this.rules);
  },
  methods: {}
};
if (!Array) {
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_forms_item2 + _easycom_uni_icons2 + _easycom_uni_forms2)();
}
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_forms_item + _easycom_uni_icons + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.formData.title,
    b: common_vendor.o(($event) => $data.formData.title = $event.detail.value),
    c: common_vendor.p({
      label: "标题",
      name: "title"
    }),
    d: $data.formData.title,
    e: common_vendor.o(($event) => $data.formData.title = $event.detail.value),
    f: common_vendor.p({
      type: "location-filled",
      size: "20"
    }),
    g: common_vendor.p({
      label: "地点",
      name: "title"
    }),
    h: $data.formData.title,
    i: common_vendor.o(($event) => $data.formData.title = $event.detail.value),
    j: common_vendor.p({
      label: "时间",
      name: "title"
    }),
    k: common_vendor.p({
      label: "详情",
      name: "title"
    }),
    l: common_vendor.p({
      modelValue: $data.formData,
      ["label-position"]: "top"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/wegoo/socializing/pages/publishActive/index.vue"]]);
wx.createPage(MiniProgramPage);
