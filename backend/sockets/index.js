var message_ws = require('./message_ws')

function init(io) {
    message_ws(io)
}

module.exports = init