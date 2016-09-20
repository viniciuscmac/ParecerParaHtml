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
			this.qtd = data.parecer.length;
			this.retorno = '';

			for (i = 0; i < this.qtd; i++){
				//this.retorno += data.parecer[i] + '<br />';
				this.retorno += 'ID: ' + data.parecer[i].id + '<br />';
				this.retorno += 'Nome: ' + data.parecer[i].nome + '<br />';
				this.retorno += 'Cidade: ' + data.parecer[i].cidade + '<br /><br />';
			}

			$('#resultado').html(this.retorno);
		});

	}

}


