//Question one
//   var a = 10;

//            document.write("The value of a is: " + a + "<br><br>");

//            ++a ;

//          document.write("The value of ++a is: " + a + "<br>");

//          document.write("Now the value of a is: " + a + "<br><br>");


//           a++ ;

//            document.write("The value of a++ is: " + a + "<br>");
//             document.write("Now the value of a is: " + a + "<br><br>");

//          --a ;

//              document.write("The value of --a is: " + a + "<br>");
//             document.write("Now the value of a is: " + a + "<br><br>");


//             a-- ;

//             document.write("The value of a-- is: " + a + "<br>");
//             document.write("Now the value of a is: " + a + "<br>");



//Qquestion two

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write("a is :" + a +"<br>");
// document.write("b is :" + b +"<br>");
// document.write("result is :" + result +"<br>");

// QUESTION three
// var name = prompt("Enter Your name")
// alert("Welcome "+ name);

// QUESTION five
// var tableno = prompt("Enter table no")
// if(prompt != 0){
//     for(var i = 0;i<=10;i++){
//         document.write(tableno+"x"+i+"="+tableno*i+"<br>")
//     }
// }
// else{
//     for(var i = 0;i<=10;i++){
//         document.write("5x"+i+"="+5*i+"<br>")
//     }
// }


// Question 6
// var subject1 = prompt("Enter the name of the first subject:");
// var subject2 = prompt("Enter the name of the second subject:");
// var subject3 = prompt("Enter the name of the third subject:");

// var totalMarks = 100;

// var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
// var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
// var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// document.write("<table border=1>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td><td>" + percentage.toFixed(2) + "%</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td><td>" + percentage.toFixed(2) + "%</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td><td>" + percentage.toFixed(2) + "%</td></tr>");
// document.write("</table>");                                                                                                                                                                                