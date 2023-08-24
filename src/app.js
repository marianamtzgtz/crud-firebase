const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const morgan = require('morgan')

const app = express()

// Settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs.create({
        defaultLayout: 'main',
        extname: '.hbs'
    }).engine
)
app.set('view engine', '.hbs')

// Middlewares
app.usd(morgan('dev'))
app.use(express.urlencoded({
    extended: false
}))

// Rutas
app.use(require('./routes/index'))

// Archivos Estáticos
app.use('/public', express.static(path.join(__dirname, 'public')))

module.exports = app 