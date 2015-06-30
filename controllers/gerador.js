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

			enviarEmail: function(resposta) {
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
				    from: 'Gerador de Senhas <carlosaugustoandradesouza@gmail.com>', // Quem está mandando
				    to: 'Você <carlosaugustoandradesouza@gmail.com>', // Para quem o e-mail deve chegar
				    subject: 'Testando envio de e-mails', // O assunto
				    html: '<strong>Olá Carlos</strong><p>Testando o envio de e-mails, amo você!</p>' + resposta, // O HTMl do nosso e-mail
				}, function(err){
				    if(err)
				        throw err;
				 
				    console.log('E-mail enviado!');
				});
			},
			
			calculos: {
				calcular: function(parametros) {
					var randomstring = require("randomstring");
					var numero1 = parametros.numero1;
					var resultado = Controller.utils.calculos[parametros.operacao](numero1);
					resultado = randomstring.generate(resultado);
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
				var parametros = Controller.utils.extrairParametros(request.body);
				var resultado  = Controller.utils.calculos.calcular(parametros);
				var resposta   = Controller.utils.formatarResposta(resultado);
				var email 	   = Controller.utils.enviarEmail(resposta);
				
				response.render(parametros.operacao, resposta);
			}
		}
	};
	
	return Controller;
};
