// Função para renderizar todas as aulas
function exibirTodasAsAulas() {
    const section = document.getElementById("resultados-pesquisa");
    let resultados = "";

    // Renderiza todas as aulas
    for (let dado of dados) {
        resultados += `
        <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Assistir Aula</a>
        </div>
        `;
    }

    section.innerHTML = resultados;
}

// Função para pesquisar as aulas
function pesquisar() {
    // Obtém o valor da pesquisa
    const termoPesquisa = document.querySelector('#searchInput').value.toLowerCase().trim();
  
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
  
    // Verifica se o termo de pesquisa está vazio
    if (!termoPesquisa) {
        exibirTodasAsAulas(); // Exibe todas as aulas se a pesquisa estiver vazia
        return;
    }
  
    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        const tituloMinusculo = dado.titulo.toLowerCase();
        const descricaoMinuscula = dado.descricao.toLowerCase();
  
        // Verifica se o termo de pesquisa está presente no título ou na descrição
        if (tituloMinusculo.includes(termoPesquisa) || descricaoMinuscula.includes(termoPesquisa)) {
            // Cria um novo elemento HTML para cada resultado
            resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Assistir Aula</a>
            </div>
            `;
        }
    }
  
    // Verifica se foram encontrados resultados
    if (!resultados) {
        section.innerHTML = "<p>Nenhum resultado encontrado para a sua pesquisa.</p>";
    } else {
        section.innerHTML = resultados;
    }
}

// Exibe todas as aulas ao carregar a página
window.onload = exibirTodasAsAulas;
