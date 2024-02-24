/*
 TypeScript es capaz de inferir el tipo de dato de nuestra variable gracias a su typado
 de esta manera si yo reasigno el valor de una variable TypeScript es capaz de detectar
 este cambio y nos avisa que estamos cambiando el tipo de dato de nuestra variable
 y que no podemos asignarlo.....
*/

let myProductName = 'Producto 1' 

//myProductName = 123

const myName = 'Rodrigo'

/*
 Un ejemplo bastante claro serian las constantes ya que las constantes no se les puede volver 
 a reasignar su valor de esta manera TypeScript nos dira que por ejemplo el tipo de dato de la variable
 myName es rodrigo y que no podemos volver a reasignar ese valor nuevamente.|
*/

myName = 'Tomas'

/*
 Otra de las cosas que podemos hacer gracias al typado de TypeScript es asignar el tipo de dato
 esto puede llegar a ser necesario en casos concretos pero de igual manera podemos utilizar
 el motor de inferencias que tiene TypeScript.
*/

const myConstante : String = 'Esto es una constante'
