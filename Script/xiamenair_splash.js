/*
厦门航空 App 去开屏广告
*/
let body = $response.body;

try {
  let obj = JSON.parse(body);

  if (obj.data) {
    obj.data.ad = null;
    obj.data.ads = [];
    obj.data.startupAd = null;
    obj.data.splash = null;
  }

  if (obj.ad) {
    obj.ad = null;
  }

  body = JSON.stringify(obj);
} catch (e) {}

$done({ body });
