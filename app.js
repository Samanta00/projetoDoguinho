const express=require('express')
const cors=require('cors')
const peopleRotas=require('./routers/routers')

const app=express()

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*')
    // res.header('Access-Control-Allow-Origin', 'GET')
    app.use(cors())
    console.log('Acessou o Middleware!')
    next()
})
app.use(express.json())
app.use('/peoples', peopleRotas)


module.exports=app