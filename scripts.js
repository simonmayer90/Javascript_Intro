//  window: variable that take different superpowers (methods)
// alert(): a method that display a primitive alert in your internet browser
// window.alert("I'm hungry")

// datatypes are basics of programming language (PL)

var student = "Shanti"                              // datatype = string = sentence = consists of characters
var studentAge = 25                                  // datatype = integer = whole number
var avergNotes = 88.15                              // datatype = float = decimal number
var no = "f"                                        // datatype = character
var doYouLoveToCode = true                          // datatype = boolean
var classList = ["Gimena", "Sandhya", "Rene"]       // datatype = array = list of values of same datatypes

console.log("Student name: " + student.toUpperCase() + "Average notes: " + avergNotes + "her best friend is: " + classList[1])

function RandomColor(){
    document.getElementById("ColoredText").style.color = Color();
}

function Color(){
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}


// FunctionName() = parameters
// [] = Arrays | List's
// { } = Body of function algorithm | .format()
// < > = html tags only!


// window.alert(student + " " + studentAge)

