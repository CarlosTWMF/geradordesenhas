module.exports = function() {
	var Controller = {
		randomize: function(numero1) {
			var randomstring = require("randomstring");
			var resultado = randomstring.generate(numero1);
			return resultado;
		},
		
		get: {
			index: function(request, response) {
				response.render('index');
			},

			gerar: function(request, response) {
				response.render('gerar');
			},

			sobre: function(request, response) {
				response.render('sobre');
			}
		},
		
		post: {
			randomize: function(request, response) {
				var numero1 = request.body.numero1;
				var resultado  = Controller.randomize(numero1);
				response.render("form", { "resultado" : resultado });
			}
		}
	};
	
	return Controller;
};
