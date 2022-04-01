const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()


app.use(cors())
//middlewarea nivel de la aplicación app
//middleware express.json : Analiza las solicitudes entrantes con cargas JSON y se basa en body-parser .
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//middlewarea a nivel de la ruta
app.use('/api/expenses', require('./routes/expenseRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.listen(port, () => console.log(`Èl servidor inicio en el puerto ${port}`))


