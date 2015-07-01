module.exports = function() {
	var Controller = {
		utils: {
			formatarResposta: function(resultado) {
				var resposta   = {
					resultado: 0.0
				};
				resposta.resultado = resultado;
				return resposta;
			},

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
			
			calculos: {
				calcular: function(numero1) {
					var randomstring = require("randomstring");
					var resultado = randomstring.generate(numero1);
					return resultado;
				},
				
				somar: function(numero1, numero2) {
					return numero1 + numero2;
				},

				gerar: function(numero1) {
					return numero1;
				},
			},

			extrairParametros: function(body) {
				var parametros = {
					//numero1: 0.0,
					operacao: body.operacao
				};
				
				//parametros.numero1 = Controller.utils.validaParametro(body.numero1);
				parametros.numero1 = body.numero1;

				return parametros;
			}
		},
		
		get: {
			index: function(request, response) {
				response.render('index');
			},

			gerar: function(request, response) {
				response.render('gerar');
			}
		},
		
		post: {
			calcular: function(request, response) {
				var numero1 = request.body.numero1;
				var resultado  = Controller.utils.calculos.calcular(numero1);
				response.render("form", { "resultado" : resultado });
			}
		}
	};
	
	return Controller;
};
