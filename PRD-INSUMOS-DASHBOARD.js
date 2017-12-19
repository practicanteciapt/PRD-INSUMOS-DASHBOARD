/*
 * Basic responsive mashup template
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );
var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) {
	qlik.setOnError( function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );

	//callbacks -- inserted here --
	//open apps -- inserted here --
	var app = qlik.openApp('PRD-INSUMOS.qvf', config);

	//get objects -- inserted here --
	app.getObject('QV25','kPKCTX');
	app.getObject('QV24','PFabC');
	app.getObject('QV22','EcvmDXt');
	app.getObject('QV23','TFGDdG');
	app.getObject('QV20','jTjph');
	app.getObject('QV21','ncEwMb');
	app.getObject('QV17','WLQwHm');
	app.getObject('QV18','TyDFtZj');
	app.getObject('QV15','cJjHtZ');
	app.getObject('QV16','FGNCaKE');
	app.getObject('QV19','gjKXgyP');
	
	
	
	
	app.getObject('QV14','BMhULD');
	app.getObject('QV12','jhjEds');
	app.getObject('QV08','FAvejXs');
	app.getObject('QV07','RMuPV');
	app.getObject('QV06','hPHcnu');
	app.getObject('QV11','zvgrdJL');
	app.getObject('QV10','PApCDy');
	app.getObject('QV05','wtBpjth');
	app.getObject('QV04','PzswjRE');
	app.getObject('QV03','kjWdDY');
	app.getObject('QV02','FPSFXf');
	app.getObject('QV01','dTBdY');
	app.getObject('QV09','zbxPuX');
	
	
	
	
	
	
	app.getObject('CurrentSelections','CurrentSelections');
	
	
	
	
	
	
	
	
	//create cubes and lists -- inserted here --

} );
