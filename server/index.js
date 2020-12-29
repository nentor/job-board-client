const next = require('next')
const express = require('express')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')
const { createProxyMiddleware } = require('http-proxy-middleware')

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'

console.log(
  `${
    dev
      ? '[Server] Configuring server for local development.. looking for .env.local'
      : '[Server] Configuring server for production development.. looking for .env'
  }`
)
const nextApp = next({ dev })
const handler = nextApp.getRequestHandler()

const config = dotenv.parse(fs.readFileSync(path.join(__dirname, '../.env')))

function onProxyReq(proxyReq, req, _) {
  const token = req.cookies?.token || config.API_KEY
  const credentials = `Bearer ${token}`
  proxyReq.setHeader('Authorization', credentials)
}

nextApp.prepare().then(() => {
  const server = express()
  server.use(cookieParser())

  server.use(
    '/api',
    createProxyMiddleware({
      target: config.API_HOST,
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
      onProxyReq,
    })
  )

  server.get('*', (req, res) => handler(req, res))

  server.listen(port)

  console.log(`Server listening at http://localhost:${port}`)
})
