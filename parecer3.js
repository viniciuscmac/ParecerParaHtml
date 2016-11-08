// Objeto.
var obj = new json();
obj.resgatarJson();


// Classe para chamar o Json.
function json(){
	var retorno;

	// Resgatar valores.
	json.prototype.resgatarJson = function(){


		// Estrutura de resultado.
		$.getJSON('arquivo.json', function(data){
      this.retorno = '<br><br><left><h4><shadow>ID do Docente: ' +data.id+'</shadow></h4></left><br>';
      this.retorno += '<left><h4><shadow>Artigo 39 </h4></shadow></left>';
      this.retorno += '<left><font size="4">Total de Meses:<tab1><strong>'+data.totalMeses +'</strong></font></left><br>';
      this.retorno += '<left><font size="4">Verifica Número de Meses:<tab1><strong>'+data.meses24 +'</strong></font></left><br>';
      this.retorno += '<left><font size="4">Somatório Ponderado:<tab1><strong>'+data.somaPonderada +'</strong></font></left><br>';

      switch (data.notaFinal) {
        case data.notaFinal>=7.0:
          this.retorno += '<left><font color="green" size="4">Nota Final:<tab1><strong>'+data.notaFinal +'</strong></font></left><br><br>';
          break;
        case data.notaFinal<7.0:
          break;
          this.retorno += '<left><font color="red" size="4">Nota Final:<tab1><strong>'+data.notaFinal +'</strong></font></left><br><br>';
        default:
          this.retorno += '<left><font size="4">Nota Final:<tab1><strong>'+data.notaFinal +'</strong></font></left><br><br>';

      }

      this.retorno += '<left><h4><shadow>Artigo 40 </h4></shadow></left>';
      this.retorno += '<left><font size="4">Inciso I:<tab1><strong>'+data.inciso1 +'</strong></font></left><br>';
      this.retorno += '<left><font size="4">Inciso II:<tab1><strong>'+data.inciso2 +'</strong></font></left><br>';
      this.retorno += '<left><font size="4">Inciso III:<tab1><strong>'+data.inciso3 +'</strong></font></left><br>';
      this.retorno += '<left><font size="4">Inciso IV:<tab1><strong>'+data.inciso4 +'</strong></font></left><br>';
      this.retorno += '<left><font size="4">Inciso V:<tab1><strong>'+data.totalMeses +'</strong></font></left><br>';
      this.retorno += '<left><font size="4">Inciso VI:<tab1><strong>'+data.aprovadoChefia +'</strong></font></left><br><br>';

      this.retorno += '<left><h4><shadow>Somatórios Finais</h4></shadow></left>';
      this.retorno += '<left><font size="4">Soma de Ensino:<tab1><strong>'+data.somaEnsino +'</strong></font></left><br>';
      this.retorno += '<left><font size="4">Soma Pesquisa e Extensão:<tab1><strong>'+data.somaPesquisa +'</strong></font></left><br>';
      this.retorno += '<left><font size="4">Soma Administração e Representação:<tab1><strong>'+data.somaAdministracao +'</strong></font></left><br>';
      this.retorno += '<left><font size="4">Outras Somas:<tab1><strong>'+data.somaOutras +'</strong></font></left><br>';
      this.retorno += '<left><font size="4">Total Soma(Exceto Prod. Intelectual):<tab1><strong>'+data.S +'</strong></font></left><br><br>';

      this.retorno += '<left><h4><shadow>Habilitação</h4></shadow></left>';
      this.retorno += '<left><font size="4">Habilitação Parcial:<tab1><strong>'+data.habilitacaoParcial +'</strong></font></left><br>';
      this.retorno += '<left><font size="4">Habilitação de Estágio:<tab1><strong>'+data.habilitacaoEstagio +'</strong></font></left><br>';
      this.retorno += '<left><font size="4">Habilitação Cargo Direção ou Pós-Graduação:<tab1><strong>'+data.habilitacaoCargoOuPos +'</strong></font></left><br>';
      this.retorno += '<left><font size="4">Habilitação Para Promoção:<tab1><strong>'+data.habilitado +'</strong></font></left><br><br>';

			$('#resultado').html(this.retorno);
		});

	}

}