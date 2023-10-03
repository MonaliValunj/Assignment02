let num1 = parseInt(prompt("Enter first number: "))
let num2 = parseInt(prompt("enter second number: "))

if(num1 > num2){
    document.write("The first number is larger : " + num1)
}else if(num2 > num1){
    document.write("The second number is larger : " + num2)
}else {
    document.write("Both numbers are equal")
}