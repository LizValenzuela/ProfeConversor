let resultado;
let resultadoF;
let btnCalculo = document.getElementById('CALCULAR');

const btnCalcular = () => {
    let elementSelector1 = document.getElementById('medidaSelector1').value;
    let elementSelector2 = document.getElementById('medidaSelector2').value;
    let elementValor = document.getElementById('valor').value;

    if (controlErrores(elementSelector1, elementSelector2, elementValor) != 0) {
        resetearColores();
        convertirUnidades(elementSelector1, elementSelector2, elementValor);
    }
}
btnCalculo.addEventListener('click', btnCalcular);

function convertirUnidades(unidad, unidad2, valor) {
    let elementResultado = document.getElementById('resultado');
    let spanMedida1 = document.getElementById('medida1');
    let spanMedida2 = document.getElementById('medida2');
    let spanOperacion = document.getElementById('operacion');
    let spanUnidad = document.getElementById('unidad');
    let btnSeleccionado1 = document.getElementById(`btn${unidad}`);
    let btnSeleccionado2 = document.getElementById(`btn${unidad2}`);

    switch (unidad) {
        case unidad = "km":
            resultadoF = convertirKm(unidad, unidad2, valor);
            break;

        case unidad = "hm":
            resultadoF = convertirHm(unidad, unidad2, valor);
            break;

        case unidad = "dam":
            resultadoF = convertirDam(unidad, unidad2, valor);
            break;

        case unidad = "m":
            resultadoF = convertirM(unidad, unidad2, valor);
            break;

        case unidad = "dm":
            resultadoF = convertirDm(unidad, unidad2, valor);
            break;

        case unidad = "cm":
            resultadoF = convertirCm(unidad, unidad2, valor);
            break;

        case unidad = "mm":
            resultadoF = convertirMm(unidad, unidad2, valor);
            break;
    }

    btnSeleccionado1.style.background = 'yellow';
    btnSeleccionado2.style.background = '#00FFFF';

    let factor = 0;
    if (valor >= resultadoF) {
        factor = valor / resultadoF;
    } else {
        factor = resultadoF / valor;
    }

    if (valor >= resultadoF) {
        spanOperacion.textContent = 'Dividir';
    } else {
        spanOperacion.textContent = 'Multiplicar';
    }

    spanMedida1.textContent = unidad;
    spanMedida2.textContent = unidad2;
    spanUnidad.textContent = factor;
    elementResultado.value = resultadoF;

    let elementExplicacion = document.getElementById('explicacion');
    elementExplicacion.style.display = 'block';
}


//Función para modificar colores de los botones
function resetearColores() {
    let botones = document.querySelectorAll('.btnUnidad');
    botones.forEach(boton => {
        boton.style.backgroundColor = '#ffff';
    });
}

//Función de control de erores 
const controlErrores = (s1, s2, v) => {
    if (s1 === s2) {
        alert('No se pueden seleccionar medidas iguales!');
        return 0;
    }
    else if (isNaN(parseFloat(v)) || parseFloat(v) <= 0) {
        console.log('v', v)
        alert('El valor debe ser un número mayor a 0');
        return 0;
    }
    else {
        return 1;
    }
}
// Funciones para pasar una unidad a otra 
function convertirKm(unidad, unidad2, valor) {
    if ((unidad == "km") && (unidad2 == "hm")) {
        resultado = valor * 10;
        return resultado;
    }
    else if ((unidad == "km") && (unidad2 == "dam")) {
        resultado = valor * 100;

        return resultado;
    }
    else if ((unidad == "km") && (unidad2 == "m")) {
        resultado = valor * 1000;
        return resultado
    }
    else if ((unidad == "km") && (unidad2 == "dm")) {
        resultado = valor * 10000;
        return resultado
    }
    else if ((unidad == "km") && (unidad2 == "cm")) {
        resultado = valor * 100000;
        return resultado
    }
    else {
        resultado = valor * 1000000
        return resultado;
    }
}

function convertirHm(unidad, unidad2, valor) {
    if ((unidad == "hm") && (unidad2 == "km")) {
        resultado = valor / 10;
        return resultado;
    }
    if ((unidad == "hm") && (unidad2 == "dam")) {
        resultado = valor * 10;
        return resultado;
    }
    else if ((unidad == "hm") && (unidad2 == "m")) {
        resultado = valor * 100;
        return resultado;
    }
    else if ((unidad == "hm") && (unidad2 == "dm")) {
        resultado = valor * 1000;
        return resultado
    }
    else if ((unidad == "hm") && (unidad2 == "cm")) {
        resultado = valor * 10000;
        return resultado
    }
    else if ((unidad == "hm") && (unidad2 == "mm")) {
        resultado = valor * 100000;
        return resultado
    }
}

function convertirDam(unidad, unidad2, valor) {
    if ((unidad == "dam") && (unidad2 == "km")) {
        resultado = valor / 100;
        return resultado;
    }
    else if ((unidad == "dam") && (unidad2 == "hm")) {
        resultado = valor / 10;
        return resultado;
    }
    else if ((unidad == "dam") && (unidad2 == "m")) {
        resultado = valor * 10;
        return resultado;
    }
    else if ((unidad == "dam") && (unidad2 == "dm")) {
        resultado = valor * 100;
        return resultado
    }
    else if ((unidad == "dam") && (unidad2 == "cm")) {
        resultado = valor * 1000;
        return resultado
    }
    else if ((unidad == "dam") && (unidad2 == "mm")) {
        resultado = valor * 10000;
        return resultado
    }
}

function convertirM(unidad, unidad2, valor) {
    if ((unidad == "m") && (unidad2 == "km")) {
        resultado = valor / 1000;
        return resultado;
    }
    if ((unidad == "m") && (unidad2 == "hm")) {
        resultado = valor / 100;
        return resultado;
    }
    else if ((unidad == "m") && (unidad2 == "dam")) {
        resultado = valor / 10;
        return resultado;
    }
    else if ((unidad == "m") && (unidad2 == "dm")) {
        resultado = valor * 10;
        return resultado
    }
    else if ((unidad == "m") && (unidad2 == "cm")) {
        resultado = valor * 100;
        return resultado
    }
    else if ((unidad == "m") && (unidad2 == "mm")) {
        resultado = valor * 1000;
        return resultado
    }
}

function convertirDm(unidad, unidad2, valor) {
    if ((unidad == "dm") && (unidad2 == "km")) {
        resultado = valor / 10000;
        return resultado;

    }
    if ((unidad == "dm") && (unidad2 == "hm")) {
        resultado = valor / 1000;
        return resultado;
    }
    else if ((unidad == "dm") && (unidad2 == "dam")) {
        resultado = valor / 100;
        return resultado;
    }
    else if ((unidad == "dm") && (unidad2 == "m")) {
        resultado = valor / 10;
        return resultado
    }
    else if ((unidad == "dm") && (unidad2 == "cm")) {
        resultado = valor * 10;
        return resultado
    }
    else if ((unidad == "dm") && (unidad2 == "mm")) {
        resultado = valor * 100;
        return resultado
    }
}

function convertirCm(unidad, unidad2, valor) {
    if ((unidad == "cm") && (unidad2 == "km")) {
        resultado = valor / 100000;
        return resultado;
    }
    else if ((unidad == "cm") && (unidad2 == "hm")) {
        resultado = valor / 10000;
        return resultado;
    }
    else if ((unidad == "cm") && (unidad2 == "dam")) {
        resultado = valor / 1000;
        return resultado;
    }
    else if ((unidad == "cm") && (unidad2 == "m")) {
        resultado = valor / 100;
        return resultado
    }
    else if ((unidad == "cm") && (unidad2 == "dm")) {
        resultado = valor / 10;
        return resultado
    }
    else if ((unidad == "cm") && (unidad2 == "mm")) {
        resultado = valor * 10;
        return resultado
    }
}
function convertirMm(unidad, unidad2, valor) {
    if ((unidad == "mm") && (unidad2 == "km")) {
        resultado = valor / 1000000;
        return resultado;
    }
    else if ((unidad == "mm") && (unidad2 == "hm")) {
        resultado = valor / 100000;
        return resultado;
    }
    else if ((unidad == "mm") && (unidad2 == "dam")) {
        resultado = valor / 10000;
        return resultado;
    }
    else if ((unidad == "mm") && (unidad2 == "m")) {
        resultado = valor / 1000;
        return resultado
    }
    else if ((unidad == "mm") && (unidad2 == "dm")) {
        resultado = valor / 100;
        return resultado
    }
    else if ((unidad == "mm") && (unidad2 == "cm")) {
        resultado = valor / 10;
        return resultado
    }
}




