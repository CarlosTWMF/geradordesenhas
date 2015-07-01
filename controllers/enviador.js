module.exports = function() {
	var Controller = {

		enviarEmail: function() {
			// Enviando e-mails usando o Node.js e o famoso nodemailer
			var nodemailer = require('nodemailer');
			 
			// Vamos criar a conta que irá mandar os e-mails
			var conta = nodemailer.createTransport({
			    service: 'Gmail', // Existem outros services, você pode procurar
			                      // na documentação do nodemailer como utilizar
			                      // os outros serviços
			    auth: {
			        user: 'geradordesenhassimpatia@gmail.com', // Seu usuário no Gmail
			        pass: '5OmnwL6uYtbhBVu' // :-)
			    }
			});
			 
			conta.sendMail({
			    from: 'Gerador de Senhas <geradordesenhassimpatia@gmail.com>', // Quem está mandando
			    to: 'Você <carlosaugustoandradesouza@gmail.com>', // Para quem o e-mail deve chegar
			    subject: 'Testando envio de e-mails', // O assunto
			    html: '<strong>Olá Carlos</strong><p>Testando o envio de e-mails, amo você!</p>', // O HTMl do nosso e-mail
			}, function(err){
			    if(err)
			        throw err;
			 
			    console.log('E-mail enviado!');
			});
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
			enviarEmail: function(request, response) {
				var nome = request.body.nome;
				var email = request.body.email;
				//var resultado  = Controller.calculos.calcular(numero1);
				response.render("form", { "resultado" : resultado });
			}
		}
	};
	
	return Controller;
};
