const productosStock =[
    {
        id: 1,
        nombre: 'NYC Arancini',
        precio: 1600,
        imagen: '../images/comida2.jpg'
    },
    {
        id: 2,
        nombre: 'Fried Ravioli',
        precio: 1900,
        imagen: 'FriedRavioli.jpg'
    },
    {
        id: 3,
        nombre: 'Deep Dish Pepperoni Lovers',
        precio: 2500,
        imagen: 'DeepDishPepperoniLovers.png'
    },
    {
        id: 4,
        nombre: 'Italiana',
        precio: 2600,
        imagen: 'Italiana.png'
    },
    {
        id: 5,
        nombre: 'Fettuccine',
        precio: 1900,
        imagen: 'Fettuccine.jpg'
    },
    {
        id: 6,
        nombre: 'Cheese Clazone',
        precio: 2900,
        imagen: 'CheeseClazone.jpg'
    },
]
let carrito = [];
let carritoJSON = localStorage.getItem("carrito")
if (carritoJSON !== null){
    carrito = JSON.parse(carritoJSON)
}

const divisa = '$';
const domItems = document.querySelector('#items')
const domCarrito = document.querySelector('#carrito')
const domTotal = document.querySelector('#total')
const domBotonVaciar = document.querySelector('#botonVaciar')

function motrarProductos(){
    productosStock.forEach((info) => {
        const content = document.createElement('div');
        content.classList.add('card', 'card-body');

        const contentBody = document.createElement('div');
        contentBody.classList.add('card-body');

        const contentTitle =  document.createElement('h5');
        contentTitle.classList.add('card-title');
        contentTitle.textContent = info.nombre;

        const contentImg = document.createElement('img');
        contentImg.classList.add('img-fluid');
        contentImg.setAttribute('src', info.imagen);

        const contentPrecio = document.createElement('p');
        contentPrecio.classList.add('card-text');
        contentPrecio.textContent = `${divisa}${info.precio.toFixed(2)}`;

        const contentBoton = document.createElement('button');
        contentBoton.classList.add('btn', 'btn-primary');
        contentBoton.textContent = '+';
        contentBoton.setAttribute('marcador', info.id)
        contentBoton.addEventListener('click', agregarACarrito);

        contentBody.appendChild(contentImg);
        contentBody.appendChild(contentTitle);
        contentBody.appendChild(contentPrecio);
        contentBody.appendChild(contentBoton);
        content.appendChild(contentBody);
        domItems.appendChild(content)
    });

}

function agregarACarrito(evento){
    carrito.push(evento.target.getAttribute('marcador'))
    localStorage.setItem("carrito", JSON.stringify(carrito))
    renderizadoDeCarrito();
}

function renderizadoDeCarrito(){
    domCarrito.textContent = '';
    const sinDuplicados = [...new Set(carrito)];
    sinDuplicados.forEach((item) =>{
    const miItem = productosStock.filter((itemsStock) => {
        return itemsStock.id === parseInt(item);
    });
    const cantidadUnidades = carrito.reduce((total, itemId) =>{
        return itemId === item ? total += 1 : total;
    }, 0)

    const content = document.createElement('li')
    content.classList.add('list-group-item', 'text-right', 'mx-2');
    content.textContent = `${cantidadUnidades} x ${miItem[0].nombre} - ${divisa}${miItem[0].precio.toFixed(2)}`;

    const botonBorrar = document.createElement('button')
    botonBorrar.classList.add('btn', 'btn-danger', 'mx-5');
    botonBorrar.textContent = 'X'
    botonBorrar.style.marginLeft = '1rem';
    botonBorrar.dataset.item = item;
    botonBorrar.addEventListener('click', vaciarCarrito)

    content.appendChild(botonBorrar);
    domCarrito.appendChild(content);
    });
    domTotal.textContent = `${divisa}${carcularTotal()}`;
}

function vaciarCarrito(evento){
    const id = evento.target.dataset.item;

    carrito = carrito.filter((carritoId) =>{
        return carritoId !== id;
    });
    localStorage.setItem("carrito", JSON.stringify(carrito))
    renderizadoDeCarrito();
}

function carcularTotal(){
    return carrito.reduce((total, item) =>{
        const miItem = productosStock.filter((itemsStock) =>{
            return itemsStock.id === parseInt(item);
        });
        return total + miItem[0].precio;
    } ,0).toFixed(2);
}

function vaciarCarritoTotal(){
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito))
    renderizadoDeCarrito();
}

domBotonVaciar.addEventListener('click', vaciarCarritoTotal)

motrarProductos();
renderizadoDeCarrito();