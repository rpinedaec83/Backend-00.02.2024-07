const bcrypt = require('bcrypt')
const handlebCrypt = async (password) => {

    const hashedPassword = await bcrypt.hash(password, 10)

    return hashedPassword
}

module.exports = handleCrypt