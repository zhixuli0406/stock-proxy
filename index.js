const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Create Express Server
const app = express();

const API_SERVICE_URL = "https://tw.stock.yahoo.com";

// Proxy endpoints
app.use('/_td-stock/api', createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
}));
