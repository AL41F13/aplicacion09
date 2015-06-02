// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	$('#btnjugar').on('click',function(){    //asigna los cuadros
		//alert ("dentro");
		var pantalla=$.mobile.getScreenHeight();
		//alert ('pantalla' + pantalla);
		var encabezado=$('.ui header').outerHeight();
		//alert ('encabezado' + encabezado);
		var pie=$('.ui footer').outerHeight();
		//alert ('pie' + pie);
		var contenido=$('.ui-content').outerHeight();// va apreguntar su alto externo
		//alert ('contenido' + contenido);
		var alto=(pantalla-encabezado-pie)/2; 
		 
		
		$('.cuadro').height(alto);
	});
	
	
$('.cuadro').on ('vmousedown',function (){  ///agrega la clase 'pulsado' a el elemento .cuadro
		$('#pantalla').append(quien($(this).attr ('id')));
		$(this).addClass('pulsado');
});
$('.cuadro').on ('vmouseup', function (){
	$(this).removeClass('pulsado');
});
 function quien(q)
 {
	 return q .substring(1);
 }
});
//});

 