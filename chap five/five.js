// //Question one
// var num1 = 5;
// var num2 = 3;
// var resultAdd = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + resultAdd + "<br>");




//Question two 

// var num1 = 4;
// var num2 = 5;

// // Subtraction
// var resultSub = num1 - num2;
// document.write("Subtraction: " + resultSub + "<br>");

// // Multiplication
// var resultMul = num1 * num2;
// document.write("Multiplication: " + resultMul + "<br>");

// // Division
// var resultDiv = num1 / num2;
// document.write("Division: " + resultDiv + "<br>");

// // Modulus
// var resultMod = num1 % num2;
// document.write("Modulus: " + resultMod + "<br>");




//Question three
// Step 1: Declare a Variable
// var myVariable;

// // Step 2: Show the Value of Variable in Browser
// document.write("Step 2: Value after variable declaration is: " + myVariable + "<br>");

// // Step 3: Initialize the Variable with a Number
// myVariable = 5;

// // Step 4: Show the Initial Value of Variable in Browser
// document.write("Step 4: Initial value: " + myVariable + "<br>");

// // Step 5: Increment the Variable
// myVariable++;

// // Step 6: Show the Value of Variable in Browser after Increment
// document.write("Step 6: Value after increment is: " + myVariable + "<br>");

// // Step 7: Add 7 to the Variable
// myVariable += 7;

// // Step 8: Show the Value of Variable in Browser after Addition
// document.write("Step 8: Value after addition is: " + myVariable + "<br>");

// // Step 9: Decrement the Variable
// myVariable--;

// // Step 10: Show the Value of Variable in Browser after Decrement
// document.write("Step 10: Value after decrement is: " + myVariable + "<br>");

// // Step 11: Calculate the Remainder after Dividing by 3
// var remainder = myVariable % 3;

// // Step 12: Show the Remainder in Browser
// document.write("Step 12: Remainder is: " + remainder + "<br>");




//Question four
        // Store the ticket price in a variable
// var ticketPrice = 600;

// // Calculate the cost of buying 5 tickets
// var totalCost = ticketPrice * 5;

// document.write("Total cost to buy 5 tickets to a movie is " + totalCost + "PKR");



//Question five
// var i;
// document.write("<p>Table of 4</p>");
// for(i = 1; i <= 10; i++) {
//   document.write("4 x " + i + " = " + (4 * i) + "<br>");
// }



//Question six 

        // // Celsius to Fahrenheit
        // var celsius = 25;
        // var fahrenheitFromCelsius = (celsius * 9/5) + 32;
        // document.write(celsius + "°C is " + fahrenheitFromCelsius + "°F<br>");

        // // Fahrenheit to Celsius
        // var fahrenheit = 70;
        // var celsiusFromFahrenheit = (fahrenheit - 32) * 5/9;
        // document.write(fahrenheit + "°F is " + celsiusFromFahrenheit + "°C");
      


//Question seven
        // document.write("<h1>Shopping Cart</h1>");
        // var price1 = 650;
        // var qty1 = 3;
        // var price2 = 100;
        // var qty2 = 7;
        // var shipping = 100;

        // var totalCost = (price1 * qty1) + (price2 * qty2) + shipping;

        // document.write("Price of item 1 is " + price1 + "<br>");
        // document.write("Quantity of item 1 is " + qty1 + "<br>");
        // document.write("Price of item 2 is " + price2 + "<br>");
        // document.write("Quantity of item 2 is " + qty2 + "<br>");
        // document.write("Shipping Charges " + shipping + "<br>");
        // document.write("Total cost of your order is " + totalCost);
 

//Question eight
// document.write("<h1>Marks sheet</h1>");
// // Store total marks and marks obtained in variables
// var totalMarks = 980;
// var marksObtained = 804;

// // Calculate percentage
// var percentage = (marksObtained / totalMarks) * 100;

// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + marksObtained + "<br>");
// document.write("Percentage: " + percentage + "%");



//Question nine
// document.write("<h1>Currency in PKR</h1>");
// var usd = 10;
// var sar = 25;
// var pkr = (usd * 104.80) + (sar * 28);
// document.write("Total Currency in PKR: " + pkr);



// //Question TEN
// var number = 10;
// var result = ((number + 5) * 10) / 2;
// document.write("Result: " + result);



// //Question eleven
// var currentYear = 2016;
// var birthYear = 1992;
// var age = currentYear - birthYear;



// document.write("<h1>Age Calculator</h1>");
// document.write("Current Year: " + currentYear + "<br>");
// document.write("Birth Year: " + birthYear + "<br>");
// document.write("Your Age is: " + age);



// //Question twelve
// var radius = 20;
// var circumference = 2 * 3.142 * radius;
// var area = 3.142 * radius * radius;

// document.write("<h1>The Geometrizer</h1>");
// document.write("Radius of a circle: " + radius + "<br>");
// document.write("The circumference is: " + circumference + "<br>");
// document.write("The area is: " + area);


//Question thirteen
var snack = "chocolate chip", age = 15, maxAge = 65, perDay = 3;
var total = (maxAge - age) * 365 * perDay;

document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("Favourite Snack: " + snack + "<br>Current age: " + age + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>Amount of snacks per day: " + perDay + "<br>");
document.write("You will need " + total + " " + snack + " to last you until the ripe old age of " + maxAge);