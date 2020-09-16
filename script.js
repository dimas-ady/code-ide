ace.require("ace/ext/language_tools");

var theme = {
    dracula : "ace/theme/dracula",
    monokai : "ace/theme/monokai",
    github : "ace/theme/github",
    twilight : "ace/theme/twilight",
    vib_ink : "ace/theme/vibrant_ink"
};

var setting = {
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
};

var editorHTML = ace.edit('editorHTML');

editorHTML.setTheme(theme.vib_ink);
editorHTML.session.setMode("ace/mode/html");
editorHTML.setOptions(setting);

var editorCSS = ace.edit('editorCSS');

editorCSS.setTheme(theme.twilight);
editorCSS.session.setMode("ace/mode/css");
editorCSS.setOptions(setting);

var editorJS = ace.edit('editorJS');

editorJS.setTheme(theme.dracula);
editorJS.session.setMode("ace/mode/javascript");
editorJS.setOptions(setting);

var newText = "<!DOCTYPE HTML>\n<html>\n\n  <head>\n\n  </head>\n\n  <body>\n\n  </body>\n\n</html>"
editorHTML.setValue(newText);

function update(){
    var resPage = document.getElementById('result_page').contentWindow.document;
    resPage.open();
    resPage.write(editorHTML.getValue());
    resPage.write("<style>" + editorCSS.getValue()+"</style>");
    resPage.write("<script>" + editorJS.getValue()+"</script>");
    resPage.close();
}

editorHTML.session.on('change', function() {
    update();
});

editorCSS.session.on('change', function() {
    update();
});

editorJS.session.on('change', function() {
    update();
});

update();

function preview(){
    
    var resPage = document.getElementById('result');
    if(resPage.style.display === 'none'){
        resPage.style.display = 'block';
    } else {
        resPage.style.display = 'none';
    }
    
}

var htmlE = document.getElementById("editorHTML");
var cssE = document.getElementById("editorCSS");
var jsE = document.getElementById("editorJS");

function toHTML(){
    htmlE.style.display = 'block';
    cssE.style.display = 'none';
    jsE.style.display = 'none';
}

function toCSS(){
    htmlE.style.display = 'none';
    cssE.style.display = 'block';
    jsE.style.display = 'none';
}

function toJS(){
    htmlE.style.display = 'none';
    cssE.style.display = 'none';
    jsE.style.display = 'block';
}