import Q from "q";
// https://www.cnblogs.com/fayefan/p/8259475.html
export default function asyncLoadJs(url) {
  return Q.Promise((resolve, reject) => {
    let srcArr = document.getElementsByTagName("script");
    let hasLoaded = false;
    for (let i = 0; i < srcArr.length; i++) {
      //判断当前js是否加载上
      hasLoaded = srcArr[i].src == url ? true : false;
    }
    if (hasLoaded) {
      resolve();
      return;
    }
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.body.appendChild(script);
    script.onload = () => {
      resolve();
    };
    script.onerror = () => {
      reject();
    };
  });
}

export function loadMineMapJs() {
  //加载js
  return Q.Promise((resolve, reject) => {
    // 获取当前日期
    var date = new Date();

    // 获取当前月份
    var nowMonth = date.getMonth() + 1;

    // 获取当前是几号
    var strDate = date.getDate();

    var strHour = date.getHours();

    // 对月份进行处理，1-9月在前面添加一个“0”
    if (nowMonth >= 1 && nowMonth <= 9) {
      nowMonth = "0" + nowMonth;
    }

    // 对月份进行处理，1-9号在前面添加一个“0”
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }

    // 最后拼接字符串，得到一个格式为(yyyyMMddHH)的日期
    var nowDate = date.getFullYear() + nowMonth + strDate + strHour;
    asyncLoadJs("//g.alicdn.com/sd/nvc/1.1.112/guide.js?t=" + nowDate)
      .then(() => {
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });
}
