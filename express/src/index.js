var path = require('path')
var express = require('express')
var app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('*', function (req, res) {
  res.send('Hello World')
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('服务器启动 http://%s:%s', host, port)
})