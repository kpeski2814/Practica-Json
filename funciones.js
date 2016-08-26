$(document).ready(function(){

/*var Ob_JSon={"nombre":"ronald","apellidos":"guerra"};*/

var articulos=[{"producto":"guitarra","precio":25},
			     {"producto":"pc","precio":35}];

$("#enviar").click(function(){

$("#mostrar").html(

articulos[1].producto+" "+articulos[1].precio+"<br>"+
articulos[0].producto+" "+articulos[0].precio

/*Ob_JSon.nombre+" "+Ob_JSon.apellidos*/

);


});




});
