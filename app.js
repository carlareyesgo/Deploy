   var express = require('express')
   const sequelize = require('./config/db')
   const routes = require('./routes')

   var app = express()
   app.use(express.json())
   app.use('/',routes)

   try{
        sequelize.authenticate()
        sequelize.sync()
        console.log('Connect to DB')
   } catch(error){
        console.log('Unable o connect to DB',error)
   }

app.listen(process.env['PORT'] || 3000, ()  => {
     console.log("Server listing on PORT", process.env['PORT'])
})