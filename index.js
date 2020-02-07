const express = require('express');
const { Router} = require('express') ;
const cors = require('cors');
const mongoose = require('mongoose');
const CableController = require('./src/controllers/CableController')
const JsonController = require('./src/controllers/JsonController')

mongoose.connect('mongodb+srv://brunoromaniv:brunoromaniv@cluster0-ixmuf.mongodb.net/EplantoExcel?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



const app = express();
app.use(express.json())
const routes = Router();

JsonController.createJson(__dirname + '/TESTE.xml')

app.use(cors());

 app.post('/cables', CableController.store);
 app.get('/*', (req,res) => {
    return res.json({message: 'Hello Mongo'});
})

 app.listen(process.env.PORT || 3333);

module.exports = routes; 