// Buscar ace.js para mas info

var editors = document.querySelectorAll(".sintax");
editors.forEach(function(editorElem) {
    var e = ace.edit(editorElem);
	e.setTheme("ace/theme/github")
	e.getSession().setMode("ace/mode/python")
	e.getSession().setTabSize(2)
	e.renderer.setShowGutter(false)
	e.setReadOnly(true)
	e.setAutoScrollEditorIntoView(true);
	e.setOption("maxLines", Infinity);
	e.setOptions({
	fontSize: '12pt'
})
});



// var e = ace.edit("jsEditor")
// e.getSession().setMode("ace/mode/python") // Se pone en ultimo lugar el lenguaje a resaltar
// e.setTheme("ace/theme/github") // Se pone el 'theme'
// e.getSession().setTabSize(2) // Fija el tamaño
// e.renderer.setShowGutter(false) // Deja de mostrar los numeros a la izq del codigo
// e.setReadOnly(true) // No permite modificar
