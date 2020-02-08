const Cable = require('../models/Cables')

module.exports = {
    async store(request, response) {
        //console.log(request.body);
        
        
        const {TAG, Codigo, Origem, Corigem, Destino, Cdestino, formacao, bitola, RefDocOrigem, RefDocDestino, Fornecedor, ReguaOrigem, BorneOrigem, Condutor, ReguaDestino, BorneDestino} = request.body;
       
        /* var TAG = arquivo.TagCabo
        var Codigo = arquivo.Codigo
        var Origem = arquivo.Origem
        var Corigem = arquivo.Corigem
        var Destino = arquivo.Destino
        var Cdestino = arquivo.Cdestino
        var formacao = arquivo.formacao
        var bitola = arquivo.bitola
        var RefDocOrigem = arquivo.RefDocOrigem
        var RefDocDestino = arquivo.RefDocDestino
        var Fornecedor  = arquivo.Fornecedor
        var ReguaOrigem  = arquivo.ReguaOrigem
        var BorneOrigem  = arquivo.BorneOrigem
        var Condutor  = arquivo.Condutor
        var ReguaDestino  = arquivo.ReguaDestino
        var BorneDestino  = arquivo.BorneDestino */

  
        
       let cable = await Cable.findOne({TAG})
       
       
       
       if (cable){
           console.log(true)
          cable = await Cable.updateMany({
            TAG, 
            Codigo, 
            Origem, Corigem, 
            Destino, 
            Cdestino, 
            formacao, 
            bitola,     
            RefDocOrigem, 
            RefDocDestino, 
            Fornecedor, 
            ReguaOrigem, 
            BorneOrigem, 
            Condutor, 
            ReguaDestino, 
            BorneDestino,
            $inc: {Revisao: 1}
           })
           
       } else {

        cable = await Cable.create ({
           TAG, 
           Codigo, 
           Origem, Corigem, 
           Destino, 
           Cdestino, 
           formacao, 
           bitola, 
           RefDocOrigem, 
           RefDocDestino, 
           Fornecedor, 
           ReguaOrigem, 
           BorneOrigem, 
           Condutor, 
           ReguaDestino, 
           BorneDestino,
           Revisao: 0
       })
    }
       return response.json(cable)
    },

    async storeMany(arquivo){

        var TAG = arquivo.TagCabo
        var Codigo = arquivo.Codigo
        var Origem = arquivo.Origem
        var Corigem = arquivo.Corigem
        var Destino = arquivo.Destino
        var Cdestino = arquivo.Cdestino
        var formacao = arquivo.formacao
        var bitola = arquivo.bitola
        var RefDocOrigem = arquivo.RefDocOrigem
        var RefDocDestino = arquivo.RefDocDestino
        var Fornecedor  = arquivo.Fornecedor
        var ReguaOrigem  = arquivo.ReguaOrigem
        var BorneOrigem  = arquivo.BorneOrigem
        var Condutor  = arquivo.Condutor
        var ReguaDestino  = arquivo.ReguaDestino
        var BorneDestino  = arquivo.BorneDestino 
       

        let cable = await Cable.findOne({TAG})
         
        Revisa = false;
        if(cable){
            if (cable.ReguaOrigem.length == arquivo.ReguaOrigem.length
                && cable.ReguaOrigem.every(function(u, i) {
                    return u === arquivo.ReguaOrigem[i];
                })){

                }else{
                    var Revisa = true;
                }
                
                
                    if (cable.ReguaDestino.length == arquivo.ReguaDestino.length
                        && cable.ReguaDestino.every(function(u, i) {
                            return u === arquivo.ReguaDestino[i];
                        }))                    
                        {
                          
                        }else{
                            var Revisa = true;
                        }
                            if (cable.Condutor.length == arquivo.Condutor.length
                                && cable.Condutor.every(function(u, i) {
                                    return u === arquivo.Condutor[i];
                                })){
                                  

                                }else{
                                    var Revisa = true;
                                }
                                    if (cable.BorneOrigem.length == arquivo.BorneOrigem.length
                                        && cable.BorneOrigem.every(function(u, i) {
                                            return u === arquivo.BorneOrigem[i];
                                        })){
                                          

                                        }else{
                                            var Revisa = true;
                                        }
                                        if (cable.BorneDestino.length == arquivo.BorneDestino.length
                                            && cable.BorneDestino.every(function(u, i) {
                                                return u === arquivo.BorneDestino[i];
                                            }))
                                            {
                                             
                                            }else{
                                                var Revisa = true;
                                            }
                             

               
            
            if( cable.Corigem != arquivo.Corigem||
                cable.Destino != arquivo.Destino ||
                cable.Cdestino != arquivo.Cdestino ||
                cable.formacao != arquivo.formacao ||
                cable.bitola != arquivo.bitola ||
                cable.RefDocDestino != arquivo.RefDocDestino ||
                cable.RefDocOrigem != arquivo.RefDocOrigem ||
                cable.Fornecedor != arquivo.Fornecedor || 
                Revisa
    ){
       
       
                
                cable = await Cable.updateMany({
                    TAG, 
                    Codigo, 
                    Origem, Corigem, 
                    Destino, 
                    Cdestino, 
                    formacao, 
                    bitola,     
                    RefDocOrigem, 
                    RefDocDestino, 
                    Fornecedor, 
                    ReguaOrigem, 
                    BorneOrigem, 
                    Condutor, 
                    ReguaDestino, 
                    BorneDestino,
                    $inc: {Revisao: 1}
                   })

            }
                cable = await Cable.updateMany({
                    TAG, 
                    Codigo, 
                    Origem, Corigem, 
                    Destino, 
                    Cdestino, 
                    formacao, 
                    bitola,     
                    RefDocOrigem, 
                    RefDocDestino, 
                    Fornecedor, 
                    ReguaOrigem, 
                    BorneOrigem, 
                    Condutor, 
                    ReguaDestino, 
                    BorneDestino,
                    
                   })
            
           
            
            
        } else{ 
      

           
      



        await Cable.create({
            TAG, 
            Codigo, 
            Origem, Corigem, 
            Destino, 
            Cdestino, 
            formacao, 
            bitola, 
            RefDocOrigem, 
            RefDocDestino, 
            Fornecedor, 
            ReguaOrigem, 
            BorneOrigem, 
            Condutor, 
            ReguaDestino, 
            BorneDestino,
            Revisao: 0
        })
        
    
    }
    cable = "";
}


};