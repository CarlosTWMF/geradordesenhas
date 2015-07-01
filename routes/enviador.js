module.exports = function(app) {
	var controller = app.controllers.enviador;
	
	app.post('/enviar', controller.post.enviarEmail);
	

};
