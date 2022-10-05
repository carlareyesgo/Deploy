const router = require('express').Router()
const god = require('./god')
const users = require('./users')

router.get('/',(req,res) =>{
    res.json({'info':'Welcome to gods API'})
})

router.use('/gods',god)
router.use('/users', users)

module.exports = router
