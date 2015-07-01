module.exports = function() {
	var Controller = {

		enviarEmail: function(nome, email) {
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
			    to: 'Você <'+ email +'>', // Para quem o e-mail deve chegar
			    subject: 'Testando envio de e-mails', // O assunto
			    html: '<strong>Olá</strong><p>Esta é a sua senha para o site' + nome + '!</p>', // O HTMl do nosso e-mail
			}, function(err){
			    if(err)
			        throw err;
			 
			    console.log('E-mail enviado!');
			});
		},
		
		post: {
			enviarEmail: function(request, response) {
				var nome = request.body.nome;
				var email = request.body.email;
				controller.enviarEmail(nome, email);
				response.render("form", { "success" : "Enviado!" });
			}
		}
	};
	
	return Controller;
};
