//code
let code = document.querySelector('#code'); //define variables
let terminal = document.querySelector('#terminal');
let btn_run = document.querySelector('#btn_run');
var editor = CodeMirror.fromTextArea(code, {autoCloseBrackets: true});
//style
let themes = document.getElementById('themes');
let modes = document.getElementById('modes');
let Btn_Clean = document.querySelector('.terminalBtn1');

let modal = document.getElementById("modal");
let btn_modal = document.getElementById("save");
let btn_close_modal = document.getElementById("close_modal");
let btn_save_file = document.getElementById("save_modal");

let userFileName = document.getElementById("userFileName");
let userFileExt = document.getElementById("userFileExt");

//style
Theme('light');
Mode('TLsv');

Modal = {
    show: function() {
        modal.style.display = "block";
        modal.style.opacity = 1;
    },
    close: function() {
        modal.style.display = "none";
        modal.style.opacity = 0;
    },
    reciveValues: function(){
        let mode = modes.value.toLowerCase();
        let name;
        try{
            name = editor.getValue().split("\n")[0].replace("//", "");
            console.log(name);
        }catch(error){
            name = "";
            console.log("ero")
        }
        userFileExt.value = mode;

        userFileName.value = name;
    }
};

btn_modal.onclick = function() {
    Modal.show();
    Modal.reciveValues();
}

btn_close_modal.onclick = function() {
    Modal.close();
}

window.onclick - function(e){
    if(e.target == modal) {
        Modal.close();
    }
}

document.addEventListener("keydown", function(e){
    if(e.keyCode == "27"){
        Modal.close();
    }
});

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

//code
Btn_Clean.onclick = function() {
    terminal.innerHTML = '';
}

function Run(codes) {//"Compiler" function, that interprets the code
    try {
        terminal.style.color = '#000';
        terminal.style.fontWeight = 'normal'
        eval(codes);

    }catch(error){
        terminal.style.color = '#d63c3c';
        terminal.style.fontWeight = 'bold'
        terminal.innerHTML = "Error<br>", + error;
    }
}

function Simpler() {
    
}

btn_run.onclick = function() {
   //Run(editor.getValue());
   Run(TransformSimplerToDefault(editor.getValue()));
}

function SaveFile(){
    let text = editor.getValue().replace(/\n/g, '\r\n');
    let textBlob = new Blob([ text ], { type: 'text/plain' });
    let fileName =`${userFileName.value}.${userFileExt.value}`;

    let downloadLink = document.createElement("a");
    downloadLink.download = fileName;
    downloadLink.innerHTML = "Download Code File";

    if( window.webkitURL != null ) {
        //For Chrome rules
        downloadLink.href = window.webkitURL.createObjectURL(textBlob);
    }else {
        downloadLink.href = window.URL.createObjectURL(textBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }
    downloadLink.click();
}

btn_save_file.onclick = function(){
    SaveFile();
}

document.addEventListener("keydown", function(e){
    if(e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
        e.preventDefault();
        Modal.show();
        Modal.reciveValues();
    }
});


function destroyClickedElement(e) {
    document.body.removeChild(e.target);
}

