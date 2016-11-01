// Objeto.
var obj = new json();
obj.resgatarJson();


// Classe para chamar o Json.
function json(){
	var qtd;
	var retorno;

	// Resgatar valores.
	json.prototype.resgatarJson = function(){
		//$('#resultado').html('Carregando dados...');

		// Estrutura de resultado.
		$.getJSON('arquivo.json', function(data){
			this.qtd = data.length;
			this.retorno = '<table align="center" class="table table-bordered table-striped table-hover"><tr> <th>Atributo</th> <th>Resultado</th></tr>';
			this.retorno += '<tr><td>ID: </td><td>' + data.id + '</td></tr>';
			this.retorno +='<tr><td>(Art. 39) Total de meses: </td><td>' +data.totalMeses + '</td></tr>';
			this.retorno +='<tr><td>(Art. 39) Verifica numero de meses: </td><td>' +data.meses24 + '</td></tr>';
			this.retorno +='<tr><td>(Art. 39) Somatório ponderado: </td><td>' +data.somaPonderada + '</td></tr>';
			this.retorno +='<tr><td>(Art. 39) Nota final: </td><td>' +data.notaFinal + '</td></tr>';
			this.retorno +='<tr><td>Inciso I (Art. 40): </td><td>' +data.inciso1 + '</td></tr>';
			this.retorno +='<tr><td>Inciso II (Art. 40): </td><td>' +data.inciso2 + '</td></tr>';
			this.retorno +='<tr><td>Inciso III (Art. 40): </td><td>' +data.inciso3 + '</td></tr>';
			this.retorno +='<tr><td>Inciso IV (Art. 40): </td><td>' +data.inciso4 + '</td></tr>';
			this.retorno +='<tr><td>Inciso V (Art. 40): </td><td>' +data.aprovadoChefia + '</td></tr>';
			this.retorno +='<tr><td>Inciso VI (Art. 40): </td><td>' +data.inciso6 + '</td></tr>';
			this.retorno +='<tr><td>Habilitação parcial (Art. 40): </td><td>' +data.habilitacaoParcial + '</td></tr>';
			this.retorno +='<tr><td>Habilitação para caso especial de estágio (Art. 40, parágrafo primeiro): </td><td>'
			+data.habilitacaoEstagio + '</td></tr>';
			this.retorno +='<tr><td>Habilitação para caso especial de cargo de direção ou pós-graduação (Art. 40 parágrafo segundo): </td><td>'
			+data.habilitacaoCargoOuPos + '</td></tr>';

			if (data.habilitado == "sim"){
			this.retorno +='<tr><td>Habilitado para a promoção: </td><td>' +data.habilitado + ' PARABENS!!!</td></tr>';
			}
			else{
			this.retorno +='<tr><td>Habilitado para a promoção: </td><td>' +data.habilitado + '</td></tr>';
			}

			this.retorno +='<tr><td>Soma de ensino: </td><td>' +data.somaEnsino + '</td></tr>';
			this.retorno +='<tr><td>Soma pesquisa e extensão: </td><td>' +data.somaPesquisa + '</td></tr>';
			this.retorno +='<tr><td>Soma administração e representação: </td><td>' +data.somaAdministracao + '</td></tr>';
			this.retorno +='<tr><td>Soma outras: </td><td>' +data.somaOutras + '</td></tr>';
			this.retorno +='<tr><td>Soma de todos os pontos exceto aqueles de produção intelectual: </td><td>'
			+data.S + '</td></tr></table>';

			/*for (i = 0; i < this.qtd; i++){
				//this.retorno += data.parecer[i] + '<br />';
				this.retorno += 'ID: ' + data.parecer[i].id + '<br />';
				this.retorno += 'Nome: ' + data.parecer[i].nome + '<br />';
				this.retorno += 'Cidade: ' + data.parecer[i].cidade + '<br /><br />';
			}*/

			$('#resultado').html(this.retorno);
		});

	}

}
