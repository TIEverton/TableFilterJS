function filtrarTable() {
    // Declare variables
    var input, filtro, tabela, tr, i, txtValue;
    input = document.getElementById("inputPesquisa");
    filtro = input.value.toUpperCase();
    tabela = document.getElementById("pesquisaTable");
    tr = tabela.getElementsByTagName("tr");
  
    for (i = 1; i < tr.length; i++) {
      let linha = tr[i];
      
        txtValue = linha.textContent || linha.innerText;
        if (txtValue.toUpperCase().indexOf(filtro) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
    }
  }