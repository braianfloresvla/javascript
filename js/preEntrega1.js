let nombre = prompt("Escriba su nombre por favor");
if(nombre === ""){
    alert("No se ah detectado un nombre");
}else{
    let mensaje = `Bienvenido ${nombre}`;
    alert(mensaje);
}


class Menu{
    constructor(id ,opcion1, opcion2){
        this.producto = opcion1;
        this.precio = opcion2;
        this.id = id;
    }
}
let menus = [];

menus.push(new Menu(menus.length + 1, "menu del dia", 2500))
menus.push(new Menu(menus.length + 1, "Especialidad de la casa", 4000))
menus.push(new Menu(menus.length + 1, "parrilla", 4500))
menus.push(new Menu(menus.length + 1, "pizza", 1500))
menus.push(new Menu(menus.length + 1, "pastas", 2000))
menus.push(new Menu(menus.length + 1, "hamburgesas", 3500))

console.log(menus);

let total = 1
let precio = parseInt(prompt("Ingrese rango de precio minimo a pagar. MIN 1500"));
let filtrados = menus.filter(plato => plato.precio <= precio);

filtrados.forEach((item) => {
let mensaje = `
nombre: ${item.producto}
$${item.precio}
`;

alert(mensaje);
});
let opcionMenu = prompt("Elija el numero de la opcion deseada. 0. menu del dia 1. Especialidad de la casa 2. parrilla 3. pizza 4. pastas 5. haburgesas" 
)
if (opcionMenu in menus){ 
    total =+ menus[opcionMenu].precio
} else {     
    alert('La opción solicitada no existe')
}1
let metodos = prompt('Escriba la opción deseada: 1.- efectivo, 2.- debito, 3.- Crédito');
function metodoP () {
    let metodoPago = metodos
    let message = '';
    switch (metodoPago) {
        case 'efectivo':
            message = 'Usted obtendra un descuento del 10% por pago en Efectivo'
            break;
        case 'debito':
            message = 'Usted obtendra un descuento del 10% por pago con debito'
            break;
        case 'credito':
            message = 'Se le sumara un recargo minimo del 5% dependiendo de la cantida de cuotas seleccionadas'
            break;
        default:
            message = 'Opcion no reconocida reintente de nuevo'
            break;
    }

    alert(message)
    return metodoPago
}
metodoP()

let saldo = total;
const suma  = (a,b) => a + b;
const iva   = precio => precio * 0.21;
const resta = (a,b) => a - b;
let descuentos = saldo * 0.10;
let interes = saldo * 0.05;

if(metodos === "efectivo" || metodo === "debito"){
    let precioDescuento = resta(suma(saldo, iva(saldo)), descuentos);
    alert(precioDescuento);
}else if(metodos === "credito"){
    let precioInteres = suma(suma(saldo, iva(saldo)), interes);
    alert(precioInteres); 
}
