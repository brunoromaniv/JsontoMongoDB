const fs = require('fs');
var parser = require('fast-xml-parser');
var he = require('he');


    module.exports = {

      async createJson(origem, nome, dirname) {
        let xmlData = fs.readFileSync(origem, "utf8");
        var options = {
          attributeNamePrefix : "@_",
          attrNodeName: "attr", //default is 'false'
          textNodeName : "#text",
          ignoreAttributes : true,
          ignoreNameSpace : false,
          allowBooleanAttributes : false,
          parseNodeValue : true,
          parseAttributeValue : false,
          trimValues: true,
          cdataTagName: "__cdata", //default is 'false'
          cdataPositionChar: "\\c",
          parseTrueNumberOnly: false,
          arrayMode: false, //"strict"
          attrValueProcessor: (val, attrName) => he.decode(val, {isAttributeValue: true}),//default is a=>a
          tagValueProcessor : (val, tagName) => he.decode(val), //default is a=>a
          stopNodes: ["parse-me-as-string"]
      };
      if( parser.validate(xmlData) === true) { //optional (it'll return an object in case it's not valid)
    var jsonObj = parser.parse(xmlData,options);
    


 
}   


        
     
     // delete require.cache[require.resolve(diretorio+'/'+excelName+'.json')];

      var listacabos =  await require(__dirname+'/DI_1A.json');
      
      //var listacabos =  jsonObj;
      var LISTA = [];
    
    var a = 2;
    cableNumber = 10;
   // cableNumber = listacabos.EplanLabelling.Document.Page.length;
    var cables = []
    
    var js = {
        "TagCabo": '',
      "Codigo": '',
      "Origem": '',
      "Corigem": '',
      "Destino": '',
      "Cdestino": '',
      "formacao": '',
      "bitola": '',
      "RefDocOrigem": '',
      "RefDocDestino": '',
      "Fornecedor": '',
      "ReguaOrigem": [],
      "BorneOrigem": [],
      "Condutor": [],
      "ReguaDestino": [],
      "BorneDestino": [],
      
    }
    
   
    
    for (var j = 0; j < cableNumber; j++){
     
        /* var Cabo = [];
       
        
        
        if (body == undefined){
            teste = 1
        }else
        { teste = body};
        var header = listacabos.EplanLabelling.Document.Page[j].Header.Property.length */
    
      
    //for (var i = 0; i < header; i++) {
        
        js.Codigo = listacabos.EplanLabelling.Document.Page[j].Header.Property[0].PropertyValue
        js.TagCabo = listacabos.EplanLabelling.Document.Page[j].Header.Property[1].PropertyValue
        js.Origem = listacabos.EplanLabelling.Document.Page[j].Header.Property[2].PropertyValue
        js.Cdestino = listacabos.EplanLabelling.Document.Page[j].Header.Property[3].PropertyValue
        js.Destino = listacabos.EplanLabelling.Document.Page[j].Header.Property[4].PropertyValue
        js.Corigem = listacabos.EplanLabelling.Document.Page[j].Header.Property[5].PropertyValue
        js.formacao = listacabos.EplanLabelling.Document.Page[j].Header.Property[6].PropertyValue
        js.bitola = listacabos.EplanLabelling.Document.Page[j].Header.Property[7].PropertyValue
        js.RefDocDestino = listacabos.EplanLabelling.Document.Page[j].Header.Property[8].PropertyValue
        js.RefDocOrigem = listacabos.EplanLabelling.Document.Page[j].Header.Property[9].PropertyValue
        js.Fornecedor = listacabos.EplanLabelling.Document.Page[j].Header.Property[10].PropertyValue
        
        var body = listacabos.EplanLabelling.Document.Page[j].Line.length
        if (body == undefined  ){
           
            js.ReguaOrigem = listacabos.EplanLabelling.Document.Page[j].Header.Property[11].PropertyValue
            js.BorneOrigem = listacabos.EplanLabelling.Document.Page[j].Header.Property[12].PropertyValue
            js.Condutor = listacabos.EplanLabelling.Document.Page[j].Header.Property[13].PropertyValue
            js.ReguaDestino = listacabos.EplanLabelling.Document.Page[j].Header.Property[14].PropertyValue
            js.BorneDestino = listacabos.EplanLabelling.Document.Page[j].Header.Property[15].PropertyValue
                
                
               
            } else {
    
    for(var n = 0; n < listacabos.EplanLabelling.Document.Page[j].Line.length; n++){
       
            js.ReguaOrigem[n] = listacabos.EplanLabelling.Document.Page[j].Line[n].Label.Property[0].PropertyValue
            js.BorneOrigem[n] = listacabos.EplanLabelling.Document.Page[j].Line[n].Label.Property[1].PropertyValue
            js.Condutor[n] = listacabos.EplanLabelling.Document.Page[j].Line[n].Label.Property[2].PropertyValue
            js.ReguaDestino[n] = listacabos.EplanLabelling.Document.Page[j].Line[n].Label.Property[3].PropertyValue
            js.BorneDestino[n] = listacabos.EplanLabelling.Document.Page[j].Line[n].Label.Property[4].PropertyValue

                
        
       


            }
        }

       
        cables[j] = js;
    }
        
        //Cabo.push( listacabos.EplanLabelling.Document.Page[j].Header.Property[i].PropertyValue)
         
       console.log(cables);
    //};
    
    /* let Origem = [];
    
    if (body == undefined  ){
        for(v = 0; v < 5; v++){ 
            Origem.push( listacabos.EplanLabelling.Document.Page[j].Line.Label.Property[v].PropertyValue)
            
           
            };
    
    } else {
        var t = 0;
    for(var n = 0; n < listacabos.EplanLabelling.Document.Page[j].Line.length; n++){
        for(v = 0; v < 5; v++){ 
            
        Origem.push( listacabos.EplanLabelling.Document.Page[j].Line[n].Label.Property[v].PropertyValue)
        
        
        };
        t = t + v;
      
 
        
    };
    
    };   
        
   
    
    
   

    
     a = a + teste; */

   // };

  
  console.log('chegou aqui');
 
/* 
  fs.chmod(diretorio, '755', function(err){
    if(err){
      console.log('deu ruim')
    }
  })
    
    await wb.xlsx.writeBuffer()
    .then(function(buffer) {
        console.log(buffer)
      fs.writeFile(diretorio + '/mySheetName.xlsx', buffer, (err)=>{
          if(err) throw err
          console.log('done....');
        });
    });  */

    


    }
}

    
    
   
    
