import proxy from "http-proxy-middleware";

module.exports = function (app) {
  const headers = {
    "Content-Type": "application/json",
  };
  app.use(
    proxy("/gourmet/v1/", {
      target: "http://webservice.recruit.co.jp/hotpepper/",
      changeOrigin: true,
      secure: false,
      headers: headers,
    })
  );
};
