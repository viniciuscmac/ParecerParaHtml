/**
 * Created by Nikolas on 24/10/2016.
 */
/* barraLateral - variável que irá pegar o Json.*/
var barraLateral;
barraLateral = new json();
// Execução de método que irá colocar os dados nas laterais.
barraLateral.InformacaoHabilitado();
function json() {
    var dados;
    /* InformacaoHabilitado - Informação que irá colocar o habilitado na leteral.*/
    json.prototype.InformacaoHabilitado = function() {
        $('#LateralDado1').text('Carregando ...');
        $('#LateralNome1').text('Carregando ...');
        //Estrutura do resultado.
        $.getJSON('arquivo.json', function(data) {
            this.dados = '<h3>' + data.habilitado + '</h3>';
            $('#LateralDado1').html(this.dados);
            $('#LateralNome1').html("habilitado");
        });
    }
}