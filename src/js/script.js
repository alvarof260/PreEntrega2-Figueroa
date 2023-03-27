//catalogo
const productosArray = [
    new Producto(1, 'Fear of God Essentials Pullover Hoodie Applique Logo', 'fearlogo.jpg', false, 36120, 'buzo',35),
    new Producto(2, 'Sp5der Angel Number Hoodie', 'sp5der.jpg', false, 61000, 'buzo',10),
    new Producto(3, 'Saint Mxxxxxx Angel Hoodie', 'saintmxxx.jpg', false, 100000, 'buzo',5),
    new Producto(4, 'Nike x Stussy Crew Fleece', 'nikexstussy.jpg', false, 36850, 'buzo',25),
    new Producto(5, 'Juice Wrld x Vlone 999 T-shirt', 'vlone99.jpg', false, 15200, 'remera',70),
    new Producto(6, 'Anti Social Social Club Cancelled T-shirt', 'antisocial.jpg', false, 14900, 'remera',125),
    new Producto(7, 'Supreme T-Rex Tee', 'supremeTrex.jpg', false, 14.400, 'remera',200),
    new Producto(8, 'Pop Smoke x Vlone The Woo T-shirt', 'popsmoke.jpg', false, 20250, 'remera',400),
    new Producto(9, 'Nike Tech Fleece Joggers', 'niketech.jpg', false, 19300, 'pantalon',150),
    new Producto(10, 'KAWS x The North Face Youth Sweatpant', 'kaws.jpg', false, 29300, 'pantalon',18),
    new Producto(11, 'Stone Island Pantalone Regular Tapered Pants', 'stoneIsland.jpg', false, 83950, 'pantalon',7),
    new Producto(12, 'LOEWE Women\'s Anagram Pocket Tapered Denim Jeans', 'loewe.jpg', false, 128350, 'pantalon',5),
    new Producto(13, 'adidas Yeezy 700 V3', 'adidasyezzy.jpg', false, 72000, 'zapatillas',10),
    new Producto(14, 'Jordan 4 Retro', 'joran4retro.jpg', false, 39000, 'zapatillas',4),
    new Producto(15, 'Nike Dunk High Retro', 'nikedunk.jpg', false, 25900, 'zapatillas',10)
]

//mostrar catalogo
function mostrarCatalogo() {
    let catalogo = 'Elegi los productos segun su numero:\n0 - dejar de comprar\n'
    productosArray.forEach(producto => {
        catalogo += `${producto.id} - ${producto.nombre}\n`
    })
    let productoBuscado = Number(prompt(catalogo))
    return productoBuscado
}

//encontrar producto
function buscarProducto(id) {
    let productoEncontrado = productosArray.find(producto=> producto.id === id)
    return productoEncontrado
}

//cargar producto al carrito
function agregarUnProducto(productoEncontrado){
    let posicionProducto = carrito.findIndex(producto => producto.id === productoEncontrado.id)

    if (posicionProducto != -1) {
        //aumentar elemento del carrito
        carrito[posicionProducto].unidades++
        carrito[posicionProducto].stock = carrito[posicionProducto].stock - 1
        carrito[posicionProducto].subtotal = carrito[posicionProducto].precioUnidad * carrito[posicionProducto].unidades 
    } else{
        carrito.push({
            id: productoEncontrado.id,
            nombre: productoEncontrado.nombre,
            precioUnidad: productoEncontrado.precio,
            subtotal: productoEncontrado.precio,
            stock: productoEncontrado.stock - 1,
            unidades: 1
        })
    }
}

//mostrar carrito
function mostrarCarrito(carrito) {
    let carritoDatos = carrito.map(producto => `${producto.nombre} x${producto.unidades} - $${producto.precioUnidad}`).join('\n')
    let carritoMonto = carrito.reduce((total, producto)=> total + producto.subtotal,0)
    let mensaje = `${carritoDatos}\nTotal: $${carritoMonto}`
    return mensaje
}
const carrito = []
let productoInput = mostrarCatalogo()
while (productoInput != 0) {
    if (productoInput > -1 && productoInput < 16) {
        let productoEncontrado = buscarProducto(productoInput)
        agregarUnProducto(productoEncontrado)
        console.log(carrito)
        alert(mostrarCarrito(carrito))
        productoInput = mostrarCatalogo()
    } else {
        alert('ingreso un numero de id que no existe')
        productoInput = mostrarCatalogo()
    }
}
alert(mostrarCarrito(carrito))
