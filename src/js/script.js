// primer algoritmo
let consulta = preguntar()
let precioZapas = 30000
let precioRemera = 10000
let precioPantalon = 20000
let precioBuzo = 14000
let carrito = 0

while (consulta != 'cancelar') {
    switch (consulta) {
        case 'zapatilla':
            carrito = sumaPrecioFinal(precioZapas,carrito)
            mensajeProductos(precioZapas,carrito)
            consulta = preguntar()
            break;
        case 'remera':
            carrito = sumaPrecioFinal(precioRemera,carrito)
            mensajeProductos(precioRemera,carrito)
            consulta = preguntar()
            break;
        case 'pantalon':
            carrito = sumaPrecioFinal(precioPantalon,carrito)
            mensajeProductos(precioPantalon,carrito)
            consulta = preguntar()
            break;
        case 'buzo':
            carrito = sumaPrecioFinal(precioBuzo,carrito)
            mensajeProductos(precioBuzo,carrito)
            consulta = preguntar()
            break;
        default:
            alert('no existe o no hay stock de ese producto')
            consulta = preguntar()
            break;
    }
}


function mensajeProductos(precio,compraFinal) {
    alert('precio de zapatillas es de: ' + precio + ' Coste final es de:' + compraFinal)
}

function preguntar() {
    let consulta = prompt('Ingrese el nombre del producto que quiere comprar(escribir cancelar si no quieres mas) 1-zapatilla,2-remera,3-pantalon,4-buzo:').toLowerCase()
    return consulta
}

function sumaPrecioFinal(precio,carrito) {
    carrito += precio
    return carrito
}