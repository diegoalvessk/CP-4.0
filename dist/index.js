"use strict";
let marca = document.getElementById("marca");
let modelo = document.getElementById("modelo");
let ano = document.getElementById("ano");
let valor = document.getElementById("valor");
let cor = document.getElementById("cor");
let automatico = document.getElementById("automatico");
let submit = document.getElementById("submit");
let carros = [];
let index = 0;
submit.addEventListener("click", cadastrarObjeto);
marca.addEventListener("change", (event) => {
    window.localStorage.setItem('marca', marca.value);
});
modelo.addEventListener("change", (event) => {
    window.localStorage.setItem('modelo', modelo.value);
});
ano.addEventListener("change", (event) => {
    window.localStorage.setItem('ano', ano.value);
});
valor.addEventListener("change", (event) => {
    window.localStorage.setItem('valor', valor.value);
});
cor.addEventListener("change", (event) => {
    window.localStorage.setItem('cor', cor.value);
});
automatico.addEventListener("change", (event) => {
    window.localStorage.setItem('automatico', automatico.value);
});
function cadastrarObjeto() {
    carros[index] = {
        marca: window.localStorage.getItem('marca'),
        modelo: window.localStorage.getItem('modelo'),
        ano: window.localStorage.getItem('ano'),
        valor: window.localStorage.getItem('valor'),
        cor: window.localStorage.getItem('cor'),
        automatico: window.localStorage.getItem('automatico'),
    };
    console.log(carros[index]);
    index++;
}
let recarragou;
window.addEventListener("load", (event) => {
    console.log(window.localStorage.getItem('marca') + ", " + window.localStorage.getItem('modelo') + ", " +
        window.localStorage.getItem('ano') + ", " +
        window.localStorage.getItem('valor') + ", " + window.localStorage.getItem('cor') + ", " +
        window.localStorage.getItem('automatico'));
});
function pesquisarMarca(nomeMarca) {
    let resultadoPesquisa = [];
    for (let index = 0; index < carros.length; index++) {
        if (carros[index].marca == nomeMarca) {
            resultadoPesquisa.push(carros[index]);
        }
    }
    console.log(resultadoPesquisa);
}
function marcasDisponiveis() {
    let marcasDisponiveis = [];
    let contador = 0;
    for (let index = 0; index < carros.length; index++) {
        if (index == 0) {
            marcasDisponiveis.push(carros[index]);
        }
        else {
            for (let index2 = 0; index2 < marcasDisponiveis.length; index2++) {
                if (carros[index].marca == marcasDisponiveis[index2].marca) {
                    contador++;
                }
            }
            if (contador == 0) {
                marcasDisponiveis.push(carros[index]);
            }
            else {
                contador = 0;
            }
        }
    }
    console.log(marcasDisponiveis);
}
function mostrarPropriedades(propriedades) {
}
//# sourceMappingURL=index.js.map