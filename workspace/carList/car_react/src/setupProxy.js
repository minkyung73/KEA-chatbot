const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function(app){
    app.use(
        "/api", //첫번째 path(endpoint)
        createProxyMiddleware({
            target: "http://localhost:8080", 
            changeOrigin: true, 
        })
    );
}