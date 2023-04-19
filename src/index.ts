let marca: HTMLInputElement = document.getElementById("marca") as HTMLInputElement;
let modelo: HTMLInputElement = document.getElementById("modelo") as HTMLInputElement;
let ano: HTMLInputElement = document.getElementById("ano") as HTMLInputElement;
let valor: HTMLInputElement = document.getElementById("valor") as HTMLInputElement;
let cor: HTMLInputElement = document.getElementById("cor") as HTMLInputElement;
let automatico: HTMLInputElement = document.getElementById("automatico") as HTMLInputElement;
let submit: HTMLButtonElement = document.getElementById("submit") as HTMLButtonElement;
let carros: any[] = [];
let index: number = 0;

submit.addEventListener("click", cadastrarObjeto);
marca.addEventListener("change", (event: Event) => {
window.localStorage.setItem('marca', marca.value);
});

modelo.addEventListener("change", (event: Event) => {
window.localStorage.setItem('modelo', modelo.value);
});

ano.addEventListener("change", (event: Event) => {
window.localStorage.setItem('ano', ano.value);
});

valor.addEventListener("change", (event: Event) => {
window.localStorage.setItem('valor', valor.value);
});

cor.addEventListener("change", (event: Event) => {
window.localStorage.setItem('cor', cor.value);
});

automatico.addEventListener("change", (event: Event) => {
window.localStorage.setItem('automatico', automatico.value);
});

function cadastrarObjeto(): void {
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

let recarragou: any;

window.addEventListener("load", (event: Event) => {
console.log(window.localStorage.getItem('marca') + ", " + window.localStorage.getItem('modelo') + ", " +
window.localStorage.getItem('ano') + ", " +
window.localStorage.getItem('valor') + ", " + window.localStorage.getItem('cor') + ", " +
window.localStorage.getItem('automatico'));
});

function pesquisarMarca(nomeMarca: string): void {
let resultadoPesquisa: any[] = [];

for (let index = 0; index < carros.length; index++) {
if (carros[index].marca == nomeMarca) {
resultadoPesquisa.push(carros[index]);
}
}
console.log(resultadoPesquisa);
}

function marcasDisponiveis(): void {
let marcasDisponiveis: any[] = [];
let contador: number = 0;

for (let index = 0; index < carros.length; index++) {
if (index == 0) {
marcasDisponiveis.push(carros[index]);
} else {
for (let index2 = 0; index2 < marcasDisponiveis.length; index2++) {
if (carros[index].marca == marcasDisponiveis[index2].marca) {
contador++;
}
}

if (contador == 0) {
    marcasDisponiveis.push(carros[index]);
  } else {
    contador = 0;
  }
}

}
console.log(marcasDisponiveis);
}

function mostrarPropriedades(propriedades: any): void {

}