let quien = ["El perro", "Mi papá", "Abel Pacheco", "Un chata", "El alcalde"];
let accion = [" dañó ", " perdió ", " me robó ", " me escondió ", " me prestó "];
let que = ["el celular", "el carro", "el playstation", "la compu", "los libros", "el queque"];
let cuando = [" antes de salir de la casa", " anoche", " en la mañana", " en el trabajo", " cuando estaba en el super", " en el cuarto"];

// function generarExcusa(){
//     let excusa = document.getElementById("excusa");
//     // excusa = <h2 id="excusa">Un chata me devolvió el celular</h2>

//     quien = quien[Math.floor(Math.random() * quien.length)]; // quien = quien[2] > "abel pacheco"
//     accion = accion[Math.floor(Math.random() * accion.length)];
//     que = que[Math.floor(Math.random() * que.length)];
//     cuando = cuando[Math.floor(Math.random() * cuando.length)];

//     excusa.innerHTML = quien + accion + que + cuando;
// }


function palabraRandom(lista){
    pRandom = lista[Math.floor(Math.random() * lista.length )];
    return pRandom;
}

function generarExcusa(){
    let excusa = document.querySelector("#excusa");
    excusa.innerHTML = palabraRandom(quien) + palabraRandom(accion) + palabraRandom(que) + palabraRandom(cuando);
}

