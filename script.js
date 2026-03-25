let user = [
    {id:1, nome:"Marie", idade:47},
    {id:2, nome:"João", idade:18},
    {id:3, nome:"Nicolas", idade:25},
    {id:4, nome:"Vitória", idade:36},
];

function buscarUser(){
    let idDigitado = document.getElementById("idUser").value;


    let userEncontrado = user.find(u => u.id == idDigitado);

    if (userEncontrado){
        document.getElementById("nome").innerText = userEncontrado.nome;
        document.getElementById("idade").innerText = userEncontrado.idade;
    }
    else{
        document.getElementById("nome").innerText = "User não encontrado";
        document.getElementById("idade").innerText = ""


    }




}