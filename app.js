// This function is responsible for handling the search functionality.
function pesquisar() {

    // This variable will hold the dynamically generated HTML content for the search results.
    let temp = "";

    // Get a reference to the HTML element with the ID "resultados-pesquisa" where search results will be displayed.
    let section = document.getElementById("resultados-pesquisa");
 
    let campoPesquisa = document.getElementById("input-search").value;

    if (campoPesquisa.trim().length == 0) {
        section.innerHTML = "No results";
        return;
    }  

    // Log the retrieved element to the console for debugging (optional).
    //console.log(campoPesquisa);

    let resultsCounter = 0;
    let elementoTituloLowercase = "";
    let elementoDescricaoLowercase = "";
    let campoPesquisaLowercase = "";

    // Loop through each element in the 'dados' array (presumably containing data for search results).
    for (let elemento of dados) {
      
        elementoTituloLowercase = elemento.titulo.toLowerCase();
        elementoDescricaoLowercase = elemento.descricao.toLowerCase();
        campoPesquisaLowercase = campoPesquisa.toLowerCase();
                
        // Concatenate a string containing the HTML structure for each matching search result item.     
        if (elementoTituloLowercase.includes(campoPesquisaLowercase) || elementoDescricaoLowercase.includes(campoPesquisaLowercase)) {
            resultsCounter += 1;
            temp += `
            <div class="item-resultado">
            <h4>
                <a href=${elemento.link} target="_blank">${elemento.titulo}</a>
            </h4>
            <p class = "descricao-meta">${elemento.descricao}</p>
            </div>
            `;
        }
    }
    // Set the innerHTML of the 'section' element to the generated HTML content, effectively displaying the search results.
    if (resultsCounter == 1) {
        section.innerHTML = resultsCounter + " result<br/><br/>" + temp;
        return; 
     }
    if (resultsCounter > 0) {
       section.innerHTML = resultsCounter + " results<br/><br/>" + temp;
       return; 
    }
    section.innerHTML = "No results";
}