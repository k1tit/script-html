const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({
    target: 'https://target-api.com', // URL вашего API
    changeOrigin: true,
    pathRewrite: {
        '^/api': '', // убирает /api из пути
    },
}));

app.listen(3000, () => {
    console.log('Proxy server is running on http://localhost:3000');
});

