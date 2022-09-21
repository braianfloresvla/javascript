let nombre = prompt("Escriba su nombre por favor");
if(nombre === ""){
    alert("No se ah detectado un nombre");
}else{
    let mensaje = `Bienvenido ${nombre}`;
    alert(mensaje);
}

let total = 5000
if(total > 0){
    alert("Su monto a pagar es de $" + total);
}else{
    alert("No tienes saldo pendiente");
}

function metodo () {
    let metodo = prompt('Escriba la opción deseada: 1.- efectivo, 2.- debito, 3.- Crédito')
    let message = '';
    switch (metodo) {
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
    return metodo
}
metodo()

let saldo = total;
const suma  = (a,b) => a + b;
const iva   = precio => precio * 0.21;
const resta = (a,b) => a - b;
let descuentos = saldo * 0.10;
let interes = saldo * 0.05;
let precioDescuento = resta(suma(saldo, iva(saldo)), descuentos);
alert(precioDescuento);
let precioInteres = suma(suma(saldo, iva(saldo)), interes)
alert(precioInteres);


/*                         ESTO ES LO QUE QUISE HACER EN REALIDAD PERO AL HACER QUE LA VARIABLE SEA LOCAL NO PUEDO LLAMARLA
                        NO ME DIRIAS UNA SOLUCION?
if(metodo === efectivo, debito){
    let precioDescuento = resta(suma(saldo, iva(saldo)), descuentos);
    alert(precioDescuento);
}else if(metodo === credito){
    let precioInteres = suma(suma(saldo, iva(saldo)), interes)
    alert(precioInteres);
} */
