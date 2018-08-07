var express = require('express')
var bodyparser = require('body-parser')
var path = require('path')
var expresshbs = require('express-handlebars')

var app = express()

var PORT = process.env.PORT || 3000

app.listen(PORT, function(e) {
    if (e) throw e
    console.log('app listening on port' + PORT)
})