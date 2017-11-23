var token = "RDFDNTRFRkFEMA=="

var login = {
   redirectTarget: "/app/view/html/index.html",
   expiry:6,
   loginTarget: "/app/view/html/login.html",
   anonymousToken: token
};

var wssConfig = ["wsClientProvider",function (wsClientProvider) {
    wsClientProvider.setToken(token);
    wsClientProvider.setPublishChannel("requestChannel");
    wsClientProvider.setSubscribeChannel("responseChannel_"+JSON.parse(localStorage.user).groups);
}];

var httpsConfig = ["httpClientProvider",function (httpClientProvider) {
    httpClientProvider.setBaseUrl("https://stmicro-demo.scriptrapps.io");
    httpClientProvider.setToken(token);
}]
