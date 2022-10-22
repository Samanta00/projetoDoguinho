const express=require('express')
const router= express.Router()
const controller=require('../controll/controller')


router.get('/Doguinho-Ong/cadastros', controller.callPeople)


module.exports=router