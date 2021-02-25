//ga usah dibuah
var bcrypt = require('bcryptjs');

const hashPassword = (password) => {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    return hash
}

const isMatch = (inputPassword, passwordDB) => {
    const value = bcrypt.compareSync(inputPassword, passwordDB);
    return value
}

module.exports = {
    hashPassword, isMatch
}