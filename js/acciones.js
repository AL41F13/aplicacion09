// JavaScript Document
$(document).ready(function(e) {
	document.addEventListener("deviceready",function(){
     var basedatos=window.sqlitePlugin.openDatabase({name: "coloresBD.db",createFromLocation:1});
	  cargarnombrejugador();
	 
	 function cargarnombrejugador()
		{
			basedatos.transaction(function(ejecutador){
			var sql="SELECT NombreUsuario FROM Usuario";
			ejecutador.executeSql(sql,undefined,function(ejecutador,resultado){
			var datosjugador=resultado.rows.item(0);
			$('#jugador').text(datosjugador.NombreUsusario);

});
});
}
		

audio= window.plugins.LowLatencyAudio;
audio.preloadFX('b1', 'audio/C.mp3', function (msg){}, 
function (msg) { alert ("error" + msg);});

audio.preloadFX('b2', 'audio/D.mp3', function (msg){}, 
function (msg) { alert ("error" + msg);});

audio.preloadFX('b3', 'audio/E.mp3', function (msg){}, 
function (msg) { alert ("error" + msg);});

audio.preloadFX('b4', 'audio/F.mp3', function (msg){}, 
function (msg) { alert ("error" + msg);});



	
	
	$('#btnjugar').on('tap',function(){    //asigna los cuadros
		alert ("dentro");
		var pantalla=$.mobile.getScreenHeight();
		alert ('pantalla' + pantalla);
		var encabezado=$('.ui header').outerHeight();
		alert ('encabezado' + encabezado);
		var pie=$('.ui footer').outerHeight();
		alert ('pie' + pie);
		var contenido=$('.ui-content').outerHeight();// va apreguntar su alto externo
		alert ('contenido' + contenido);
		var alto=((pantalla-encabezado-pie)/2); 
		
		 
		
		$('.cuadro').height(alto);
	});
	
	
//$('.cuadro').on ('vmousedown',function (){  ///agrega la clase 'pulsado' a el elemento .cuadro
		//$('#pantalla').append(quien($(this).attr ('id')));
		//$(this).addClass('pulsado');
//});
//$('.cuadro').on ('vmouseup', function (){
	//$(this).removeClass('pulsado');
//});
 function quien(q)
 {
	 audio.play(q);
	 return q.substring(1);
 }

$('#btnconfigurar').on('tap',function (){
	$('#txtnombre').val($('#jugador').text());
});
$('#btnguardar').on ('tap',function(){
	var nuevonombre=$('#txtnombre').val();
	basedatos.transaction (function(consulta){
		consulta.executeSql("UPDATE Usuario SET Nombreusuario=? where Claveusuario='1'",[Nombreusuario]);
	});
});	
function flash (boton)
	{
		boton.stop().animate ({opacity:'0.5'},{
		duracion:80, complete:function(){
			boton.stop().animate({opacity:'1'},200);
		}
	});
}
});
$('.cuadro').on ('tap',function (){
	flash ($(this))
	audio.play ($(this).attr('id'));
});
 });