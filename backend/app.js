require('dotenv').config()
var { instrument } = require('@socket.io/admin-ui')
var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var http = require('http')
var { Server } = require('socket.io')

var port = process.env.PORT

var app = express()
var httpServer = http.createServer(app)
var io = new Server(httpServer, {
  cors: {
    origin: ["https://admin.socket.io", "http://localhost:5173"],
    credentials: true
  }
})

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var authRouter = require('./routes/auth')

var init = require('./sockets')

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/auth', authRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

// Passing Socket.io instance in io namespaces
init(io)

// Socket.io admin-ui
instrument(io, {
  auth: false,
  // mode: 'development'
})

httpServer.listen(port, () => {
  console.log(`ExpressJS Running On Port: ${port}`)
})

module.exports = {
  app,
  io
}
