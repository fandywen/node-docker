const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
  console.log('res::',res)
  // 此处需要手动处理下 Content-Length
  fs.createReadStream('./index.html').pipe(res)
})
server.listen(3000, () => {
  console.log('Listening 3000')
})
