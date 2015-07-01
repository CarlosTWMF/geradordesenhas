module.exports = function(app) {
	var controller = app.controllers.gerador;
	
	app.get('/', controller.get.index);

	app.get('/gerar', controller.get.gerar);
	app.get('/sobre', controller.get.sobre);
	
	app.post('/randomize', controller.post.randomize);
};