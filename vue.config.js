module.exports = {
    devServer:{
        host: "localhost",
        port: "8081",
        proxy: {
            "/api": {
                target: "https://api.66mz8.com",
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/api": "./src/mock"
                }
            }
        }
    }
}