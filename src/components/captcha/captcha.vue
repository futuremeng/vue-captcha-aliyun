<template>
  <div id="captcha"></div>
</template>
<script>
window.NVC_Opt = {
  //无痕配置 && 滑动验证、刮刮卡验证通用配置。
  //应用类型标识。它和使用场景标识（scene字段）一起决定了无痕验证的业务场景与后端对应使用的策略模型。您可以在人机验证控制台的配置管理页签找到对应的appkey字段值，请务必正确填写。
  appkey: "CF_APP_1",
  //使用场景标识。它和应用类型标识（appkey字段）一起决定了滑动验证的业务场景与后端对应使用的策略模型。您可以在人机验证控制台的配置管理页签找到对应的scene值，请务必正确填写。
  scene: "nvc_register_h5",
  //是否HTML5页面。对于HTML5页面类型，该参数值需填写true。
  isH5: true,
  //二次验证的唤醒方式。true为浮层式，false为嵌入式。
  popUp: false,
  //声明二次验证需要渲染的目标元素ID。
  renderTo: "#captcha",
  //回调参数。
  nvcCallback: function(data) {
    // 其中，data为getNVCVal()函数的值，该函数为二次验证滑动或者刮刮卡通过后的回调函数。
    // data与业务请求一同上传，由后端请求AnalyzeNvc接口并返回100或者900。
  },
  //业务键字段，可为空。该参数可用于上线前测试，请按照代码集成后测试部分中的方法配置该字段值。
  trans: { key1: "code0", nvcCode: 400 },
  //二次验证组件的语言，默认为cn（简体中文）。详细配置方法请参见自定义文案文档。
  language: "cn",
  //当唤醒滑动验证作为二次验证时，配置滑动验证组件的宽度。
  customWidth: 300,
  //当唤醒刮刮卡验证作为二次验证时，配置刮刮卡组件的宽度。
  width: 300,
  //当唤醒刮刮卡验证作为二次验证时，配置刮刮卡组件的高度。
  height: 100,
  //当唤醒刮刮卡验证作为二次验证时，配置需要刮出的两个elements的图片资源。
  elements: [
    "//img.alicdn.com/tfs/TB17cwllsLJ8KJjy0FnXXcFDpXa-50-74.png",
    "//img.alicdn.com/tfs/TB17cwllsLJ8KJjy0FnXXcFDpXa-50-74.png"
  ],
  //当唤醒刮刮卡验证作为二次验证时，配置刮动时的背景图像（自动应用平铺填充的方式）。
  bg_back_prepared:
    "//img.alicdn.com/tps/TB1skE5SFXXXXb3XXXXXXXXXXXX-100-80.png",
  //当唤醒刮刮卡验证作为二次验证时，配置刮动时的前景图像（仅支持base64数据流）。
  bg_front:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABQCAMAAADY1yDdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURefk5w+ruswAAAAfSURBVFjD7cExAQAAAMKg9U9tCU+gAAAAAAAAAIC3AR+QAAFPlUGoAAAAAElFTkSuQmCC",
  //当唤醒刮刮卡验证作为二次验证时，配置验证通过时显示的图标资源。
  obj_ok: "//img.alicdn.com/tfs/TB1rmyTltfJ8KJjy0FeXXXKEXXa-50-74.png",
  //当唤醒刮刮卡验证作为二次验证时，配置验证通过时显示的背景图像（自动应用平铺填充的方式）。
  bg_back_pass: "//img.alicdn.com/tfs/TB1KDxCSVXXXXasXFXXXXXXXXXX-100-80.png",
  //当唤醒刮刮卡验证作为二次验证时，配置验证失败或异常时显示的图标资源。
  obj_error: "//img.alicdn.com/tfs/TB1q9yTltfJ8KJjy0FeXXXKEXXa-50-74.png",
  //当唤醒刮刮卡验证作为二次验证时，配置验证失败或异常时显示的背景图像（自动应用平铺填充的方式）。
  bg_back_fail: "//img.alicdn.com/tfs/TB1w2oOSFXXXXb4XpXXXXXXXXXX-100-80.png",
  //当唤醒刮刮卡验证作为二次验证时，用于自定义文案。详细配置方法请参见自定义文案文档。
  upLang: {
    cn: {
      _ggk_guide: "请摁住鼠标左键，刮出两面盾牌",
      _ggk_success: "恭喜您成功刮出盾牌<br/>继续下一步操作吧",
      _ggk_loading: "加载中",
      _ggk_fail: [
        "呀，盾牌不见了<br/>请",
        "javascript:noCaptcha.reset()",
        "再来一次",
        "或",
        "http://survey.taobao.com/survey/QgzQDdDd?token=%TOKEN",
        "反馈问题"
      ],
      _ggk_action_timeout: [
        "我等得太久啦<br/>请",
        "javascript:noCaptcha.reset()",
        "再来一次",
        "或",
        "http://survey.taobao.com/survey/QgzQDdDd?token=%TOKEN",
        "反馈问题"
      ],
      _ggk_net_err: [
        "网络实在不给力<br/>请",
        "javascript:noCaptcha.reset()",
        "再来一次",
        "或",
        "http://survey.taobao.com/survey/QgzQDdDd?token=%TOKEN",
        "反馈问题"
      ],
      _ggk_too_fast: [
        "您刮得太快啦<br/>请",
        "javascript:noCaptcha.reset()",
        "再来一次",
        "或",
        "http://survey.taobao.com/survey/QgzQDdDd?token=%TOKEN",
        "反馈问题"
      ]
    }
  }
};
import { loadMineMapJs } from "./loadResources";
let loadedMineMapJs = false; //是否加载完js
export default {
  created() {
    if (!loadedMineMapJs) {
      loadedMineMapJs().then(() => {
        loadedMineMapJs = true;
      });
    }
  },
  mounted() {
    let _this = this;
    //循环判断是否加载完js
    let interval = setInterval(() => {
      if (loadedMineMapJs) {
        clearInterval(interval);
        _this.controller = new HomeController(_this);
        _this.controller.initMapEdit(null, null, null);
      }
    }, 100);
  }
};
</script>
