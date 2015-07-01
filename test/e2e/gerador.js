describe('Gerador de Senhas', function() {
	it('Deve ser capaz de gerar uma senha com 32 caracteres quando clicar no botão Gerar Senha diretamente.', function() {
		var driver = browser.driver;

		driver.get('http://localhost:3000/gerar');

		driver.findElement( by.id( "btnGerarSenha" ) ).click();

		driver.findElement( by.id( "senhaGerada" ) ).getText().then( function ( text ){
			expect( text.length ).toBe(32);
		});
	});

	it('Deve ser capaz de gerar uma senha com 10 caracteres quando preencher o campo.', function() {
		var driver = browser.driver;

		driver.get('http://localhost:3000/gerar');

		driver.findElement( by.id( "txtQuantidade" ) ).sendKeys("5");
		driver.findElement( by.id( "btnGerarSenha" ) ).click();

		driver.findElement( by.id( "senhaGerada" ) ).getText().then( function ( text ){
			expect( text.length ).toBe(5);
		});
	});
});