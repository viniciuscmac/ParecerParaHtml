// Objeto.
var obj = new json();
obj.resgatarJson();

// Classe para chamar o Json.
function json(){
	var qtd;
	var retorno;

	// Resgatar valores.
	json.prototype.resgatarJson = function(){
		$('#resultado').html('Carregando dados...');

		// Estrutura de resultado.
		$.getJSON('arquivo.json', function(data){
			this.qtd = data.length;
			this.retorno = '';
			this.retorno += 'ID: ' + data.id + '<br /><br />';						
			this.retorno +='(Art. 39) Total de meses: ' +data.totalMeses + '<br /><br />';
			this.retorno +='(Art. 39) Verifica numero de meses: ' +data.meses24 + '<br /><br />';
			this.retorno +='(Art. 39) Somatório ponderado: ' +data.somaPonderada + '<br /><br />';
			this.retorno +='(Art. 39) Nota final: ' +data.notaFinal + '<br /><br />';
			this.retorno +='Inciso I (Art. 40): ' +data.inciso1 + '<br /><br />';
			this.retorno +='Inciso II (Art. 40): ' +data.inciso2 + '<br /><br />';
			this.retorno +='Inciso III (Art. 40): ' +data.inciso3 + '<br /><br />';
			this.retorno +='Inciso IV (Art. 40): ' +data.inciso4 + '<br /><br />';
			this.retorno +='Inciso V (Art. 40): ' +data.aprovadoChefia + '<br /><br />';
			this.retorno +='Inciso VI (Art. 40): ' +data.inciso6 + '<br /><br />';
			this.retorno +='Habilitação parcial (Art. 40): ' +data.habilitacaoParcial + '<br /><br />';
			this.retorno +='Habilitação para caso especial de estágio (Art. 40, parágrafo primeiro): ' 
			+data.habilitacaoEstagio + '<br /><br />';
			this.retorno +='Habilitação para caso especial de cargo de direção ou pós-graduação (Art. 40 parágrafo segundo): ' 
			+data.habilitacaoCargoOuPos + '<br /><br />';
			this.retorno +='Habilitado para a promoção: ' +data.habilitado + '<br /><br />';
			this.retorno +='Soma de ensino: ' +data.somaEnsino + '<br /><br />';
			this.retorno +='Soma pesquisa e extensão: ' +data.somaPesquisa + '<br /><br />';
			this.retorno +='Soma administração e representação: ' +data.somaAdministrcao + '<br /><br />';
			this.retorno +='Soma outras: ' +data.somaOutras + '<br /><br />';
			this.retorno +='Soma de todos os pontos exceto aqueles de produção intelectual: ' 
			+data.S + '<br />';
	
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


