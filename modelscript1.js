/**
 * Created by Nikolas on 4/11/2016.
 */
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
            this.retorno = '<table align="center" class="table table-bordered table-striped table-hover">';
            this.retorno += '<tr><th colspan="2" class="text-center">ID: ' + data.id + ' </th></tr>';
            this.retorno +='<tr><td rowspan="4"><span class="pequenosTitulos">(Art. 39) Nota final:</span> <div>' + data.notaFinal +
                '</div><p class="pequenasLaterais">Inciso VI (Art. 40): ' + data.inciso6 + '</p></td></tr>';
            this.retorno +='<tr><td><span class="pequenosTitulos">(Art. 39) Total de meses:</span> <div>' +data.totalMeses + '</div></td></tr>';
            this.retorno +='<tr><td><span class="pequenosTitulos">(Art. 39) Verifica numero de meses: </span><div>' +data.meses24 + '</div></td></tr>';
            this.retorno +='<tr><td><span class="pequenosTitulos">(Art. 39) Somatório ponderado:</span><div> ' +data.somaPonderada + '</div></td></tr>';
            this.retorno +='<tr><td rowspan="4"><span style="font-size: 10px">Habilitado para a promoção:</span><div>' +data.habilitado + '</div></td></tr>';
            this.retorno +='<tr><td><span class="pequenosTitulos">Habilitação parcial (Art. 40): </span><div>' +data.habilitacaoParcial + '</div>' +
                '<p class="pequenasLaterais">Inciso II (Art. 40): ' + data.inciso2 +'</p></td></tr>';
            this.retorno +='<tr><td><span class="pequenosTitulos">Habilitação para caso especial de estágio (Art. 40, parágrafo primeiro): </span><div>'
                +data.habilitacaoEstagio + '</div></td></tr>';
            this.retorno +='<tr><td><span class="pequenosTitulos">Habilitação para caso especial de cargo de direção ou pós-graduação (Art. 40 parágrafo segundo): </span><div>'
                +data.habilitacaoCargoOuPos + '</div></td></tr>';
            this.retorno +='<tr><td rowspan="5"><span class="pequenosTitulos">Soma de todos os pontos exceto aqueles de produção intelectual:</span><div>'
                +data.S + '</div></td></tr>';
            this.retorno +='<tr><td><span class="pequenosTitulos">Soma de ensino:</span><div> ' +data.somaEnsino +
                '</div><p class="pequenasLaterais">Inciso I (Art. 40): ' + data.inciso1 +'</p></td></tr>';
            this.retorno +='<tr><td><span class="pequenosTitulos">Soma pesquisa e extensão:</span><div> ' +data.somaPesquisa +
                '</div><p class="pequenasLaterais">Inciso III (Art. 40): ' + data.inciso3 +'</p></td></tr>';
            this.retorno +='<tr><td><span class="pequenosTitulos">Soma administração e representação:</span><div> ' +data.somaAdministracao +
                '</div><p class="pequenasLaterais">Inciso IV (Art. 40): ' + data.inciso4 +'</p></td></tr>';
            this.retorno +='<tr><td><span class="pequenosTitulos">Soma outras: </span><div>' +data.somaOutras +
                '</div><p class="pequenasLaterais">Inciso V (Art. 40): ' + data.aprovadoChefia +'</p></td></tr></table>';

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
