
// esta accion agrega el valor de los botones a la pantalla
function agregar(value) {
    document.getElementById('pantalla').value += value;
}
// esta accion calcula el resultado de la operacion
function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    const result = eval(valorPantalla);
    document.getElementById('pantalla').value = result;
}

// esta accion borra el contenido de la pantalla
function borrar() {
    document.getElementById('pantalla').value = '';
}