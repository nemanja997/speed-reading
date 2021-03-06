module.exports = {
    lintOnSave: false,
    devServer: {
        proxy: {
            '/.netlify/functions': {
                target: "http://localhost:9000",
                pathRewrite: {
                    "^/\\.netlify/functions": ""
                }
            }
        }
    }
}
