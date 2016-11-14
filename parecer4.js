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
      this.retorno = '<h5>1-Informações do Docente</h5>';
      this.retorno += '<div class="row show-grid">';
      this.retorno += '<div class="col-md-12">ID do Docente: ' +data.id+'</div></div>';
      this.retorno += '<h5>2-Sobre o Artigo 39</h5>';
      this.retorno += '<div class="row show-grid">';
      this.retorno += '<div class="col-md-6">Total de Meses:<br><br>Verifica Número de Meses:<br>';
      this.retorno += '<br>Somatório Ponderado:<br><br>Nota Final:</div>'
      this.retorno += '<div class="col-md-6"><strong>' +data.totalMeses+'<br><br>'+data.meses24+'<br>';
      this.retorno += '<br>'+data.somaPonderada+'<br><br>';
      if (data.notaFinal>=7.0) {
        this.retorno += '<font  color="green">'+data.notaFinal +'</font></strong></div></div>';
      }
      else if (data.notaFinal<7.0) {
        this.retorno += '<font  color="red">'+data.notaFinal +'</font></strong></div></div>';
      }
      else {
        this.retorno += ''+data.notaFinal +'</strong></div></div>';
      }

      this.retorno += '<h5>3-Sobre o Artigo 40</h5>';
      this.retorno += '<div class="row show-grid">';
      this.retorno += '<div class="col-md-6">Inciso I:<br><br>Incioso II:<br><br>Inciso III:<br><br>';
      this.retorno += 'Inciso IV:<br><br>Inciso V:<br><br>Inciso VI:</div>';
      this.retorno += '<div class="col-md-6"><strong>' +data.inciso1+'<br><br>'+data.inciso2+'<br>';
      this.retorno += '<br>'+data.inciso3+'<br><br>'+data.inciso4+'<br><br>'+data.aprovadoChefia+'<br><br>'+data.inciso6+'</strong></div></div>';

      this.retorno += '<h5>3-Somatórios Finais</h5>';
      this.retorno += '<div class="row show-grid">';
      this.retorno += '<div class="col-md-6">Soma de Ensino:<br><br>Soma de Pesquisa de Extensão:<br><br>Soma Administração e Representação:<br>';
      this.retorno += '<br>Outras Somas:<br><br>Total Soma(Exceto Produção Intelectual):</div>';
      this.retorno += '<div class="col-md-6"><strong>'+data.somaEnsino+'<br><br>'+data.somaPesquisa+'<br><br>';
      this.retorno += ''+data.somaAdministracao+'<br><br>'+data.somaOutras+'<br><br>'+data.S+'</strong></div></div>';

      this.retorno += '<h5>4-Sobre Habilitação</h5>';
      this.retorno += '<div class="row show-grid">';
      this.retorno += '<div class="col-md-6">Habilitação Parcial:<br><br>Habilitação de Estágio:<br><br>Habilitação Cargo Direção ou Pós-Graduação:</div>';
      this.retorno += '<div class="col-md-6"><strong>'+data.habilitacaoParcial+'<br><br>'+data.habilitacaoEstagio+'<br><br>';

      if (data.habilitado=="Sim" || data.habilitado=="sim") {
        this.retorno += '<font color="green">'+data.habilitado +'</font></strong></div></div>';
      }
      else if (data.habilitado=="Não" || data.habilitado=="não") {
        this.retorno += '<font color="red">'+data.habilitado +'</font></strong></div></div>';
      }
      else {
      this.retorno += ''+data.habilitado +'</strong></div></div>';
      }

			$('#resultado').html(this.retorno);
		});

	}

}
