function TeteToJavaScript(codeText){
    let simpleCode = codeText.split('\n');
    let SimpleVfinalCode='';
    for (var i=0; i<= simpleCode.length - 1 ; i++){
        simpleCode[i] = simpleCode[i].VerifyCommandExistsToJS('entrada');
        simpleCode[i] = simpleCode[i].VerifyCommandExistsToJS('variavel', true);
        simpleCode[i] = simpleCode[i].VerifyCommandExistsToJS('saida');
        simpleCode[i] = simpleCode[i].VerifyCommandExistsToJS('loop', true);
        simpleCode[i] = simpleCode[i].VerifyCommandExistsToJS('se', true);
        SimpleVfinalCode += simpleCode[i]+'\n';
    }
    return SimpleVfinalCode;
}

String.prototype.VerifyCommandExistsToJS = function ( command ){
    let final;
    if (this.search(command) == -1 ) {
        return this + "";
    }else {
       switch(command){
          case "entrada":
           final =  this.replace(/entrada\((.*?)\)/g, 'window.prompt($1)')
                break;

          case "variavel":
           final =  this.replace(/variavel\(' (.*?)'\)/g, 'let $1');
                break;

          case "saida":
           final =  this.replace(/saida\( (.*?)\)/g, 'Console($1)');
                break;
                                                              
          case "loop":
           final =  this.replace(/loop\('(.*?),(.*?),(.*?)\'\)/g, 'while($1){\n$3\n$2\n}');
           final = final.substring(0, final.length - 1);
                break;

          case "se":
           final =  this.replace(/se\('(.*?),(.*?)'\)/g, 'if($1 ){\n$2\n}');
           final = final.substring(0, final.length - 1);        
                 break;
                                                                  
          default:
    
              break;                                                        
                                                               
       }
    }
    return final;
    
} 
