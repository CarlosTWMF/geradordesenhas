var controller = require('../controllers/gerador.js')();

describe('Gerador', function() {
	it('Deveria retornar uma senha 32 caracteres quando o campo for vazio.', function() {
	
		var resultado = controller.randomize("");
		
		resultado.should.be.a.String;
		resultado.should.be.length(32);
	});
});


describe('Gerador', function() {
	it('Deveria retornar uma senha 10 caracteres.', function() {
		var numero1 = 10;
	
		var resultado = controller.randomize(numero1);
		
		resultado.should.be.a.String;
		resultado.should.be.length(10);
	});
});



