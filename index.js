const express = require('express')
const db = require('./models')
const bodyParser = require('body-parser')
const userService = require('./services/user')
const cors = require('cors')

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true }));

app.use(cors())

db.sequelize.sync({ alter:true }).then(()=>{
  userService(app, db)

  app.listen(8080,()=>{
    console.log('Server is running')
  })
})