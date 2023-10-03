const {prisma} = require('../prisma/prisma-client')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

/**
 .*. @route POST /api/user/login
 .*. @desc Login
 .*. @access Public
 .*/
const login = async (req, res) => {
    const {email, password} = req.body
    if (!email || !password) {
        return res.status(400).json({message: 'Заполните поля'})
    }
    const user = await prisma.user.findFirst({
        where: {
            email,
        }
    })

    const isPasswordCorrect = await bcrypt.compare(password, user.password)
    const secret = process.env.JWT_SECRET
    if (user && isPasswordCorrect && secret) {
        res.status(200).json({
            id: user.id,
            name: user.name,
            email: user.email,
           token: jwt.sign({id:user.id}, secret,{expiresIn: '30d' })
        })
    } else {
        return res.status(400).json({message: 'Не авторизован' })
    }
}
/**
 .*. @route POST /api/user/registration
 .*. @desc Registration
 .*. @access Public
 .*/
const register = async (req, res) => {
    const {email, password, name} = req.body
if(!email || !password || !name){
    return res.status(400).json({message:'Заполните обязательные поля'})
}
const registeredUser= await prisma.user.findFirst({
    where:{
        email
    }
})
if(registeredUser){
    return res.status(400).json({message:'Пользователь уже существует'})
}
const salt = await bcrypt.genSalt(10)
const hashPassword = await bcrypt.hash(password, salt)
const user = await prisma.user.create({
    data:{
        name,
        email,
        password:hashPassword
    }
})
    const secret = process.env.JWT_SECRET
if(user&& secret){
res.status(200).json({
    id:user.id,
    name,
    email:user.email,
    token: jwt.sign({id:user.id}, secret,{expiresIn: '30d'})
})
} else {
    return res.status(400).json({message:'не удалось создать пользователя'})
}
}
const current = async (req, res) => {
   return res.status(200).json(req.user)
}
module.exports = {
    login,
    register,
    current
}