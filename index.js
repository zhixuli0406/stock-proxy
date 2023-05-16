const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Create Express Server
const app = express();

// Configuration
const PORT = 8080;
const HOST = "localhost";
const API_SERVICE_URL = "https://tw.stock.yahoo.com";

// Proxy endpoints
app.use('/_td-stock/api', createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
}));

// Start Proxy
app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
});