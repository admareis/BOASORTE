let pokemon = [
    {id: 1, nome: "Bulbasaur", tipo: "Venenoso", habilidades: ["bom lutador", "bom em defesa especial", "velocidade de ataque", "velocidade"], imagem: "BOASORTE/imagens/1Bulbasaur.gif"},
    {id: 2, nome: "Pikachu", tipo: "Elétrico", habilidades: ["alta velocidade", "ataques à distância", "paralisar o oponente", "descarregar altas tensões elétricas(choques)"] imagem:},
    {id: 3, nome: "Clefairy", tipo: "Fada", habilidades: ["cute charm","magic guard - previne qualquer dano", "friend guard - ataques de companheiros de equipe são reduzidos", "brilho deslumbrante"]},
];

function buscarPokemon(){
    let idEscolhido = document.getElementById("idUser").value;

    let pokemonEscolhido = pokemon.find (u => u.id == idEscolhido);

    if (pokemonEscolhido){
        document.getElementById("nome").innerText = pokemonEscolhido.nome;
        document.getElementById("tipo").innerText = pokemonEscolhido.tipo;
        document.getElementById("habilidades").innerText = pokemonEscolhido.habilidades;
    }
    else {
        document.getElementById("nome").innerText = "Não foi possível localizar"
        document.getElementById("tipo").innerText = "";
        document.getElementById("habilidades").innerText = "";
    }

}

/*{
    "id": 1,
    "nome": "Bulbasaur",
    "tipo": "Grama/Veneno",
    "poderes": ["Chicote de Cipó", "Folha Navalha"],
    "foto": "boa sorte/bulbasaur.png"
  }*/