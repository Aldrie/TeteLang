/*---------------------------------------------------*/ 
/*Basics*/

function saida(text){//for output
    terminal.innerHTML += text;
}

function Console(text){//for output
    terminal.innerHTML += text;
}

function entrada( msg ) {//for inputs
    let value;
    value = window.prompt( msg );
    if(!isNaN(value)){
        return Number(value);
    }else{
        return value;
    }   
}

function variavel( name ) {//for variables
    if( typeof name =='undefined'){
        eval('let '+name);
    }else {
        delete(name);
        eval('let '+name);
    }
}
/*---------------------------------------------------*/ 
/*Loops*/

function loop(value){
    let splited = value.split(",");
    let condition = splited[0];
    let incre = splited[1];
    let comp = splited[2];

    return eval(`while(${condition}) {
       ${comp}
        ${incre}
    }`);
}

/*---------------------------------------------------*/ 


function se(value){
    let splited = value.split(",");
    let condition = splited[0];
    let positive = splited[1];
    let negative = splited[2];

    return eval(`if(${condition}) {
       ${positive}
    }else{
        ${negative}
    }`);
}

function funcao( name, variables, code ) {
    if( typeof name =='undefined'){
        eval(`function ${name}(${variables}) { return ${code} } `);
    }else {
        delete(name);
        eval(`function ${name}(${variables}) { return ${code} } `);
    }
   
}