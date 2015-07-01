module.exports = function() {
	var Controller = {

		enviarEmail: function(nome, site, email, senha) {
			var nodemailer = require('nodemailer');
			 
			var conta = nodemailer.createTransport({
			    service: 'Gmail',
			    auth: {
			        user: 'geradordesenhassimpatia@gmail.com',
			        pass: '5OmnwL6uYtbhBVu' // Seja bonzinho com isso... :-)
			    }
			});
			 
			conta.sendMail({
			    from: 'Gerador de Senhas <geradordesenhassimpatia@gmail.com>',
			    to: '<'+ email +'>',
			    subject: 'Sua senha para o site ' + site + ' .',
			    html: '<strong>Olá ' + nome + '</strong><p>Esta é a sua senha para o site ' + site + ' : ' + senha + '</p>',
			}, function(err){
			    if(err)
			        throw err;
			    console.log('E-mail enviado!');
			});
		},
		
		post: {
			enviarEmail: function(request, response) {
				var nome = request.body.nome;
				var site = request.body.site;
				var email = request.body.email;
				var senha = request.body.senha;
				Controller.enviarEmail(nome, site, email, senha);
				response.render("form", { "success" : "E-mail Enviado! Verifique sua caixa de entrada e volte sempre que precisar!" });
			}
		}
	};
	
	return Controller;
};
