function search() {
  // Obtém a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  // Imprime no console a seção encontrada para fins de depuração

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let result = "";

  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {
    if(dado.titulo.toLowerCase() == campoPesquisa){
      // Constrói o HTML para cada item do resultado da pesquisa, formatando os dados
      result = `
        <div class="item-resultado">
          <h2>
            <a href="">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descrição}
          </p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
    }
  }
  if(result == ""){
    result = "Deu Ruim";
  }
  // Atribui o HTML construído à seção de resultados
  section.innerHTML = result;
}