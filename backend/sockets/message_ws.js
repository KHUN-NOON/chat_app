function message_ws (io) {
    io.of('/messages')
    .on('connection', socket => {
        socket.on('user noti', (args) => console.log(args.messagse))
    })
}

module.exports = message_ws