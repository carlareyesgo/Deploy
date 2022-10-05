const God = require('../models/gods')

async function createGod(req,res){
    var body = req.body
    God.create(body).then(god => {
        res.status(201).json(god)
    })
}

async function getGod(req,res){
    var id = req.params.id
    const god = await God.findByPk(id)
    res.status(200).json(god)
}

async function getGods(req,res){
    const gods = await God.findAll()
    res.status(200).json(gods)
}

async function updateGod(req,res){
    var id = req.params.id
    var god = req.body
    await God.update(god,{where: {id}})
    const god_update = await God.findByPk(id)
    res.status(200).json(god_update)
}

async function deleteGod(req,res){
    var id = req.params.id
    var deleted = God.destroy({where:{id}})
    res.status(200).json(deleted)
}

module.exports = {
    createGod,
    getGod,
    getGods,
    updateGod,
    deleteGod
}