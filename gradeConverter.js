/*Write a function that calculates a student's grade based on their score. Implement a function that takes a numerical score as input and returns the corresponding letter grade (A, B, C, D, F).*/
//80-100
//60-79
//50-59
//40-49
//39-0
const score = 2;
if ((score >=80) && (score<100)){
    console.log("Grade : A");
}else if((score >=60) && (score<79)){
    console.log("Grade : B")
}else if((score >=50) && (score<59)){
    console.log("Grade : C")
}else if((score >=40) && (score<49)){
    console.log("Grade : D")
}else if((score <=39) && (score>0)){
    console.log("Grade : F")
}else{
    console.log("You do not have a grade.")
}
//add feat to acccept input from user eventually