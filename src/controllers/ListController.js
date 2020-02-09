const Cable = require('../models/Cables')


module.exports = {
    async index(){

        cable = Cable.find();
        Console.log('cable');
    }
}