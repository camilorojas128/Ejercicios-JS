let num1=prompt("Ingrese el primer número"),
num2=prompt("Ingrese el segundo número"),
num3=prompt("Ingrese el tercer número")

if (num1>num2 && num1>num3) {
    console.log( + num1 +" "+ num2 +" "+ num3 + "El numero mayor es: " + num1)
    
} else {
    if (num2>num1 && num2>num3) {
        console.log(+ num1 +" "+ num2 +" "+ num3 + "El numero mayor es: " + num2)
        
    } else {
        console.log("El número mayor es: " + num3)
    }
}