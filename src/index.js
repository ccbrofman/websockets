const express = require ('express')
const handlebars =require ('express-handlebars')
const { Server } = require ('socket.io')
const router = require('./router')

// const multer = require ('multer')

const PORT =9000
const app = express ()



app.use (express.json ())
app.use (express.urlencoded ({extended: true})) 
app.use (express.static (__dirname + '/public')) 
app.engine ('handlebars', handlebars.engine ())
app.set ('views', __dirname + '/views')
app.set ('view engine', 'handlebars')

router (app)



const httpServer = app.listen (PORT, () =>{
    console.log (`Server in running al port ${PORT}`)
})


const io = new Server ( httpServer )
io.on ('connection', socket => {


    socket.on ('message', payload =>{
        console.log (payload, socket.id)
    })

    socket.emit ('individual', `Este mensaje es para ${socket.id}`)
    socket.broadcast.emit ('broadcast', `un mensaje para todos menos para ${socket.id}`)

io.emit ('todos', 'este es un mensaje para todos los conectados')
})