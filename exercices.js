// function multiply (a, b, c) {
//     return a * b * c ;
// }
//     console.log(multiply(2 , 3, 4,))
    
    
// Verification d'age
// var age = -1
// if ( age < 18 && age >=0) {
//     console.log("Alert : Minor ")
// } else if (18 <= age && age <= 80){ 
//     console.log("Alert : Adult ")
// } else if (age > 80) {
//     console.log("Alert : Lah ytewel 3omrek")
// }
// else if (age < 0) {
//     console.log("Alert : Not born yet")
// }

// verification de nombre pair ou impair
// var number = 100
// if ( number % 2 == 0) {
//     console.log("pair")
// }else {
//     console.log("impair")
// }

// verification de nombre positif ou negatif    
// var number = 0
// if (number>0) {
//     console.log("positif")
// }else if (number==0) {
//     console.log("null")
// }
// else {
//     console.log("negatif")}

// function multiply (a , b) {
//     return a ** b ;
// }
// console.log(multiply(5 , 2))

// loop for
// for ( var i=1 ; i <= 100 ; i++ ) {
//     console.log(i)
// }


// for ( var i=2 ; i <= 2 ; i++ ) {
//     for ( var j=1 ; j <= 20 ; j++ ) {
//         var result = i * j;
//         console.log(  i + " * " + j + " = " + result);
//     }
// }


//  While Loop
// var i = 0 ;
// while (i < 20 ) {    
//     console.log("done") ;
//     i++;
// }

//  var j = 1 ;
//     while ( j < 20 ) {
//         var result = 2 * j;
//         console.log(  2 + " * " + j + " = " + result);
//         j++;
//     }


// Do While Loop
// var j = 1 ;
// do {
//     var result = 2 * j;
//     console.log(  2 + " * " + j + " = " + result);
// j++;
// }while ( j < 20 );
        


// -------------Arrays---------------------

// var days = [
//     "lundi","Mardi","Mercredi","Jeudi","vendredi","Samedi","Dimanche"
// ]


// for (  i=0 ; i<days.length ; i++) {
//      console.log("the day is "+ days[i])
//  }

// let count = days.length;
// console.log(count)

// var i=0
// while (i<days.length ) {
//     (console.log("the day is : " + days[i]))
//     i++;
// }

    
// }

// ----------------Arrays Methods---------------

// var Students=["Mohammed","Oussama"]
// console.log(Student)

//--------ajouter à la fin----------
// Students.push("Ahlam")
// console.log(Students)

//--------ajouter au début----------
// Students.unshift("Ziad")
// console.log(Students)

//-------- retirer la dernière valeur----------
// Students.pop()
// console.log(Students)

//-------- retirer la première valeur----------
// Students.shift()
// console.log(Students)

// Students.reverse()
// console.log(Students)

// Students.push("Ahmed","Amine","Ronaldo","Aymane","Jamal")

// ----------------mettre en ordre ------------
// Students.sort()
// console.log(Students)

// ----------trouver l'index-------------
// var index=Students.indexOf("Jamal")
// console.log(index)


// Students.lastIndexOf()
// console.log()


// var numbers = [2,6,246,67,343,546,23,32,246,77,2233,868,234,1224,5436,4356,246,246]
// // var count = 0
//  var index = 0
// var result = 0
// for (let v of numbers){
//     // console.log("2 " + "* " + numbers[i] + " =" + 2 * numbers[i] )
//     // console.log(numbers[i] + " / "+ " 2 " + " = " + numbers[i] / 2  )

//     //  console.log( numbers[i]+ " * " + numbers[i]   +" = "+numbers[i] * numbers[i])

//     // result = result + v ;

//     // if(v==246 ){
//     //     count++

// }
//  // -----index of 246------
// numbers.forEach((v, i) => {
//     // 'v' is the value, 'i' is the current index
//     if (v === 246) {
//         console.log("Found 246 at index: " + i);
//     }
// });
//  console.log(count)
 


// -----------------Matrix-------------------

// var Students=[
//     ["Mohammed","Oussama","ch3aybia","Kabour"], //Names
//     [19,        25,         40,          60],  // Ages
//     ["M",       "M",       "F",         "M"]  // Gender
// ]
//  for ( i=0 ; i<Students.length ; i++) {
//  for ( j=0 ; j<Students.length ;  j++) {
 
    
//   console.log(Students[j])
// }}

// --------------------Stringmethodes-------------------

var fullnames = "Oussama Bouslimane";
// console.log(fullnames.toUpperCase()); // majuscule
// console.log(fullnames.toLowerCase()); // miniscule
// console.log(fullnames.indexOf("s")); // indexOf index of  char
// console.log(fullnames.charAt(7));  // indexOf   char of index

// console.log(fullnames.lastIndexOf("s")); last index of char

// console.log(fullnames.length); // legth of var

// console.log(fullnames.slice(8,18)); // nombres des charactères

//division
// var firstname = fullnames.slice(0,7);
// var lastname = fullnames.slice(8,18);
// console.log("first name : " + firstname ) ;
// console.log("last name : " + lastname ) ; 

//concatenate
// var firstname = fullnames.slice(0,7);
// var lastname = fullnames.slice(8,18);
// console.log(firstname.concat(lastname));
// console.log(firstname+lastname);

// var phone = "06 52 96 14 71"
// console.log( phone.replaceAll ("6","0")) // replaceALL




