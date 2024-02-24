<h1 align='center'>Datos numericos en TypeScript y su motor de inferencias</h1>

<h4>En TypeScript existen diferentes tipos de datos el que veremos a continuación son los tipos numericos</h4>

<p>
A diferencia de JavaScript si nosotros intentamos sumar un type number con un String nos mostrara un error
 ya que en este caso customerAge es de tipo numerico y estamos tratando de sumar 1 pero como string 
</p>

<div style="margin-top: 20px; box-shadow: 0 0 10px #000; padding: 10px; border-radius: 5px;">

```typescript

let customerAge:number = 1;
customerAge = customerAge + "1"; // Esto retorna un error en TypeScript

```

</div>

<p style="margin-top: 20px;">
 esto en javascript nos retornaria 241 ya que lo que va a hacer javascript es concatenar estos datos y se veria de la siguiente manera:
</p>

<div style="margin-top: 20px; box-shadow: 0 0 10px #000; padding: 10px; border-radius: 5px;">

```javascript

let customerAge = 1;
customerAge = customerAge + "1"; // Esto retorna 11

```

</div>

<p style="margin-top: 20px;">
 En el caso que nosotros queramos crear una variable de tipo number pero no queremos inicializarla aún en TypeScript
 debemos obligatoriamente debemos colocar de forma explicita su tipo de dato:
</p>

<div style="margin-top: 20px; box-shadow: 0 0 10px #000; padding: 10px; border-radius: 5px;">

```typescript

let customerAge:number;

```

</div>

<p style="margin-top: 20px;">
Dentro de TypeScript si nosotros intentamos por ejemplo imprimir una variable sin que se haya inicializado
 recibiremos una alerta avisandonos de que la variable a la que estamos intentando acceder aún no se le ha
 asignado ningun valor...
</p>

<div style="margin-top: 20px; box-shadow: 0 0 10px #000; padding: 10px; border-radius: 5px;">

```typescript

let customerAge:number;
console.log(customerAge); // la variable customerAge se usa antes de asignarla.

```

</div>


<p style="margin-top: 20px;">
Estas alertas que nos da el motor de inferencias de TypeScript no solo funcionan con console logs
 sino que tambien nos funcionaran por ejemplo en sentencias de control de flujo como un if:
</p>

<div style="box-shadow: 0 0 10px #000; padding: 10px; border-radius: 5px;">

```typescript
let customerAge:number;
if(customerAge > 10){
    console.log(customerAge); // la variable customerAge se usa antes de asignarla.
}
```
</div>


<p style="margin-top: 20px;">
En este caso al igual que con el console.log el motor de inferencias de TypeScript detectara que nuestra variable
 aún no ha sido asignada y nos lanzara la alerte de que la variable a la que estamos intentando acceder no se le
 ha asignado ningun valor.
</p>

<p>
En el siguiente ejemplo veremos como al asignar un texto encerrado en un parseInt sin especificar el tipo de datos el motor de inferencias de TypeScript lo toma como un number.
</p>

<div style="margin-top: 20px; box-shadow: 0 0 10px #000; padding: 10px; border-radius: 5px;" >

```typescript

let customerAge:number = parseInt("1");
console.log(customerAge); // 1 ya que el motor de inferencias de TypeScript lo toma como un number

```
</div>


<p style="margin-top: 20px;">
En este caso el motor de inferencias detecta que nuestra variable
 discount tiene es un parseInt el cual retornara un valor numerico.
</p>




