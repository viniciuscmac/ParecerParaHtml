// Execução para conseguir o Json e enviá-lo para o html.
var obj = new json();
obj.resgatarJson();


/*
 * Classe json, será utilizada para acessar o arquivo Json que contem os dados referentes ao relatório parecer.
 *
 * @variavel retorno String - Serve para organizar todas as informações do Json em uma tabela.
 * @variavel res String - Serve para utilizar o Regex e melhorar a forma de entregar o arquivo. Ele também é o entregável para o html solicitante.
 */
function json(){
	var retorno;
	var res;

	/* @method resgatarJson Void - Método utilizado para resgatar o Json, organizá-lo em uma lista e entregar para o html solicitante.
	 * 
	 */
	json.prototype.resgatarJson = function(){



		/* @method getJSON Void - Método utilizado para pegar as informações do JSON passado e criar a lista.
		 *
		 * @param data Array - As informações do json passado serão colocados nesse array.
		 */
		$.getJSON('arquivo.json', function(data){
			/* Área referente às informações principais do docente como nome, regime, Nota da Avaliação e informações referentes a datas.
			 * Todas as informações têm além das informações principais algumas informações secundárias (com um link que levará direto a elas) que foram relevantes para ela.
			**/
			this.retorno = '<h5>1-Informações do Docente</h5>';
			this.retorno += '<div class="row show-grid">';
			this.retorno += '<div class="col-md-6">Nome: <strong>' +data.nome+'</strong><br><br>Regime: <strong>'+data.regime+' horas</strong><br><br>';
			if(data.notaAvaliacaoDiscente>6.9){
				this.retorno += 'Nota da Avaliação do Discente: <strong><font color="green">'+data.notaAvaliacaoDiscente+'</font></strong></div>';
			}
			else{
				this.retorno += 'Nota da Avaliação do Discente: <strong><font color="red">'+data.notaAvaliacaoDiscente+'</font></strong></div>';
			}
			this.retorno += '<div class="col-md-6">Ano da Avaliação: <strong>'+data.ano+'</strong><br><br>Data de Início: <strong>'+data.dataInicio+'</strong><br><br>Data Final: <strong>'+data.dataFim+'</strong></div></div>';
			//Área referente às informações Sobre Habilitação. Sendo que essa abrange todas os quatro tipos: Parcial, de Estágio, para Cargo de Direção ou Pós e Para Promoção.
			this.retorno += '<h5>2-Sobre Habilitação</h5>';
			this.retorno += '<div class="row show-grid">';
			this.retorno += '<div class="col-md-6"><p id="habilitacaoParcial">Habilitação Parcial: <strong> '+data.habilitacaoParcial+'</strong><br><tab1><a href="#inciso1">Inciso I: </a><strong>'+data.inciso1+'</strong><br><tab1><a href="#inciso2">Inciso II: </a><strong>'+data.inciso2+'</strong><br><tab1><a href="#inciso3">Inciso III: </a><strong>'+data.inciso3+'</strong><br><tab1><a href="#inciso4">Inciso IV: </a><strong>'+data.inciso4+'</strong><br><tab1><a href="#inciso5">Inciso V: </a><strong>'+data.aprovadoChefia+'</strong><br><tab1><a href="#inciso6">Inciso VI: </a><strong>'+data.inciso6+'</strong><br>';
			this.retorno += '<p id="habilitacaoEstagio">Habilitação de Estágio: <strong> '+data.habilitacaoEstagio+'</strong><br><tab1><a href="#estagioPosdoutoralOuSenior">Estágio Pós-doutoral ou Senior: </a><strong> '+data.estagioPosdoutoralOuSenior+'</strong><br><tab1><a href="#inciso3">Inciso III: </a><strong>'+data.inciso3+'</strong><br><tab1><a href="#inciso5">Inciso V: </a><strong>'+data.aprovadoChefia+'</strong><br><tab1><a href="#inciso6">Inciso VI: </a><strong>'+data.inciso6+'</strong><br></div>' ;
			this.retorno += '<div class="col-md-6"><p id="habilitacaoCargoOuPos">Habilitação Para Cargo de Direção ou Pós: <strong> '+data.habilitacaoCargoOuPos+'</strong><br><tab1><a href="#cargoDeDirecao">Cargo de Direção: </a><strong> '+data.cargoDeDirecao+'</strong><br><tab1><a href="#posGraduando">Pós Graduando: </a><strong> '+data.posGraduando+'</strong><br><tab1><a href="#inciso6">Inciso VI: </a><strong>'+data.inciso6+'</strong><br>';
			this.retorno += '<br><br><p>Habilitação Para Promoção: <strong> '+data.habilitado+'</strong><br><tab1><a href="#habilitacaoParcial">Habilitação Parcial: </a><strong> '+data.habilitacaoParcial+'</strong><br><tab1><a href="#habilitacaoEstagio">Habilitação de Estágio: </a><strong> '+data.habilitacaoEstagio+'</strong><br><tab1><a href="#habilitacaoCargoOuPos">Habilitado Cargo ou Pós: </a><strong> '+data.habilitacaoCargoOuPos+'</strong><br><br><br></div></div>';
			//Nessa parte teremos diversas informações refrentes às Somas, sendo abrangidos: Soma de Ensino, Soma de Pesquisa de Extensão, Soma Administração e Representação, Outras Somas e Total Soma.
			this.retorno += '<h5>3-Somatórios Finais</h5>';
			this.retorno += '<div class="row show-grid">';
			this.retorno += '<div class="col-md-6"><p id="somaEnsino">Soma de Ensino: <strong>'+data.somaEnsino+'</strong><br><tab1><a href="#inciso1">Inciso I: </a><strong>'+data.inciso1+'</strong><br><br><p id="somaPesquisa">Soma de Pesquisa de Extensão: <strong>'+data.somaPesquisa+'</strong><br><tab1><a href="#inciso3">Inciso III: </a><strong>'+data.inciso3+'</strong><br><br><p id="somaAdministracao">Soma Administração e Representação: <strong>'+data.somaAdministracao+'</strong><br><tab1><a href="#inciso4">Inciso IV: </a><strong>'+data.inciso4+'</strong></div>';
			this.retorno += '<div class="col-md-6"><p id="somaOutras">Outras Somas: <strong>'+data.somaOutras+'</strong><br><tab1><a href="#inciso5">Inciso V: </a><strong>'+data.aprovadoChefia+'</strong><br><br>Total Soma(Exceto Produção Intelectual): <strong>'+data.S+'</strong><br><tab1><a href="#somaEnsino">Soma de Ensino: </a><strong>'+data.somaEnsino+'</strong><br><tab1><a href="#somaPesquisa">Soma de Pesquisa: </a><strong>'+data.somaPesquisa+'</strong><br><tab1><a href="#somaAdministracao">Soma de Administração: </a><strong>'+data.somaAdministracao+'</strong><br><tab1><a href="#somaOutras">Outras Somas: </a><strong>'+data.somaOutras+'</strong><br><br></div></div>';
			//Informações referente ao Artigo 39 sendo essas: Total de Meses, verifica número de meses, Somatório Ponderado e Nota Final
			this.retorno += '<h5>4-Sobre o Artigo 39</h5>';
			this.retorno += '<div class="row show-grid">';
			this.retorno += '<div class="col-md-6">Total de Meses: <strong>'+data.totalMeses+'</strong><br><tab1><a href="#dias">Número de dias: </a><strong>'+data.dias+'</strong><br><br><br>Verifica Número de Meses: <strong>'+data.meses24+'</strong><br><tab1><a href="#meses24">Total de Meses: </a><strong>'+data.meses24+'</strong><br></div>';
			this.retorno += '<div class="col-md-6">Somatório Ponderado: <strong>'+data.somaPonderada+'</strong><br><tab1><a href="#notaCad">Nota CAD: </a><strong>'+data.notaCad+'</strong><br><tab1><a href="#numeroMeses">Número de meses: </a><strong>'+data.numeroMeses+'</strong><br>Nota Final: <strong>'+data.notaFinal+'</strong><br><tab1><a href="#somaPonderada">Soma Ponderada: </a><strong>'+data.somaPonderada+'</strong><br><tab1><a href="#meses24">Total de Meses: </a><strong>'+data.totalMeses+'</strong></div></div>'

			// Informações referentes ao Artigo 40 sendo abordados os Incisos I ao VI.
			this.retorno += '<h5>5-Sobre o Artigo 40</h5>';
			this.retorno += '<div class="row show-grid">';
			this.retorno += '<div class="col-md-6"><p id="inciso1">Inciso I: <strong>'+data.inciso1+'</strong><br>';
			//Caso a média do Ensino de Graduação esteja de acordo com o exigido será mostrado a cor verde, caso contrário vermelho.
			if(data.mediaEnsinoGraduacao>=40){
				this.retorno += '<tab1><a href="#mediaEnsinoGraduacao">Média Ensino Graduação: </a><strong><font color="green">'+data.mediaEnsinoGraduacao+'</font></strong>';
			}
			else{
				this.retorno += '<tab1><a href="#mediaEnsinoGraduacao">Média Ensino Graduação: </a><strong><font color="red">'+data.mediaEnsinoGraduacao+'</font></strong>';
			}
			this.retorno += '<p id="inciso2">Inciso II: <strong>'+data.inciso2+'</strong><br>';
			//Caso a média do Ensino esteja de acordo com o exigido será mostrado a cor verde, caso contrário vermelho.
			if(data.mediaEnsino>=80){
				this.retorno += '<tab1><a href="#mediaEnsino">Média Ensino: </a><strong><font color="green">'+data.mediaEnsino+'</font></strong>';
			}
			else {
				this.retorno += '<tab1><a href="#mediaEnsino">Média Ensino: </a><strong><font color="red">'+data.mediaEnsino+'</font></strong>';
			}
			this.retorno +=	'<p id="inciso3">Inciso III: <strong>'+data.inciso3+'</strong><br>';
			//Caso a média de Produção Intelectual esteja de acordo com o exigido será mostrado a cor verde, caso contrário vermelho.
			if(data.mediaProducaoIntelectual>=20){
				this.retorno += '<tab1><a href="#mediaProducaoIntelectual">Média de Produção Intelectual: </a><strong><font color="green">'+data.mediaProducaoIntelectual+'</font></strong></div>';
			}
			else {
				this.retorno += '<tab1><a href="#mediaProducaoIntelectual">Média de Produção Intelectual: </a><strong><font color="red">'+data.mediaProducaoIntelectual+'</font></strong></div>';
			}
			this.retorno += '<div class="col-md-6"><p id="inciso4">Inciso IV: <strong>'+data.inciso4+'</strong><br>';
			//Caso a média do Discente esteja de acordo com o exigido será mostrado a cor verde, caso contrário vermelho.
			if(data.mediaDiscente>=5){
				this.retorno += '<tab1><a href="#mediaDiscente">Média do Discente: </a><strong><font color="green">'+data.mediaDiscente+'</font></strong>';
			}
			else {
				this.retorno += '<tab1><a href="#mediaDiscente">Média do Discente: </a><strong><font color="red">'+data.mediaDiscente+'</font></strong>';
			}
			this.retorno += '<p id="inciso5">Inciso V: <strong>'+data.aprovadoChefia+'</strong><br>';
			//Caso a média da Chefia esteja de acordo com o exigido será mostrado a cor verde, caso contrário vermelho.
			if(data.notaChefia>=5){
				this.retorno += '<tab1><a href="#notaChefia">Nota da Chefia: </a><strong><font color="green">'+data.notaChefia+'</font></strong>';
			}
			else {
				this.retorno += '<tab1><a href="#notaChefia">Nota da Chefia: </a><strong><font color="red">'+data.notaChefia+'</font></strong>';
			}
			this.retorno += '<p id="inciso6">Inciso VI: <strong>'+data.inciso6+'</strong><br>';
			//Caso a Nota Final esteja de acordo com o exigido será mostrado a cor verde, caso contrário vermelho.
			if(data.notaFinal>=7.5){
				this.retorno += '<tab1><a href="#notaFinal">Nota Final: </a><strong><font color="green">'+data.notaFinal+'</font></strong></div></div>';
			}
			else {
				this.retorno += '<tab1><a href="#notaFinal">Nota Final: </a><strong><font color="red">'+data.notaFinal+'</font></strong></div></div>';
			}
			//Aqui ficará algumas informações Diversar relacionados ao Discente e que podem ajudar os tópicos anteriores.
			this.retorno += '<h5>6-Informações Diversas do Docente</h5>';
			this.retorno += '<div class="row show-grid">';
			this.retorno += '<div class="col-md-6"><p id="cargoDeDirecao">Cargo de Direção: <strong> '+data.cargoDeDirecao+'</strong><p id="estagioPosdoutoralOuSenior">Estágio Pós-doutoral ou Senior: <strong> '+data.estagioPosdoutoralOuSenior+'</strong><p id="posGraduando">Pós Graduando: <strong> '+data.posGraduando+'</strong>';
			this.retorno += '<p id="numeroMeses">Número de Meses da Avaliação: <strong>'+data.numeroMeses+'</strong><p id="meses24">Total de Meses: <strong>'+data.meses24+'</strong><p id="notaCad">Nota da CAD: <strong>'+data.notaCad+'</strong><p id="somaPonderada">Soma Ponderada: <strong>'+data.somaPonderada+'</strong></div>';
			this.retorno += '<div class="col-md-6">';
			//Caso a média do Ensino de Graduação esteja de acordo com o exigido será mostrado a cor verde, caso contrário vermelho.
			if(data.mediaEnsinoGraduacao>=40){
				this.retorno += '<p id="mediaEnsinoGraduacao">Média Ensino Graduação: <strong><font color="green">'+data.mediaEnsinoGraduacao+'</font></strong>';
			}
			else {
				this.retorno += '<p id="mediaEnsinoGraduacao">Média Ensino Graduação: <strong><font color="red">'+data.mediaEnsinoGraduacao+'</font></strong>';
			}
			//Caso a média do Ensino esteja de acordo com o exigido será mostrado a cor verde, caso contrário vermelho.
			if(data.mediaEnsino>=80){
				this.retorno += '<p id="mediaEnsino">Média Ensino : <strong><font color="green">'+data.mediaEnsino+'</font></strong>';
			}
			else {
				this.retorno += '<p id="mediaEnsino">Média Ensino : <strong><font color="red">'+data.mediaEnsino+'</font></strong>';
			}
			//Caso a média Produção Intelectual esteja de acordo com o exigido será mostrado a cor verde, caso contrário vermelho.
			if(data.mediaProducaoIntelectual>=20){
				this.retorno += '<p id="mediaProducaoIntelectual">Média Produção Intelectual: <strong><font color="green">'+data.mediaProducaoIntelectual+'</font></strong>';
			}
			else {
				this.retorno += '<p id="mediaProducaoIntelectual">Média Produção Intelectual: <strong><font color="red">'+data.mediaProducaoIntelectual+'</font></strong>';
			}
			//Caso a média Discente esteja de acordo com o exigido será mostrado a cor verde, caso contrário vermelho.
			if(data.mediaDiscente>=5){
				this.retorno += '<p id="mediaDiscente">Média Discente: <strong><font color="green">'+data.mediaDiscente+'</font></strong>';
			}
			else {
				this.retorno += '<p id="mediaDiscente">Média Discente: <strong><font color="red">'+data.mediaDiscente+'</font></strong>';
			}
			//Caso a Nota Chefia esteja de acordo com o exigido será mostrado a cor verde, caso contrário vermelho.
			if(data.notaChefia>=5){
				this.retorno += '<p id="notaChefia">Nota Chefia: <strong><font color="green">'+data.notaChefia+'</font></strong>';
			}
			else {
				this.retorno += '<p id="notaChefia">Nota Chefia: <strong><font color="red>"'+data.notaChefia+'</font></strong>';
			}
			//Caso a Nota Final esteja de acordo com o exigido será mostrado a cor verde, caso contrário vermelho.
			if(data.notaFinal>=7.5){
				this.retorno += '<p id="notaFinal">Nota Final: <strong><font color="green">'+data.notaFinal+'</font></strong>';
			}
			else {
				this.retorno += '<p id="notaFinal">Nota Final: <strong><font color="red">'+data.notaFinal+'</font></strong>';
			}

			this.retorno += '<p id="dias">Dias de Avaliação: <strong>'+data.dias+'</strong></div></div>';

			/*
			 * Foi utilizado o Regex para melhorar algumas informações de retorno. Para esse caso seriam, s1, 0 e s0 E se tranformaram em Sim, Reprovado ou Não.
			 */
			this.res = this.retorno.replace(/<strong>1<\/strong>/g,"<strong>Aprovado</strong>")
			.replace(/<strong>\s1<\/strong>/g,"<strong>Sim</strong>")
			.replace(/<strong>0<\/strong>/g,"<strong>Reprovado</strong>")
			.replace(/<strong>\s0<\/strong>/g,"<strong>Não</strong>");
			$('#resultado').html(this.res);
			});
	}
}
