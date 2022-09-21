function nombre(){
let nombre = prompt("Ingrese el nombre");
if(nombre === ""){
  alert("No ingresaste ningun nombre");
}else{
  let mensaje = `Bienvenido ${nombre}`;
  alert(mensaje);
}
}
let cPersonas = prompt("Ingrese cantidad de personas");
if(cPersonas === ""){
  alert("Cantidad invalida");
}else{
  let mPersonas = `Ingresaste ${cPersonas}`;
  alert(mPersonas);
}

let hReserva = prompt("ingreser fecha y hora Ej: 11/09 - 22:00");
if(hReserva === ""){
  alert("No inseso la hora");
}else{
  let mReserva = `Ingresaste ${hReserva}`;
  alert(mReserva);
}

let email = prompt("Ingrese su email");
while(email=== ""){
  alert("Email incorrecto");
  email = prompt("Ingrese su email");
}
  let mEmail = `Muchas gracias` + nombre() + `dentro de las 24hs resiviras un EMAIL confirmando su reserva`;
  alert(mEmail);

  

