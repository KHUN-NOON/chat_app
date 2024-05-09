var bcrypt = require('bcrypt')
var saltRounds = 16

function hash(password) {
    const salt = bcrypt.genSaltSync(saltRounds)
    const hash = bcrypt.hashSync(password, salt)

    return hash
}

module.exports = hash