const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {handleCrypt} = require('../utils/handle8crypt')
const user = require('../models/UserModel');
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
    const {username, password} = req.body

    const hashedPass = await handleCrypt(password)

    console.log(hashedPass)

    const user = await User.create({username: username, password: hashedPass})

    return res.status(202).json({msg: 'El usuario se creo correctamente', user})
}   catch (error) {
    return res.status('404').json({msg: 'Error al registrar usuario'})
    }
})

module.exports = router