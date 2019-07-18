//code
let code = document.querySelector('#code'); //define variables
var editor = CodeMirror.fromTextArea(code, {readOnly : true});
//style
let themes = document.getElementById('themes');
let modes = document.getElementById('modes');
let div_commands = document.querySelector(".con_commands");


commands = {
    VARIAVEL:{
        nameSV: "VARIAVEL",
        description: "Utilizado para a criação de uma _variável_",
        exSV: "//Para criar uma variável que\n// receberá um valor numérico \n"+
            "VARIAVEL x\n"+
            "x = 16",
    },
    ENTRADA:{
        nameSV: "ENTRADA",
        description: "Utilizado para executar uma entrada do usuário",
        exSV: "//Uma Variável que recebe\n// o valor do usuário!\n"+
            "VARIAVEL nome\n"+
            'nome = ENTRADA "Digite seu nome"',
    },
    SAIDA:{
        nameSV: "SAIDA",
        description: "Executa uma saída no terminal, exibe em forma de texto a requesição",
        exSV: "//Uma mensagem será \n//exibida no terminal\n"+
            'SAIDA "Olá Mundo"',
    },

    SE:{
        nameSV: "SE",
        description: "Executa uma comparação, se a resposta for verdadeira é executado o respectivo código",
        exSV: "//Comparação entre dois números\n"+
            'SE 2 < 16 SAIDA "2 é menor que 16"\n'+
            'SE 2 > 16 SAIDA "2 é menor que 16"\n'+
            '//a saída será a primeira comparação'
    },
    LOOP:{
        nameSV: "LOOP",
        description: "Utilizado na necessidade de um Loop, enquanto a condição for verdadeira o loop se repetirá",
        exSV: "//Uma contagem de 0 a 16\n"+
            "VARIAVEL numero\n"+
            "numero = 0\n"+
            'LOOP numero <= 10, numero = numero + 1, SAIDA numero',
    }
};

generateFlexBoxCommands("SV");

function generateFlexBoxCommands(mode){
    if (mode == "SV"){
    for(let key in commands){
        div_commands.innerHTML += `<div class="command">${commands[key].nameSV}</div>`
    }
}else if(mode == "S"){
    for(let key in commands){
        div_commands.innerHTML += `<div class="command">${commands[key].nameSV}</div>`
    }
}
}


let command_btns = document.querySelectorAll(".command");
for(var i=0; i<=command_btns.length - 1; i++){
    command_btns[i].addEventListener("click", function(){
        if(modes.value == "TLsv"){
        editor.setValue(commands[this.innerHTML].exSV);
        }else {
            editor.setValue(TransformSimplerToDefault(commands[this.innerHTML].exSV));
        }
    });
}

//style
Theme('light');
Mode('TLsv');

themes.onchange = function () {
    Theme(themes.value);//for themes to code editor
}

modes.onchange = function () {
    Mode(modes.value);//for modes to code editor
}

function Mode(value) {
    if(value == 'TLsv') {
        editor.setOption("mode", "TLsv");
        modes.style.background = '#d0a1ce';
    }else if(value == 'TL'){
        editor.setOption("mode", "javascript");
        modes.style.background = '#b27fd9';
    }else{
        editor.setOption("mode", "javascript");
        modes.style.background = '#6e68ec';
    }
}

function Theme(value) {
    if(value == 'light') {
        editor.setOption("theme", "3024-day");
        themes.style.background = '#d0a1ce';
    }else {
        editor.setOption("theme", "dracula");
        themes.style.background = '#6e68ec';
    }
}
//style ----------------------

