var express = require('express')
var router = express.Router()
var hash = require('../utils/hash')
var db = require('../models/index')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')

router.post('/register', async (req, res) => {
    try {
        const user = await db.User.create({
            name: req.body.name,
            password: hash(req.body.password),
            created_at: new Date(),
            updated_at: new Date()
        })

        res.send({
            success: true,
            message: "Registered Successfully!",
            data: user
        })
    } catch (err) {
        res.send(err)
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await db.User.findOne({
            where: { name: req.body.name }
        })

        if (!user) {
            throw new Error("User not found")
        }
    
        const passwordMatch = await bcrypt.compare(req.body.password, user.password)
    
        if (!passwordMatch) {
            throw new Error("Invalid Password")
        }

        const access_token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        })

        const refresh_token = jwt.sign({ name: user.name }, process.env.JWT_SECRET, {
            expiresIn: '1d'
        })

        res.cookie('jwt', refresh_token, {
            httpOnly: true,
            secure: true,
            maxAge: 24 * 60 * 60 * 1000
        })
    
        return res.status(200).send({
            success: true,
            message: "Login successful!",
            data: {
                access_token
            }
        })
    } catch (err) {
        res.status(500).send({
            success: false,
            message: err.message || "Internal Server Error",
            data: null
        })
    }
})

router.post('/logout', (req, res) => {
    try {
        if ( req.cookies?.jwt ) {
            const refresh_token = req.cookies.jwt

            jwt.verify(refresh_token, process.env.JWT_SECRET, (err, decoded) => {
                if (err) {
                    return res.status(500).send({
                        success: false,
                        message: err.message,
                        data: null
                    })
                } else {
                    const access_token = jwt.sign({ name: decoded.name }, process.env.JWT_SECRET, {
                        expiresIn: '15m'
                    })

                    return res.send({
                        success: true,
                        message: "Token Refreshed!",
                        data: {
                            access_token
                        }
                    })
                }
            })
        }
    } catch (err) {
        res.status(500).send({
            success: false,
            message: err.message,
            data: null
        })
    }
})

router.post('/refresh', (req, res) => {
    try {
        
    } catch (err) {
        res.status(500).send({
            success: false,
            message: err.message,
            data: null
        })
    }
})

module.exports = router