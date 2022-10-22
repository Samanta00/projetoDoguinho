const cliente=require('../model/banco.js')

const callPeople=async(request, response)=>{

    const allPeole=await cliente("Doguinho-Ong")

    response.status(200).send(allPeole)
}



module.exports={
    callPeople
}