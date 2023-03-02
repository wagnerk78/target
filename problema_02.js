var num1 = 0;
var num2 = 1;
var num3 = 0;
var num_user = 104;

while (num_user > num3){
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
    console.log(num3)
}

if (num_user == num3) {
    console.log("O número " + num_user + " está na sequência de Fibonacci. ")
} else {
    console.log("O número " + num_user + " não está na sequência de Fibonacci. ")
}

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 