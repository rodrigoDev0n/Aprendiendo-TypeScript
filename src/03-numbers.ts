// Tipo de datos numericos:

let productPrice = 100
productPrice = 12

let customerAge : number = 24

/*
 A diferencia de JavaScript si nosotros intentamos sumar un type number con un String nos mostrara un error
 ya que en este caso customerAge es de tipo numerico y estamos tratando de sumar 1 pero como string 
 esto en javascript nos retornaria 241 ya que lo que va a hacer javascript es concatenar estos datos. 
*/
// customerAge = customerAge + '1'
// Forma correcta:

customerAge = customerAge + 1

/*
 En el caso que nosotros queramos crear una variable de tipo number pero no queremos inicializarla aún en TypeScript
 debemos obligatoriamente debemos colocar de forma explicita su tipo de dato:
*/

let myProductStock : number // De esta forma debemos escribir una variable sin inicializar en TypeScript....

/*
 Dentro de TypeScript si nosotros intentamos por ejemplo imprimir una variable sin que se haya inicializado
 recibiremos una alerta avisandonos de que la variable a la que estamos intentando acceder aún no se le ha
 asignado ningun valor...
*/
console.log(myProductStock)

/*
 Estas alertas que nos da el motor de inferencias de TypeScript no solo funcionan con console logs
 sino que tambien nos funcionaran por ejemplo en sentencias de control de flujo como un if:
*/

if (myProductStock > 10) {
  // Codigo a ejecutar si se cumple la sentencia
}

/*
 En este caso al igual que con el console.log el motor de inferencias de TypeScript detectara que nuestra variable
 aún no ha sido asignada y nos lanzara la alerte de que la variable a la que estamos intentando acceder no se le
 ha asignado ningun valor.....
*/

/*
 En este caso el motor de inferencias detecta que nuestra variable
 discount tiene es un parseInt el cual retornara un valor numerico.
*/

let discount = parseInt('123')
console.log(discount)























