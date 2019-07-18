function TransformSimplerToDefault(codeText) {
   let simpleCode = codeText.split('\n');
   let SimpleVfinalCode='';
   for (var i=0; i<= simpleCode.length - 1 ; i++){
       simpleCode[i] = simpleCode[i].VerifyCommandExists('entrada');
       simpleCode[i] = simpleCode[i].VerifyCommandExists('variavel', true);
       simpleCode[i] = simpleCode[i].VerifyCommandExists('saida');
       simpleCode[i] = simpleCode[i].VerifyCommandExists('loop', true);
       simpleCode[i] = simpleCode[i].VerifyCommandExists('se', true);
       SimpleVfinalCode += simpleCode[i]+';\n';
   }
   return SimpleVfinalCode;
}


String.prototype.VerifyCommandExists = function ( command, parentses ){
    let regex = new RegExp('\\b'+command.toUpperCase()+'\\b', "gi");
    console.log(regex);
    if (this.search(command.toUpperCase()) == -1 ) {
        return this + "";
    }else {
        if(parentses){
        return this.replace(regex, `${command}('`) + `')`;
        }else {
        return this.replace(regex, `${command}(`) + ")";
        }
    }
    
} 