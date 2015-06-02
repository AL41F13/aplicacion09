// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	audio= window.plugins.LowLatencyAudio;

audio.preloadFX('b1', 'audio/C.mp3', function (){}, 
function (msg) { alert ("error" + msg);});

audio.preloadFX('b2', 'audio/D.mp3', function (){}, 
function (msg) { alert ("error" + msg);});

audio.preloadFX('b3', 'audio/E.mp3', function (){}, 
function (msg) { alert ("error" + msg);});

audio.preloadFX('b4', 'audio/F.mp3', function (){}, 
function (msg) { alert ("error" + msg);});


	
	
	$('#btnjugar').on('tap',function(){    //asigna los cuadros
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
	 audio.play(q);
	 return q .substring(1);
 }
});

});

 